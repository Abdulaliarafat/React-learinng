import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../components/DausyPricing/DaisyPricing';

const PricingOption = ({peicingPromise}) => {
    const pricingData=use(peicingPromise)
    // console.log(pricingData)
    return (
        <div>
            <h2 className='text-3xl my-2'>Get our membership</h2>
            {/* <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 shadow-2xl'>
                {
                    pricingData.map(pricing=><PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                pricingData.map(pricing=><DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>)
            }
            </div>
        </div>
    );
};

export default PricingOption;