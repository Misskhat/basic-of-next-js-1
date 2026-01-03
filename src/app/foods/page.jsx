import FoodCard from '@/component/cards/FoodsCard';
import React from 'react';
import CardItems from './CardItems';
import InputSearch from '@/component/InputSearch';

const getFood = async (search) => {
    const foodsApi = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`, { next: { revalidate: 10 } })
    const data = await foodsApi.json()
    // await new Promise(res => setTimeout(res, 3000))
    return data.foods || []
}

const foods = async ({ searchParams }) => {
    const { search = "" } = await searchParams

    const foods = await getFood(search)
    return (
        <div>
            <h2 className='text-3xl font-semibold'>Total {foods.length} foods found</h2>
            <InputSearch></InputSearch>
            <div className='flex gap-5'>
                <div className='flex-1 grid grid-cols-3 gap-5'>
                    {
                        foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
                    }
                </div>
                <div className='w-[250px] border-2 rounded-2xl p-4'>
                    <h2 className='text-xl font-bold'>Card Items</h2><hr />
                    <CardItems></CardItems>

                </div>
            </div>
        </div>
    );
};

export default foods;