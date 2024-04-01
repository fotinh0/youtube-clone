import React, { useState } from "react";
import "./Navbar.scss";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ setSidebar, setFeedData, setCategory }) {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const [searchQuery, setSearchQuery] = useState(null);

  async function handleSearch() {
    // If user is searching via search field
    if (searchQuery) {
      setCategory(null);

      // Fetch videos from search api
      const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&type=video&q=${searchQuery}&regionCode=US&key=${apiKey}`;
      const searchResponse = await fetch(searchUrl);
      const searchData = await searchResponse.json();

      // Exract video IDs by iterating through each item in the searchData
      // Convert array of IDs into a comma-seperated string
      const videoIds = searchData.items
        .map((item) => item.id.videoId)
        .join(",");

      // Fetch video statistics
      const videoStatsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=statistics&id=${videoIds}`
      );
      const videoStatsData = await videoStatsResponse.json();

      // For each video item in search data, find the corresponding video statistics using the video ID
      // and add the statistics object to the video item
      searchData.items.forEach((item) => {
        const videoId = item.id.videoId;
        const statsItem = videoStatsData.items.find(
          (stats) => stats.id === videoId
        );
        item.statistics = statsItem?.statistics;
      });

      // Update the state variable
      setFeedData(searchData.items);
    }
  }

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => {
            setSidebar((prev) => (prev === false ? true : false));
          }}
          src={menu_icon}
          alt="menu icon"
        />
        <Link to={"/"} onClick={() => setCategory(0)}>
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault;
                handleSearch();
              }
            }}
          />
          <img
            src={search_icon}
            alt="search icon"
            className="search-icon"
            onClick={() => handleSearch()}
          />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="upload icon" />
        <img src={more_icon} alt="more icon" />
        <img src={notification_icon} alt="notification icon" />
        <img src={profile_icon} alt="profile icon" className="user-icon" />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  setFeedData: PropTypes.func,
  setSidebar: PropTypes.func,
  setCategory: PropTypes.func,
};

export default Navbar;
