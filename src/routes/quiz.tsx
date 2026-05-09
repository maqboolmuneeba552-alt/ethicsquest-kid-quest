import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Brain, Sparkles, Star, ArrowLeft, Frown, PartyPopper } from "lucide-react";
import quizImg from "@/assets/quiz-thinking.png";

export const Route = createFileRoute("/quiz")({
  component: QuizScreen,
  head: () => ({
    meta: [
      { title: "Quick Quiz! — EthicsQuest" },
      { name: "description", content: "Test what you learned from Ali's lost wallet story with a fun ethics quiz for kids." },
    ],
  }),
});

type Option = {
  id: number;
  emoji: string;
  text: string;
  points: number;
  bg: string;
  ring: string;
  best?: boolean;
};

const OPTIONS: Option[] = [
  { id: 1, emoji: "🙈", text: "Keep the money and say nothing", points: 0,
    bg: "bg-[oklch(0.93_0.05_30)]", ring: "ring-[oklch(0.75_0.12_30)]" },
  { id: 2, emoji: "🏆", text: "Return the wallet with all money inside", points: 10, best: true,
    bg: "bg-[oklch(0.93_0.08_160)]", ring: "ring-[oklch(0.7_0.18_160)]" },
  { id: 3, emoji: "🤔", text: "Take half the money and return the wallet", points: 3,
    bg: "bg-[oklch(0.92_0.06_310)]", ring: "ring-[oklch(0.72_0.14_310)]" },
  { id: 4, emoji: "👨‍👦", text: "Give the wallet to an adult/parent", points: 8,
    bg: "bg-[oklch(0.92_0.06_230)]", ring: "ring-[oklch(0.7_0.15_230)]" },
];

