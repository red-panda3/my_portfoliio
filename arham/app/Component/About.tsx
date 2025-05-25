import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import TextBar from './Textbar'
import AboutDetail from './AboutDetail'
import Counter from './Counter'
function About() {
  return (
    <div className='text-white bg-black h-screen w-full flex flex-col items-center gap-6 overflow-y-auto pb-10'>
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
      <BreadcrumbLink href="/about" className='hover:text-blue-500 transition-colors duration-200 text-blue-500'>About</BreadcrumbLink>
    </BreadcrumbItem>
        <BreadcrumbSeparator />
  </BreadcrumbList>
</Breadcrumb>
<div className='w-[90%] bg-gray-800 rounded-2xl p-4 mt-8 border-2 hover:scale-101 hover:border-blue-500 transition duration-200'>
    <TextBar Name='I am an aspiring Electronics and Communication Engineer with a strong foundation in software development and artificial intelligence. My expertise spans Next.js, Node.js, Python, and AI-powered solutions, allowing me to build scalable web applications and optimize machine learning models.
' Title='About_Me' size={1} side={false}></TextBar>
</div>
<AboutDetail Heading='Professional Background:' Details={
    ['Pursuing a B.Tech at the National Institute of Technology, Patna',
     'Actively contributing to open-source projects and freelance development',
     'Passionate about applying AI and machine learning to real-world problems']} Breif='Key HighLight:' BreifInfo='I am an aspiring Electronics and Communication Engineer with a strong foundation in software development and artificial intelligence. My expertise spans Next.js, Node.js, Python, and AI-powered solutions, allowing me to build scalable web applications and optimize machine learning models.
'></AboutDetail>
<AboutDetail Heading='Open-Source Contribution' Details={[
    '1500+ lines of code contributed to projects under Assoie, SugarLabs, and NumFocus.',
    'Optimized data structures, improving algorithm performance by 75% in Assoie',
    'Collaborated with global developers, refining documentation and improving testing protocols.'
]} Breif=' Key Achievements:' BreifInfo='I have actively contributed to multiple open-source repositories, enhancing the core functionality of various projects.'></AboutDetail>
<AboutDetail Heading='Competitive Programming & Hackathons' Details={[
    ' Qualified for Smart India Hackathon, developing a platform that connects freelancers with potential clients.',
    ' Qualified for Smart India Hackathon, developing a platform that connects freelancers with potential clients.',
    ' Qualified for Smart India Hackathon, developing a platform that connects freelancers with potential clients.'
]} Breif=' Key Achievements:' BreifInfo='I actively participate in hackathons and competitive programming challenges, applying advanced problem-solving techniques.
'></AboutDetail>
<AboutDetail Heading='Full Stack Devlopment' Details={[
    'Imaginify  Designed an AI-powered image editing tool featuring background removal and enhancement capabilities, leveraging Next.js, OpenAI APIs, and Convex Database.',
    ' AI-Powered Utilities  Developed an interactive ChatBot for engagement and a Movement Detector using ML models, built with Streamlit.',
    'Freelance Software Development (Bountify Startup)  Enhanced React, Tailwind CSS, and Node.js applications, implementing Clerk.io for authentication and Vercel for deployment.'
]}
Breif='Notable Projects:'
BreifInfo='I specialize in full-stack development, building high-performance applications that integrate cutting-edge technologies. My experience spans both frontend and backend, ensuring seamless functionality and user interaction.'
>
</AboutDetail>
<AboutDetail
Heading='Data Structures & Algorithms (DSA)'
Details={[
    'Solved 500+ questions on Leetcode with 1550+ rating',
    'Engaged in Kaggle compettions, leveraging DSA principle for predictive modeling and Data omptimization'
    ]}
    Breif='HighLight'
    BreifInfo='My deep understanding of Data Structures and Algorithms (DSA) enables me to craft efficient solutions for complex problems. Through extensive hands-on experience in competitive programming and real-world applications, I have:'
></AboutDetail>
<Carousel className='md:block hidden'>
  <CarouselContent>
    <CarouselItem >
        <div className='w-[100%]  flex flex-col gap-3 items-center text-left'>
    <div className='text-2xl'>Programming Language</div>
    <div className='flex justify-evenly items-center w-[90%] mt-4 gap-10'>
        <Counter Name='Java' rating={4}></Counter>
        <Counter Name='javascript' rating={5}></Counter> 
    </div>
     <div className='flex justify-evenly items-start w-[90%] mt-2 gap-10'>
        <Counter Name='C++' rating={3}></Counter>
        <Counter Name='python' rating={4}></Counter> 
    </div>
     <div className='flex justify-evenly items-start w-[90%] mt-2 gap-10'>
        <Counter Name='HTML' rating={4}></Counter>
        <Counter Name='CSS' rating={5}></Counter> 
    </div>
     <div className='flex justify-evenly items-start w-[90%] mt-2 gap-10'>
        <Counter Name='Flutter' rating={4}></Counter>
        <Counter Name='SQL' rating={3}></Counter> 
    </div>
</div>
    </CarouselItem>
    <CarouselItem>
         <div className='w-[100%]  flex flex-col gap-3 items-center text-left'>
    <div className='text-2xl'>Web Devlopment</div>
    <div className='flex justify-evenly items-center w-[90%] mt-4 gap-10'>
        <Counter Name='Next.js' rating={5}></Counter>
        <Counter Name='React.js' rating={5}></Counter> 
    </div>
     <div className='flex justify-evenly items-start w-[90%] mt-2 gap-10'>
        <Counter Name='Tailwind CSS' rating={4}></Counter>
        <Counter Name='ShadCN' rating={5}></Counter> 
    </div>
     <div className='flex justify-evenly items-start w-[90%] mt-2 gap-10'>
        <Counter Name='Node js' rating={4}></Counter>
        <Counter Name='Express' rating={4}></Counter> 
    </div>
     <div className='flex justify-evenly items-start w-[90%] mt-2 gap-10'>
        <Counter Name='Convex' rating={4}></Counter>
        <Counter Name='SQL' rating={3}></Counter> 
    </div>
</div>
    </CarouselItem>
    <CarouselItem>
         <div className='w-[100%]  flex flex-col gap-3 items-center text-left'>
    <div className='text-2xl'>Artificial Intelligence & Machine Learning</div>
    <div className='flex justify-evenly items-center w-[90%] mt-4 gap-10'>
        <Counter Name='Tensorflow' rating={5}></Counter>
        <Counter Name='Keras' rating={5}></Counter> 
    </div>
     <div className='flex justify-evenly items-start w-[90%] mt-2 gap-10'>
        <Counter Name='Pandas' rating={5}></Counter>
        <Counter Name='Numpy' rating={5}></Counter> 
    </div>
     <div className='flex justify-evenly items-start w-[90%] mt-2 gap-10'>
        <Counter Name='Matplotlib' rating={4}></Counter>
        <Counter Name='seaborn' rating={3}></Counter> 
    </div>
     <div className='flex justify-evenly items-start w-[90%] mt-2 gap-10'>
        <Counter Name='Sklearn' rating={4}></Counter>
        <Counter Name='Pytorch' rating={3}></Counter> 
    </div>
</div>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious/>
  <CarouselNext />
</Carousel>
    </div>
  )
}

export default About