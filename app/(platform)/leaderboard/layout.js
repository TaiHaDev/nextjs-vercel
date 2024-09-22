"use client";
import Navbar from "../(components)/navbar";
import Footer from "../(components)/footer";
import { Suspense } from "react";
export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <Suspense>
      {children}
      </Suspense>
      <Footer></Footer>
    </>
  );
}
