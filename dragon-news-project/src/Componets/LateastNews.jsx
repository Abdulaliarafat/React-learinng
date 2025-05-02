import { format } from 'date-fns';
import React from 'react';
import Marquee from 'react-fast-marquee';

const LateastNews = () => {
    return (
        <div className='flex p-4 rounded-xl justify-center items-center gap-3 bg-base-200'>
            <p className='btn btn-secondary font-semibold'>Latest</p>
            <Marquee className='flex gap-5' speed={60} pauseOnHover={true}><p  className='font-semibold'>{format(new Date(),'MMMM')} Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            <br />
            <p className='font-semibold'>{format(new Date(),'MMMM')} Highlights:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam neque porro, laborum voluptates magni officiis similique eum sint adipisci pariatur quam officia, tempora voluptas itaque necessitatibus odio voluptatibus, enim eveniet!</p>
            <br />
            <p className='font-semibold'>{format(new Date(),'MMMM')} Highlights: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse veritatis voluptatum modi in, ut expedita accusamus? Soluta dolore vel porro delectus consequuntur magni, voluptatem et facere, blanditiis ex fugit deserunt.</p>
            </Marquee>
        </div>
    );
};

export default LateastNews;