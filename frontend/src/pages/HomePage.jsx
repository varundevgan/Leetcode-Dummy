import { SignInButton } from "@clerk/clerk-react";
import {
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Abstract Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-pink-500/5 rounded-full blur-2xl"></div>
      </div>

      {/* NAVBAR */}
      <nav className="relative z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-cyan-500 rounded-lg blur group-hover:blur-md transition-all duration-300"></div>
                <div className="relative size-10 rounded-lg bg-linear-to-r from-purple-600 to-cyan-500 flex items-center justify-center">
                  <SparklesIcon className="size-6 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight">
                  CheatCode
                </span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  Collaborate • Code • Succeed
                </span>
              </div>
            </Link>

            <SignInButton mode="modal">
              <button className="relative px-6 py-2.5 bg-white/5 border border-white/10 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <span className="relative flex items-center gap-2">
                  Launch App
                  <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </SignInButton>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - Split Layout */}
      <div className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* TOP TEXT SECTION */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-600/20 to-cyan-500/20 border border-white/10 rounded-full backdrop-blur-sm mb-6">
              <div className="size-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                Real-time Coding Platform
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block">
                <span className="bg-linear-to-r from-purple-400 to-white bg-clip-text text-transparent">
                  Code Together
                </span>
                ,
              </span>
              <span className="block">
                <span className="bg-linear-to-r from-cyan-400 to-white bg-clip-text text-transparent">
                  Learn Together
                </span>
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              The ultimate collaborative coding platform for technical
              interviews, pair programming, and real-time problem solving.
            </p>
          </div>

          {/* MAIN CONTENT - Image Left, Features Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            {/* LEFT: MAIN IMAGE */}
            <div className="relative order-2 lg:order-1 pt-2">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-linear-to-br from-white/5 to-transparent backdrop-blur-sm">
                <img
                  src="/nerd.jpg"
                  alt="Collaborative Coding Interface"
                  className="w-full h-auto transform hover:scale-[1.02] transition-transform duration-700"
                />
                {/* Image Overlay Effects */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <div className="flex gap-2">
                    <div className="size-3 rounded-full bg-red-500"></div>
                    <div className="size-3 rounded-full bg-yellow-500"></div>
                    <div className="size-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
              </div>

              {/* Stats Overlay on Image */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5">
                <div className="grid grid-cols-3 gap-4 p-6 bg-linear-to-r from-black/80 to-black/60 backdrop-blur-md border border-white/10 rounded-xl">
                  {[
                    { value: "10K+", label: "Users" },
                    { value: "50K+", label: "Sessions" },
                    { value: "99.9%", label: "Uptime" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: FEATURE LIST */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl font-bold">
                Everything You Need in{" "}
                <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  One Platform
                </span>
              </h2>

              {/* Feature Items */}
              <div className="space-y-6">
                {[
                  {
                    icon: VideoIcon,
                    title: "HD Video Calls",
                    description:
                      "Crystal clear video and audio communication for seamless interviews",
                    color: "border-l-purple-500",
                  },
                  {
                    icon: Code2Icon,
                    title: "Live Code Editor",
                    description:
                      "Real-time collaborative coding with syntax highlighting",
                    color: "border-l-cyan-500",
                  },
                  {
                    icon: UsersIcon,
                    title: "Smart Collaboration",
                    description:
                      "Screen sharing, whiteboard, and interactive problem solving",
                    color: "border-l-pink-500",
                  },
                  {
                    icon: ZapIcon,
                    title: "Instant Setup",
                    description:
                      "No downloads required. Start coding in seconds",
                    color: "border-l-green-500",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className={`group p-6 bg-linear-to-r from-white/5 to-transparent border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300 ${feature.color} border-l-4`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                        <feature.icon className="size-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FULL WIDTH CTA SECTION */}
          <div className="w-full mb-20">
            <div className="relative overflow-hidden bg-linear-to-r from-purple-900/30 via-black/50 to-cyan-900/30 border border-white/10 rounded-2xl p-8 md:p-12 lg:p-16">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-size-[40px_40px]"></div>
              </div>

              {/* Glow Effects */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Ready to Transform Your{" "}
                    <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      Coding Interviews?
                    </span>
                  </h2>

                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join thousands of developers and companies who are already
                    revolutionizing their technical interview process with
                    TalentIQ.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <SignInButton mode="modal">
                      <button className="group px-10 py-4 bg-linear-to-r from-purple-600 to-cyan-500 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center gap-3">
                        <span>Start Free Trial</span>
                        <ArrowRightIcon className="size-5 group-hover:translate-x-2 transition-transform" />
                      </button>
                    </SignInButton>

                    <button className="px-10 py-4 bg-white/5 border border-white/20 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3">
                      <VideoIcon className="size-5" />
                      <span>Watch Demo</span>
                    </button>
                  </div>

                  <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="size-4 text-green-400" />
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="size-4 text-green-400" />
                      <span>14-day free trial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="size-4 text-green-400" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM FEATURE PILLS */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Trusted By Teams At</h3>
              <div className="flex flex-wrap justify-center gap-8 opacity-50">
                {["Startups", "Tech Giants", "Universities", "Bootcamps"].map(
                  (item, idx) => (
                    <div key={idx} className="text-lg font-medium">
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                "No Credit Card Required",
                "14-Day Free Trial",
                "Unlimited Sessions",
                "24/7 Support",
                "All Features Included",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <CheckIcon className="size-4 text-green-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="relative mt-20 py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="size-8 rounded-lg bg-linear-to-r from-purple-600 to-cyan-500 flex items-center justify-center">
                <SparklesIcon className="size-5 text-white" />
              </div>
              <span className="font-bold">TalentIQ</span>
              <span className="text-sm text-gray-400">© 2024</span>
            </div>

            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
