"use client"

export default function FeedbackCard({ feedback }) {
    // console.log(feedback.message);
    return (
        <div className="w-full max-w-md bg-white p-4 rounded-2xl shadow border border-gray-200">
            <div className="flex items-center justify-between">
                <p>{feedback?.message} </p>
                <div className="flex gap-2">
                    <button className="bg-lime-300 px-4 py-2 rounded hover:bg-amber-300 transition-all delay-50">Update</button>
                    <button className="bg-lime-300 px-4 py-2 rounded hover:bg-amber-300 transition-all delay-50">Delete</button>
                </div>
            </div>
        </div>
    );
}
