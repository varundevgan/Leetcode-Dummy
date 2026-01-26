import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon, SparklesIcon, ZapIcon, StarsIcon } from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur-lg opacity-50"></div>
                <div className="relative size-14 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg">
                  <SparklesIcon className="size-7 text-white" />
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 border border-white/10 rounded-full mb-2">
                  <StarsIcon className="size-3.5 text-cyan-300" />
                  <span className="text-xs font-medium">Welcome Back</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                    Hey, {user?.firstName || "there"}
                  </span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl">
                    <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      Ready to Code?
                    </span>
                  </span>
                </h1>

                <p className="text-lg text-gray-300 max-w-2xl">
                  Level up your coding skills with real-time collaboration and
                  interactive problem solving.
                </p>
              </div>
            </div>

            {/* Stats or Quick Actions */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm text-gray-300">Active Sessions</span>
                </div>
                <div className="text-2xl font-bold text-white mt-1">3</div>
              </div>

              <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-blue-400"></div>
                  <span className="text-sm text-gray-300">Problems Solved</span>
                </div>
                <div className="text-2xl font-bold text-white mt-1">12</div>
              </div>

              <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-purple-400"></div>
                  <span className="text-sm text-gray-300">Streak</span>
                </div>
                <div className="text-2xl font-bold text-white mt-1">7 Days</div>
              </div>
            </div>
          </div>

          {/* Right CTA */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

            <button
              onClick={onCreateSession}
              className="relative px-8 py-5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                  <div className="relative size-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <ZapIcon className="size-6 text-white" />
                  </div>
                </div>

                <div className="text-left">
                  <div className="text-white font-bold text-xl mb-1">
                    Create Session
                  </div>
                  <p className="text-sm text-white/80 max-w-xs">
                    Start coding with a partner in real-time
                  </p>
                </div>

                <ArrowRightIcon className="size-6 text-white group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>

            {/* Floating particles */}
            <div className="absolute -top-2 -right-2 size-4 bg-gradient-to-r from-cyan-400 to-white rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 size-3 bg-gradient-to-r from-purple-400 to-white rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
