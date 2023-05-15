import React from "react";
import { PRODUCTS } from "../../product";
import { Product } from "./product";
import "./shop.css"

export const Shop = () => {

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Falah Store</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product, idx) => (
          <Product 
            data={product}

          />
        ))}
      </div>
    </div>
  );
};
