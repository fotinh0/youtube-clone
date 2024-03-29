import React from "react";
import "./PlayVideo.scss";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

function PlayVideo() {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best Youtube Channel To Learn Web Development</h3>
      <div className="play-video-info">
        <p>1525 views • 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />2
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            125
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe to learn more</p>
        <hr />
        <h4>140 comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Fotinho <span>1 day ago</span>
            </h3>
            <p>This is awesome!</p>
            <div className="comment-action">
              <img src={like} alt="" /> <span>244</span>
              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Fotinho <span>1 day ago</span>
            </h3>
            <p>This is awesome!</p>
            <div className="comment-action">
              <img src={like} alt="" /> <span>244</span>
              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Fotinho <span>1 day ago</span>
            </h3>
            <p>This is awesome!</p>
            <div className="comment-action">
              <img src={like} alt="" /> <span>244</span>
              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayVideo;
