import "./App.css";
import React, { useEffect, useState } from "react";
import TmdbConnect from "./services/TmdbConnect";
import MovieRow from "./components/homepage/movieRow/MovieRow";
import FeaturedShow from "./components/homepage/featured/FeaturedShow";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LoadingPage from "./components/loadingPage/LoadingPage";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      setIsLoading(true);

      // Get all the Movie's data
      let sectionsHomePage = await TmdbConnect.getHomeList();
      setMovieList(sectionsHomePage);

      // Get featured content
      let featured = sectionsHomePage.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (featured[0].items.results.length - 1)
      );
      let chosenFeatured = featured[0].items.results[randomChosen];
      let chosenInfo = await TmdbConnect.getShowInfo(chosenFeatured.id, "tv");
      setFeatureData(chosenInfo);
    };

    loadAll().then();
  }, []);
  return (
    <div className="initialPage">
      {isLoading ? (
        <LoadingPage netflixAnimationEnable={setIsLoading} />
      ) : (
        <div>
          <Header />

          {featureData && <FeaturedShow item={featureData} />}
          <section className="carousel">
            {movieList?.map((item, key) => (
              <MovieRow
                key={key}
                title={item.title}
                items={item.items}
                horizontalPoster={item.horizontalPoster}
              />
            ))}
          </section>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
