"use client";
import React from "react";
const levels = ["none", "mild", "moderate", "severe"] as const;

interface MoodSliderProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
}

export default function MoodSlider({ label, value, onChange }: MoodSliderProps) {
    return (
        <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
                {label}: <span style={{ color: "#555" }}>{levels[value]}</span>
            </label>

            <input
                type="range"
                min={0}
                max={3}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                style={{ width: "100%" }}
            />

            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                {levels.map((lvl, idx) => (
                    <span key={idx}>{lvl}</span>
                ))}
            </div>
        </div>
    );
}
