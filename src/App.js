import React, { useEffect, useState } from 'react';
import './components/style.css';
import AnimeInformation from './components/AnimeInformation';
import AnimeList from './components/AnimeList';

const App = () => {

  const [search, setSearch] = useState('Naruto')
  const [animeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState();

  const getData = async() => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=25`)
    const responseData = await response.json();
    setAnimeData(responseData.data)
  }

  useEffect(() => {
    getData();
  },[search])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="header">
        <h1>The <strong>Anime</strong> List</h1>
        <div className="search-box">
          <input type="search" placeholder='Search your anime'
          onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="container">
        <div className="anime-Info">
          {animeInfo && <AnimeInformation animeInfo={animeInfo}/>}
        </div>
        <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            <AnimeList 
            animeList={animeData}
            setAnimeInfo= {setAnimeInfo}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
