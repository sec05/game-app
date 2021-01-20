import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Thumbnail from "./components/Games/Thumbnail.jsx";
import "../styles/Games/Games.scss";
export default function Games() {
  const [page, changePage] = useState(0);
  let ThumbnailRow1 = [1, 2, 3];
  let ThumbnailRow2 = [4, 5, 6];
  const renderThumbnails = () => {
    const renderingThumbnailsRow1 = ThumbnailRow1.map((nail, index) => {
      return <td align="center" key={nail}><Thumbnail  number={nail + page} /></td>;
    });
    ReactDOM.render(renderingThumbnailsRow1, document.getElementById("topRow"))
    const renderingThumbnailsRow2 = ThumbnailRow2.map((nail, index) => {
        return <td align="center" key={nail}><Thumbnail  number={nail +page} /></td>;
      });
    ReactDOM.render(renderingThumbnailsRow2, document.getElementById("bottomRow"))
  };
  
  useEffect(() => {
    renderThumbnails();
  });
  return (
    <div className="gamesContainer">
      <table style={{width: "100%" }}>
        <tbody>
          <tr id="topRow" className="gamesTableRow">
               
        </tr>
        <tr id="bottomRow">

        </tr>
        </tbody>
        
      </table>
      <button onClick={()=>changePage(page+1)}>New Page</button>
      <button onClick={()=>changePage(page-1)}>Previous Page</button>
    </div>
  );
}
