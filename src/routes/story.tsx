import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Sparkles, Star, BookOpen, Volume2 } from "lucide-react";
import storyImg from "@/assets/story-lost-wallet.png";

export const Route = createFileRoute("/story")({
  component: StoryScreen,
  head: () => ({
    meta: [
      { title: "The Lost Wallet — EthicsQuest" },
      { name: "description", content: "An interactive ethics story for kids: Ali finds a lost wallet on his way home from school." },
    ],
  }),
});

function StoryScreen() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-sky/30 via-background to-sunny/20 p-4 sm:p-8">
      {/* Phone frame */}
      <div className="relative w-full max-w-[400px] aspect-[9/19.5] rounded-[3rem] bg-[oklch(0.18_0.04_250)] p-3 shadow-[0_30px_80px_-20px_oklch(0.4_0.15_240/0.5)]">
        {/* Screen */}
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
          <Star className="absolute top-24 left-8 h-4 w-4 fill-sunny text-sunny-deep animate-twinkle" />
          <Sparkles className="absolute top-32 right-10 h-5 w-5 text-sky-deep animate-twinkle [animation-delay:.4s]" />
          <Star className="absolute top-72 right-8 h-3 w-3 fill-bubble text-bubble animate-twinkle [animation-delay:.8s]" />
          <Sparkles className="absolute bottom-48 left-6 h-4 w-4 text-sunny-deep animate-twinkle [animation-delay:1.2s]" />
          <Star className="absolute bottom-64 right-12 h-3 w-3 fill-mint text-mint animate-twinkle [animation-delay:.6s]" />

          {/* Content */}
          <div className="relative z-10 flex h-[calc(100%-2.5rem)] flex-col px-6 pb-6 pt-3">
            {/* Top nav */}
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="grid h-10 w-10 place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-sky/40 active:translate-y-0.5 transition"
                aria-label="Back"
              >
                <ArrowLeft className="h-5 w-5 text-sky-deep" />
              </Link>
              <div className="flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 ring-1 ring-white backdrop-blur-sm">
                <BookOpen className="h-3.5 w-3.5 text-sky-deep" />
                <span className="text-[11px] font-extrabold text-foreground">Story 1 · Chapter 1</span>
              </div>
              <button
                className="grid h-10 w-10 place-items-center rounded-2xl bg-white shadow-sm ring-1 ring-sunny/40 active:translate-y-0.5 transition"
                aria-label="Read aloud"
              >
                <Volume2 className="h-5 w-5 text-sunny-deep" />
              </button>
            </div>

            {/* Progress dots */}
            <div className="mt-4 flex items-center justify-center gap-1.5">
              <span className="h-1.5 w-8 rounded-full bg-sky-deep" />
              <span className="h-1.5 w-3 rounded-full bg-foreground/15" />
              <span className="h-1.5 w-3 rounded-full bg-foreground/15" />
              <span className="h-1.5 w-3 rounded-full bg-foreground/15" />
            </div>

            {/* Title */}
            <div className="mt-4 text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-deep/80">A Story About Honesty</p>
              <h1 className="mt-1 font-display text-[34px] leading-[1.05] font-bold tracking-tight bg-gradient-to-br from-sky-deep via-primary to-bubble bg-clip-text text-transparent">
                The Lost Wallet
              </h1>
            </div>

            {/* Illustration card */}
            <div className="relative mt-4 mx-auto w-full">
              <div className="relative rounded-[2rem] bg-gradient-to-br from-sunny/40 via-white to-sky/40 p-3 ring-1 ring-white shadow-[0_15px_40px_-20px_oklch(0.5_0.16_240/0.4)]">
                <div className="rounded-[1.5rem] bg-gradient-to-b from-sky/30 to-sunny/20 overflow-hidden">
                  <img
                    src={storyImg}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    alt="Cartoon boy Ali finding a wallet on the road"
                    className="w-full h-44 object-contain animate-float"
                  />
                </div>
                <div className="absolute -top-2 -right-2 rotate-12 rounded-2xl bg-sunny px-2.5 py-1 shadow-md ring-2 ring-white">
                  <span className="text-[10px] font-extrabold text-foreground">+10 ⭐</span>
                </div>
                <div className="absolute -bottom-2 -left-2 -rotate-6 rounded-2xl bg-white px-2.5 py-1 shadow-md ring-1 ring-sky/40">
                  <span className="text-[10px] font-extrabold text-sky-deep">Chapter 1</span>
                </div>
              </div>
            </div>

            {/* Story text */}
            <div className="mt-5 rounded-3xl bg-white/80 backdrop-blur-sm p-4 ring-1 ring-white shadow-sm">
              <p className="text-[15px] leading-relaxed font-semibold text-foreground/85 text-center">
                Ali found a <span className="text-sky-deep">wallet</span> on the road while returning <span className="text-sunny-deep">home from school</span>.
              </p>
            </div>

            {/* Spacer + Continue */}
            <div className="mt-auto pt-5">
              <button
                className="group relative w-full rounded-3xl bg-gradient-to-br from-sky-deep to-primary px-6 py-4 shadow-[0_8px_0_0_oklch(0.5_0.16_240)] active:translate-y-1 active:shadow-[0_2px_0_0_oklch(0.5_0.16_240)] transition-all"
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="font-display text-lg font-bold text-white">Continue</span>
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
                <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-sunny animate-twinkle" />
              </button>
            </div>

            {/* Home indicator */}
            <div className="mx-auto mt-4 h-1.5 w-32 rounded-full bg-foreground/30" />
          </div>
        </div>
      </div>
    </div>
  );
}
