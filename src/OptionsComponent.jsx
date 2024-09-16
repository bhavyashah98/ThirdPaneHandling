import "./styles.css";
import { useCallback } from "react";

export default function OptionsComponent() {
  const options = [
    {
      id: "ROHVOIRYNM",
      label: "Sprinklr Insights",
      description:
        "Advanced analytics platform that provides deep insights into customer behavior and market trends through comprehensive data collection and analysis.",
    },
    {
      id: "D4N2BL8KAD",
      label: "Sprinklr Social",
      description:
        "Unified social media management tool that helps brands manage, schedule, and analyze their social media activities across multiple platforms.",
    },
    {
      id: "VNLHUS7M38",
      label: "Sprinklr Marketing",
      description:
        "Integrated marketing solution that streamlines campaign management, enhances collaboration, and provides actionable insights to optimize marketing efforts.",
    },
    {
      id: "5DFP45CJFZ",
      label: "Sprinklr Service",
      description:
        "Comprehensive customer service platform designed to improve customer support efficiency, reduce response times, and enhance overall service quality.",
    },
    {
      id: "AN1EA3PVWV",
      label: "Sprinklr Self Serve",
      description:
        "Self-service portal that empowers customers to find answers and resolve issues on their own, reducing the workload on support teams and improving customer satisfaction.",
    },
  ];

  const handleOptionClick = useCallback((option) => {
    // todo dispatch OPEN_PANE ACTION from here
  }, []);

  return (
    <div className="options-container">
      <div className="options">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option)}
            data-testid={`option-${option.id}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
