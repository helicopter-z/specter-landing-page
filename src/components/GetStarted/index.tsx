import { FC } from "react";

const GetStarted: FC = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#F8F8F8] to-[#EAF3FF] h-screen content-center rounded-b-3xl px-[80px]">
        <div className="grid gap-4 justify-items-center">
          <h1 className="text-5xl font-semibold">Let’s Get You Started</h1>
          <button className="bg-blue text-white border w-36 rounded-2xl text-center py-2 px-3">
            Let's Go
          </button>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
