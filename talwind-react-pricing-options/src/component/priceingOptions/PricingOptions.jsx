import React, { use } from 'react';
import PricingCard from '../../pricingCard/PricingCard';
import DaisyPricing from '../daisyPricing/DaisyPricing';

const PricingOptions = ({pricingPromise}) => {
    const pricingData=use(pricingPromise);
  
    return (
        <div>
             <h2 className='text-5xl'>Get our Membership</h2>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    pricingData.map(pricing=><PricingCard pricing={pricing} key={pricing.id}></PricingCard>)
                }

                {
                    pricingData.map(pri=><DaisyPricing pri={pri}></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;