import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code",
      //   },
      // },
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        // return profile.email_verified && profile.email.endsWith("@example.com")
        return (
          profile.email_verified && profile.email === "fabiojiqui@gmail.com"
        );
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },
});
