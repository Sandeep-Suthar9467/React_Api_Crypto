import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import './Cryptocurrency.css';
import { Row, Col } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';
import Coin from './coin';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  console.log(isFetching)
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching || cryptosList?.data) return <Loader />;

  return (
    <>
      <div className="App">
        {!simplified && (
        <div className="search">
          <h1 className="heading">
            Search the Currency
          </h1>
          <form className="App_form">
            <input type="text" placeholder="Search" className="App_input" onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
          </form>
        </div>
)}        
        <Row>
        <Col span={4}> #</Col>
        <Col span={4}> name</Col>
        <Col span={4}> Symbol</Col>
        <Col span={4}>Price</Col>
        <Col span={4}>Change</Col>
        <Col span={4}>Mkt Cap</Col>  
      </Row>
        {
     (
      cryptos?.map((coin) => (
        <Link key={coin.id} to={`/crypto/${coin.id}`}>
          <Coin
            key={coin.id}
            rank={coin.rank}
            name={coin.name}
            image={coin.iconUrl}
            symbol={coin.symbol}
            marktcap={millify(coin.marketCap)}
            price={millify(coin.price)}
            volume={coin.change}
          />
        </Link>
           ))
     )
   }
      </div>
    </>
  );
};

export default Cryptocurrencies;
