"use client"

// import { application, json } from "express";

const FeedbackForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const message = e.target.message.value;
        console.log(message);

        const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message })
        })
        const data = await res.json()

        if (data.insertedId) {
            alert('data added')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-5 text-center">
                <textarea className="w-xl border-2 p-4" cols={30} rows={10} name="message" id=""></textarea>
                <hr />
                <button className="px-4 py-2 bg-amber-300 rounded">Add Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;