import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../models/user.model';

interface User {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

export async function registerUser(user: User) {
  const existingUser = await findUserByEmail(user.email);
  if (existingUser) {
    throw new Error('Email already in use');
  }

  const hashedPassword = await bcrypt.hash(user.password, 10);
  const [userId] = await createUser({ ...user, password: hashedPassword });
  return {
    id: userId,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
  };
}

export async function loginUser(email: string, password: string) {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: '1h',
  });
  return token;
}
