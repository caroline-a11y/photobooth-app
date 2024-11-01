import NextAuth, { NextAuthOptions, Session, User } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../../prisma/prisma"; // Adjust path if needed

const authOptions: NextAuthOptions = {
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
        auth: {
          user: process.env.EMAIL_USER || "malckieboothke@gmail.com",
          pass: process.env.EMAIL_PASS || "hxfszyrkjcegmyyc"
        },
      },
      from: process.env.EMAIL_FROM || "malckieboothke@gmail.com"
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "database",
  },
  callbacks: {
    async session({ session, user }: { session: Session; user: User }) {
      session.user.email = user.email; // Ensure email is added to the session
      return session;
    },
    async signIn({ user }: { user: User }) {
      return true; // Allow all sign-ins
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);











//465  import { PrismaClient } from '@prisma/client';