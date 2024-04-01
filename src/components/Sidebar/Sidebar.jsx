import React from "react";
import "./Sidebar.scss";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";
import PropTypes from "prop-types";

const sideItemCategories = [
  { label: "Home", src: home, id: 0 },
  { label: "Gaming", src: game_icon, id: 20 },
  { label: "Automobiles", src: automobiles, id: 2 },
  { label: "Sports", src: sports, id: 17 },
  { label: "Entertainment", src: entertainment, id: 24 },
  { label: "Technology", src: tech, id: 28 },
  { label: "Music", src: music, id: 10 },
  { label: "Blogs", src: blogs, id: 22 },
  { label: "News", src: news, id: 25 },
];
const subscribeList = [
  { name: "PewDiePie", src: jack },
  { name: "MrBeast", src: simon },
  { name: "Justin Bieber", src: tom },
  { name: "5-Munute Craft", src: megan },
  { name: "Nas Daily", src: cameron },
];

function Sidebar({ sidebar, category, setCategory }) {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-links">
          {sideItemCategories.map((item, index) => {
            return (
              <div
                key={index}
                className={`side-link-wrapper ${
                  category === item.id ? "active" : ""
                }`}
              >
                <div
                  className={`side-link ${
                    category === item.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setCategory(item.id);
                  }}
                >
                  <img src={item.src} />
                  <p>{item.label}</p>
                </div>
                <div className="active-bar" />
              </div>
            );
          })}
          <hr />
        </div>
        <div className="subscribe-list">
          <h3>Subscribed</h3>
          {subscribeList.map((creator, index) => {
            return (
              <div key={index} className="side-link-wrapper">
                <div key={index} className="side-link">
                  <img src={creator.src} alt={creator.name} />
                  <p>{creator.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  sidebar: PropTypes.bool,
  category: PropTypes.number,
  setCategory: PropTypes.func,
};

export default Sidebar;
