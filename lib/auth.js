import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import { db } from "./db"

export const authOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    pages: {
        masuk: 'api/auth/masuk'
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {}
            },
            async authorize(credentials) {
                if (!credentials?.email) {
                    return null
                }

                const existingUser = await db.user.findUnique({ where: { email: credentials?.email } })
                if (!existingUser) {
                    return null
                }
                return Promise.resolve(existingUser)
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    ...user,
                    username: user.fullName,
                    node_id: token.node_id,
                    toko_id: token.toko_id
                }
            }
            return token
        },
        async session({ session, token, user }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    username: token.username,
                    name: token.username
                }
            }
        }
    }
}