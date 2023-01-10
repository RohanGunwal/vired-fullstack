import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import PublicIcon from "@mui/icons-material/Public";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

export default function LandingPage(props) {
  const { isLoggedIn, setIsLoggedIn } = props;
  useEffect(() => {
    setIsLoggedIn(false);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-5">
      <Header isLoggedIn={isLoggedIn} />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <section className="flex flex-col items-center justify-center font-semibold font-montserrat gap-10 lg:px-16 lg:items-start text-teal-800">
          <span className="text-xl">World class education</span>
          <span className="text-8xl font-semibold text-center lg:text-left">
            Become a professional in every field.
          </span>
          <section className="flex gap-6">
            <Button
              variant="contained"
              className="bg-teal-900 rounded-lg py-4 px-9"
              onClick={() => navigate("/auth")}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              className=" text-teal-800 border-teal-800 rounded-lg py-4 px-9"
            >
              Learn more
            </Button>
          </section>
        </section>
        <section>
          <img
            src="/assets/8401.jpg"
            alt="landing_page_image"
            className="w-full"
          />
        </section>
      </div>
      <div className="grid grid-cols-2 mx-6 gap-6 font-montserrat lg:grid-cols-4 my-6">
        <section className="flex gap-6">
          <section>
            <PublicIcon className="bg-amber-300 rounded-full p-3" />
          </section>
          <section className="flex flex-col">
            <span className="font-bold text-xl tracking-wide">
              100% Online Courses
            </span>
            <span className="text-sm text-gray-500">
              Start now and learn at your own schedule
            </span>
          </section>
        </section>
        <section className="flex gap-6">
          <section>
            <AccessTimeIcon className="bg-amber-300 rounded-full p-3" />
          </section>
          <section className="flex flex-col">
            <span className="font-bold text-xl tracking-wide">
              6 Months to Complete
            </span>
            <span className="text-sm text-gray-500">
              Suggested 4 hours/week
            </span>
          </section>
        </section>
        <section className="flex gap-6">
          <section>
            <CalendarTodayIcon className="bg-amber-300 rounded-full p-3" />
          </section>
          <section className="flex flex-col">
            <span className="font-bold text-xl tracking-wide">
              Flexible Schedule
            </span>
            <span className="text-sm text-gray-500">
              Set and maintain flexible deadlines
            </span>
          </section>
        </section>
        <section className="flex gap-6">
          <section>
            <ChatOutlinedIcon className="bg-amber-300 rounded-full p-3" />
          </section>
          <section className="flex flex-col">
            <span className="font-bold text-xl tracking-wide">English</span>
            <span className="text-sm text-gray-500">Subtitles: English</span>
          </section>
        </section>
      </div>
    </div>
  );
}
