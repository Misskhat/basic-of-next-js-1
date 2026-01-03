const loading = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Image Skeleton */}
                <div className="w-full h-[420px] bg-gray-300 rounded-2xl"></div>

                {/* Details Skeleton */}
                <div className="flex flex-col justify-between space-y-6">
                    <div>
                        <div className="h-6 w-32 bg-gray-300 rounded-full mb-4"></div>

                        <div className="h-8 w-3/4 bg-gray-300 rounded mb-4"></div>

                        <div className="h-5 w-1/3 bg-gray-300 rounded mb-3"></div>

                        <div className="h-7 w-1/4 bg-gray-300 rounded"></div>
                    </div>

                    <div className="flex gap-4">
                        <div className="h-12 w-1/2 bg-gray-300 rounded-xl"></div>
                        <div className="h-12 w-1/2 bg-gray-300 rounded-xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default loading;
