import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Navbar from "../components/Navbar.jsx";
import { PROBLEMS } from "../data/problems.js";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from "../components/ProblemDescription.jsx";
import OutputPanel from "../components/OutputPanel.jsx";
import CodeEditor from "../components/CodeEditor.jsx";
import { executeCode } from "../lib/piston.js";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";

export const ProblemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(
    PROBLEMS[currentProblemId].starterCode.javascript
  );
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const currentProblem = PROBLEMS[currentProblemId];

  useEffect(() => {
    if (id && PROBLEMS[id]) {
      setCurrentProblemId(id);
      setCode(PROBLEMS[id].starterCode[language]);
      setOutput(null);
    }
  }, [id, language]);

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    setLanguage(language);
    setCode(currentProblem.starterCode[language]);
    setOutput(null);
  };
  const handleProblemChange = (val) => {
    navigate(`/problem/${val}`);
  };
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.2, y: 0.6 },
    });

    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.8, y: 0.6 },
    });
  };

  const normalizeOutput = (output) => {
    // normalize output for comparison (trim whitespace, handle different spacing)
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
          // remove spaces after [ and before ]
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          // normalize spaces around commas to single space after comma
          .replace(/\s*,\s*/g, ",")
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

  const checkIfTestsPassed = (actualOutput, expectedOutput) => {
    const normalizedActual = normalizeOutput(actualOutput);
    const normalizedExpected = normalizeOutput(expectedOutput);

    return normalizedActual == normalizedExpected;
  };

  const handleRunCoode = async () => {
    setIsRunning(true);
    setOutput(null);

    const result = await executeCode(language, code);
    setOutput(result);
    setIsRunning(false);

    if (result.success) {
      const expectedOutput = currentProblem.expectedOutput[language];
      const testsPassed = checkIfTestsPassed(result.output, expectedOutput);

      if (testsPassed) {
        triggerConfetti();
        toast.success("All test case passed");
      } else toast.error("Test case failed");
    } else toast.error("Code execution failed");
  };

  return (
    <div className="h-screen bg-base-100 flex flex-col">
      <Navbar />

      <div className="flex-1">
        <PanelGroup direction="horizontal">
          {/* left panel - for problem description */}
          <Panel defaultSize={40} minSize={30}>
            <ProblemDescription
              problem={currentProblem}
              currentProblemId={currentProblemId}
              onProblemChange={handleProblemChange}
              allProblems={Object.values(PROBLEMS)}
            />
          </Panel>

          <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

          {/* right panel - code editor and output panel */}
          <Panel defaultSize={60} minSize={30}>
            <PanelGroup direction="vertical">
              {/* top panel - code editor */}
              <Panel defaultSize={70} minSize={30}>
                <CodeEditor
                  language={language}
                  code={code}
                  isRunning={isRunning}
                  onLanguageChange={handleLanguageChange}
                  onCodeChange={setCode}
                  onRunCode={handleRunCoode}
                />
              </Panel>

              <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

              {/* bottom panel - code editor */}
              <Panel defaultSize={30} minSize={30}>
                <OutputPanel output={output} />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};
