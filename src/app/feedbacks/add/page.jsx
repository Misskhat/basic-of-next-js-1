import FeedbackForm from '@/component/form/FeedbackForm';
import React from 'react';

const AddFeedback = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-5'>Add your feedback</h2>
            <FeedbackForm></FeedbackForm>
        </div>
    );
};

export default AddFeedback;