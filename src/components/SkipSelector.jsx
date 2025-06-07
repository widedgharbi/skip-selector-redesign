import React, { useState } from "react";
import useSkips from "./../hooks/useSkips.ts";
import './SkipSelector.css';
import ProgressHeader from './ProgressHeader.tsx';

export default function SkipSelector() {
    const skips = useSkips();
    const [selectedSkip, setSelectedSkip] = useState(null);

    const handleSelect = (skip) => {
        setSelectedSkip((prev) => (prev?.id === skip.id ? null : skip));
    };

    return (
        <div className="container">
            <header className="custom-header">
                <ProgressHeader currentStepIndex={2} />
                <h1>Pick Your Perfect Skip</h1>
                <p>Choose the size that fits your project</p>
            </header>
            <div className="cards-grid">
                {skips.map((skip) => (
                    <div
                        key={skip.id}
                        className={`card ${selectedSkip?.id === skip.id ? "active" : ""}`}
                        onClick={() => handleSelect(skip)}
                    >
                        <div className="card-image">
                            <img
                                src="/cor.png"
                                alt={`${skip.size} Yard Skip`}
                                loading="lazy"
                            />
                        </div>
                        <div className="card-content">
                            <h3>{skip.size} Yard Skip</h3>
                            <p>{skip.hire_period_days} hire period</p>
                            <p className="price">£{skip.price_before_vat}</p>

                            <button
                                className="btn-select"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleSelect(skip);
                                }}
                            >
                                {selectedSkip?.id === skip.id ? "✓ Selected" : "Select this Skip"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedSkip && (
                <aside className="details-panel">
                    <h2>Selected Skip</h2>
                    <p>
                        <strong>Size:</strong> {selectedSkip.size} Yard Skip
                    </p>
                    <p>
                        <strong>Hire Period:</strong> {selectedSkip.hire_period_days} days
                    </p>
                    <p>
                        <strong>Price:</strong> £{selectedSkip.price_before_vat}
                    </p>
                    <button
                        className="btn-continue"
                        onClick={() => alert("Continue to next step")}
                    >
                        Continue
                    </button>
                    <button
                        className="btn-cancel"
                        onClick={() => alert("Back to previous step")}
                    >
                        Back
                    </button>
                </aside>
            )}
        </div>
    );
}
