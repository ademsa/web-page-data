import React from 'react';

export default function Message(props) {
    return (
        <React.Fragment>
            <div className="modal" ref={props.messageRef}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="box has-text-centered">
                        <p className="title is-4">
                            {props.message}
                        </p>
                        <button className="button is-info is-outlined" onClick={props.closeMessage}>CLOSE</button>
                    </div>
                </div>
                <button className="modal-close is-large" onClick={props.closeMessage}></button>
            </div>
        </React.Fragment>
    );
}
