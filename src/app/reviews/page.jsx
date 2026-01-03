"use client"
import ReviewsCard from '@/component/cards/ReviewsCard';
import ReviewsCardSkeleton from '@/component/skeletons/ReviewsCardSkeleton';
import React, { useEffect, useState } from 'react';
import ReviewLoading from './ReviewLoading';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://taxi-kitchen-api.vercel.app/api/v1/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data.reviews)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            <h2 className='text-4xl font-bold'>Total <span className='text-amber-700'>{reviews.length}</span> Reviews.</h2>
            {
                loading ?
                    <ReviewLoading></ReviewLoading> :
                    <div className='grid grid-cols-3 gap-5'>
                        {reviews.map(review => <ReviewsCard key={review.id} review={review}></ReviewsCard>)}
                    </div>
            }
        </div>
    );
};

export default Reviews;