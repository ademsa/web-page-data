import React from 'react';
import TableExport from './TableExport';

export default function ContentPanelTable(props) {
    return (
        <React.Fragment>
            <div id="content-tables-all" data-source="contentTablesAll" className="content-panel box mb-5 is-hidden">
                <p className="title is-4">Tables (table)</p>
                <p className="mb-3">
                    {props.contentTablesAll.data.length} tables
                </p>
                {props.contentTablesAll.data.map((item, idx) =>
                    <TableExport
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
