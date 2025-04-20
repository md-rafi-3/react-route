import React from 'react';
import Speacial from './Speacial';

const MySelf = ({asset}) => {
    return (
        <div>
            <h3>My Self</h3>
           <section>
           <Speacial asset={asset}></Speacial>
           </section>
        </div>
    );
};

export default MySelf;