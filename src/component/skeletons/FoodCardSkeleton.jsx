import React from 'react';

const FoodCardSkeleton = () => {
    return (
        <div className=" bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
            {/* Image Skeleton */}
            <div className="w-full h-80 bg-gray-300"></div>

            {/* Content Skeleton */}
            <div className="p-5 space-y-4">
                <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                <div className="h-6 bg-gray-300 rounded w-1/3"></div>

                <div className="flex gap-3">
                    <div className="h-10 bg-gray-300 rounded-lg w-1/2"></div>
                    <div className="h-10 bg-gray-300 rounded-lg w-1/2"></div>
                </div>
            </div>
        </div>
    );
};

export default FoodCardSkeleton;
