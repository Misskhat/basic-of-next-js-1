import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

const feedbackConnect = connect("feedbackDB");
export async function GET(request, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await feedbackConnect.findOne(query);
  return Response.json(result);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await feedbackConnect.deleteOne(query);
  return Response.json(result);
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const { message } = await request.json();
  const query = { _id: new ObjectId(id) };
  const newData = {
    $set: { message },
  };
  const result = await feedbackConnect.updateOne(query, newData);
  return Response.json(result);
}
