import React from "react";
import { ReactNode, Suspense } from "react";
import { Footer, Loading, Navbar } from "@/components";
import { useRouter } from "next/router";
const RootLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const isChatPage = router.pathname === "/chat";

  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      {!isChatPage && <Footer />}
    </div>
  );
};

export default RootLayout;
