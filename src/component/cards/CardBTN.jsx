"use client"
import { CardContext } from '@/context/CardProvider';
import React, { use, useState } from 'react';

const CardBTN = ({ food }) => {
    const { addToCard } = use(CardContext)
    const [inCard, setInCard] = useState(false)
    const handAddToCard = () => {
        addToCard(food)
        setInCard(true)
        console.log('button clicked')
    }

    return (
        <button onClick={handAddToCard} className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition disabled:bg-slate-600" disabled={inCard}>
            {inCard ? "Added" : "Add to Cart"}

        </button>
    );
};

export default CardBTN;