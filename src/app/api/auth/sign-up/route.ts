import { hash } from "bcrypt";
import { NextResponse } from "next/server";

import { db } from "@/lib/database";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { username, email, password } = body;

    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "User already exists",
        },
        { status: 409 },
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      {
        user: rest,
        message: "User created successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 404 });
  }
};
