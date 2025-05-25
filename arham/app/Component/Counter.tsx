import React from "react";

interface CounterProps {
  rating: number;
  Name: string;
}

const Counter: React.FC<CounterProps> = ({ rating, Name }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="font-bold">{Name}</div>
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <span key={index} className="w-4 h-4 bg-blue-500  ml-1"></span>
        ))}
         {Array.from({ length: 5-rating }).map((_, index) => (
          <span key={index} className="w-4 h-4 border-2 border-gray-100  ml-1"></span>
        ))}
      </div>
    </div>
  );
};

export default Counter;