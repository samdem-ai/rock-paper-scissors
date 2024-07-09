"use client";
import Image from "next/image";
import Rules from "./components/Rules";
import Header from "./components/Header";
import Game from "./components/Game";
import { ScoreProvider } from "@/contexts/contexts";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20 py-10">
      <ScoreProvider>
        <Header />
        <Game />
        <Rules />
      </ScoreProvider>
    </main>
  );
}
