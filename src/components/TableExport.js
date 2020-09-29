import React from 'react';
import ContentExport from './ContentExport';

export default function TableExport(props) {
    return (
        <React.Fragment>
            <p className="title is-5 my-3">
                Table #{props.idx + 1}
            </p>

            {props.item.caption &&
                <div className="my-3">
                    <p>
                        Caption
                    </p>
                    <p className="has-text-info">
                        {props.item.caption}
                    </p>
                </div>
            }

            {props.item.headers.length > 0 &&
                <div className="my-3">
                    <p>
                        Headers
                    </p>
                    {props.item.headers.map((header, hidx) =>
                        <span key={"header" + props.idx + "-" + hidx} className="mr-3 has-text-info">{header}</span>
                    )}
                </div>
            }

            {props.item.rows.length > 0 &&
                <div className="my-3">
                    <p>
                        First row cells
                    </p>
                    {props.item.rows[0].map((td, tdidx) =>
                        <span key={"td" + props.idx + "-" + tdidx} className="mr-3 has-text-info">{td}</span>
                    )}
                </div>
            }

            <ContentExport
                sourceidx={props.idx}
                handleExportToJSONClick={props.handleExportToJSONClick}
                handleExportToCSVClick={props.handleExportToCSVClick} />
        </React.Fragment>
    );
}
