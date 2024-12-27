// import { FC, useState } from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import StepContent from "@mui/material/StepContent";
import stepperImage1 from "../../images/stepper-image-1.png";
import stepperImage2 from "../../images/stepper-image-2.png";
import stepperImage3 from "../../images/stepper-image-3.png";

// const steps = [
//   {
//     id: "01",
//     label: "Ingest Your Data",
//     description: `Your CRM listens to every call, reviews every email, and ingests product information, so it always has a comprehensive view. You don’t lift a finger—no manual updates needed.`,
//     image : stepperImage1
//   },
//   {
//     id: "02",
//     label: "Understand & Prioritize",
//     description:"It interprets every piece of data to highlight who’s likely to buy, who’s showing intent to expand, who’s cooling off, and when to engage. You’re never caught guessing which prospect to nurture or which account is at risk.",
//     image : stepperImage2
//   },
//   {
//     id: "03",
//     label: "Take Action at Scale",
//     description: `The system doesn’t just suggest next steps—it builds the entire plan. It pinpoints the right channels, timing, and touchpoints for each account. It finds key connectors, leverages common threads, and sequences introductions. Then, it sends the emails, arranges the meetings, and updates the messaging as needed. Approve or let it run, and watch every deal move faster while nothing falls through the cracks.`,
//     image : stepperImage3
//   },
// ];

// const StepperComponent: FC = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <>
//       <Stepper activeStep={activeStep} orientation="vertical" className="mt-10">
//         {steps.map((step, index) => {
//           const labelProps: {
//             optional?: React.ReactNode;
//           } = {};
//           return (
//             <Step key={step.label} active={true}>
//               <StepLabel {...labelProps} className="text-xl text-blacklight">
//                 {step.label}
//               </StepLabel>
//               <StepContent>
//                 <div className="grid grid-cols-2 gap-4">
//                   <p className="text-lg text-blacklight">{step.description}</p>
//                   <img src={step.image} alt="" className="w-full" />
//                 </div>
//               </StepContent>
//             </Step>
//           );
//         })}
//       </Stepper>
//     </>
//   );
// };

// export default StepperComponent;

import React, { useState, useEffect } from "react";
import "./Stepper.css"; // Include CSS for styling
import {
  StepperDataIcon,
  StepperSearchIcon,
  StepperPowerIcon,
} from "../../icons";

const steps = [
  {
    id: "01",
    title: "Ingest Your Data",
    description: `Your CRM listens to every call, reviews every email, and ingests product information, so it always has a comprehensive view. You don’t lift a finger—no manual updates needed.`,
    image: stepperImage1,
  },
  {
    id: "02",
    title: "Understand & Prioritize",
    description:
      "It interprets every piece of data to highlight who’s likely to buy, who’s showing intent to expand, who’s cooling off, and when to engage. You’re never caught guessing which prospect to nurture or which account is at risk.",
    image: stepperImage2,
  },
  {
    id: "03",
    title: "Take Action at Scale",
    description: `The system doesn’t just suggest next steps—it builds the entire plan. It pinpoints the right channels, timing, and touchpoints for each account. It finds key connectors, leverages common threads, and sequences introductions. Then, it sends the emails, arranges the meetings, and updates the messaging as needed. Approve or let it run, and watch every deal move faster while nothing falls through the cracks.`,
    image: stepperImage3,
  },
];

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll(".step-desc");

    const options = {
      root: null, // viewport
      threshold: 0.5, // 50% of the section is visible
    };

    const handleIntersect = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("data-id");
          onSectionEnter(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Clean up observer on unmount
  }, []);

  const onSectionEnter = (sectionId: number) => {
    console.log(`Entered section: ${sectionId}`);
    setActiveStep(Number(sectionId));
    console.log(activeStep);
    // Trigger any other function here
  };

  const getImage = (id: string) => {
    switch (id) {
      case "01":
        return <StepperDataIcon></StepperDataIcon>;
      case "02":
        return <StepperSearchIcon></StepperSearchIcon>;
      case "03":
        return <StepperPowerIcon></StepperPowerIcon>;
    }
    return null;
  };

  return (
    <div className="grid">
      <div className="stepper grid grid-cols-2 gap-x-4">
        {steps.map((step, index) => (
          <>
            <div
              key={index}
              className={`step ${activeStep >= index ? "active" : ""}`}
            >
              <div className="step-indicator">
                <div className="circle"></div>
                {index < steps.length - 1 && <div className="line"></div>}
              </div>
              <div className="step-desc ml-5" data-id={index}>
                <p
                  className={`text-2xl ${activeStep === index ? "text-[#2B77E3]" : "text-[#C8C8C8]"}`}
                >
                  {step.id}
                </p>

                <div className="flex items-center mt-3">
                  {getImage(step.id)}
                  <p className={`text-xl text-[#202020] ml-3 font-medium`}>
                    {step.title}
                  </p>
                </div>

                <p className="text-lg text-blacklight mt-3">
                  {step.description}
                </p>
              </div>
            </div>
            <img src={step.image} alt="" className="w-full step-sections" />
          </>
        ))}
      </div>
    </div>
  );
};

export default StepperComponent;
