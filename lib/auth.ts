// import NextAuth from "next-auth";
// import { CredentialsProvider } from "next-auth/providers/credentials";
// import Providers from "next-auth/providers";

// export default NextAuth({
//     // Configure one or more authentication providers
//     providers: [
//         Providers.GitHub({
//             clientId: process.env.GITHUB_CLIENT_ID,
//             clientSecret: process.env.GITHUB_CLIENT_SECRET,
//         }),
//         // Add more providers here
//     ],
//     // Optional: Custom pages
//     pages: {
//         signIn: '/auth/signin',
//         signOut: '/auth/signout',
//         error: '/auth/error', // Error code passed in query string as ?error=
//         verifyRequest: '/auth/verify-request', // (used for check email message)
//         newUser: null // If set, new users will be directed here on first sign in
//     },
//     // Optional: Callbacks
//     callbacks: {
//         async jwt(token, user) {
//             if (user) {
//                 token.id = user.id;
//             }
//             return token;
//         },
//         async session(session, token) {
//             session.user.id = token.id;
//             return session;
//         },
//     },
//     // Optional: Database connection
//     database: process.env.DATABASE_URL,
// });