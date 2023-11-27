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
        priority: 1,
        projectId: Number(params.projectId),
        deadline: new Date(),
      },
    });

    return NextResponse.json(
      {
        project: newTask,
        message: "Task created successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 404 });
  }
};
