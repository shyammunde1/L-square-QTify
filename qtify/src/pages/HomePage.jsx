import React, { useState, useEffect } from "react";
import { fetchTopAlbums, fetchNewAlbums} from "../api/api";

import Hero from "../components/hero/Hero";
import Section from "../components/section/Section";

function HomePage() {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const [newAlbumSongs, setNewAlbumSongs] = useState([]);

  const generateTopAlbumSongs = async () => {
    try {
      const topAlbumSongs = await fetchTopAlbums();
      setTopAlbumSongs(topAlbumSongs);
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  const generateNewAlbumSongs = async () => {
    try {
      const newAlbumSongs = await fetchNewAlbums();
      setNewAlbumSongs(newAlbumSongs);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    generateTopAlbumSongs();
    generateNewAlbumSongs();
  }, []);

  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* Album section */}
      <Section type="album" title="Top Albums" data={topAlbumSongs} />
      <Section type="album" title="New Albums" data={newAlbumSongs} />
      <hr />
    </>
  );
}

export default HomePage;
