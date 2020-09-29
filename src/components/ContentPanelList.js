import React from 'react';
import ListExport from './ListExport';

export default function ContentPanelList(props) {
    return (
        <React.Fragment>
            <div id={props.id} data-source={props.source} className="content-panel box mb-5 is-hidden">
                <p className="title is-4">{props.title}</p>
                <p className="mb-3">
                    {props.data.data.length} {props.label}
                </p>
                {props.data.data.map((item, idx) =>
                    <ListExport
                        key={"ul" + idx}
                        item={item}
                        idx={idx}
                        handleExportToJSONClick={props.handleExportToJSONClick}
                        handleExportToCSVClick={props.handleExportToCSVClick} />
                )}
            </div>
        </React.Fragment>
    );
}
