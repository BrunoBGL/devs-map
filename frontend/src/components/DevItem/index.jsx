import React from 'react';

import './styles.css';

const DevItem = ({ dev }) => {
  return (
    <ul className="card">
      <img className="avatar" src={dev.avatar_url} alt={dev.name} />
      <div className="user-info">
        <strong>{dev.name}</strong>
        <span>{dev.techs.join(',')}</span>
      </div>
      <p className="bio">{dev.bio}</p>
      <a className="link" href={`https://github.com/${dev.github_username}`}>acessar perfil no Github</a>
    </ul>
  );
}

export default DevItem;
