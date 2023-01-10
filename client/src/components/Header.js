import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { isLoggedIn, handleLogout, name } = props;
  const navigate = useNavigate();
  return (
    <div className="navbar | font-roboto flex justify-evenly items-center px-12 lg:px-24 lg:justify-between">
      <h1 className="font-bold text-5xl tracking-wide" id="logo">
        Class<span>.</span>
      </h1>
      {isLoggedIn ? <SearchBar /> : ""}
      <section className="flex gap-32">
        <ul className="list-none flex gap-10 tracking-wide font-semibold">
          <li className="font-semibold text-teal-800 cursor-pointer">
            {isLoggedIn ? "" : "Buy a course"}
          </li>
          <li className="text-gray-400">
            {isLoggedIn ? "My Courses" : "Courses"}
          </li>
          <li className="text-gray-400">Pricing</li>
        </ul>
        {isLoggedIn ? (
          <div>
            <Button
              id="basic-demo-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="outlined"
              onClick={handleClick}
              className="pr-10 text-teal-800 border-teal-800"
            >
              <div className="absolute w-6 h-6 bg-teal-100 rounded-full flex justify-center items-center right-1">
                {name?.split("")[0]}
              </div>
              {name === undefined ? "" : name}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              aria-labelledby="basic-demo-button"
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <Button
            variant="outlined"
            className="rounded-xl text-teal-800 border-teal-800 shadow-lg px-6 font-semibold"
            size="small"
            onClick={() => navigate("/auth")}
          >
            Get Started
          </Button>
        )}
      </section>
    </div>
  );
}
