"use client";
import { useState } from "react";

export default function HarmButton() {
    const [harmIntent, setHarmIntent] = useState<boolean | null>(null);
    const [harmTarget, setHarmTarget] = useState<"myself" | "others" | null>(null);

    return (
        <div className="card">
            <h3>Do you want to harm yourself or others?</h3>

            <div className="button-row">
                <button onClick={() => setHarmIntent(true)}>Yes</button>
                <button onClick={() => setHarmIntent(false)}>No</button>
            </div>

            {harmIntent && (
                <div className="button-row">
                    <button onClick={() => setHarmTarget("myself")}>Myself</button>
                    <button onClick={() => setHarmTarget("others")}>Others</button>
                </div>
            )}
            {harmIntent !== null && (
                <p>
                    You selected:{" "}
                    {harmIntent
                        ? harmTarget
                            ? `Yes → ${harmTarget}`
                            : "Yes"
                        : "No"}
                </p>
            )}
        </div>
    );
}