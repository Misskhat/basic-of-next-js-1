import ReviewsCardSkeleton from '@/component/skeletons/ReviewsCardSkeleton';
import React from 'react';

const ReviewLoading = () => {
    return (
        <div className='grid grid-cols-3 gap-5'>
            {[...Array(12).map((_, i) => <ReviewsCardSkeleton key={i}></ReviewsCardSkeleton>)]}
        </div>
    );
};

export default ReviewLoading;