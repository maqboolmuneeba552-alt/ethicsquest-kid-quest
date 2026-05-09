import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Trophy, Star, Share2, Check, Sparkles, PartyPopper } from "lucide-react";
import resultImg from "@/assets/result-thumbs-up.png";

export const Route = createFileRoute("/result")({
  component: ResultScreen,
  head: () => ({
    meta: [
      { title: "Your Ethical Badge — EthicsQuest" },
      { name: "description", content: "See the ethical badge you earned in EthicsQuest, with your score, message, and journey progress." },
    ],
  }),
});

function getBadge(score: number) {
  if (score >= 10) return { tier: "gold", label: "ETHICS HERO", msg: "🌟 PERFECT! You're an Ethical Champion! 🌟",
    grad: "from-[oklch(0.92_0.18_85)] to-[oklch(0.7_0.2_60)]", ring: "ring-[oklch(0.65_0.2_70)]" };
  if (score >= 8) return { tier: "silver", label: "GOOD CHOICES", msg: "🎈 Great job! Almost perfect! 🎈",
    grad: "from-[oklch(0.92_0.02_240)] to-[oklch(0.72_0.03_240)]", ring: "ring-[oklch(0.7_0.04_240)]" };
  if (score >= 5) return { tier: "bronze", label: "KEEP TRYING", msg: "👍 Good effort! Keep learning! 👍",
    grad: "from-[oklch(0.82_0.12_55)] to-[oklch(0.6_0.14_45)]", ring: "ring-[oklch(0.6_0.14_45)]" };
  return { tier: "learn", label: "YOU CAN DO IT", msg: "💪 Nice try! Let's practice more! 💪",
    grad: "from-sky to-sky-deep", ring: "ring-sky-deep" };
}

const CONFETTI = Array.from({ length: 28 }).map((_, i) => ({
  left: (i * 37) % 100,
  delay: (i % 8) * 0.15,
  duration: 2.4 + (i % 5) * 0.3,
  color: ["bg-sunny", "bg-sky", "bg-bubble", "bg-mint", "bg-sunny-deep"][i % 5],
  rotate: (i * 23) % 360,
}));

