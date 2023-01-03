import React from 'react'
import './brand.css';

import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
  const brands = [google, slack, atlassian, dropbox, shopify];
  return (
    <div className="gpt3__brand section__padding">
      { brands.map((brand, index) => {
        return (
          <div key={ index }>
            <img src={brand} alt={brand}/>
          </div>
        )
      })}
    </div>
  )
}

export default Brand