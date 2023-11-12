import { NextResponse } from "next/server";

import { db } from "@/lib/database";

export const GET = async (
  request: Request,
  { params }: { params: { userId: string } },
) => {
  try {
    const allProjects = await db.project.findMany({
      where: { userId: Number(params.userId) },
    });

    return NextResponse.json(
      {
        data: allProjects,
        message: "Projects fetched successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 404 });
  }
};
