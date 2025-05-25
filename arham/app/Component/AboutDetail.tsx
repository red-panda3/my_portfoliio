import React from "react";
import TextBar from "./Textbar";

interface AboutDetailProps {
  Heading: string;
  Breif:string;
  BreifInfo:string;
  Details: string[];
}

const AboutDetail: React.FC<AboutDetailProps> = ({ Heading, Details,Breif,BreifInfo }) => {
  return (
    <div className="w-[90%] bg-gray-800 p-4 rounded-2xl border-2 hover:border-blue-500">
      <TextBar Name={BreifInfo} Title={Heading} size={1} side={false} ></TextBar>
      <TextBar Name="" Title={Breif} size={2}></TextBar>
      <ul className="mt-1">
        {Details.map((detail, index) => (
            <TextBar key={index} Name={detail} Title="" size={1}></TextBar>
        ))}
      </ul>
    </div>
  );
};

export default AboutDetail;