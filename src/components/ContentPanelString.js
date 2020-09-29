import React from 'react';

export default function ContentPanelString(props) {
    return (
        <React.Fragment>
            <div id={props.id} data-source={props.source} className="content-panel box mb-5 is-hidden">
                <p className="title is-4">{props.title}</p>
                <p>
                    Current: {props.data}
                </p>
            </div>
        </React.Fragment>
    );
}
