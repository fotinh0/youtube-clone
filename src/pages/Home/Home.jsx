import React from "react";
import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import PropTypes from "prop-types";

function Home({ sidebar, feedData, setFeedData, category, setCategory }) {
  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed
          category={category}
          feedData={feedData}
          setFeedData={setFeedData}
        />
      </div>
    </>
  );
}

Home.propTypes = {
  sidebar: PropTypes.bool,
  feedData: PropTypes.array,
  category: PropTypes.number,
  setFeedData: PropTypes.func,
  setSidebar: PropTypes.func,
  setCategory: PropTypes.func,
};

export default Home;
