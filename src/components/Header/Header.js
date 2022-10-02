import React from 'react';
import Card from '../Card/Card';

const Header = () => {
    const Countries = [
        {name:'card1', place:'london', weather:'30c', img :"https://images.pexels.com/photos/4604701/pexels-photo-4604701.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
        {name:'card2', place:'canada', weather:'20c',img:"https://images.pexels.com/photos/4604701/pexels-photo-4604701.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
        {name:'card3', place:'russia', weather:'10c',img:"https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {name:'card4', place:'new york', weather:'5c', img:"https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600"}
    ]
    return (
        <div className='card-container row mx-auto mt-5'>
            {
                Countries.map(country => <Card key={country.name} country ={country}></Card>)
            }
        </div>
    );
};

export default Header;