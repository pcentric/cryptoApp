import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { useGetCryptoExchangesQuery } from "../services/cryptoApi";

const Exchanges = () => {
  const { data: exchangeData } = useGetCryptoExchangesQuery();
  console.log(exchangeData?.data?.exchanges[0]);

  return (
    <div>
      {exchangeData?.data?.exchanges?.map((exchange) => (
        <div>
          <p>{exchange.name}</p>
          <p>{exchange.price}</p>
          <img
            src={exchange.iconUrl}
            style={{ width: "100px", height: "100px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Exchanges;
