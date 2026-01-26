import { Link, useLocation } from "react-router";
import { BookOpenIcon, LayoutDashboardIcon, SparklesIcon } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 backdrop-blur-md z-50 ">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative size-10 rounded-lg bg-linear-to-r from-purple-600 to-cyan-500 flex items-center justify-center">
                <SparklesIcon className="size-6 text-white" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white">
                CheatCode
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-wider -mt-1">
                Collaborate • Code • Succeed
              </span>
            </div>
          </Link>

          {/* NAVIGATION LINKS */}
          <div className="flex items-center gap-2">
            {/* PROBLEMS PAGE LINK */}
            <Link
              to={"/problems"}
              className={`relative px-5 py-2.5 rounded-lg transition-all duration-300 group
                ${
                  isActive("/problems")
                    ? "bg-linear-to-r from-purple-600/20 to-cyan-600/20 border border-white/20"
                    : "hover:bg-white/5 border border-transparent hover:border-white/10"
                }`}
            >
              <div className="flex items-center gap-x-2.5">
                <BookOpenIcon
                  className={`size-4 ${
                    isActive("/problems")
                      ? "text-cyan-400"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                />
                <span
                  className={`font-medium hidden sm:inline ${
                    isActive("/problems")
                      ? "text-white"
                      : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  Problems
                </span>
              </div>

              {/* Active Indicator */}
              {isActive("/problems") && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-linear-to-r from-purple-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>

            {/* DASHBOARD PAGE LINK */}
            <Link
              to={"/dashboard"}
              className={`relative px-5 py-2.5 rounded-lg transition-all duration-300 group
                ${
                  isActive("/dashboard")
                    ? "bg-linear-to-r from-purple-600/20 to-cyan-600/20 border border-white/20"
                    : "hover:bg-white/5 border border-transparent hover:border-white/10"
                }`}
            >
              <div className="flex items-center gap-x-2.5">
                <LayoutDashboardIcon
                  className={`size-4 ${
                    isActive("/dashboard")
                      ? "text-cyan-400"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                />
                <span
                  className={`font-medium hidden sm:inline ${
                    isActive("/dashboard")
                      ? "text-white"
                      : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  Dashboard
                </span>
              </div>

              {/* Active Indicator */}
              {isActive("/dashboard") && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-linear-to-r from-purple-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>

            {/* USER BUTTON */}
            <div className="ml-4 pl-4 border-l border-white/10">
              <div className="relative">
                <UserButton />
                <div className="absolute inset-0 bg-linear-to-r from-purple-600/10 to-cyan-500/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
    </nav>
  );
}

export default Navbar;
