'use client'
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from 'lucide-react';
import TextBar from './Textbar';
interface ContactBriefProps{
    id:string;
}
function ContactBrief({id}:ContactBriefProps) {
  const phone = '8318914531';
  const [showAlert, setShowAlert] = useState(false);
  const copyText = async (text:string) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowAlert(true); // Trigger alert when copied
      setTimeout(() => setShowAlert(false), 1000); // Hide alert after 3 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div id={id} className='h-[50%] w-[90%] border-2 hover:border-blue-500 rounded-2xl shrink-0 flex flex-col items-center justify-evenly hover:scale-101 transition duration-150 text-white'>
        <div className='text-3xl text-white'>Contact</div>
         {showAlert && (
        <Alert className='w-[30%] bg-black text-white border-2 border-blue-500'>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Copied!</AlertTitle>
        </Alert>
      )}
      <Carousel className="md:w-[100%] w-[200] max-w-sm">
        <CarouselContent className="-ml-1 gap-x-4"> {/* Adjusted spacing */}
          <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2">
            <a href='https://github.com/red-panda3' target='_blank' rel='noopener noreferrer'>
              <Card className='hover:bg-blue-500 bg-gray-500'>
                <CardContent className='flex items-center justify-center'>
                  <div className='md:text-2xl w-fit'>Github</div>
                </CardContent>
              </Card>
            </a>
          </CarouselItem>

          <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2">
            <a href='https://linkedin.com/in/mohammadarhamreza' target='_blank' rel='noopener noreferrer'>
              <Card className='hover:bg-blue-500 bg-gray-500 '>
                <CardContent className='flex items-center justify-center'>
                  <div className='text-2xl w-fit'>LinkedIn</div>
                </CardContent>
              </Card>
            </a>
          </CarouselItem>

          <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2">
            <Card className='hover:bg-blue-500 bg-gray-500 cursor-pointer' onClick={()=>{copyText(phone)}}>
              <CardContent className='flex items-center justify-center'>
                <div className='text-2xl w-fit'>Phone</div>
              </CardContent>
            </Card>
          </CarouselItem>
           <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2">
            <Card className='hover:bg-blue-500 bg-gray-500 cursor-pointer' onClick={()=>{copyText('arrrhamreza@gmail.com')}}>
              <CardContent className='flex items-center justify-center'>
                <div className='text-2xl w-fit'>Email</div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default ContactBrief;