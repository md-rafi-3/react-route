import React from 'react';
import Speacial from './Speacial';
import Friend from './Friend';

const Causin = ({name,asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name==="Tom Tom"&& <Speacial asset={asset}></Speacial>
            }
            {
                name==="Jojooo" && <Friend></Friend>
            }
        </div>
    );
};

export default Causin;