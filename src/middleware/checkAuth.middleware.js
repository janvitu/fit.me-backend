import { verifyToken } from "../utils/token";
export default function authMiddleware() {
  return async function authMiddlewareHandle(ctx, next) {
    // const token = ctx.cookies.get("token");
    console.log(ctx);
    await next();
  };
}
