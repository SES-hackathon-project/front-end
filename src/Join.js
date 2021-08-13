import React from 'react';
import './Join.css';
import xicon from './xicon.png';

function Join({ isUp, handleCodeInput, closePopup }) {
    return (
        isUp && (
            <section className="popup">
                <div className="join">
                    <h2>Join Group</h2>
                    <input
                        type="text"
                        placeholder="Enter Group ID"
                        className="groupCodeInput"
                        onChange={handleCodeInput}
                    //onKeyPress={Budget} when key is pressed, 
                    // redirect to budget page
                    />
                    <img className="xIcon" src={xicon} onClick={closePopup} alt="alt placeholder" />
                </div>

            </section>

        )

    );
}

export default Join
