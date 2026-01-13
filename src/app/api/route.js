export const feedback = [
  {
    id: 1,
    message: "Yammy, food in this resturant.",
  },
  {
    id: 2,
    message: "Every person are to good",
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "Yaho, create api through next.js",
  });
}
