
import React,{useState,useEffect} from 'react';
import Coin from './component/coin';
import './App.css';
import Error from './component/error';
import Loading from './component/loading.js';
import PaginationComponent from './component/pagination';
const axios = require('axios');


function App() {
  const [error,setError]= useState(false);
  const [coins,setCoins]= useState([]);
  const [search,setSearch]=useState('');
   const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
 
  
  useEffect(()=>{

    setLoading(true)
    const url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false`
    axios
    .get(url)
    .then(res => {
      setLoading(false);
      setCoins(res.data);
      console.log(res.data)
    }).catch( error => {
      setError(true);
    }
      )},
    [currentPage]);
    
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const changehandler = e => {
  setSearch(e.target.value);
   }

  const filteredList = coins.filter( coin =>
  coin.name.toLowerCase().includes(search.toLowerCase())
  )



  return (
    <div className="App">
    <div className="search">
      <h1 className="heading">
        Search the Currency
      </h1>
      <form className='App_form' >
        <input type='text' placeholder='Search' className='App_input' onChange={changehandler}/>
      </form>
    </div>
    <div className='app_tag'>
      <div className='app_tag_1'>
        <span className='img'><button
 type="button"
 className="link-button">
 #
</button></span>
        <span className='name'>Name</span>
        <span className='symbol'>Symbol</span>
      </div>
      <div className='app_tag_2'>
        <span className='price'>Price</span>
        <span className='volume'>Volume</span>
        <span className='price_percent'>Price percent.(in $ %)</span>
        <span className='mkt_cap'>Mkt Cap.</span>
      </div>
    </div>
   {
      loading ? (error ? <Error/> : <Loading/>): (
       filteredList.map(coin => {
           return (
             <Coin key={coin.id}
             name={coin.name}
             image={coin.image}
             symbol={coin.symbol}
             marktcap={coin.market_cap}
             price={coin.current_price}
             priceChange={coin.price_change_percentage_24h ? coin.price_change_percentage_24h: null}
             volume={coin.total_volume}
             loading={loading}
             />
           )
     })
     )
   }
    <PaginationComponent paginate={paginate}/>
     </div>
   
  )
  }
export default App;
