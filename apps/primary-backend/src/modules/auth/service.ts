import { prisma } from "../../../../../packages/db/lib/prisma";
import type { AuthModel } from "./models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export abstract class Auth {
  static async signIn({ email, password }: AuthModel["signInBody"]) {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error("Invalid email or password");
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not defined");
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    return {
      user: {
        id: user.id,
        email: user.email,
      },
      token,
    };
  }

  static async signUp({ email, password, name }: AuthModel["signUpBody"]) {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not defined");
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    return {
      user,
      token,
    };
  }
}

export default Auth;