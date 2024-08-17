import React from 'react';
import carousel from "../assets/Agent.png";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Tasks() {
  return (
    <div className="container">
          <div className="main">
            <div className="agent-logo">
              <img src={carousel} alt="Agent" className="logo" />
            </div>
            <div className="main-content">
              <h2>Agent M</h2>
              <p>Hi Test Bot2do, here's a summary of the action items I need your help with today. Which category would you like to get started with?</p>
            </div>
          </div>
          <div className="priority-task">
            <div className="task-1">
              <FontAwesomeIcon icon={faArrowRight} className="arrow-icon-1" />
              <p className="task-number">0</p>
              <p className="task-text">Priority Task 1</p>
            </div>
            <div className="task-2">
              <FontAwesomeIcon icon={faArrowRight} className="arrow-icon-2" />
              <p className="task-number">0</p>
              <p className="task-text">Priority Task 2</p>
            </div>
            <div className="task-3">
              <FontAwesomeIcon icon={faArrowRight} className="arrow-icon-3" />
              <p className="task-number">0</p>
              <p className="task-text">Priority Task 3</p>
            </div>
          </div>
          </div>
  )
}
