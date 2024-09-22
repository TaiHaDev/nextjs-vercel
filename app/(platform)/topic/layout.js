"use client";
import { Suspense } from "react";
export default function HomeLayout({ children }) {
  return (
    <>
      <Suspense>
      {children}
      </Suspense>
    </>
  );
}