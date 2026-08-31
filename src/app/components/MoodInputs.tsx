"use client";
import React, { useState } from "react";
import MoodSlider from "./sliders/MoodSlider";

interface MoodValues {
    depression: number;
    anxiety: number;
    anger: number;
    happiness: number;
}

interface MoodInputsProps {
    onSave: (moods: MoodValues) => void;
}

export default function MoodInputs({ onSave }: MoodInputsProps) {
    const [moods, setMoods] = useState<MoodValues>({
        depression: 0,
        anxiety: 0,
        anger: 0,
        happiness: 0,
    });

    const updateMood = (key: keyof MoodValues, value: number) => {
        setMoods((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2>Daily Mood Check-In</h2>

            <MoodSlider
                label="Depression"
                value={moods.depression}
                onChange={(v) => updateMood("depression", v)}
            />

            <MoodSlider
                label="Anxiety"
                value={moods.anxiety}
                onChange={(v) => updateMood("anxiety", v)}
            />

            <MoodSlider
                label="Anger"
                value={moods.anger}
                onChange={(v) => updateMood("anger", v)}
            />

            <MoodSlider
                label="Happiness"
                value={moods.happiness}
                onChange={(v) => updateMood("happiness", v)}
            />

            <button
                onClick={() => onSave(moods)}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    background: "#4a6cf7",
                    color: "#fff",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Save Today's Mood
            </button>
        </div>
    );
}
