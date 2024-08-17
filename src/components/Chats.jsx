import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userImage from "../assets/image.png";
import carousel from "../assets/Agent.png";
import arrow from "../assets/arrow.png";
import reLoad from "../assets/reload.png";
import copyImage from '../assets/copy.png';
import downArrow from '../assets/downArrow.png';
import ThumbsUpIcon from '../assets/svg/ThumbsUpIcon';
import ThumbsDownIcon from '../assets/svg/ThumbsDownIcon';

export default function Chats() {
    // State to manage input, chatBox visibility, and agentBox visibility
    const [userMessage, setUserMessage] = useState("");
    const [question, setQuestion] = useState("");
    const [showChatBox, setShowChatBox] = useState(false);
    const [showAgentContent, setShowAgentContent] = useState(false);

    // Handle input change
    const handleInputChange = (e) => {
        setUserMessage(e.target.value);
        setQuestion(e.target.value);
    };

    // Handle message submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // If user input matches the specific question
        if (question === "Which exceptions do I need to deal with today?") {
            setShowChatBox(true);  // Display the chatBox
            // Display agentBox after a delay of 2 seconds
            setTimeout(() => {
                setShowAgentContent(true);
            }, 2000);
        }
        setUserMessage("");
    };

    return (
        <div>
            {/* Only display chatBox when showChatBox is true */}
            {showChatBox && (
                <div className="chatBox">
                    <img src={userImage} alt="UserImage" className="chatImage" />
                    <div className="textContent">
                        <h2 className="chatHeading">You</h2>
                        <p className="chatQuestion">{question}</p>
                    </div>
                </div>
            )}

            {/* Only display agentBox when showAgentContent is true */}
            {showAgentContent && (
                <div className="agentBox">
                    <div className="agent-logo">
                        <img src={carousel} alt="Agent" className="logo" />
                    </div>

                    <div className="agent-content">
                        <h2>Agent M</h2>
                        <p>It looks like there is no available data in the system to provide specific exceptions for today. To ensure you receive the most accurate and actionable insights, please make sure your operational data is comprehensive and up-to-date on the Bot2do Platform. However, I can guide you on the typical exceptions you should monitor daily in your supply chain operations:</p>

                        <p>1. Delayed Shipments: Check for any shipments that are delayed beyond their expected delivery dates. Prioritize critical shipments that could impact production or customer delivery schedules.</p>

                        <p>2. Supplier Performance Issues: Pending documents Identify suppliers who have missed delivery deadlines or provided substandard quality Review any recent communications or alerts from suppliers indicating potential issues.</p>

                        <p>3. Inventory Shortages: Monitor inventory levels to ensure there are no shortages that could disrupt operations. Focus on high-turnover items and critical components.</p>

                        <p>Ensure all invoices are accurate and processed on time. To get a detailed and specific list of exceptions, please ensure your data is updated on the Bot2do Platform. If you need further assistance, feel free to ask.</p>

                        <div className="button-group">
                            {/* <button type="button" className="btnIcon">
                                <FontAwesomeIcon icon="fa-solid fa-thumbs-up" flip="horizontal" style={{ color: "red" }} />
                            </button> */}
                            <ThumbsUpIcon/>
                            {/* <button type="button" className="btnIcon">
                                <FontAwesomeIcon icon="fa-solid fa-thumbs-up" rotation={180} style={{ color: "#9ca3af" }} />
                            </button> */}
                            <ThumbsDownIcon/>
                            <button type="button" className="btnSave">
                                Save
                                <img src={copyImage} alt="Copy" />
                            </button>
                            <button type="button" className="btnForward">
                                Forward all
                                <img src={downArrow} alt="DownArrow" />
                            </button>
                            <button type="button" className="btnGen">
                                Regenerate
                                <img src={reLoad} alt="reLoad" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Command bar with input and submit button */}
            <div className="commandBar">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="large-input"
                        placeholder="Your message here...."
                        value={userMessage}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="input-icon">
                        <img src={arrow} alt="Icon" />
                    </button>
                </form>
            </div>
        </div>
    );
}
