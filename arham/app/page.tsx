import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Info from './Component/Info'
import ProjectSide from './Component/ProjectSide'
import ContactBrief from './Component/ContactBrief'
function page() {
  return (
    <div className='bg-black h-screen w-full flex flex-col items-center gap-6 overflow-y-auto'>
    <Breadcrumb className='mt-3.5'>
  <BreadcrumbList className='text-white text-1xl '>
    <BreadcrumbItem>
      <BreadcrumbLink href="/" className='hover:text-blue-500 transition-colors duration-200'>Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/Project" className='hover:text-blue-500 transition-colors duration-200'>Project</BreadcrumbLink>
    </BreadcrumbItem>
        <BreadcrumbSeparator />
       <BreadcrumbItem>
      <BreadcrumbLink href="/about" className='hover:text-blue-500 transition-colors duration-200'>About</BreadcrumbLink>
    </BreadcrumbItem>
        <BreadcrumbSeparator />
     <BreadcrumbItem>
      <BreadcrumbLink href="#Contact" className='hover:text-blue-500 transition-colors duration-200'>Contact</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
  </BreadcrumbList>
</Breadcrumb>
<Info></Info>
<div className='text-3xl text-white'>Top Projects</div>
 <ProjectSide 
      ProjectDetails='Built a Zoom-like conferencing platform with authentication via Clerk.io and real-time communication using GetStream.io.'
      ProjectName='YOLO'
      ProjectLink='https://github.com/BlueMoon67/ZOOM_CLONE'
      ProjectImage='/videocall.png'
      />
<ProjectSide 
      ProjectDetails='Created an AI image editor with DALL·E 2 for generation and Cloudinary for uploads, enabling seamless enhancements and storage.'
      ProjectName='Imaginify'
      ProjectLink='https://github.com/BlueMoon67/imaginify'
      ProjectImage='/aiImageeditor.png'
      />
       <ContactBrief id='Contact'></ContactBrief>
    </div>
  )
}

export default page