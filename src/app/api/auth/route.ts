import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const today = new Date();
  const tomorrow = new Date(today.setDate(today.getDate() + 2));

  return new Response(JSON.stringify({ validate: tomorrow }), {
    status: 200,
  });
};
