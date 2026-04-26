import React, { JSX } from 'react'
import "./Card.css"

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({
  companyName, 
  ticker, 
  price 
}: Props): JSX.Element => {
  return (
    <div className="card">
        <img 
        src=""
        alt=""
        />
        <div className='details'>
        <h2>
          {companyName} ({ticker})
          </h2>
        <p>${price}</p>
    </div>
    <div className='info'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ratione vitae, perferendis iste aliquam tempore mollitia accusamus. Sequi obcaecati nam facere amet, eligendi illum eaque debitis hic, tempora possimus qui!
    </div>
    </div>
  )
}

export default Card