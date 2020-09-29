import React from 'react';
import ContentExport from './ContentExport';

export default function ContentPanelArray(props) {
    return (
        <React.Fragment>
            <div id={props.id} data-source={props.source} className="content-panel box mb-5 is-hidden">
                <p className="title is-4">{props.title}</p>
                <p className="mb-3">
                    {props.data.length} {props.label}
                </p>
                {props.data.length > 0 &&
                    <ContentExport
                        handleExportToJSONClick={props.handleExportToJSONClick}
                        handleExportToCSVClick={props.handleExportToCSVClick} />
                }
            </div>
        </React.Fragment>
    );
}
