import React from 'react';

const Links = ({route}) => {
    return (
             <div className='text-center list-unstyled'>
                <li><a className='text-decoration-none text-secondary' href={route.path}>{route.name}</a></li>
             </div>
    );
};

export default Links;