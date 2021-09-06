import React from "react";
import './coin.css';
const Coin =({name,image,symbol,price,volume,priceChange,marktcap,loading})=>{  
    return (


        <div className='coin_container'>
             
            <div className='coin_row'>
                <div className='coin_1'>
                    <img src={image} alt='coin' className='coin_image skeleton'/>
                    <h1 className='coin_heading skeleton skeleton-text'>{name}</h1>
                    <span className='coin_symbol skeleton skeleton-text'>{symbol}</span>
                </div>
                <div className='coin_2'>
                    <span className='coin_price skeleton skeleton-text'>${price}</span>
                    <span className='coin_volume skeleton skeleton-text'>${volume.toLocaleString()}</span>
                    { priceChange <0 ? (
                        <span className='coin_percent red skeleton skeleton-text'>{priceChange==null? 'null' :priceChange.toFixed(3)}</span>
                    ):  (<span className='coin_percent green skeleton skeleton-text'>{priceChange==null? 'null' :priceChange.toFixed(3)}</span>)
                }
                <p className='coin_marketcap skeleton skeleton-text'>
                    ${marktcap}
                </p>
                <div className="chart">
      </div>
                </div>
            </div>
        </div>
    )
}

export default Coin;