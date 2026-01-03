"use client"

import { CardContext } from "@/context/CardProvider";
import { use } from "react";



const CardItems = () => {
    const { card } = use(CardContext)
    return (
        <div>
            <h3>{card.length} Items Added</h3>
        </div>
    );
};

export default CardItems;