import { NextResponse } from "next/server";

import { db } from "@/lib/database";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { name, description, deadline, userId } = body;

    const newProject = await db.project.create({
      data: {
        name: name,
        description: description,
        deadline: deadline,
        userId: userId,
      },
    });

    return NextResponse.json(
      {
        project: newProject,
        message: "Project created successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 404 });
  }
};
