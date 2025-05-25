"use client";
import React from 'react'
import ProjectSide from './ProjectSide'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
function ProjectList() {
    const projects = useQuery(api.projects.get);
  return (
   <div className='bg-black h-screen w-full flex flex-col items-center gap-6 overflow-y-auto'>
    <Breadcrumb className='mt-3.5'>
  <BreadcrumbList className='text-white text-1xl '>
    <BreadcrumbItem>
      <BreadcrumbLink href="/" className='hover:text-blue-500 transition-colors duration-200'>Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/Project" className='hover:text-blue-500 transition-colors duration-200 text-blue-500'>Project</BreadcrumbLink>
    </BreadcrumbItem>
        <BreadcrumbSeparator />
       <BreadcrumbItem>
      <BreadcrumbLink href="/about" className='hover:text-blue-500 transition-colors duration-200'>About</BreadcrumbLink>
    </BreadcrumbItem>
        <BreadcrumbSeparator />
  </BreadcrumbList>
</Breadcrumb>
{projects?.map(({ProjectName,ProjectDetail,ProjectImage,ProjectLink }) => <ProjectSide ProjectImage={ProjectImage} ProjectDetails={ProjectDetail} ProjectName={ProjectName} ProjectLink={ProjectLink}></ProjectSide>)}

    </div>
  )
}
export default ProjectList