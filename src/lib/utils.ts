import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const protectedRoutes = ["/profile","/"];
export const authRoutes = ["/login"];
export const publicRoutes = ["/about"];