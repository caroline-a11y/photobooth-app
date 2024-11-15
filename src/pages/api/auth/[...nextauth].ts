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
          pass: process.env.EMAIL_PASS || "hxfszyrkjcegmyyc",
        },
      },
      from: process.env.EMAIL_FROM || "malckieboothke@gmail.com",
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "database",
  },
  callbacks: {
    async session({ session, user }: { session: Session; user: User }) {
      // Ensure email is added to the session
      session.user.email = user.email!;
      return session;
    },
    async signIn({ user }: { user: User }) {
      // Example of restricting sign-in to certain users
      if (user.email !== "malckieboothke@gmail.com") {
        // Only allow the owner to sign in
        return false;
      }
      return true;
    },
  },
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
  },
};

export default NextAuth(authOptions);












//465  import { PrismaClient } from '@prisma/client';