import React from "react";
import Sidebar from "@/components/Sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import Header from "@/components/Header";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import ErrorBoundary from "@/components/ErrorBoundary";

export const dynamic = "force-dynamic";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/sign-in");

  return (
    <main className="flex h-screen">
      <ErrorBoundary>
        <Sidebar {...currentUser} />
      </ErrorBoundary>

      <section className="flex h-full flex-1 flex-col">
        <ErrorBoundary>
          <MobileNavigation {...currentUser} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Header userId={currentUser.$id} accountId={currentUser.accountId} />
        </ErrorBoundary>
        <div className="main-content">
          <ErrorBoundary>{children}</ErrorBoundary>
        </div>
      </section>

      <Toaster />
    </main>
  );
};
export default Layout;
