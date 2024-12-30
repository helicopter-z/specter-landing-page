import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";

const GetStarted: FC = () => {
  const list = [
    { label: "Social Media", id: 1 },
    { label: "Referral", id: 2 },
    { label: "Sales Outreach", id: 3 },
    { label: "Other", id: 4 },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-[#F8F8F8] to-[#EAF3FF] h-[70vh] content-center rounded-b-3xl px-7">
        <div className="grid gap-4 justify-items-center text-center">
          <h1 className="text-5xl font-semibold">Let’s Get You Started</h1>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-y-4 md:gap-6 w-full md:w-1/2 mt-10 items-center">
            <TextField
              label="First Name"
              id="first-name"
              size="small"
              className="bg-white rounded-xl w-full"
              placeholder="First Name"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />
            <TextField
              label="Last Name"
              id="last-name"
              size="small"
              className="bg-white rounded-xl w-full"
              placeholder="Last Name"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />
            <TextField
              label="Company Name"
              id="company-name"
              size="small"
              className="bg-white rounded-xl w-full"
              placeholder="Company Name"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />
            <TextField
              label="Position"
              id="position"
              size="small"
              className="bg-white rounded-xl w-full"
              placeholder="Position"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />
            <TextField
              label="Email"
              id="email"
              size="small"
              className="bg-white rounded-xl w-full md:col-span-2"
              placeholder="Email"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />

            <Autocomplete
              disablePortal
              options={list}
              size="small"
              className="bg-white rounded-xl w-full md:col-span-2"
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="How did you hear about us?"
                  placeholder="How did you hear about us?"
                />
              )}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />

            <div className="col-start-2 text-end">
              <button className="bg-blue text-white border w-36 rounded-2xl text-center py-2 px-3 ">
                Let's Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
