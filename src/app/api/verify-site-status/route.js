import { connectDb } from "@/lib/db/connect-db";
import { NextResponse } from "next/server";
import Client from "@/lib/models/Client";

export async function POST(request) {
  try {
    const body = await request.json();

    await connectDb();

    const newClient = new Client(body);
    await newClient.save();

    return NextResponse.json({ msg: "Data added." }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: err.message }, { status: 400 });
  }
}
