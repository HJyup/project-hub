import { NextResponse } from "next/server";

import { db } from "@/lib/database";

export const GET = async (
  request: Request,
  { params }: { params: { userId: string } },
) => {
  try {
    const user = await db.user.findUnique({
      where: { id: Number(params.userId) },
    });

    return NextResponse.json(
      {
        data: user,
        message: "User fetched successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 404 });
  }
};
