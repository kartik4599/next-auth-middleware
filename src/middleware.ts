import { NextRequest, NextResponse } from "next/server";
import { authRoutes, protectedRoutes } from "./lib/utils";

export const middleware = (req: NextRequest) => {
  const validation = req.cookies.get("validate")?.value as string;
  if (validation) {
    const expriedData = new Date().getTime() > new Date(validation).getTime();
    if (expriedData) {
      req.cookies.delete("validate");
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if (authRoutes.includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } else if (protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
};
