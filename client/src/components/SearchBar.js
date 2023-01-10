import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="search"
        className="rounded-xl py-2 pl-9 px-5 w-60 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-200"
        style={{ border: "1px solid #ddd" }}
        placeholder="What do you want to learn"
      />
      <SearchIcon className="absolute left-3 top-2.5" fontSize="20px" />
    </div>
  );
}
