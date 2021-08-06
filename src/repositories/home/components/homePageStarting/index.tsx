import React from "react";
import BackgroundImage from "../../../../assets/homePageStaringImage.svg";
import cssStyle from "./style.module.css";

const HomePageStarting = () => {
  return (
    <div style={style}>
      <div style={{ position: "relative", top: "40%" }}>
        <div className="flex justify-center">
          <p className={cssStyle.headingName}> Hack Club Kerala</p>
        </div>

        <p
          className="flex justify-center text-white text-center"
          style={{ fontSize: 18, fontFamily: "Montserrat" }}
        >
          Hack Club is a nonprofit network of high school coding <br /> clubs
          and makers around the world.
        </p>
        <div className="flex justify-center mt-6">
          <a href="https://discord.gg/AgK6t52m">
            <button
              className="bg-blue-500 hover:bg-blue-700 bg-white font-bold py-2 px-4 rounded"
              style={{ borderRadius: 70 }}
            >
              Join Discord
            </button>
          </a>
        </div>
        <div className="flex justify-center mt-16 text-white">
          <p>This page is under Development</p>
        </div>
      </div>
    </div>
  );
};

const style = {
  backgroundImage: `url(${BackgroundImage})`,
  height: "100vh",
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export default HomePageStarting;
