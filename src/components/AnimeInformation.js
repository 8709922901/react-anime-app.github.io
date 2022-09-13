import React from 'react'

const AnimeInformation = (props) => {
  const {title,source,rank,score,popularity,members,status,rating,duration}=props.animeInfo
  return (
    <>
      <div className="anime-content">
        <h3>{title}</h3> <br/>
        <img src={props.animeInfo.images.jpg.large_image_url} alt="" />
        <div className="info">
          <h3>#Rank: {rank}</h3>
          <h3>#Score: {score}</h3>
          <h3>#Popularity: {popularity}</h3>
          <h3>#Members: {members}</h3>
          <h3>#Source: {source}</h3>
          <h3>#Duration: {duration}</h3>
          <h3>#Status: {status}</h3>
          <h3>#Rating: {rating}</h3>
        </div>
      </div>
    </>
  )
}

export default AnimeInformation
