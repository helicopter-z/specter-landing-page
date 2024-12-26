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
      <div className="bg-gradient-to-b from-[#F8F8F8] to-[#EAF3FF] h-[70vh] content-center rounded-b-3xl px-[80px]">
        <div className="grid gap-4 justify-items-center">
          <h1 className="text-5xl font-semibold">Let’s Get You Started</h1>

          <div className="grid grid-cols-2 gap-6 w-1/2 mt-10">
            <TextField
              label="First Name"
              id="outlined-size-small"
              size="small"
              className="bg-white rounded-xl border-0 border-white"
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
              id="outlined-size-small"
              size="small"
              className="bg-white rounded-xl"
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
              id="outlined-size-small"
              size="small"
              className="bg-white rounded-xl"
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
              id="outlined-size-small"
              size="small"
              className="bg-white rounded-xl"
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
              id="outlined-size-small"
              size="small"
              className="bg-white rounded-xl col-span-2"
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
              className="bg-white rounded-xl col-span-2"
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
