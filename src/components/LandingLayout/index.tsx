import { FC, useState } from "react";
import HomeSection from "../../images/section-image-1.png";
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
import StepperComponent from "../Stepper";
import CarouselComponent from "../CarouselComponent";
import UserFlowDiagram from "../UserFlowDiagram";

// interface LandingLayoutProps {
//   myref: any;
// }

const LandingLayout: FC = () => {
  return (
    <>
      <div className="relative bg-gradient-to-b from-[#F8F8F8] to-[#EAF3FF] rounded-b-3xl ">
        <div className="py-[80px]">
          <div className="line-container">
            <div className="line-horizontal bg-gradient-to-r from-[#EFF6FF] to-[#DFDFDF]"></div>
            <div className="line-vertical bg-gradient-to-r from-[#EFF6FF] to-[#DFDFDF]"></div>
            <div className="dot"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 content-center px-[80px] py-10">
            <div className="grid gap-4 content-center">
              <h1 className="text-5xl font-semibold">A New Kind of CRM—</h1>
              <h1 className="text-5xl font-semibold">
                Your AI-Driven Growth Engine
              </h1>
              <p className="text-xl text-blacklight">
                Our platform learns from every email, call, and customer
                touchpoint to uncover new leads, prevent churn, and guide every
                account to higher revenue.
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

          <div className="line-container">
            <div className="line-horizontal bg-gradient-to-r from-[#EFF6FF] to-[#DFDFDF]"></div>
            <div className="line-vertical-top bg-gradient-to-r from-[#EFF6FF] to-[#DFDFDF]"></div>
            <div className="dot-top"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto bg-white w-1/2 p-4 relative">
        <img src={Section2Bg} alt="" className="w-full h-auto" />
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

      <div className="bg-white p-[80px] pt-0">
        <CarouselComponent></CarouselComponent>
      </div>

      <div className="bg-light p-[80px] rounded-3xl" id="section-3">
        <div className="grid gap-4 mb-[64px]">
          <h1 className="text-4xl">From Raw Data to Revenue Moves—</h1>
          <h1 className="text-4xl">All in One Place</h1>
          <button className="flex items-center gap-2 bg-black text-white border rounded-lg border w-36 text-center py-2 px-3 hover:bg-blue hover:text-white">
            <StartedIcon></StartedIcon>
            Get Started
          </button>
        </div>
        <StepperComponent></StepperComponent>
      </div>

      <div className="bg-[#F4F7FA] p-[80px] rounded-3xl mt-10">
        <div className="grid gap-4">
          <button className="flex items-center gap-2 bg-black text-white border w-36 rounded text-center py-2 px-3 hover:bg-blue hover:text-white">
            <StartedIcon></StartedIcon>
            Get Started
          </button>
          <h1 className="text-4xl">
            Accelerate Growth by Turning Insight into Impact
          </h1>
          <p className="text-xl text-blacklight">
            No more static dashboards or scattered notes. Our CRM is a growth
            engine that:
          </p>
        </div>

        <div className="grid grid-cols-3 mt-10">
          <div className="grid gap-2 p-10 border-l-0 border-y-2 border-r-2 border-r-[#C0D5F3] border-y-[#F6F8FC]">
            <SalesCycleIcon></SalesCycleIcon>
            <p className="text-xl font-semibold mt-5">Shortens Sales Cycles</p>
            <p className="text-base text-blacklight">
              Identify who’s ready to buy and reach out at the perfect moment.
            </p>
          </div>
          <div className="grid gap-2 p-10 border-l-0 border-y-2 border-r-2 border-r-[#C0D5F3] border-y-[#F6F8FC]">
            <TeamIcon></TeamIcon>
            <p className="text-xl font-semibold mt-5">Lifts the Entire Team</p>
            <p className="text-base text-blacklight">
              Founders get a clear growth roadmap, sales reps get guided next
              steps, product teams learn what customers value most. Everyone
              works in sync, closer to the customer.
            </p>
          </div>
          <div className="grid gap-2 p-10 border-l-0 border-y-2 border-y-[#F6F8FC]">
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
            <h1 className="text-4xl">More Than Data—</h1>
            <h1 className="text-4xl font-semibold">
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

          <button className="flex items-center gap-2 bg-black text-white border w-36 rounded text-center py-2 px-3 hover:bg-blue hover:text-white">
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

      <div className="bg-white content-center my-[64px]">
        <h1 className="text-4xl font-semibold mb-[64px] text-center">
          Bring Your Whole Team Closer to the Customer
        </h1>
        <UserFlowDiagram />
        {/* <div className="relative">
          <img src={Section7Bg} alt="" className="w-full h-auto" />
          <div className="h-1/2 absolute top-10 rounded-lg p-4">
            <div className="grid grid-cols-3 gap-[96px] mx-[96px]">
              <div className="grid gap-2 p-6 col-start-2  bg-white border border-[#F2F2F2] shadow-lg shadow-[#0000000A] rounded-3xl">
                <div className="flex items-center">
                  <AccountIcon></AccountIcon>
                  <p className="text-xl font-medium ml-3 text-[#000000]">
                    Founders & CEOs
                  </p>
                </div>
                <p className="text-base text-[#444444]">
                  Get insight into customers’ common pain points, pipeline
                  health, growth levers, and where to invest resources.
                </p>
              </div>
             
              <div className="grid gap-2 p-6 col-start-1  bg-white border border-[#F2F2F2] shadow-lg shadow-[#0000000A] rounded-3xl">
                <div className="flex items-center">
                  <DealIcon></DealIcon>
                  <p className="text-xl font-medium ml-3 text-[#000000]">
                    Sales & CS Leaders
                  </p>
                </div>
                <p className="text-base text-[#444444]">
                  Never lose track of a deal, always know who to follow up with,
                  and identify where to upsell without guesswork.
                </p>
              </div>
              <div className="grid gap-2 p-6  col-start-3  bg-white border border-[#F2F2F2] shadow-lg shadow-[#0000000A] rounded-3xl">
                <div className="flex items-center">
                  <GrowthIcon></GrowthIcon>
                  <p className="text-xl font-medium ml-3 text-[#000000]">
                    Product & Growth Teams
                  </p>
                </div>
                <p className="text-base text-[#444444]">
                  Uncover patterns in objections, pricing feedback, and feature
                  requests—informing product decisions and messaging that
                  resonates.
                </p>
              </div>
            </div>
          </div>
        </div> */}
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
