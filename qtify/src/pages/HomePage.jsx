import React, { useState, useEffect } from "react";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs,fetchGenres} from "../api/api";

import Hero from "../components/hero/Hero";
import Section from "../components/section/albums/Section";
import GenreSection from "../components/section/genre/GenreSection";
import { Divider } from "@mui/material";
import FAQ from "../components/faq/FAQ";
import Footer from "../components/footer/Footer";

function HomePage() {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const [newAlbumSongs, setNewAlbumSongs] = useState([]);
  const [songs,setSongs] = useState([])
  const [genre,setGenres] = useState([])

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
  const generateSongs = async () => {
    try {
      const songs = await fetchSongs();
      setSongs(songs);
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  const filterSongs = async () => {
    try {
      const genre = await fetchGenres();
      setGenres(genre);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    generateTopAlbumSongs();
    generateNewAlbumSongs();
    generateSongs();
    filterSongs()
  }, []);

  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* Album section */}
      <Section type="album" title="Top Albums" data={topAlbumSongs} />
      <Section type="album" title="New Albums" data={newAlbumSongs} />
      <Divider style={{background:"#34c94b",marginTop:"30px"}} />
     {/* All songs section or Geners section */}
     <GenreSection data={songs} title="Songs" type="Songs" genreList={genre} />
     <Divider style={{background:"#34c94b",marginTop:"30px"}} />
     {/* FAQ section  */}
     <FAQ />
     {/* footer */}
     <Footer />
    </>
  );
}

export default HomePage;
