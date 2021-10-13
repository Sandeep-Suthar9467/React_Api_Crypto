import React from 'react'
import HTMLReactParser from 'html-react-parser';
import { useGetExchangesDescriptionQuery } from '../services/cryptoApi';


export default function Exchange(uuid) {
    const {desc_data} = useGetExchangesDescriptionQuery(uuid);
    console.log(uuid)
    return (
        <div>
           { HTMLReactParser(desc_data?.data?.exchange.description || '')}
        </div>
    )
}
