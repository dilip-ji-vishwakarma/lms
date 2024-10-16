"use client"
import React, { useEffect, useRef, useState } from 'react';
import { ToolTip } from '../ToolTip';
import { Chapters } from '@/components/Chapters';
import { Heading } from '../Heading';
import { IconRender } from '../IconRender';

export const MultiStep = () => {
  const [step, setStep] = useState(1);
  const [timeline, setTimeline] = useState(false);
  const timelineRef = useRef<HTMLDivElement | null>(null);
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

  const componentClass = "text-black shadow-[rgba(149,157,165,0.2)_0px_8px_24px] md:p-5 p-3";

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

  const handleClickOutside = (event: any) => {
    if (timelineRef.current && !timelineRef.current.contains(event.target)) {
      setTimeline(false);
    }
  };

  useEffect(() => {
    if (timeline) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [timeline]);

  return (
    <>
      {/* Mobile/Tablet View */}
      <div className='md:hidden flex items-center justify-between'>
        <Heading className='text-lg'>Timeline</Heading>
        <span onClick={() => setTimeline(!timeline)}>
          {timeline ? (<IconRender name="X" className='rotate-180' />) : (<IconRender name="TableOfContents" className='rotate-180' />)}
        </span>
      </div>

      {/* Conditionally render the timeline for mobile/tablet view */}
      {timeline && (
        <nav className="md:hidden block relative" ref={timelineRef}>
          <ul className='flex flex-col space-y-4 px-[10px] py-[10px] h-[240px] bg-white overflow-scroll absolute z-[999] w-full'>
            {timeLine.map((item, index) => (
              <li key={index} className={`relative z-10 ${step === index + 1 ? 'active' : ''}`}>
                <div
                  className={`text-left transition-all duration-150 flex items-center space-x-4 ${step === index + 1 ? 'font-semibold text-black' : 'text-[#8F8E8E]'}`}
                  onClick={() => {
                    setStep(index + 1);
                    setTimeline(false);
                  }}
                >
                  <div className='text-left'>
                    <div className='text-left'>
                      <h3 className="text-sm md:truncate whitespace-nowrap overflow-hidden md:max-w-[100px]">{item.title}</h3>
                      <p className="text-sm">{item.duration}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Desktop View */}
      <div className="font-sans text-white relative  md:flex">
        <nav className="md:relative md:block hidden">
          <ul className='flex flex-col space-y-10 ml-[-20px]'>
            {timeLine.map((item, index) => (
              <li key={index} className={`relative z-10 ${step === index + 1 ? 'active' : ''}`}>
                <div
                  className={`text-left transition-all duration-150 flex items-center space-x-4 ${step === index + 1 ? 'font-semibold text-black' : 'text-[#8F8E8E]'}`}
                  onClick={() => setStep(index + 1)}
                >
                  <div className={`w-4 h-4 rounded-full border-2 ${step === index + 1 ? 'bg-black border-black' : 'bg-white border-gray-400'}`}></div>
                  <div className='text-left'>
                    <ToolTip title={item.title}>
                      <div className='text-left'>
                        <h3 className="text-sm truncate whitespace-nowrap overflow-hidden max-w-[100px]">{item.title}</h3>
                        <p className="text-sm">{item.duration}</p>
                      </div>
                    </ToolTip>
                  </div>
                </div>

                {index !== timeLine.length - 1 && (
                  <div className="absolute top-full left-[8px] w-[2px] h-full bg-gray-300 z-0"></div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex-grow md:p-2 md:ml-[10px]">
          {renderStepContent()}
        </div>
      </div>
    </>
  );
};
