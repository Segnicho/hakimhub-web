import React from "react";
import { ReactNode, Suspense } from "react";
import { Footer, Loading, Navbar } from "@/components";
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
    </div>
  );
};

export default RootLayout;
