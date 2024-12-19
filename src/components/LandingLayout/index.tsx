import { FC } from "react"
import Diamond from '../../icons/section-1.png';


const LandingLayout: FC = () =>{
  return (
    <>
    <div className="bg-gradient-to-b from-[#F8F8F8] to-[#EAF3FF] h-screen content-center grid grid-cols-2 gap-4 px-[80px]">
      <div className="grid gap-4 content-center">
        <h1 className="text-5xl font-semibold">A New Kind of CRM — Your AI-Driven Growth Engine</h1>
        <p className="text-xl text-blacklight">Our platform learns from every email, call, and customer touchpoint to uncover new leads, prevent churn, and guide every account to higher revenue.</p>
        <button className="bg-blue text-white border w-36 rounded-2xl py-2 px-3">Get Started</button>
      </div>
      <div className="grid">
        <img src={Diamond} className="ml-auto"></img>
      </div>
     
    </div>
   
    </>
  )

}

export default LandingLayout