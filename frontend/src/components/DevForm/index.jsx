import React, { useState, useEffect } from 'react';
import './styles.css';

const DevForm = ({ onSubmit }) => {
  const [github_username, setGithubUserName] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    })
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-block">
          <label for="github_username">nome</label>
          <input
            id="github_username"
            name="github_username"
            value={github_username}
            onChange={e => setGithubUserName(e.target.value)}
            required
          >
          </input>
        </div>
        <div className="input-block">
          <label htmlFor="techs">tecnologias</label>
          <input
            id="techs"
            name="techs"
            value={techs}
            onChange={e => setTechs(e.target.value)}
            required
          >
          </input>
        </div>
        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">latitude</label>
            <input
              id="latitude"
              name="latitude"
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
              required
            >
            </input>
          </div>
          <div className="input-block">
            <label htmlFor="longitude">longitude</label>
            <input
              id="longitude"
              name="longitude"
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
              required
            >
            </input>
          </div>
        </div>
        <button type="submit">salvar</button>
      </form>
    </div>
  );
}

export default DevForm;
