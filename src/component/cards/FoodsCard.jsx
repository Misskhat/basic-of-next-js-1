import Link from "next/link";
import CardBTN from "./CardBTN";

const FoodCard = ({ food }) => {
    return (
        <div className=" bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            {/* Image */}
            <div className="relative">
                <img
                    src={food.foodImg}
                    alt={food.title}
                    className="w-full h-80 object-cover"
                />
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {food.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {food.title}
                </h3>

                <p className="text-xl font-bold text-orange-600 mb-4">
                    ৳ {food.price}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                    <CardBTN food={food}></CardBTN>
                    <Link href={`/foods/${food.id}`} className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 font-medium py-2 rounded-lg transition">
                        Card Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
