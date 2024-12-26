import { FC, useState } from "react";
import HomeSection from "../../images/section-1.png";
import Section2Bg from "../../images/section-2-bg.png";
import Section7Bg from "../../images/section-7-bg.png";
import {
  AccountIcon,
  ChatIcon,
  DealIcon,
  GrowthIcon,
  PowerIcon,
  SalesCycleIcon,
  ScaleIcon,
  StartedIcon,
  TeamIcon,
  TimeIcon,
} from "../../icons";
// import { Button, Step, Stepper, Typography } from "@material-tailwind/react";
// interface LandingLayoutProps {
//   myref: any;
// }

const LandingLayout: FC = () => {

  // const [activeStep, setActiveStep] = useState(0);
  // const [isLastStep, setIsLastStep] = useState(false);
  // const [isFirstStep, setIsFirstStep] = useState(false);
 
  // const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  // const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <>
      <div className="bg-gradient-to-b from-[#F8F8F8] to-[#EAF3FF] h-screen content-center grid grid-cols-2 gap-4 rounded-b-3xl px-[80px]">
        <div className="grid gap-4 content-center">
          <h1 className="text-5xl font-semibold">A New Kind of CRM—</h1>
          <h1 className="text-5xl font-semibold">
            Your AI-Driven Growth Engine
          </h1>
          <p className="text-xl text-blacklight">
            Our platform learns from every email, call, and customer touchpoint
            to uncover new leads, prevent churn, and guide every account to
            higher revenue.
          </p>
          <button className="flex items-center gap-2 bg-blue text-white border w-36 rounded-lg py-2 px-3">
            <StartedIcon></StartedIcon>
            Get Started
          </button>
        </div>
        <div className="grid">
          <img src={HomeSection} className="ml-auto"></img>
        </div>
      </div>

      <div className="container mx-auto bg-white w-1/2 p-4 relative">
        <img src={Section2Bg} alt="" className="w-full h-auto"/>
        <div className="h-1/2 absolute top-1/4 rounded-lg p-4">
        <div className="grid gap-4 justify-items-center">
          <h1 className="text-5xl">Stop Managing Data—</h1>
          <h1 className="text-5xl font-semibold">Start Driving Growth</h1>
          <p className="text-xl text-blacklight">
            Traditional CRMs store data. We turn it into action, guiding every
            account to the next best step.
          </p>
          <button className="flex items-center gap-2 bg-blue text-white border rounded-lg text-center py-2 px-3">
            <StartedIcon></StartedIcon>
            Get Started
          </button>
        </div>
        </div>
      </div>

      {/* <div className="w-full py-4 px-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
        aria-orientation="horizontal"
        role="tablist"
         translate="yes"
      >
        <Step className="h-4 w-4" onClick={() => setActiveStep(0)} />
        <Step className="h-4 w-4" onClick={() => setActiveStep(1)} />
        <Step className="h-4 w-4" onClick={() => setActiveStep(2)} />
      </Stepper>
          
    </div> */}

{/* <ol className=" overflow-hidden space-y-8">
      <li
      className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-indigo-600 after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5">
      <a  href="https://pagedone.io/" className="flex items-start font-medium w-full  ">
      <span
      className="w-8 h-8 aspect-square bg-indigo-600 border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
      1
      </span>
      <div className="block">
      <h4 className="text-base  text-indigo-600 mb-2">How to create a Pagedone
          account?</h4>
      <p className="text-sm text-gray-600 max-w-xs mb-4">To
          Create an account with several steps to collect user
          information, verify identity, and set up account
          preferences.
          <br></br></p>
      <ul className="flex flex-wrap gap-x-5 gap-y-1 w-full max-w-xl mb-4">
          <li className="text-sm font-medium text-gray-900">
              Register yourself </li>
          <li className="text-sm font-medium text-gray-900">
              Validation </li>
          <li className="text-sm font-medium text-gray-900">
              Validation </li>
          <li className="text-sm font-medium text-gray-900">Email
              Verification </li>
          <li className="text-sm font-medium text-gray-900">
              Account Activation </li>
          <li className="text-sm font-medium text-gray-900">
              Profile Setup </li>
          <li className="text-sm font-medium text-gray-900">
              Confirmation Message.</li>
      </ul>
      <p className="text-sm text-gray-600 max-w-xs">
      By following these steps, you can create an easy and
      user-friendly account creation process.</p>
      <div className="flex items-center gap-4 my-6">
          <button type="button"
              className="py-2.5 px-6 text-sm bg-indigo-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs uppercase transition-all duration-500 hover:bg-indigo-700">Continue</button>
          <p
              className="py-2.5 px-6 text-sm bg-indigo-50 text-indigo-500 rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 ">
              BACK</p>
      </div>
      </div>
      </a>
      </li>
      <li
      className="relative flex-1 after:content-[''] z-10  after:w-0.5 after:h-full after:z-0 after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-4 lg:after:left-5">
      <a className="flex items-center font-medium w-full  ">
      <span
      className="w-8 h-8 bg-indigo-50 relative z-20 border-2 border-indigo-600 rounded-full flex justify-center items-center mr-3 text-sm text-indigo-600 lg:w-10 lg:h-10">2</span>
      <div className="block">
      <h4 className="text-base  text-indigo-600 mb-2">Have any trust
          issue?</h4>
      <p className="text-sm text-gray-600 max-w-xs">
          of courser we are here to guide you
      </p>
      </div>
      </a>
      </li>
      <li className="relative flex-1 ">
      <a className="flex items-start font-medium w-full  ">
      <span
      className="w-8 h-8 bg-gray-50 border-2 relative z-10 border-gray-200 rounded-full flex justify-center items-center mr-3 text-sm  lg:w-10 lg:h-10">3</span>
      <div className="block">
      <h4 className="text-base  text-gray-900 mb-2">How can I reset my
          password?</h4>
      <p className="text-sm text-gray-600 max-w-xs">
          Go to your profile  Click Change Password  Enter
          previous password confirm Previous password and add
          your new password
      </p>
      </div>
      </a>
      </li>
      </ol> */}


      <div className="bg-light h-screen p-[80px] rounded-3xl" id="section-3">
        <div className="grid gap-4">
          <h1 className="text-5xl">From Raw Data to Revenue Moves—</h1>
          <h1 className="text-5xl">All in One Place</h1>
          <button className="flex items-center gap-2 bg-blue text-white border w-36 rounded-lg text-center py-2 px-3">
            <StartedIcon></StartedIcon>
            Get Started
          </button>
        </div>
      </div>

      <div className="bg-[#F4F7FA] p-[80px] rounded-3xl mt-10">
        <div className="grid gap-4">
          <button className="flex items-center gap-2 bg-black text-white border w-36 rounded text-center py-2 px-3">
            <StartedIcon></StartedIcon>
            Get Started
          </button>
          <h1 className="text-5xl">
            Accelerate Growth by Turning Insight into Impact
          </h1>
          <p className="text-xl text-blacklight">
            No more static dashboards or scattered notes. Our CRM is a growth
            engine that:
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-10">
          <div className="grid gap-2 p-10">
            <SalesCycleIcon></SalesCycleIcon>
            <p className="text-xl font-semibold mt-5">Shortens Sales Cycles</p>
            <p className="text-base text-blacklight">
              Identify who’s ready to buy and reach out at the perfect moment.
            </p>
          </div>
          <div className="grid gap-2 p-10">
            <TeamIcon></TeamIcon>
            <p className="text-xl font-semibold mt-5">Lifts the Entire Team</p>
            <p className="text-base text-blacklight">
              Founders get a clear growth roadmap, sales reps get guided next
              steps, product teams learn what customers value most. Everyone
              works in sync, closer to the customer.
            </p>
          </div>
          <div className="grid gap-2 p-10">
            <ScaleIcon></ScaleIcon>
            <p className="text-xl font-semibold mt-5">
              Scales Your Best Practices
            </p>
            <p className="text-base text-blacklight">
              The system learns from every success, refining outreach and
              messaging so you continuously improve as you grow.
            </p>
          </div>
        </div>
      </div>

      <div className="p-[80px] mt-10">
        <div className="grid gap-4">
          <div>
            <h1 className="text-5xl">More Than Data—</h1>
            <h1 className="text-5xl font-semibold">
              True Understanding and Intelligent Action
            </h1>
          </div>
          <div>
            <p className="text-xl text-blacklight m-0">
              This isn’t a legacy CRM with a layer of AI tacked on.
            </p>
            <p className="text-xl font-blacklight m-0">
              We rebuilt the foundation to reason about data, not just store it.
            </p>
          </div>

          <button className="flex items-center gap-2 bg-black text-white border w-36 rounded text-center py-2 px-3">
            <StartedIcon></StartedIcon>
            Get Started
          </button>
        </div>

        <div className="grid grid-cols-3 grid-flow-col gap-4 mt-10">
          <div className="p-10 row-span-4 bg-[#F4F7FA] rounded-3xl">
            <div className="flex justify-center items-center h-9 w-9 rounded-full bg-[#DAE5F5]">
              <ChatIcon></ChatIcon>
            </div>
            <p className="text-2xl font-medium mt-3">Ask Anything</p>
            <p className="text-base text-[#777777] mt-3">
              Query the system on your ICP, deal velocity, common objections, or
              top-performing messages. It returns insights and strategies, not
              just raw info.
            </p>
          </div>
          <div className="grid gap-2 p-10 row-span-2 col-span-2 bg-[#F4F7FA] rounded-3xl">
            <div className="flex justify-center items-center h-9 w-9 rounded-full bg-[#DAE5F5]">
              <PowerIcon></PowerIcon>
            </div>
            <p className="text-2xl font-medium">Advanced Reasoning</p>
            <p className="text-base text-[#777777]">
              It doesn’t just “search” your notes; it understands context,
              intent, and relationships.
            </p>
          </div>
          <div className="grid gap-2 p-10 row-span-2 col-span-2 bg-[#F4F7FA] rounded-3xl">
            <div className="flex justify-center items-center h-9 w-9 rounded-full bg-[#DAE5F5]">
              <TimeIcon></TimeIcon>
            </div>
            <p className="text-2xl font-medium">Adaptive Intelligence</p>
            <p className="text-base text-[#777777]">
              As your market shifts or your product evolves, the platform
              recalibrates its recommendations, ensuring your growth strategy is
              always current.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-screen content-center my-[64px]">
        <div className="grid gap-4 justify-items-center">
          <h1 className="text-5xl font-semibold">
            Bring Your Whole Team Closer to the Customer
          </h1>

          <div className="container mx-auto p-4 relative">
            <img src={Section7Bg} alt="" className="w-full h-auto"/>
            <div className="h-1/2 absolute top-10 rounded-lg p-4">

              <div className="grid grid-cols-4 gap-10">
                <div className="grid gap-2 p-10 col-start-2 col-span-2 bg-white border border-[#F2F2F2] shadow-lg shadow-[#0000000A] rounded-3xl">
                  <AccountIcon></AccountIcon>
                  <p className="text-xl font-medium">Founders & CEOs</p>
                  <p className="text-base text-[#777777]">
                    Get insight into customers’ common pain points, pipeline health,
                    growth levers, and where to invest resources.
                  </p>
                </div>
                <div className="grid gap-2 p-10 col-start-2 col-end-3 bg-white border border-[#F2F2F2] shadow-lg shadow-[#0000000A] rounded-3xl">
                  <DealIcon></DealIcon>
                  <p className="text-xl font-medium">Sales & CS Leaders</p>
                  <p className="text-base text-[#777777]">
                    Never lose track of a deal, always know who to follow up with,
                    and identify where to upsell without guesswork.
                  </p>
                </div>
                <div className="grid gap-2 p-10  col-start-3 col-end-4 bg-white border border-[#F2F2F2] shadow-lg shadow-[#0000000A] rounded-3xl">
                  <GrowthIcon></GrowthIcon>
                  <p className="text-xl font-medium">Product & Growth Teams</p>
                  <p className="text-base text-[#777777]">
                    Uncover patterns in objections, pricing feedback, and feature
                    requests—informing product decisions and messaging that
                    resonates.
                  </p>
                </div>
              </div>
            </div>
          </div>

       
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#F8F8F8] to-[#EAF3FF] h-screen content-center rounded-3xl px-[80px]">
        <div className="grid gap-4 justify-items-center">
          <h1 className="text-5xl font-semibold">
            Stop Managing Data— Start Driving Growth
          </h1>
          <p className="text-xl text-blacklight">
            Traditional CRMs store data. We turn it into action, guiding every
            account to the next best step.
          </p>
          <button className="flex items-center gap-2 bg-blue text-white border rounded-lg text-center py-2 px-3">
            <StartedIcon></StartedIcon>
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingLayout;
