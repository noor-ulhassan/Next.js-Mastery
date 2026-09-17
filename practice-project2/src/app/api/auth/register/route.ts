import connectDb from "@/lib/db";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export async function POST(request: NextRequest) {
    try {
        const { name, email, password } = await request.json();
        await connectDb();

        const existUser = await User.findOne({ email });
        if (existUser) {
            return NextResponse.json({ message: "User Already Exist" }, { status: 400 })
        }
        if (password.length < 6) {
            return NextResponse.json({ message: "Password must be 6 character" }, { status: 400 })
        }
        const hashed = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashed
        })
        return NextResponse.json({ message: "User Registered Successfully", user }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "User Not Registered", error }, { status: 500 })
    }
}