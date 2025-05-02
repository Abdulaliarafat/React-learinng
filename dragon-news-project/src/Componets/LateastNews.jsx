import { format } from 'date-fns';
import React from 'react';
import Marquee from 'react-fast-marquee';

const LateastNews = () => {
    return (
        <div className='flex p-4 rounded-xl justify-center items-center bg-base-200'>
            <p className='btn btn-secondary mx-3 p-5 font-semibold'>Latest</p>
            <Marquee  speed={60} pauseOnHover={true}>
                <div className='flex gap-5'>
                <p  className='font-semibold'>{format(new Date(),'MMMM')} Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
           
           <p className='font-semibold'>{format(new Date(),'MMMM')} Highlights:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam neque porro, laborum voluptates magni officiis similique eum sint adipisci pariatur quam officia, tempora voluptas itaque necessitatibus odio voluptatibus, enim eveniet!</p>
           
           <p className='font-semibold'>{format(new Date(),'MMMM')} Highlights: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse veritatis voluptatum modi in, ut expedita accusamus? Soluta dolore vel porro delectus consequuntur magni, voluptatem et facere, blanditiis ex fugit deserunt.</p>
                </div>
            </Marquee>
        </div>
    );
};

export default LateastNews;