function QuizScreen() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number | null>(null);
  const [warn, setWarn] = useState(false);
  const [feedback, setFeedback] = useState<"happy" | "sad" | null>(null);

  function handleSubmit() {
    if (selected === null) {
      setWarn(true);
      setTimeout(() => setWarn(false), 2200);
      return;
    }
    const opt = OPTIONS.find((o) => o.id === selected)!;
    try {
      localStorage.setItem("ethicsquest_score", String(opt.points));
      localStorage.setItem("ethicsquest_choice", String(opt.id));
    } catch {}
    setFeedback(opt.points >= 10 ? "happy" : opt.points === 0 ? "sad" : "happy");
    setTimeout(() => {
      navigate({ to: "/result" }).catch(() => {
        window.location.href = "/result.html";
      });
    }, 1000);
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-sky/30 via-background to-sunny/20 p-4 sm:p-8 font-sans">
      <div className="relative w-full max-w-[400px] aspect-[9/19.5] rounded-[3rem] bg-[oklch(0.18_0.04_250)] p-3 shadow-[0_30px_80px_-20px_oklch(0.4_0.15_240/0.5)]">
        <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-gradient-to-b from-sky/40 via-background to-sunny/25">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-30 h-6 w-32 -translate-x-1/2 rounded-full bg-[oklch(0.18_0.04_250)]" />

          {/* Status bar */}
          <div className="relative z-20 flex items-center justify-between px-7 pt-4 text-[11px] font-bold text-foreground/80">
            <span>9:41</span>
            <span>●●● 􀙇 􀛨</span>
          </div>

          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-sunny/40 blur-3xl" />
          <div className="pointer-events-none absolute top-40 -right-12 h-44 w-44 rounded-full bg-sky/50 blur-3xl" />
          <div className="pointer-events-none absolute bottom-24 -left-12 h-44 w-44 rounded-full bg-bubble/30 blur-3xl" />

          {/* Sparkles */}
          <Star className="absolute top-24 left-6 h-4 w-4 fill-sunny text-sunny-deep animate-twinkle" />
          <Sparkles className="absolute top-32 right-8 h-5 w-5 text-sky-deep animate-twinkle [animation-delay:.4s]" />
          <Star className="absolute bottom-40 right-6 h-3 w-3 fill-bubble text-bubble animate-twinkle [animation-delay:.8s]" />

          {/* Scrollable content */}
          <div className="relative z-10 h-full overflow-y-auto pb-6 pt-2 px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {/* Top nav */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => navigate({ to: "/story" })}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur ring-1 ring-foreground/10"
                aria-label="Back"
              >
                <ArrowLeft className="h-5 w-5 text-foreground" />
              </button>
              <div className="flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold text-foreground shadow-md ring-1 ring-foreground/10">
                <Star className="h-3.5 w-3.5 fill-sunny text-sunny-deep" />
                Question 1 of 1
              </div>
              <div className="h-10 w-10" />
            </div>

            {/* Title */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-sky to-sky-deep text-white shadow-md animate-wiggle">
                <Brain className="h-6 w-6" />
              </div>
              <h1
                className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-sky-deep via-sky-deep to-sunny-deep bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Quick Quiz!
              </h1>
            </div>

            {/* Illustration */}
            <div className="mt-3 flex justify-center">
              <div className="relative rounded-3xl bg-white/70 p-2 shadow-md ring-1 ring-foreground/5">
                <img
                  src={quizImg}
                  alt="Cartoon child thinking with a question mark bubble"
                  width={768}
                  height={768}
                  loading="lazy"
                  className="h-32 w-32 object-contain animate-float"
                />
              </div>
            </div>

            {/* Story reminder */}
            <p className="mt-3 rounded-2xl bg-sunny/40 px-4 py-2 text-center text-[12px] font-semibold text-foreground/80 ring-1 ring-sunny-deep/20">
              Remember: Ali found a wallet with $100 inside.
            </p>

            {/* Question speech bubble */}
            <div className="relative mt-4 rounded-3xl bg-white px-4 py-3 text-center shadow-lg ring-1 ring-foreground/10">
              <p className="text-sm font-bold text-foreground">
                What is the <span className="text-sky-deep">MOST</span> ethical thing for Ali to do?
              </p>
              <span className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white ring-1 ring-foreground/10" />
            </div>

            {/* Options */}
            <div className="mt-5 space-y-2.5">
              {OPTIONS.map((opt) => {
                const active = selected === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelected(opt.id)}
                    className={`group flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left font-semibold text-foreground/85 transition-all ${opt.bg} ${
                      active ? `scale-[1.02] ring-4 ${opt.ring} shadow-lg` : "ring-2 ring-white/60 shadow-sm hover:scale-[1.01]"
                    } ${opt.best ? "shadow-[0_0_0_2px_oklch(0.78_0.18_160/0.6),0_8px_24px_-8px_oklch(0.7_0.2_160/0.5)]" : ""}`}
                  >
                    <span className="text-2xl leading-none">{opt.emoji}</span>
                    <span className="text-[13px] leading-snug">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="mt-5 w-full rounded-2xl bg-gradient-to-b from-[oklch(0.78_0.18_150)] to-[oklch(0.62_0.2_150)] py-3.5 text-base font-extrabold text-white shadow-[0_8px_0_0_oklch(0.5_0.18_150/0.4),0_12px_24px_-8px_oklch(0.5_0.18_150/0.5)] active:translate-y-1 active:shadow-[0_2px_0_0_oklch(0.5_0.18_150/0.4)] transition-all"
            >
              Submit Answer
            </button>

            <p className="mt-3 text-center text-[11px] font-bold text-foreground/70">
              ⭐ Choose wisely! Your score = your ethical badge ⭐
            </p>
          </div>

          {/* Warn popup */}
          {warn && (
            <div className="absolute inset-0 z-40 grid place-items-center bg-foreground/30 backdrop-blur-sm">
              <div className="mx-6 rounded-3xl bg-white px-5 py-4 text-center shadow-2xl ring-1 ring-foreground/10">
                <p className="text-sm font-bold text-foreground">🌸 Please pick an answer before submitting!</p>
              </div>
            </div>
          )}

          {/* Feedback overlay */}
          {feedback && (
            <div className="absolute inset-0 z-40 grid place-items-center bg-foreground/20 backdrop-blur-sm animate-in fade-in">
              <div className="rounded-3xl bg-white px-6 py-5 text-center shadow-2xl">
                {feedback === "happy" ? (
                  <>
                    <PartyPopper className="mx-auto h-10 w-10 text-sunny-deep animate-wiggle" />
                    <p className="mt-2 text-sm font-extrabold text-foreground">Great choice! 🎉</p>
                  </>
                ) : (
                  <>
                    <Frown className="mx-auto h-10 w-10 text-sky-deep" />
                    <p className="mt-2 text-sm font-extrabold text-foreground">Hmm, let's think again 💛</p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
