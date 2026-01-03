import FoodCardSkeleton from '@/component/skeletons/FoodCardSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                [...Array(12)].map((_, i) => <FoodCardSkeleton key={i}></FoodCardSkeleton>)
            }
        </div>
    );
};

export default loading;