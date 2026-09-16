import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
    providers: [

    ],
    callbacks: {

    },
    session: {
        strategy: "jwt",
        maxAge: 7 * 24 * 60 * 60 * 1000
    }

}


export default authOptions