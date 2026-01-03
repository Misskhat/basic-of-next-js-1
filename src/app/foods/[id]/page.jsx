import Image from "next/image";
import React from "react";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const res = await fetch(
        `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
    );
    const { details = {} } = await res.json();
    return {
        title: details.title,
    }
}

const singleFoodDetails = async (id) => {
    const res = await fetch(
        `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch food details");
    }

    const data = await res.json();
    return data.details;
};

const page = async ({ params }) => {
    const { id } = await params;
    const food = await singleFoodDetails(id);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Image */}
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    {/* <img
                        src={food?.foodImg}
                        alt={food?.title}
                        className="w-full h-full object-cover"
                    /> */}
                    <Image width={300} height={200} src={food?.foodImg}
                        alt={food?.title}
                        className="w-full h-full object-cover"></Image>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between">
                    <div>
                        <span className="inline-block mb-3 bg-green-600 text-white text-sm px-4 py-1 rounded-full">
                            {food.category}
                        </span>

                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            {food.title}
                        </h1>

                        <p className="text-lg text-gray-600 mb-2">
                            <span className="font-semibold">Cuisine:</span> {food.area}
                        </p>

                        <p className="text-2xl font-bold text-orange-600 mb-6">
                            ৳ {food.price}
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl">
                            Add to Cart
                        </button>

                        <a
                            href={food.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-3 rounded-xl text-center"
                        >
                            Watch Recipe
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
