import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";

const feedbackConnect = connect("feedbackDB");

export async function GET(request) {
  const result = await feedbackConnect.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const { message } = await request.json();
  const newFeedback = { message, data: new Date() };
  const result = await feedbackConnect.insertOne(newFeedback);
  revalidatePath("/feedback");
  return Response.json(result);
}
