import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const registerUser = async (req: Request, res: Response) => {
  const { firstname, lastname, email, password } = req.body;
  res.send(req.body);

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = await userService.registerUser({
      firstname,
      lastname,
      email,
      password,
    });
    return res
      .status(201)
      .json({ message: 'User registered successfully', user });
  } catch (error) {
    return res.status(500).json({ message: 'Error registering user', error });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const token = await userService.loginUser(email, password);
    return res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    return res
      .status(401)
      .json({ message: 'Invalid email or password', error });
  }
};
