import React from "react";
import "./FeaturedShow.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const FeaturedShow = (props) => {
  const { item } = props;

  function truncateDescription(string, n) {
    return item.overview?.length > n
      ? string.substring(0, n - 1) + "..."
      : string;
  }

  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className="featured"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">
              {parseFloat(item.vote_average.toFixed(1))}
            </div>
            <div className="featured--year">
              {item.last_air_date.substring(0, 4)}
            </div>
            <div className="featured--seasons">
              {item.number_of_seasons} Season
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="featured--description">
            {truncateDescription(item.overview, 280)}
          </div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--watch">
              <PlayArrowIcon />
              Watch
            </a>
            <a href={`/list/add/${item.id}`} className="featured--moreinfo">
              <InfoOutlinedIcon />
              More Information
            </a>
          </div>
          <div className="featured--genres">Genres: {genres?.join(", ")}</div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedShow;
