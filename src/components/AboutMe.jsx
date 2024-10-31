import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="page-container">
      <div className="about-content">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQFONwxTfBOEyw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719465183704?e=2147483647&v=beta&t=cjRL6kV3PKVshG3KYNyekdbo16_QnzEpgJVu2SMJC_c"
          alt="Vishnu Teja"
          className="profile-photo"
        />
        <div>
          <h1>Vishnu Teja</h1>
          <p>
            Hello! My name is Vishnu Teja, and I'm a Data Science enthusiast
            with a background in computer science.
          </p>
          <p>
            I joined the MCDA program to deepen my skills in data analytics and
            gain hands-on experience with data-driven technologies. The small
            batch size and high success rate of the program attracted me.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
