import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb from "./db";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    type: "text",
                    label: "Email"
                },
                password: {
                    type: "password",
                    label: "Password"
                }
            },
            async authorize(credentials) {
                const email = credentials?.email
                const password = credentials?.password
                if (!email || !password) {
                    throw new Error("Email or Password Not found")
                }
                await connectDb();
                const user = await User.findOne({ email })
                if (!user) {
                    throw new Error("User not found")
                }
                const isMatch = await bcrypt.compare(password, user.password)
                if (!isMatch) {
                    throw new Error("Invalid password")
                }
                return {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    image: user.image
                }


            },
        })
    ],
    callbacks: {

    },
    session: {
        strategy: "jwt",
        maxAge: 7 * 24 * 60 * 60 * 1000
    }

}


export default authOptions