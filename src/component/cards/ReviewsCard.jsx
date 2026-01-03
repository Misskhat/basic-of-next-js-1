"use client";
import Image from "next/image";
import React, { useState } from "react";

const ReviewsCard = ({ review }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(review?.likes || 0);

    const handleLike = () => {
        setLiked((prev) => !prev);
        setLikes((prev) => (liked ? prev - 1 : prev + 1));
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
                {/* <img
                    src={review?.photo || "https://i.ibb.co/2kR5zq0/user.png"}
                    alt={review?.user}
                    className="w-12 h-12 rounded-full object-cover"
                /> */}
                <Image width={48} height={48} src={review?.photo || "https://i.ibb.co/2kR5zq0/user.png"}
                    alt={review?.user}
                    className="w-12 h-12 rounded-full object-cover"></Image>

                <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">
                        {review?.user || "Anonymous"}
                    </h4>

                    <div className="flex items-center text-orange-500 text-sm">
                        {"★".repeat(review?.rating || 5)}
                        <span className="ml-2 text-gray-500">
                            ({review?.rating || 5}.0)
                        </span>
                    </div>
                </div>

                {/* Like Button */}
                <button
                    onClick={handleLike}
                    className="flex items-center gap-1 text-sm font-medium"
                >
                    <span
                        className={`text-xl transition ${liked ? "text-red-500 scale-110" : "text-gray-400"
                            }`}
                    >
                        ♥
                    </span>
                    <span className="text-gray-600">{likes}</span>
                </button>
            </div>

            {/* Review Text */}
            <p className="text-gray-600 leading-relaxed mb-3">
                {review?.review}
            </p>

            {/* Date */}

            <p className="text-xs text-gray-400">
                {review?.date}
            </p>

        </div>
    );
};

export default ReviewsCard;
