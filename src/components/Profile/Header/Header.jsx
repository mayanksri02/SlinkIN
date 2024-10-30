import React, { useState } from 'react'
import './Header.css';

const Header = () => {

  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


  return (
    <div className='header'>
      <div className="cover-photo">
      <input type="file" onChange={handleChange} />
      <img src={file} />
        <div className="profile-photo">
        <input type="file" onChange={handleChange} />
        <img src={file} />
        </div>
      </div>
      
      <div className="user-info">
        <div className="user-name">
          <h1>User-Name</h1>
        </div>
        <div className="user-bio">
          <p>Front End Developer | HTML | CSS | Javascript | React JS | DSA-C++ | Python - Numpy, Pandas | Volunteering - Salaah-The Mentor Community of ABESEC</p>
        </div>
        <div className="location">
          <p>Ghaziabad, Uttar Pradesh, India</p>
        </div>
        <div className="connections">
          <p>250 connections</p>
        </div>

      </div>
      <div className="user-button">
        <div className="open-to btn">
          <button>Open to</button>
        </div>
        <div className="add-profile btn">
          <button>Add profile section</button>
        </div>
        <div className="resouces btn">
          <button>Resources</button>
        </div>
      </div>
      <div className="open-to-work">
        <h5>Open to work</h5>
        <p>Show details</p>
        
      </div>
    </div>
  )
}

export default Header