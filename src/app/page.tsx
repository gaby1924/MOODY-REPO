import MedsButtons from "./components/buttons/MedsButtons";
import HarmButton from "./components/buttons/HarmButton";
import OtherSymptomsButton from "./components/buttons/OtherSymptomsButton";

export default function Home() {
  return (
    <main>
      <h1>Moody Daily Log</h1>

      <div>
        <MedsButtons />
        <HarmButton />
        <OtherSymptomsButton />
      </div>
    </main>
  );
}