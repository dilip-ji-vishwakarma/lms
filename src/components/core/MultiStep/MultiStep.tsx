"use client"
import React, { useState } from 'react';
import { ToolTip } from '../ToolTip';
import { Chapters } from '@/components/Chapters';

export const MultiStep = () => {
  const [step, setStep] = useState(1);

  const timeLine = [
    {
      title: "Course Intro",
      duration: "00:00:00"
    },
    {
      title: "Prerequisites",
      duration: "00:01:55"
    },
    {
      title: "What is React?",
      duration: "00:02:43"
    },
    {
      title: "Development Environment",
      duration: "00:04:57"
    },
    {
      title: "Creating a React App",
      duration: "00:06:24"
    },
    {
      title: "Project Structure",
      duration: "00:09:17"
    },
    {
      title: "Creating a React Component",
      duration: "00:11:20"
    },
    {
      title: "How React Works",
      duration: "00:16:41"
    }
  ];

  const componentClass = "text-black shadow-[rgba(149,157,165,0.2)_0px_8px_24px] p-5";

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <section className={componentClass}><Chapters /></section>;
      case 2:
        return <section className={componentClass}>Step 2: Personal Info</section>;
      case 3:
        return <section className={componentClass}>Step 3: Contact Details</section>;
      case 4:
        return <section className={componentClass}>Step 4: Address Info</section>;
      case 5:
        return <section className={componentClass}>Step 5: Additional Info</section>;
      case 6:
        return <section className={componentClass}>Step 6: Review & Submit</section>;
      case 7:
        return <section className={componentClass}>Step 7: Final Check</section>;
      case 8:
        return <section className={componentClass}>Step 8: Completion</section>;
      default:
        return <section className={componentClass}>Step 1: Intro Form</section>;
    }
  };

  return (
    <div className="font-sans text-white relative flex">
      <nav className="relative">
        <ul className='sticky top-0 flex flex-col space-y-10 ml-[-20px]'>
          {timeLine.map((item, index) => (
            <li key={index} className={`relative z-10 ${step === index + 1 ? 'active' : ''}`}>
              <button
                className={`text-left transition-all duration-150 flex items-center space-x-4 ${step === index + 1 ? 'font-semibold text-black' : 'text-[#8F8E8E]'}`}
                onClick={() => setStep(index + 1)}>
                <div className={`w-4 h-4 rounded-full border-2 ${step === index + 1 ? 'bg-black border-black' : 'bg-white border-gray-400'}`}></div>
                <ToolTip title={item.title}><div className='text-left'>
                  <h3 className="text-sm truncate whitespace-nowrap overflow-hidden max-w-[100px]">{item.title}</h3>
                  <p className="text-sm">{item.duration}</p>
                </div></ToolTip>
              </button>

              {index !== timeLine.length - 1 && (
                <div className="absolute top-full left-[8px] w-[2px] h-full bg-gray-300 z-0"></div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex-grow p-2 ml-[10px]">
        {renderStepContent()}
      </div>
    </div>
  );
};
