import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    const{name,price,description,features}=pricing
    return (
        <div className='flex flex-col  bg-pink-500 rounded-2xl p-3 text-center'>
            <div>
                <h1 className="text-6xl">{name}</h1>
                <h4 className="text-2xl">{price}</h4>
            </div>
            {/* card body */}
            <div className='flex-1 p-5 text-sm bg-amber-400 rounded-2xl '>
                <p>{description}</p>
                {
                    features.map((feature,index)=><PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-2 rounded-2xl bg-red-700 text-white font-bold text-lg">Subcribes</button>
        </div>
    );
};

export default PricingCard;