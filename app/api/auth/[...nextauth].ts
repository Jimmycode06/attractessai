import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Ajoutez un secret pour sécuriser les sessions
  pages: {
    signIn: "/auth/signin", // Rediriger vers votre page de connexion personnalisée
  },
};

export default NextAuth(authOptions);
