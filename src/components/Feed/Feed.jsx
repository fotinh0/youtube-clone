import React, { useEffect } from "react";
import "./Feed.scss";
import { Link } from "react-router-dom";
import { value_converter } from "../../data";
import moment from "moment";
import PropTypes from "prop-types";

const Feed = ({ category, feedData, setFeedData }) => {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  async function fetchData() {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=US&videoCategoryId=${category}&key=${apiKey}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setFeedData(data.items));
  }

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {feedData &&
        feedData.map((videoData, index) => {
          return (
            <Link
              key={index}
              to={`video/${videoData.snippet.categoryId}/${videoData.id}`}
              className="card"
            >
              <img
                src={videoData.snippet.thumbnails.medium.url}
                alt="video thumbnail"
              />
              <h2>{videoData.snippet.title}</h2>
              <h3>{videoData.snippet.channelTitle}</h3>
              <p>
                {value_converter(videoData.statistics.viewCount)} Views &bull;
                {" " + moment(videoData.snippet.publishedAt).fromNow()}
              </p>
            </Link>
          );
        })}
    </div>
  );
};

Feed.propTypes = {
  category: PropTypes.number,
  feedData: PropTypes.any,
  setFeedData: PropTypes.func,
};

export default Feed;
