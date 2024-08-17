import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Suggestions({handleNewChat}) {

  return (             
    <div className="text-container-agent">
    <div>
      <p className="task-name">Priority Action Items</p>
    </div>
    <div>
      <p className="task-name">Subtract</p>
    </div>
    <div >
      <p className="task-name">Today's edit checking</p>
    </div>
    <div >
      <p className="task-name">Next week's task</p>
    </div>
    <div >
      <p className="task-name">Pending documents</p>
    </div>
    <div >
      <p className="task-name">Pending documents</p>
    </div>
    
    <div className="button-chat">
      <button type="button" onClick={handleNewChat}>        
        Start New Chat
        <div className="icon-container">
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </button>
    </div>

  </div>

  )
}
