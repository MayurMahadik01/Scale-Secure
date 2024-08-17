import React from 'react';
import copyImage from '../assets/copy.png';
import downArrow from '../assets/downArrow.png';

export default function TopBar() {
  return (
    <div>
          <div className="top-bar">
            <button type="button" className="btn-forward">
              Forward all
              <img src={downArrow} alt="DownArrow" />
            </button>
            <button type="button" className="btn-save">
              Save
              <img src={copyImage} alt="Copy" />
            </button>
          </div>
          <div className="main-content">
            <div className="question-content">

            </div>
          </div>
          <div>            
          </div>
          </div>
  )
}
