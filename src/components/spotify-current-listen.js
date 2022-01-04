import React from 'react';
import { useState, useEffect } from 'react';

export default function SpotifyCurrentListen() {
  const [spotifyCurrentListen, setSpotifyCurrentListen] = useState(null);

  useEffect(() => {
    getSpotifyData();

    async function getSpotifyData() {
      const response = await fetch(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization:
              'Bearer BQB8c0RBB1-waWQyaTYnX7Epq-3O0Rzvbn88x4pNR-WK3EYZPHxU1HJHcpSjvk1jSdWg32mKUCtH-rcI_hLH86pMi9xqk-pigOhzEWFvgmfIshFCrXAKFnzQ1U92rzlVw5FveVKiq-Wde322hFmDEMK6y0_T7f6_e5WfYBs9Wdrc',
          },
        },
      );
      const data = await response.json();

      setSpotifyCurrentListen(data);
    }
  }, []);

  return (
    <div
      className="spotifyCurrentlyPlayingContainer"
      style={{ padding: '5px', width: '100%', display: 'none' }}
    >
      <div>Currently Listening...</div>
      <div style={{ whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-block' }}>
          <img
            src={
              spotifyCurrentListen &&
              spotifyCurrentListen?.item?.album?.images[2]?.url
            }
            alt=""
          />
        </div>
        <div
          style={{
            display: 'inline-block',
            padding: '0 10px',
          }}
        >
          <div style={{}}>
            <div>
              {spotifyCurrentListen && spotifyCurrentListen?.item?.name}
            </div>
            <div style={{ overflowWrap: 'break-word', maxWidth: '100vw' }}>
              {spotifyCurrentListen && spotifyCurrentListen?.item?.album?.name}
            </div>
            <div>
              {spotifyCurrentListen &&
                spotifyCurrentListen?.item?.album?.artists[0]?.name}
            </div>
          </div>
        </div>
      </div>
      {/* <div>{spotifyCurrentListen.album.name}</div>
          <div>{spotifyCurrentListen.album.artists[0].name}</div> */}
    </div>
  );
}
