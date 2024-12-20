import { FC } from "react";
import HomeSection from "../../images/section-1.png";
// interface LandingLayoutProps {
//   myref: any;
// }

const LandingLayout: FC = () => {
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
          <button className="bg-blue text-white border w-36 rounded-2xl py-2 px-3">
            Get Started
          </button>
        </div>
        <div className="grid">
          <img src={HomeSection} className="ml-auto"></img>
        </div>
      </div>

      <div className="bg-white h-screen content-center">
        <div className="grid gap-4 justify-items-center">
          <h1 className="text-5xl">Stop Managing Data—</h1>
          <h1 className="text-5xl font-semibold">Start Driving Growth</h1>
          <p className="text-xl text-blacklight">
            Traditional CRMs store data. We turn it into action, guiding every
            account to the next best step.
          </p>
          <button className="bg-blue text-white border w-36 rounded-2xl text-center py-2 px-3">
            Get Started
          </button>
        </div>
      </div>

      <div className="bg-light h-screen p-[80px] rounded-3xl" id="section-3">
        <div className="grid gap-4">
          <h1 className="text-5xl">From Raw Data to Revenue Moves—</h1>
          <h1 className="text-5xl">All in One Place</h1>
          <button className="bg-blue text-white border w-36 rounded-2xl text-center py-2 px-3">
            Get Started
          </button>
        </div>
      </div>

      <div className="bg-[#F4F7FA] p-[80px] rounded-3xl mt-10">
        <div className="grid gap-4">
          <button className="bg-black text-white border w-36 rounded-2xl text-center py-2 px-3">
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
            <p className="text-xl font-semibold">Shortens Sales Cycles</p>
            <p className="text-base text-blacklight">
              Identify who’s ready to buy and reach out at the perfect moment.
            </p>
          </div>
          <div className="grid gap-2 p-10">
            <p className="text-xl font-semibold">Lifts the Entire Team</p>
            <p className="text-base text-blacklight">
              Founders get a clear growth roadmap, sales reps get guided next
              steps, product teams learn what customers value most. Everyone
              works in sync, closer to the customer.
            </p>
          </div>
          <div className="grid gap-2 p-10">
            <p className="text-xl font-semibold">Scales Your Best Practices</p>
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

          <button className="bg-black text-white border w-36 rounded-2xl text-center py-2 px-3">
            Get Started
          </button>
        </div>

        <div className="grid grid-cols-3 grid-flow-col gap-4 mt-10">
          <div className="grid gap-2 p-10 row-span-4 bg-[#F4F7FA] rounded-3xl">
            <p className="text-2xl font-medium">Ask Anything</p>
            <p className="text-base text-[#777777]">
              Query the system on your ICP, deal velocity, common objections, or
              top-performing messages. It returns insights and strategies, not
              just raw info.
            </p>
          </div>
          <div className="grid gap-2 p-10 row-span-2 col-span-2 bg-[#F4F7FA] rounded-3xl">
            <p className="text-2xl font-medium">Advanced Reasoning</p>
            <p className="text-base text-[#777777]">
              It doesn’t just “search” your notes; it understands context,
              intent, and relationships.
            </p>
          </div>
          <div className="grid gap-2 p-10 row-span-2 col-span-2 bg-[#F4F7FA] rounded-3xl">
            <p className="text-2xl font-medium">Adaptive Intelligence</p>
            <p className="text-base text-[#777777]">
              As your market shifts or your product evolves, the platform
              recalibrates its recommendations, ensuring your growth strategy is
              always current.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-screen content-center">
        <div className="grid gap-4 justify-items-center">
          <h1 className="text-5xl font-semibold">
            Bring Your Whole Team Closer to the Customer
          </h1>

          <div className="grid grid-cols-4 gap-10 mt-[64px] p-[64px]">
            <div className="grid gap-2 p-10 col-start-2 col-span-2 bg-white border border-[#F2F2F2] shadow-lg shadow-[#0000000A] rounded-3xl">
              <p className="text-xl font-medium">Founders & CEOs</p>
              <p className="text-base text-[#777777]">
                Get insight into customers’ common pain points, pipeline health,
                growth levers, and where to invest resources.
              </p>
            </div>
            <div className="grid gap-2 p-10 col-start-2 col-end-3 bg-white border border-[#F2F2F2] shadow-lg shadow-[#0000000A] rounded-3xl">
              <p className="text-xl font-medium">Founders & CEOs</p>
              <p className="text-base text-[#777777]">
                Get insight into customers’ common pain points, pipeline health,
                growth levers, and where to invest resources.
              </p>
            </div>
            <div className="grid gap-2 p-10  col-start-3 col-end-4 bg-white border border-[#F2F2F2] shadow-lg shadow-[#0000000A] rounded-3xl">
              <p className="text-xl font-medium">Founders & CEOs</p>
              <p className="text-base text-[#777777]">
                Get insight into customers’ common pain points, pipeline health,
                growth levers, and where to invest resources.
              </p>
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
          <button className="bg-blue text-white border w-36 rounded-2xl text-center py-2 px-3">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingLayout;
