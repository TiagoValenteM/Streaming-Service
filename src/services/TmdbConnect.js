const API_KEY = "c524d08e46112348e48683821909b66c";
const API_BASE = "https://api.themoviedb.org/3";

const titlesFetch = async (titlesData) => {
  const request = await fetch(`${API_BASE}${titlesData}`);
  return await request.json();
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Only on Netflix",
        items: await titlesFetch(
          `/discover/tv?with_network=213&api_key=${API_KEY}`
        ),
        horizontalPoster: false,
      },
      {
        slug: "trending",
        title: "Trending Now",
        items: await titlesFetch(
          `/trending/all/week?&api_key=${API_KEY}&language=en-US`
        ),
        horizontalPoster: true,
      },
      {
        slug: "topRated",
        title: "Best Rated",
        items: await titlesFetch(
          `/movie/top_rated?&api_key=${API_KEY}&language=en-US`
        ),
        horizontalPoster: true,
      },
      {
        slug: "comedy",
        title: "Comedy",
        items: await titlesFetch(
          `/discover/movie?with_genres=35&api_key=${API_KEY}`
        ),
        horizontalPoster: true,
      },
      {
        slug: "horror",
        title: "Horror",
        items: await titlesFetch(
          `/discover/movie?with_genres=27&api_key=${API_KEY}`
        ),
        horizontalPoster: true,
      },
      {
        slug: "drama",
        title: "TV Drama",
        items: await titlesFetch(
          `/discover/movie?with_genres=18&api_key=${API_KEY}`
        ),
        horizontalPoster: false,
      },
      {
        slug: "action",
        title: "Action",
        items: await titlesFetch(
          `/discover/movie?with_genres=28&api_key=${API_KEY}`
        ),
        horizontalPoster: true,
      },
      {
        slug: "documentary",
        title: "Documentaries",
        items: await titlesFetch(
          `/discover/movie?with_genres=99&api_key=${API_KEY}`
        ),
        horizontalPoster: true,
      },
    ];
  },

  getShowInfo: async (showId, type) => {
    let info = {};

    if (showId) {
      switch (type) {
        case "movie":
          info = await titlesFetch(`/movie/${showId}?api_key=${API_KEY}`);
          break;
        case "tv":
          info = await titlesFetch(`/tv/${showId}?api_key=${API_KEY}`);
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },
};
