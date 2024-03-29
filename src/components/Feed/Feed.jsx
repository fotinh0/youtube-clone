import React from "react";
import "./Feed.scss";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";

const feedData = [
  {
    title: "Best Channel to learn from",
    channel: "GreatStack",
    stats: "15K views • 2 days ago",
    src: thumbnail1,
  },
  {
    title: "Best Channel to learn from",
    channel: "GreatStack",
    stats: "15K views • 2 days ago",
    src: thumbnail2,
  },
  {
    title: "Best Channel to learn from",
    channel: "GreatStack",
    stats: "15K views • 2 days ago",
    src: thumbnail3,
  },
  {
    title: "Best Channel to learn from",
    channel: "GreatStack",
    stats: "15K views • 2 days ago",
    src: thumbnail4,
  },
  {
    title: "Best Channel to learn from",
    channel: "GreatStack",
    stats: "15K views • 2 days ago",
    src: thumbnail5,
  },
  {
    title: "Best Channel to learn from",
    channel: "GreatStack",
    stats: "15K views • 2 days ago",
    src: thumbnail6,
  },
  {
    title: "Best Channel to learn from",
    channel: "GreatStack",
    stats: "15K views • 2 days ago",
    src: thumbnail7,
  },
  {
    title: "Best Channel to learn from",
    channel: "GreatStack",
    stats: "15K views • 2 days ago",
    src: thumbnail8,
  },
  {
    title: "Best Channel to learn from",
    channel: "GreatStack",
    stats: "15K views • 2 days ago",
    src: thumbnail1,
  },
  {
    title: "Best Channel to learn from",
    channel: "GreatStack",
    stats: "15K views • 2 days ago",
    src: thumbnail2,
  },
  {
    title: "Best Channel to learn from",
    channel: "GreatStack",
    stats: "15K views • 2 days ago",
    src: thumbnail3,
  },
  {
    title: "Best Channel to learn from",
    channel: "GreatStack",
    stats: "15K views • 2 days ago",
    src: thumbnail4,
  },
  {
    title: "Best Channel to learn from",
    channel: "GreatStack",
    stats: "15K views • 2 days ago",
    src: thumbnail5,
  },
  {
    title: "Best Channel to learn from",
    channel: "GreatStack",
    stats: "15K views • 2 days ago",
    src: thumbnail6,
  },
  {
    title: "Best Channel to learn from",
    channel: "GreatStack",
    stats: "15K views • 2 days ago",
    src: thumbnail7,
  },
  {
    title: "Best Channel to learn from",
    channel: "GreatStack",
    stats: "15K views • 2 days ago",
    src: thumbnail8,
  },
];

function Feed() {
  return (
    <div className="feed">
      {feedData.map((feed, index) => {
        return (
          <Link to={`video/20/4521`} key={index} className="card">
            <img src={feed.src} alt="" />
            <h2>{feed.title}</h2>
            <h3>{feed.channel}</h3>
            <p>{feed.stats}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Feed;
