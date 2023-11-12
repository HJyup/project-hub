import { NextResponse } from "next/server";

import { db } from "@/lib/database";

export const GET = async (
  request: Request,
  { params }: { params: { projectId: string } },
) => {
  try {
    const project = await db.project.findUnique({
      where: { id: Number(params.projectId) },
    });

    return NextResponse.json(
      {
        data: project,
        message: "Project fetched successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 404 });
  }
};

export const DELETE = async (
  request: Request,
  { params }: { params: { projectId: string } },
) => {
  try {
    await db.project.delete({
      where: { id: Number(params.projectId) },
    });

    return NextResponse.json(
      {
        message: "Project deleted successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 404 });
  }
};
