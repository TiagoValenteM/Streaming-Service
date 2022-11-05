import React, { useState } from "react";
import "./MovieRow.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MovieRow = (props) => {
  const { title, items, horizontalPoster } = props;
  const [scrollX, setScrollX] = useState(50);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const getValidMovieItems = (itemsList) => {
    const validItems = [];

    itemsList?.forEach((item) => {
      if (horizontalPoster && item.backdrop_path) {
        validItems.push(item);
      } else if (!horizontalPoster && item.poster_path) {
        validItems.push(item);
      }
    });

    return validItems;
  };

  const validItems = getValidMovieItems(items?.results);

  const getEachMovie = (item, key) => {
    return horizontalPoster ? (
      <div key={key} className="movieRow--item">
        <img
          src={`https://image.tmdb.org/t/p/w400${item.backdrop_path}`}
          alt={item.original_title}
          title={item.original_title}
        />
        <span className="movieRow--itemName">
          {item.original_title || item.name}
        </span>
      </div>
    ) : (
      <div key={key} className="movieRow--itemHighlight">
        <img
          src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
          alt={item.original_title}
          title={item.original_title}
        />
      </div>
    );
  };

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 50;
    }
    setScrollX(x);
    console.log(x);
    if (x === 50) {
      setShowLeftArrow(false);
    }
    setShowRightArrow(true);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let rowWidth = horizontalPoster
      ? validItems.length * 300
      : validItems.length * 220;
    if (window.innerWidth - rowWidth > x) {
      x = window.innerWidth - rowWidth - 50;
    }
    setScrollX(x);
    if (x === window.innerWidth - rowWidth - 50) {
      setShowRightArrow(false);
    }
    setShowLeftArrow(true);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--list">
        <div
          className="movieRow--left"
          onClick={handleLeftArrow}
          style={{ display: showLeftArrow ? "flex" : "none" }}
        >
          <NavigateBeforeIcon style={{ fontSize: 50 }} />
        </div>
        <div
          className="movieRow--right"
          onClick={handleRightArrow}
          style={{ display: showRightArrow ? "flex" : "none" }}
        >
          <NavigateNextIcon style={{ fontSize: 50 }} />
        </div>
        <div
          className="movieRow--listarea"
          style={{
            marginLeft: scrollX,
            width: horizontalPoster
              ? validItems.length * 300
              : validItems.length * 220,
          }}
        >
          {validItems.length > 0 &&
            validItems.map((item, key) => getEachMovie(item, key))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
