"use client";

import { useState } from "react";

interface ReadMoreProps {
  text: string;
  maxLength: number;
}

const ReadMore = ({ text, maxLength }: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  // If the text is shorter than the max length, just render the full text.
  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  const truncatedText = text.substring(0, maxLength);

  return (
    <div>
      <p>
        {isExpanded ? text : `${truncatedText}...`}
        <span
          onClick={toggleText}
          className="text-primary cursor-pointer hover:underline transition-all duration-300 ml-1 font-bold"
        >
          {isExpanded ? "Show less" : "Read more"}
        </span>
      </p>
    </div>
  );
};

export default ReadMore;