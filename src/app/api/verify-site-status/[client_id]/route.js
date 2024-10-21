import { connectDb } from "@/lib/db/connect-db";
import { NextResponse } from "next/server";
import Client from "@/lib/models/Client";

export async function GET(request, { params }) {
  try {
    await connectDb();

    const clientData = await Client.findById(params.client_id);

    return NextResponse.json(
      { msg: "Data added.", payload: clientData },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ msg: err.message }, { status: 400 });
  }
}
