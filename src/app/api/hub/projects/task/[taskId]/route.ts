import { NextResponse } from "next/server";

import { db } from "@/lib/database";

export const DELETE = async (
  request: Request,
  { params }: { params: { taskId: string } },
) => {
  try {
    await db.task.delete({
      where: {
        id: Number(params.taskId),
      },
    });

    return NextResponse.json(
      {
        message: "Task deleted successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 404 });
  }
};
