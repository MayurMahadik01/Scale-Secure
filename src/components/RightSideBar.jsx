import React from 'react';
import Chats from './Chats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { GoChevronRight } from 'react-icons/go';


export default function RightSideBar() {
    return (
        <div>
           <Chats/>
            <div className="sidebar-2">
                <div className="searchbar-container">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{ color: "#ffffff", marginRight: '20px', fontSize: '24px', marginLeft: '10px' }}
                    />
                    <input
                        id="input_search"
                        type="text"
                        placeholder="Search by PO number or sup."
                        style={{ flexGrow: 1 }}
                    />
                    <GoChevronRight
                        style={{ color: "#ffffff", marginLeft: '10px', fontSize: '24px' }}
                    />
                </div>
                <div className="searchbar-content">
                    <p>
                        Opened threads and PO information will be displayed here.
                        Type in the PC number or supplier name on the above
                        search bar to view results and select a PO you want to
                        see information of
                    </p>
                </div>
            </div>
        </div>
    )
}
