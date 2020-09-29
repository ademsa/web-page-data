import React from 'react';
import ContentExport from './ContentExport';

export default function ListExport(props) {
    return (
        <React.Fragment>
            <p className="title is-5 my-3">
                List #{props.idx + 1}
            </p>

            {props.item[0] &&
                <div className="my-3">
                    <p>
                        First item
                    </p>
                    <p className="has-text-info">
                        {props.item[0].innerText}
                    </p>
                </div>
            }
            <ContentExport
                sourceidx={props.idx}
                handleExportToJSONClick={props.handleExportToJSONClick}
                handleExportToCSVClick={props.handleExportToCSVClick} />
        </React.Fragment>
    );
}
