export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/api/words/:path*",      // /api/words 以下すべて
  ],
};
