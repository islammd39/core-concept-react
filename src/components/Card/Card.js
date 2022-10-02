import React from 'react';
import { Button } from 'react-bootstrap';

const Card = (props) => {
    const {img,name}=props.country
    // console.log(img);
    return (
        <div className='card-grid col-3'>
            <div className="card" style={{width: "18rem"}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Name : {name}</h5>
    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis perspiciatis sint laboriosam saepe eos Magnam </p>
    <Button variant='primary' >Go somewhere</Button>
  </div>
</div>
        </div>
    );
};

export default Card;