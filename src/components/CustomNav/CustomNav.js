import React from 'react';
import Links from '../Links/Links';

const CustomNav = () => {
    const Paths = [
        {id:"1", name: 'Home', path:'/home'},
        {id:"2", name: 'Service', path:'/home'},
        {id:"3", name: 'About', path:'/home'},
        {id:"4", name: 'Achievement', path:'/home'},
        {id:"5", name: 'Contact', path:'/home'}
    ]
    return (
        <div>
            {
                Paths.map(path => <Links key={path.id} path={path}></Links>) 
            }
        </div>
    );
};

export default CustomNav;