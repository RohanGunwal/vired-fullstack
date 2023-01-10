import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CourseCard from "./CourseCard";
import Header from "./Header";

export default function Home(props) {
  const user = useSelector((state) => state.userData.value);
  const [courseData, setCourseData] = useState([]);
  const [assignmentData, setAssignmentData] = useState([]);
  const { isLoggedIn, setIsLoggedIn } = props;
  const navigate = useNavigate();
  if (user !== "") {
      localStorage.setItem("username", user.name);
  }

  useEffect(() => {
    setIsLoggedIn(true);
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
    axios
      .get("/courses", {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => setCourseData(res.data))
      .catch((err) => console.log(err));

    axios
      .get("/courses/assignments", {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => setAssignmentData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="flex flex-col lg:h-screen">
      <Header
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        name={localStorage.getItem("username")}
      />
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-around items-center gap-6 mt-6 h-full">
        {courseData.map((e, index) => (
          <CourseCard
            key={e.id}
            data={e}
            index={index}
            assignmentData={assignmentData}
          />
        ))}
      </div>
    </div>
  );
}
