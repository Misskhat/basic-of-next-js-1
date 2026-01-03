"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const InputSearch = () => {
    const router = useRouter()
    const param = useSearchParams()
    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchValue = form.search.value;
        const newParams = new URLSearchParams(param.toString())
        newParams.set('search', searchValue)
        router.push(`?${newParams.toString()}`)

    }
    return (
        <div>
            <form onSubmit={handleSearch} className='my-5 bg-emerald-400 rounded p-2 w-1/5'>
                <input className='p-2 mr-2 border-2 border-white rounded' type="text" name="search" id="search" placeholder='Food Name' />
                <button className='p-2 border-2 border-white rounded' type="submit">Search</button>
            </form>
        </div>
    );
};

export default InputSearch;