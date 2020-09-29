import React from 'react';

export default function Menu(props) {
    return (
        <React.Fragment>
            <aside className="menu">
                <p className="menu-label">Metadata</p>
                <ul className="menu-list">
                    <li><a onClick={props.handleMenuItemClick} href="#content-metadata-lang">Language (html lang)</a></li>
                    <li><a onClick={props.handleMenuItemClick} href="#content-metadata-dir">Direction (html dir)</a></li>
                    <li><a onClick={props.handleMenuItemClick} href="#content-metadata-title">Title (title)</a></li>
                    <li><a onClick={props.handleMenuItemClick} href="#content-metadata-meta">Meta (meta)</a></li>
                </ul>
                <p className="menu-label">Resources</p>
                <ul className="menu-list">
                    <li><a onClick={props.handleMenuItemClick} href="#content-resources-anchors">Anchors (a)</a></li>
                    <li><a onClick={props.handleMenuItemClick} href="#content-resources-images">Images (img)</a></li>
                    <li><a onClick={props.handleMenuItemClick} href="#content-resources-scripts">Scripts (script)</a></li>
                    <li><a onClick={props.handleMenuItemClick} href="#content-resources-links">Links (link)</a></li>
                </ul>
                <p className="menu-label">Tables</p>
                <ul className="menu-list">
                    <li><a onClick={props.handleMenuItemClick} href="#content-tables-all">All (table)</a></li>
                </ul>
                <p className="menu-label">Lists</p>
                <ul className="menu-list">
                    <li><a onClick={props.handleMenuItemClick} href="#content-lists-unordered">Unordered (ul)</a></li>
                    <li><a onClick={props.handleMenuItemClick} href="#content-lists-ordered">Ordered (ol)</a></li>
                </ul>
                <p className="menu-label">Headings</p>
                <ul className="menu-list">
                    <li><a onClick={props.handleMenuItemClick} href="#content-headings-h1">H1 (h1)</a></li>
                    <li><a onClick={props.handleMenuItemClick} href="#content-headings-h2">H2 (h2)</a></li>
                    <li><a onClick={props.handleMenuItemClick} href="#content-headings-h3">H3 (h3)</a></li>
                    <li><a onClick={props.handleMenuItemClick} href="#content-headings-h4">H4 (h4)</a></li>
                    <li><a onClick={props.handleMenuItemClick} href="#content-headings-h5">H5 (h5)</a></li>
                </ul>
                <p className="menu-label">Other Elements</p>
                <ul className="menu-list">
                    <li><a onClick={props.handleMenuItemClick} href="#content-elements-articles">Articles (article)</a></li>
                    <li><a onClick={props.handleMenuItemClick} href="#content-elements-sections">Sections (section)</a></li>
                    <li><a onClick={props.handleMenuItemClick} href="#content-elements-paragraphs">Paragraphs (p)</a></li>
                </ul>
            </aside>
        </React.Fragment>
    );
}
