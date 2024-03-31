import React, { useEffect, useState } from "react";
import "./Recommended.scss";
import { value_converter } from "../../data";
import { Link, useParams } from "react-router-dom";

function Recommended() {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const { categoryId } = useParams();
  const [recommendedData, setRecommendedData] = useState(null);

  async function fetchRecommendedData() {
    const recommendedDataUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=46&regionCode=US&videoCategoryId=${categoryId}&key=${apiKey}`;
    await fetch(recommendedDataUrl)
      .then((res) => res.json())
      .then((data) => setRecommendedData(data.items));
  }

  useEffect(() => {
    fetchRecommendedData();
  }, [categoryId]);

  return (
    <div className="recommended">
      {recommendedData &&
        recommendedData.map((video, index) => {
          return (
            <div key={index} className="side-video-list">
              <Link
                to={`/video/${video.snippet.categoryId}/${video.id}`}
                onClick={() => window.scrollTo(0, 0)}
                className="small-thumbnail"
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt="video thumbnail"
                />
              </Link>
              <div className="vid-info">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.channelTitle}</p>
                <p className="recommended-views">
                  {value_converter(video.statistics.viewCount)} Views
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Recommended;
