import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

import Navbar from "@/features/shared/components/Navbar";
import { ThemeProvider } from "@/features/shared/components/ThemeProvider";
export type RouterAppContext = Record<string, never>;

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: Root,
});

function Root() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-5 py-10 md:py-14">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}
