import { NextRequest, NextResponse } from "next/server";
import { isTokenExpired } from "./hooks/utils/manage-token";
import next from "next";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;

  if (!accessToken) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-loggined", "false");

    return NextResponse.next({
      request: {
        // New request headers
        headers: requestHeaders,
      },
    });
  } else {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-loggined", "true");
    return NextResponse.next({
      request: {
        // New request headers
        headers: requestHeaders,
      },
    });
  }
}