function ResultScreen() {
  const navigate = useNavigate();
  const [score, setScore] = useState<number>(0);
  const [hasScore, setHasScore] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("ethicsquest_score");
      if (raw === null) {
        setHasScore(false);
        setScore(0);
      } else {
        const n = Math.max(0, Math.min(10, Number(raw) || 0));
        setScore(n);
        if (n >= 8) setShowConfetti(true);
      }
    } catch {
      setHasScore(false);
    }
  }, []);

  const badge = useMemo(() => getBadge(score), [score]);
  const filledStars = Math.round((score / 10) * 5);

  function playAgain() {
    try { localStorage.removeItem("ethicsquest_score"); localStorage.removeItem("ethicsquest_choice"); } catch {}
    navigate({ to: "/" });
  }
  function viewProgress() {
    alert(`You scored ${score}/10 points! Keep making good choices!`);
  }

  const steps = ["Home", "Story", "Quiz", "Complete"];

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

          {/* Balloons */}
          <div className="pointer-events-none absolute top-12 left-3 text-3xl animate-float">🎈</div>
          <div className="pointer-events-none absolute top-16 right-3 text-3xl animate-float [animation-delay:.6s]">🎈</div>

          {/* Sparkles */}
          <Star className="absolute top-28 left-8 h-4 w-4 fill-sunny text-sunny-deep animate-twinkle" />
          <Sparkles className="absolute top-36 right-10 h-5 w-5 text-sky-deep animate-twinkle [animation-delay:.4s]" />
          <Star className="absolute bottom-44 right-8 h-3 w-3 fill-bubble text-bubble animate-twinkle [animation-delay:.8s]" />
          <Sparkles className="absolute bottom-56 left-6 h-4 w-4 text-sunny-deep animate-twinkle [animation-delay:1.2s]" />

          {/* Confetti burst */}
          {showConfetti && (
            <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
              {CONFETTI.map((c, i) => (
                <span
                  key={i}
                  className={`absolute top-0 h-2 w-2 rounded-sm ${c.color}`}
                  style={{
                    left: `${c.left}%`,
                    transform: `rotate(${c.rotate}deg)`,
                    animation: `confetti-fall ${c.duration}s ease-in ${c.delay}s forwards`,
                  }}
                />
              ))}
            </div>
          )}

          {/* Scrollable content */}
          <div className="relative z-10 h-full overflow-y-auto pb-6 pt-2 px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {/* Trophy header */}
            <div className="mt-3 flex items-center justify-center gap-1 text-2xl">
              <span className="animate-wiggle">🎉</span>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sunny to-sunny-deep text-white shadow-[0_8px_0_0_oklch(0.65_0.18_65/0.35)] animate-float">
                <Trophy className="h-8 w-8" />
              </div>
              <span className="animate-wiggle [animation-delay:.3s]">✨</span>
            </div>

            {/* Title */}
            <h1
              className="mt-3 text-center text-[28px] font-extrabold leading-tight tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                background: "linear-gradient(90deg, oklch(0.7 0.2 20), oklch(0.78 0.18 90), oklch(0.7 0.18 160), oklch(0.65 0.2 240), oklch(0.6 0.22 310))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Ethical Badge!
            </h1>

            {/* Illustration */}
            <div className="mt-2 flex justify-center">
              <img
                src={resultImg}
                alt="Happy cartoon child giving thumbs up"
                width={768}
                height={768}
                loading="lazy"
                className="h-28 w-28 object-contain animate-float"
              />
            </div>

            {/* Result card */}
            <div className="mt-3 rounded-3xl bg-white p-4 shadow-xl ring-1 ring-foreground/10">
              {/* Stars */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${i < filledStars ? "fill-sunny text-sunny-deep" : "fill-foreground/10 text-foreground/20"} ${i < filledStars ? "animate-twinkle" : ""}`}
                    style={{ animationDelay: `${i * 0.12}s` }}
                  />
                ))}
              </div>

              {/* Score */}
              <p className="mt-2 text-center text-base font-extrabold text-foreground">
                You earned <span className="text-sky-deep">{score}</span> out of 10 points
              </p>

              {/* Message */}
              <p className="mt-1 text-center text-[13px] font-bold text-foreground/80">
                {hasScore ? badge.msg : "Complete the quiz first!"}
              </p>

              {/* Badge */}
              <div className="mt-3 flex justify-center">
                <div className={`relative grid place-items-center rounded-full bg-gradient-to-br ${badge.grad} p-1 shadow-lg ring-4 ${badge.ring} ring-offset-2 ring-offset-white`}>
                  <div className="grid h-24 w-24 place-items-center rounded-full bg-white/20 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-2xl">{badge.tier === "gold" ? "🥇" : badge.tier === "silver" ? "🥈" : badge.tier === "bronze" ? "🥉" : "📚"}</div>
                      <div className="mt-0.5 px-2 text-[9px] font-extrabold leading-tight text-white drop-shadow">{badge.label}</div>
                    </div>
                  </div>
                  <button
                    aria-label="Share your badge"
                    className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-white text-sky-deep shadow ring-1 ring-foreground/10"
                  >
                    <Share2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Fun fact */}
              <p className="mt-3 rounded-2xl bg-sunny/30 px-3 py-2 text-center text-[11px] font-semibold text-foreground/80 ring-1 ring-sunny-deep/20">
                💡 Did you know? Honest people are trusted more!
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <button
                onClick={playAgain}
                className="rounded-2xl bg-gradient-to-b from-[oklch(0.78_0.18_150)] to-[oklch(0.62_0.2_150)] py-3 text-[13px] font-extrabold text-white shadow-[0_6px_0_0_oklch(0.5_0.18_150/0.4)] active:translate-y-0.5 active:shadow-[0_2px_0_0_oklch(0.5_0.18_150/0.4)] transition-all"
              >
                🔄 Play Again
              </button>
              <button
                onClick={viewProgress}
                className="rounded-2xl bg-gradient-to-b from-sky to-sky-deep py-3 text-[13px] font-extrabold text-white shadow-[0_6px_0_0_oklch(0.5_0.16_240/0.4)] active:translate-y-0.5 active:shadow-[0_2px_0_0_oklch(0.5_0.16_240/0.4)] transition-all"
              >
                📊 View Progress
              </button>
            </div>

            {/* Journey */}
            <div className="mt-4 rounded-2xl bg-white/70 p-3 ring-1 ring-foreground/10">
              <p className="text-center text-[10px] font-bold text-foreground/70">✨ Your Ethics Journey ✨</p>
              <div className="mt-2 flex items-center justify-between">
                {steps.map((s, i) => (
                  <div key={s} className="flex flex-1 items-center">
                    <div className="flex flex-col items-center">
                      <div className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-mint to-[oklch(0.6_0.16_160)] text-white shadow ring-2 ring-white">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="mt-1 text-[9px] font-bold text-foreground/70">{s}</span>
                    </div>
                    {i < steps.length - 1 && <div className="mx-1 h-0.5 flex-1 rounded bg-mint/60" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-center gap-1.5 text-[12px] font-extrabold text-foreground/80">
              <PartyPopper className="h-4 w-4 text-sunny-deep" />
              Total: {score}/10 — You're becoming an ethical superstar! ⭐
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(120vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
