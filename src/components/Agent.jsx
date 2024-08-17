import React, { useState, useEffect } from 'react';
import Suggestions from './Suggestions';
import RecentUser from './RecentUser';
import Tasks from './Tasks';
import RightSideBar from './RightSideBar';
import TopBar from './TopBar';

export default function Agent() {
  const [selectedSection, setSelectedSection] = useState('recents');
  const [isNewChat, setIsNewChat] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const handleClick = () => {
    setIsNewChat(true);
    setSelectedSection('recents');
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isDesktop) {
    return (
      <div className="mobile-warning">
        <h2>Please use desktop version to view this</h2>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2><button onClick={() => setSelectedSection('recents')}>RECENTS</button></h2>
        <h2><button onClick={() => setSelectedSection('agent')}>AGENT M</button></h2>
        <div className="dynamic-content">
          {selectedSection === 'recents' ? <RecentUser /> : <Suggestions handleNewChat={handleClick} />}
        </div>
      </div>

      {!isNewChat ? (
        <div>{<Tasks />}</div>
      ) : (
        <div>
          <TopBar />
          <RightSideBar />
        </div>
      )}
    </div>
  );
}
