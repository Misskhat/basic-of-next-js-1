import React from 'react';
import { feedback } from '../api/route';
import FeedbackCard from '@/component/cards/feedbackCard';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';

export const metadata = {
    title: "feedbacks"
}

const getFeedbacks = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback/`, {
        cache: 'force-cache',
        next: { revalidate: 60 }
    })
    return await response.json()
}

const Feedbacks = async () => {
    const feedbacks = await getFeedbacks()
    console.log(feedbacks);
    return (
        <div>
            <p className='my-5 text-2xl font-semibold'>{feedbacks.length} Feedbacks found</p>
            <Link className='px-4 py-2 bg-amber-300 rounded ' href={'/feedbacks/add'}>Add Feedback</Link>
            <div className='flex flex-col gap-5 my-5'>
                {feedbacks.map(feedback => <FeedbackCard feedback={feedback} key={feedback._id}></FeedbackCard>)}

            </div>
        </div>
    );
};

export default Feedbacks;