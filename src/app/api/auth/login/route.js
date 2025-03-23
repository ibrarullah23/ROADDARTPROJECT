
import { NextResponse } from 'next/server';

const user = {
  username: 'admin',
  password: 'admin'
};


export async function POST(req, { params }) {
  const { username, password } = await req.json();
  if (username === user.username && password === user.password) {
    return NextResponse.json({ message: 'Login Successful' });
  } else {
    return NextResponse.json({ message: 'Login Failed' }, { status: 400 });
  }
}