import { NextResponse } from "next/server";

import { db } from "@/lib/database";

export const GET = async (
  request: Request,
  { params }: { params: { userId: string } },
) => {
  try {
    const allProjects = await db.project.findMany({
      where: { userId: Number(params.userId) },
      include: { category: true },
    });

    const projectsWithoutCategoryId = allProjects.map((project) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { categoryId, ...projectData } = project;
      return {
        ...projectData,
      };
    });

    return NextResponse.json(
      {
        data: projectsWithoutCategoryId,
        message: "Projects fetched successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 404 });
  }
};
