import React, { useEffect, useState } from "react";
import "./PlayVideo.scss";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { value_converter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

function PlayVideo() {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const { videoId } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  async function fetchVideoDataById() {
    // fetch video data
    const videoDataByIdUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&id=${videoId}&regionCode=US&key=${apiKey}`;
    await fetch(videoDataByIdUrl).then((res) => {
      res.json().then((data) => {
        setVideoData(data.items[0]);
      });
    });
  }

  async function fetchOtherData() {
    // Fetching Channel Data
    if (videoData) {
      const channelLogo_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData.snippet.channelId}&key=${apiKey}`;
      await fetch(channelLogo_url)
        .then((res) => res.json())
        .then((data) => setChannelData(data.items[0]));

      // Fetching Comment Data
      const videoComment_url = `https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=${apiKey}&videoId=${videoId}`;
      await fetch(videoComment_url)
        .then((res) => res.json())
        .then((data) => setCommentData(data.items));
    }
  }

  useEffect(() => {
    fetchVideoDataById();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchOtherData();
  }, [videoData]);

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h3>{videoData && videoData.snippet.title}</h3>
      <div className="play-video-info">
        <p>
          {videoData && value_converter(videoData.statistics.viewCount)} Views
          &bull; {videoData && moment(videoData.snippet.publishedAt).fromNow()}
        </p>

        <div>
          <span>
            <img src={like} alt="like icon" />
            {videoData ? value_converter(videoData.statistics.likeCount) : 125}
          </span>
          <span>
            <img src={dislike} alt="dislike icon" />2
          </span>
          <span>
            <img src={share} alt="share icon" />
            Share
          </span>
          <span>
            <img src={save} alt="save icon" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={
            channelData
              ? value_converter(channelData.snippet.thumbnails.default.url)
              : ""
          }
          alt=""
        />
        <div>
          <p>{videoData ? videoData.snippet.channelTitle : ""}</p>

          <span>
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : "1M"}{" "}
            Subscribers
          </span>
        </div>
        <button type="button">Subscribe</button>
      </div>
      <div className="video-description">
        <p>
          {videoData
            ? videoData.snippet.description.slice(0, 250)
            : "Description Here"}
        </p>
        <hr />
        {/* 130 Comments */}
        <h4>
          {videoData ? value_converter(videoData.statistics.commentCount) : 130}{" "}
          Comments
        </h4>

        {commentData.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span>
                    {moment(
                      item.snippet.topLevelComment.snippet.publishedAt
                    ).fromNow()}
                  </span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlayVideo;
