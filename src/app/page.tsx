"use client";
import MedsButtons from "./components/buttons/MedsButtons";
import HarmButton from "./components/buttons/HarmButton";
import OtherSymptomsButton from "./components/buttons/OtherSymptomsButton";
import MoodInputs from "./components/MoodInputs";
import MoodGraph from "./components/graphs/MoodGraph";

export default function Home() {
  const saveDailyMood = (moods: any) => {
    const today = new Date().toLocaleDateString("en-CA");

    const entry = { date: today, ...moods };

    const existing = JSON.parse(localStorage.getItem("moodyLogs") || "[]");

    const updated = existing.filter((e: any) => e.date !== today);
    updated.push(entry);

    localStorage.setItem("moodyLogs", JSON.stringify(updated));
  };

  return (
    <main>
      <h1>MOODY</h1>
      <div>
        <MedsButtons />
        <HarmButton />
        <OtherSymptomsButton />
      </div>

      <MoodInputs onSave={saveDailyMood} />

      <MoodGraph />
    </main>
  );
}