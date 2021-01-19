import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Thumbnail from "./components/Games/Thumbnail.jsx";
import "../styles/Games/Games.scss";
export default function Games() {
  const [page, changePage] = useState(1);
  let ThumbnailRow1 = [1, 2, 3];
  let ThumbnailRow2 = [4, 5, 6];
  const renderThumbnails = () => {
    const renderingThumbnailsRow1 = ThumbnailRow1.map((nail, index) => {
      return <td align="center" ><Thumbnail number={nail * page} /></td>;
    });
    ReactDOM.render(renderingThumbnailsRow1, document.getElementById("f"))
    const renderingThumbnailsRow2 = ThumbnailRow2.map((nail, index) => {
        return <td align="center" ><Thumbnail number={nail * page} /></td>;
      });
    ReactDOM.render(renderingThumbnailsRow2, document.getElementById("ff"))
  };
  
  useEffect(() => {
    renderThumbnails();
  });
  return (
    <div className="gamesContainer">
      <table style={{width: "100%" }}>

        <tr id="f" className="gamesTableRow">
               
        </tr>
        <tr id="ff">

        </tr>
      </table>
    </div>
  );
}
