import { FC, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import Section2Bg from "../../images/section-3-carousel-1.png";

const steps = [
  {
    id: "01",
    label: "Ingest Your Data",
    description: `Your CRM listens to every call, reviews every email, and ingests product information, so it always has a comprehensive view. You don’t lift a finger—no manual updates needed.`,
  },
  {
    id: "02",
    label: "Understand & Prioritize",
    description:
      "It interprets every piece of data to highlight who’s likely to buy, who’s showing intent to expand, who’s cooling off, and when to engage. You’re never caught guessing which prospect to nurture or which account is at risk.",
  },
  {
    id: "03",
    label: "Take Action at Scale",
    description: `The system doesn’t just suggest next steps—it builds the entire plan. It pinpoints the right channels, timing, and touchpoints for each account. It finds key connectors, leverages common threads, and sequences introductions. Then, it sends the emails, arranges the meetings, and updates the messaging as needed. Approve or let it run, and watch every deal move faster while nothing falls through the cracks.`,
  },
];

const StepperComponent: FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Stepper activeStep={activeStep} orientation="vertical" className="mt-10">
        {steps.map((step, index) => {
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={step.label} active={true}>
              <StepLabel {...labelProps} className="text-xl text-blacklight">
                {step.label}
              </StepLabel>
              <StepContent>
                <div className="grid grid-cols-2 gap-4">
                  <p className="text-lg text-blacklight">{step.description}</p>
                  <img src={Section2Bg} alt="" className="w-full" />
                </div>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};

export default StepperComponent;
