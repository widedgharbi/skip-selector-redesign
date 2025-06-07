import React from 'react';
import './ProgressHeader.css';

const steps = [
  { label: 'Postcode', icon: '📍' },
  { label: 'Waste Type', icon: '🗑️' },
  { label: 'Select Skip', icon: '🚛' },
  { label: 'Permit Check', icon: '🛡️' },
  { label: 'Choose Date', icon: '📅' },
  { label: 'Payment', icon: '💳' },
];

export default function ProgressHeader({ currentStepIndex = 2 }) {
  return (
    <div className="progress-header">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className={`step ${index < currentStepIndex
                ? 'active'
                : index === currentStepIndex
                  ? 'active'
                  : 'disabled'
              }`}
          >
            <span className="icon">{step.icon}</span>
            <span className="label">{step.label}</span>
          </div>

          {index < steps.length - 1 && (
            <div
              className={`separator ${index < currentStepIndex ? 'separator-active' : 'separator-disabled'
                }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
