import React from 'react'
import Textbar from './Textbar'

function Info() {
  return (
    <div className='bg-gray-800 md:h-[60%] h-fit w-[90%] pb-2 rounded-2xl flex md:flex-row flex-col-reverse justify-evenly items-center text-gray-200 border-2 hover:border-blue-600 hover:scale-101 transition duration-200 mt-6 shrink-0'>
        <div className='md:h-[90%] md:w-[50%] w-[90%] flex flex-col gap-6 justify-center items-center'>
            <div>
                <Textbar Name='Mohammad Arham ' Title='Name:' size={2}></Textbar>
                <Textbar Name='NIT Patna' Title='University:' size={2}></Textbar>
                <Textbar Name='hello, I am a methodical and analytical developer passionate about modern web frameworks like Next.js, Tailwind CSS, and ShadCN. I excel in debugging npm setups, integrating AI tools into web applications, and refining custom metrics for machine learning models using TensorFlow and Keras.'  Title='Introduction:' size={1}  side={false}></Textbar>
            </div>
        </div>
        <div><img src='/AGC_20240809_115613848~2.jpg\' className='md:h-[320] md:w-[320] h-[150] w-[150] rounded-full border-2 border-amber-50 md:mt-0 mt-4'></img></div>
    </div>
  )
}

export default Info