import React, { useState, useEffect } from "react";
import { fetchTopAlbums} from "../api/api";

import Hero from "../components/hero/Hero";
import Section from "../components/section/Section";

function HomePage() {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);

  const generateTopAlbumSongs = async () => {
    try {
      const topAlbumSongs = await fetchTopAlbums();
      setTopAlbumSongs(topAlbumSongs);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    generateTopAlbumSongs();
  }, []);

  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* Album section */}
      <Section type="album" title="Top Albums" data={topAlbumSongs} />
      {/* <Section type="album" title="New Albums" data={newAlbumSongs} /> */}
    </>
  );
}

export default HomePage;
