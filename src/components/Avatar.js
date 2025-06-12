import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Avatar.css';
import avatarImg from '../assets/avatar1.png';


function Avatar({ isHome, animating }) {
  const navigate = useNavigate();

  const className = isHome
    ? animating
      ? 'avatar-container animating'
      : 'avatar-container center'
    : 'avatar-container top-left';

  const handleClick = () => {
    if (!isHome) {
      navigate('/');
    }
  };

  return (
    <div className={className} onClick={handleClick}>
      <img src={avatarImg} alt="Avatar" className="avatar-img" />
    </div>
  );
}

export default Avatar;

