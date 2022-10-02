import React from 'react';

const Links = ({path}) => {
    return (
        <div>
            <ul>
                <li>{path.name}</li>
                <li></li>
                <li>About</li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default Links;