import { NextResponse } from "next/server";

import { db } from "@/lib/database";

export const GET = async (
  request: Request,
  { params }: { params: { projectId: string } },
) => {
  try {
    const project = await db.project.findUnique({
      where: { id: Number(params.projectId) },
      include: { category: true, tasks: true },
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { categoryId, ...projectData } = project;

    return NextResponse.json(
      {
        data: projectData,
        message: "Project fetched successfully",
      },
      { status: 200 },
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
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 404 });
  }
};
