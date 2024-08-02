import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../App.css';
import img from '../assets/coder.svg';
import sample from '../assets/img1.gif';
import {Button} from "@nextui-org/react";
export default function Home() {
  return (
    <div className="pt-12 flex flex-col items-center justify-center h-fit bg-gray-950 sm:flex-row">
      <div className="flex flex-col items-start text-left p-12 sm:w-1/2"  data-aos="fade-right">
        <h1 className="text-5xl font-bold text-[#FFFFFF]"  >
          Hello,<span className="text-[#00FFFF] text-6xl"> Darshan Jain</span> here
        </h1>
        <TypeAnimation
          className="text-white mt-6"
          sequence={[
            '"Turning Ideas into Digital Reality"',
            1000,
            

          ]}
          wrapper="span"
          speed={50}
          style={{ fontStyle: 'italic', fontSize: '1.5em', display: 'inline-block' }}
          repeat={Infinity}
        />
       <Button color="primary" className='mt-6 text-white text-xl' variant="flat">
        Resume will be uploaded soon
      </Button>
      </div>
      <div className="flex items-center justify-center sm:w-1/2 p-6"  data-aos="fade-left">
        <img src={sample} alt="Darshan Jain" className="w-full max-w-lg" />
      </div>
    </div>
  );
}
