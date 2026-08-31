"use client";
import { useState } from "react";

export default function OtherSymptomsButton() {
    const [otherSymptoms, setOtherSymptoms] = useState<boolean | null>(null);
    const [text, setText] = useState("");

    return (
        <div className="card">
             <h3>Are you experiencing other symptoms?</h3>

      <div className="button-row">
        <button onClick={() => setOtherSymptoms(true)}>Yes</button>
        <button onClick={() => setOtherSymptoms(false)}>No</button>
      </div>

    {
        otherSymptoms && (
            <textarea
                placeholder="Describe other symptoms..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="textarea"
            />
        )
    }
    </div >
  );
}