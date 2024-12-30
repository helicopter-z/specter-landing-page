import { FC, PropsWithChildren, useState } from "react";
import {
  FooterIcon,
  HamburgerIcon,
  SpecterIcon,
  StartedIcon,
} from "../../icons";
import { useNavigate } from "react-router";

const Header: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("section-3");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white p-4 md:p-8">
        <div className="bg-light rounded-t-3xl sticky top-0 z-50">
          <header className="relative z-50 w-full flex-none text-sm/6 font-semibold text-slate-900 sticky top-0">
            <nav className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="relative flex items-center rounded-3xl border border-grey py-3 px-3 md:px-5">
                <SpecterIcon />
                <div className="hidden invisible md:visible lg:flex lg:items-center">
                  {/* <SpecterIcon /> */}
                  <a
                    className="ml-8 text-black cursor-pointer"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </a>
                  <a
                    className="ml-8 text-blacklight cursor-pointer"
                    onClick={handleClick}
                  >
                    How it Works
                  </a>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                  <button
                    className="flex items-center gap-2 bg-black text-white border rounded-lg py-2 px-3 hover:bg-blue hover:text-white"
                    onClick={() => navigate("/get-started")}
                  >
                    <StartedIcon></StartedIcon>
                    Get Started
                  </button>

                  <div className="md:hidden" onClick={toggleMenu}>
                    <HamburgerIcon></HamburgerIcon>

                    <nav className={isOpen ? "menu open" : "menu"}>
                      <ul>
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a onClick={handleClick}>How it Works</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>

        {children}

        <div className="grid grid-rows-2 md:grid-cols-2 gap-4 mt-[56px]">
          <div className="grid gap-4">
            <div className="flex items-center">
              <SpecterIcon />
              <span className="text-xl text-medium ml-4">Specter</span>
            </div>
            <p className="text-sm text-blacklight">
              A New Kind of CRM—Your AI-Driven Growth Engine
            </p>
          </div>
          <div className="content-start md:content-end justify-items-start md:justify-items-end">
            <p className="text-sm text-blacklight">jackson@getspecter.com</p>
            <div className="flex items-center text-end">
              <FooterIcon></FooterIcon>
              <p className="text-sm text-blacklight ml-1">2025 Specter</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
