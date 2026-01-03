"use client"
import React, { createContext, useState } from 'react';

export const CardContext = createContext()
const CardProvider = ({ children }) => {
    const [card, setCard] = useState([])
    const addToCard = (item) => {
        setCard((card) => [item, ...card])
    }
    const cardInfo = {
        card,
        addToCard
    }
    return (
        <CardContext value={cardInfo}>{children}</CardContext>
    );
};

export default CardProvider;