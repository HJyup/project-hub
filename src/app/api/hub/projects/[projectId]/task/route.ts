import { NextResponse } from "next/server";

import { db } from "@/lib/database";

export const POST = async (
  request: Request,
  { params }: { params: { projectId: string } },
) => {
  try {
    const newTask = await db.task.create({
      data: {
        name: "Untitled",
        description: "Description of the task",
        status: "NotStarted",
        projectId: Number(params.projectId),
      },
    });

    return NextResponse.json(
      {
        project: newTask,
        message: "Project created successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 404 });
  }
};
