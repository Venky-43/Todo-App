import React from "react";

const PriorityBadge = ({ priority }) => {
  const colors = {
    High: "bg-red-500 text-white",
    Medium: "bg-yellow-500 text-black",
    Low: "bg-green-500 text-white",
  };

  return (
    <span className={`px-2 py-1 rounded-md text-sm ${colors[priority]}`}>
      {priority}
    </span>
  );
};

export default PriorityBadge;
