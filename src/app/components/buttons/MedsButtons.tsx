"use client";
import { useState } from "react";

export default function MedsButtons() {
    const [tookMeds, setTookMeds] = useState<boolean | null>(null);

    return (
        <div className="card">
            <h3>Did you take your medication yesterday?</h3>
            <div className="button-row">
                <button onClick={() => setTookMeds(true)}>Yes</button>
                <button onClick={() => setTookMeds(false)}>No</button>
            </div>
            {tookMeds !== null && <p>You selected: {tookMeds ? "Yes" : "No"}</p>}
        </div>
    );
}