"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
);

interface MoodEntry {
    date: string;
    depression: number;
    anxiety: number;
    anger: number;
    happiness: number;
}

export default function MoodGraph() {
    const [logs, setLogs] = useState<MoodEntry[]>([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("moodyLogs") || "[]");
        setLogs(stored);
    }, []);

    const dates = logs.map((l) => l.date);

    const data = {
        labels: dates,
        datasets: [
            {
                label: "Depression",
                data: logs.map((l) => l.depression),
                borderColor: "red",
                tension: 0.3,
            },
            {
                label: "Anxiety",
                data: logs.map((l) => l.anxiety),
                borderColor: "orange",
                tension: 0.3,
            },
            {
                label: "Anger",
                data: logs.map((l) => l.anger),
                borderColor: "purple",
                tension: 0.3,
            },
            {
                label: "Happiness",
                data: logs.map((l) => l.happiness),
                borderColor: "green",
                tension: 0.3,
            },
        ],
    };

    return (
        <div style={{ width: "100%", maxWidth: "700px", margin: "40px auto" }}>
            <h2>Mood Trends</h2>
            <Line data={data} />
        </div>
    );
}
