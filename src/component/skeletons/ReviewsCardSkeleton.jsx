const ReviewsCardSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 animate-pulse">
            {/* Header Skeleton */}
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

                <div className="space-y-2">
                    <div className="h-4 w-28 bg-gray-300 rounded"></div>
                    <div className="h-3 w-20 bg-gray-300 rounded"></div>
                </div>
            </div>

            {/* Text Skeleton */}
            <div className="space-y-2 mb-3">
                <div className="h-3 bg-gray-300 rounded"></div>
                <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                <div className="h-3 bg-gray-300 rounded w-4/6"></div>
            </div>

            {/* Date Skeleton */}
            <div className="h-3 w-24 bg-gray-300 rounded"></div>
        </div>
    );
};

export default ReviewsCardSkeleton;
