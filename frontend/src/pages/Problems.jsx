import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { PROBLEMS } from "../data/problems";
import {
  ChevronRightIcon,
  Code2Icon,
  BarChart3Icon,
  ClockIcon,
  TagIcon,
} from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

export const Problems = () => {
  const problems = Object.values(PROBLEMS);

  const easyProblemsCount = problems.filter(
    (p) => p.difficulty === "Easy"
  ).length;
  const mediumProblemsCount = problems.filter(
    (p) => p.difficulty === "Medium"
  ).length;
  const hardProblemsCount = problems.filter(
    (p) => p.difficulty === "Hard"
  ).length;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <Navbar />

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* HEADER */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-600/20 to-cyan-500/20 border border-white/10 rounded-full mb-6">
            <Code2Icon className="size-4" />
            <span className="text-sm font-medium">Practice Problems</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Master Your{" "}
            <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Coding Skills
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Sharpen your problem-solving abilities with these carefully curated
            challenges
          </p>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-linear-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-3xl font-bold text-white">
                {problems.length}
              </div>
              <BarChart3Icon className="size-6 text-purple-400" />
            </div>
            <div className="text-sm text-gray-400">Total Problems</div>
          </div>

          <div className="bg-linear-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-3xl font-bold text-green-400">
                {easyProblemsCount}
              </div>
              <div className="size-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-sm font-bold">E</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">Easy</div>
          </div>

          <div className="bg-linear-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-3xl font-bold text-yellow-400">
                {mediumProblemsCount}
              </div>
              <div className="size-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <span className="text-sm font-bold">M</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">Medium</div>
          </div>

          <div className="bg-linear-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="text-3xl font-bold text-red-400">
                {hardProblemsCount}
              </div>
              <div className="size-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <span className="text-sm font-bold">H</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">Hard</div>
          </div>
        </div>

        {/* PROBLEMS LIST */}
        <div className="space-y-4 mb-16">
          {problems.map((problem) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className="group relative block"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-linear-to-r from-purple-600/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative bg-linear-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Icon & Difficulty */}
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                      <div className="relative size-12 rounded-lg bg-linear-to-r from-purple-600 to-cyan-500 flex items-center justify-center">
                        <Code2Icon className="size-6 text-white" />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                          {problem.title}
                        </h2>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyBadgeClass(
                            problem.difficulty
                          )}`}
                        >
                          {problem.difficulty}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-400">
                          <TagIcon className="size-3" />
                          <span>{problem.category}</span>
                        </div>
                        {problem.completionTime && (
                          <div className="flex items-center gap-2 text-gray-400">
                            <ClockIcon className="size-3" />
                            <span>{problem.completionTime} min</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex-1 lg:px-4">
                    <p className="text-gray-300 line-clamp-2">
                      {problem.description.text}
                    </p>
                  </div>

                  {/* CTA Arrow */}
                  <div className="flex items-center justify-end lg:justify-start">
                    <div className="p-3 rounded-lg bg-white/5 group-hover:bg-linear-to-r group-hover:from-purple-600/20 group-hover:to-cyan-600/20 transition-all duration-300">
                      <ChevronRightIcon className="size-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="bg-linear-to-r from-purple-900/30 via-black/50 to-cyan-900/30 border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to{" "}
            <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Challenge Yourself?
            </span>
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Practice with our curated problems to improve your coding skills and
            prepare for technical interviews.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Back to Dashboard
            </Link>
            <Link
              to="/problem/1"
              className="px-6 py-3 bg-linear-to-r from-purple-600 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Start with First Problem
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
