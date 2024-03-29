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

const sideItemCategories = [
  { label: "Home", src: home },
  { label: "Gaming", src: game_icon },
  { label: "Automobiles", src: automobiles },
  { label: "Sports", src: sports },
  { label: "Entertainment", src: entertainment },
  { label: "Technology", src: tech },
  { label: "Music", src: music },
  { label: "Blogs", src: blogs },
  { label: "News", src: news },
];
const subscribeList = [
  { name: "PewDiePie", src: jack },
  { name: "MrBeast", src: simon },
  { name: "Justin Bieber", src: tom },
  { name: "5-Munute Craft", src: megan },
  { name: "Nas Daily", src: cameron },
];

function Sidebar({ sidebar }) {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-links">
          {sideItemCategories.map((category, index) => {
            return (
              <div key={index} className="side-link">
                <img src={category.src} />
                <p>{category.label}</p>
              </div>
            );
          })}
          <hr />
        </div>
        <div className="subscribe-list">
          <h3>Subscribed</h3>
          {subscribeList.map((creator, index) => {
            return (
              <div key={index} className="side-link">
                <img src={creator.src} alt={creator.name} />
                <p>{creator.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
