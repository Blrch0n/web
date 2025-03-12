"use client";
import { useState, useEffect } from "react";

const ProgressBar = ({ title, color, percentage }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsMounted(true);
  }, []);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{title}</span>
        <span className="text-sm text-gray-500" style={{ color: color }}>
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1">
        <div
          className="rounded-full h-1 transition-all duration-1000"
          style={{
            width: isMounted ? `${percentage}%` : "0%",
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};

// Usage example:
const SkillsSection = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 grid grid-cols-2 gap-4">
      <ProgressBar title="Web Design" color="#ac5ce1" percentage={95} />
      <ProgressBar title="Branding" color="#f40556" percentage={85} />
      <ProgressBar title="Development" color="#79c7ee" percentage={90} />
      <ProgressBar title="Marketing" color="#ff920a" percentage={75} />
    </div>
  );
};

export default SkillsSection;
