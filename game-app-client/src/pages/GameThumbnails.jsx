import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Thumbnail from "./components/Thumbnails/Thumbnail.jsx";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "../styles/Games/GameThumbnails.scss";
import {useHistory} from "react-router-dom"
export default function GameThumbnails() {
  const [page, changePage] = useState(0);
  let ThumbnailRow1 = [1, 2, 3];
  let ThumbnailRow2 = [4, 5, 6];
  const History = useHistory();
  const changeURL = (url) =>
  {
    History.push(url);
  }
  const renderThumbnails = () => {
    const renderingThumbnailsRow1 = ThumbnailRow1.map((nail, index) => {
      return (
        <td align="center" key={nail} onClick={()=>changeURL("/games/"+(nail+page))}>
          <Thumbnail number={nail + page} />
        </td>
      );
    });
    ReactDOM.render(renderingThumbnailsRow1, document.getElementById("topRow"));
    const renderingThumbnailsRow2 = ThumbnailRow2.map((nail, index) => {
      return (
        <td align="center" key={nail} onClick={()=>changeURL("/games/"+(nail+page))}>
          <Thumbnail number={nail + page} />
        </td>
      );
    });
    ReactDOM.render(
      renderingThumbnailsRow2,
      document.getElementById("bottomRow")
    );
  };
  const arrowClick = (dir) => {
    if(page>=0 && dir===1)
    {
      changePage(page + 6 * dir);
    }
    if(page> 0 && dir===-1)
    {
      changePage(page + 6 * dir);
    }
    
  };
  useEffect(() => {
    renderThumbnails();
  });
  return (
    <div className="gamesContainer">
      <table style={{ width: "100%" }}>
        <tbody>
          <tr id="topRow" className="thumbnailRow"></tr>
          <tr id="bottomRow" className="thumbnailRow"></tr>
        </tbody>
      </table>
      <div className="arrowButtonsContainer">
        <IconButton onClick={() => arrowClick(-1)}>
          <ArrowBackIcon style={{ color: "white", fontSize: "2.5vw" }} />
        </IconButton>
        <IconButton onClick={() => arrowClick(1)}>
          <ArrowForwardIcon style={{ color: "white", fontSize: "2.5vw" }} />
        </IconButton>
      </div>
    </div>
  );
}
