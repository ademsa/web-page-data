import React from 'react';

export default function ContentExport(props) {
    return (
        <React.Fragment>
            <span className="mt-3 mr-3">Export as</span>
            <button className="button is-small is-primary is-outlined mr-3" data-sourceidx={props.sourceidx} onClick={props.handleExportToJSONClick}>JSON</button>
            <button className="button is-small is-primary is-outlined" data-sourceidx={props.sourceidx} onClick={props.handleExportToCSVClick}>CSV</button>
        </React.Fragment>
    );
}
