import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const PricingFeture = ({feture}) => {
    
    return (
        <p className='flex gap-2 mt-3'> <CircleCheckBig />{feture}</p>
    );
};

export default PricingFeture;