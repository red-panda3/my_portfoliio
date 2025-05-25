'use client'
import React, { useState } from 'react'
import TextBar from './Textbar'
import Image from 'next/image'

interface ProjectSideProps {
    ProjectName: string;
    ProjectDetails: string;
    ProjectImage: string;
    ProjectLink: string;
}

const ProjectSide: React.FC<ProjectSideProps> = ({ ProjectName, ProjectDetails, ProjectImage, ProjectLink }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        if (window.innerWidth <= 768) {  // Apply flip effect only for mobile screens
            setIsFlipped(!isFlipped);
        }
    };

    return (
        <a href={ProjectLink} className="md:h-[30%] md:w-[90%] w-fit p-2 h-fit border-2 hover:border-blue-500 rounded-2xl shrink-0 flex md:flex-row flex-col items-center justify-evenly hover:scale-101 transition duration-150"
            onDoubleClick={handleClick}>
            
            {/* Image Container (Only visible when not flipped) */}
            <div className={`md:w-[30%] w-[220] h-fit rounded-2xl flex items-center justify-center ${isFlipped ? "hidden" : ""}`}>
                <Image src={ProjectImage} alt='Image' width={200} height={128} className="border-1 p-2 rounded-2xl" />
            </div>

            {/* Text Container (Only visible when flipped on mobile) */}
            <div className={`md:w-[60%] h-fit w-[300] bg-gray-800 rounded-2xl flex flex-col gap-2.5 ${isFlipped ? "" : "hidden md:block"}`}>
                <TextBar Name={ProjectName} Title="Title:" size={2} />
                <TextBar Name={ProjectDetails} Title="Summary:" size={1} side={false} />
            </div>
        </a>
    )
}

export default ProjectSide;
