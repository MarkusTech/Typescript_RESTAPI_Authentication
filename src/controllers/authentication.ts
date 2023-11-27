import express, { Request, Response } from "express";
import { UserModel } from "../models/users";
import { random, authentication } from "../helpers";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }

    const existingUser = await UserModel.findOne(email);

    if (existingUser) {
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await UserModel.create({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
