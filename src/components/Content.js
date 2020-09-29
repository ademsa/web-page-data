import React from 'react';
import Menu from './Menu';
import ContentPanelString from './ContentPanelString';
import ContentPanelArray from './ContentPanelArray';
import ContentPanelTable from './ContentPanelTable';
import ContentPanelList from './ContentPanelList';

export default function Content(props) {
    return (
        <React.Fragment>
            <section className="section content-ui" id="content">
                <div className="container">
                    {props.content &&
                        <div className="columns is-centered is-mobile is-multiline">
                            <div className="column is-4-mobile is-3-tablet">
                                <Menu handleMenuItemClick={props.handleMenuItemClick} />
                            </div>
                            <div className="column is-8-mobile is-8-tablet">
                                <div id="content-info" className="content-panel box mb-5">
                                    <p className="title is-4">Analysis completed.</p>
                                </div>
                                <ContentPanelString
                                    id="content-metadata-lang"
                                    source="contentMetadataLang"
                                    title="Language (html lang)"
                                    data={props.contentMetadataLang.data} />
                                <ContentPanelString
                                    id="content-metadata-dir"
                                    source="contentMetadataDir"
                                    title="Direction (html dir)"
                                    data={props.contentMetadataDir.data} />
                                <ContentPanelString
                                    id="content-metadata-title"
                                    source="contentMetadataTitle"
                                    title="Title (title)"
                                    data={props.contentMetadataTitle.data} />
                                <ContentPanelArray
                                    id="content-metadata-meta"
                                    source="contentMetadataMeta"
                                    title="Meta (meta)"
                                    label="meta items"
                                    data={props.contentMetadataMeta.data}
                                    handleExportToJSONClick={props.handleExportToJSONClick}
                                    handleExportToCSVClick={props.handleExportToCSVClick} />
                                <ContentPanelArray
                                    id="content-resources-anchors"
                                    source="contentResourcesAnchors"
                                    title="Anchors (a)"
                                    label="anchors"
                                    data={props.contentResourcesAnchors.data}
                                    handleExportToJSONClick={props.handleExportToJSONClick}
                                    handleExportToCSVClick={props.handleExportToCSVClick} />
                                <ContentPanelArray
                                    id="content-resources-images"
                                    source="contentResourcesImages"
                                    title="Images (img)"
                                    label="images"
                                    data={props.contentResourcesImages.data}
                                    handleExportToJSONClick={props.handleExportToJSONClick}
                                    handleExportToCSVClick={props.handleExportToCSVClick} />
                                <ContentPanelArray
                                    id="content-resources-scripts"
                                    source="contentResourcesScripts"
                                    title="Scripts (script)"
                                    label="scripts"
                                    data={props.contentResourcesScripts.data}
                                    handleExportToJSONClick={props.handleExportToJSONClick}
                                    handleExportToCSVClick={props.handleExportToCSVClick} />
                                <ContentPanelArray
                                    id="content-resources-links"
                                    source="contentResourcesLinks"
                                    title="Links (link)"
                                    label="links"
                                    data={props.contentResourcesLinks.data}
                                    handleExportToJSONClick={props.handleExportToJSONClick}
                                    handleExportToCSVClick={props.handleExportToCSVClick} />
                                <ContentPanelTable
                                    contentTablesAll={props.contentTablesAll}
                                    handleExportToJSONClick={props.handleExportToJSONClick}
                                    handleExportToCSVClick={props.handleExportToCSVClick} />
                                <ContentPanelList
                                    id="content-lists-unordered"
                                    source="contentListsUnordered"
                                    title="Unordered (ul)"
                                    label="unordered lists"
                                    data={props.contentListsUnordered}
                                    handleExportToJSONClick={props.handleExportToJSONClick}
                                    handleExportToCSVClick={props.handleExportToCSVClick} />
                                <ContentPanelList
                                    id="content-lists-ordered"
                                    source="contentListsOrdered"
                                    title="Ordered (ol)"
                                    label="ordered lists"
                                    data={props.contentListsOrdered}
                                    handleExportToJSONClick={props.handleExportToJSONClick}
                                    handleExportToCSVClick={props.handleExportToCSVClick} />
                                <ContentPanelArray
                                    id="content-headings-h1"
                                    source="contentHeadingsH1"
                                    title="H1 (h1)"
                                    label="headings"
                                    data={props.contentHeadingsH1.data}
                                    handleExportToJSONClick={props.handleExportToJSONClick}
                                    handleExportToCSVClick={props.handleExportToCSVClick} />
                                <ContentPanelArray
                                    id="content-headings-h2"
                                    source="contentHeadingsH2"
                                    title="H2 (h2)"
                                    label="headings"
                                    data={props.contentHeadingsH2.data}
                                    handleExportToJSONClick={props.handleExportToJSONClick}
                                    handleExportToCSVClick={props.handleExportToCSVClick} />
                                <ContentPanelArray
                                    id="content-headings-h3"
                                    source="contentHeadingsH3"
                                    title="H3 (h3)"
                                    label="headings"
                                    data={props.contentHeadingsH3.data}
                                    handleExportToJSONClick={props.handleExportToJSONClick}
                                    handleExportToCSVClick={props.handleExportToCSVClick} />
                                <ContentPanelArray
                                    id="content-headings-h4"
                                    source="contentHeadingsH4"
                                    title="H4 (h4)"
                                    label="headings"
                                    data={props.contentHeadingsH4.data}
                                    handleExportToJSONClick={props.handleExportToJSONClick}
                                    handleExportToCSVClick={props.handleExportToCSVClick} />
                                <ContentPanelArray
                                    id="content-headings-h5"
                                    source="contentHeadingsH5"
                                    title="H5 (h5)"
                                    label="headings"
                                    data={props.contentHeadingsH5.data}
                                    handleExportToJSONClick={props.handleExportToJSONClick}
                                    handleExportToCSVClick={props.handleExportToCSVClick} />
                                <ContentPanelArray
                                    id="content-elements-articles"
                                    source="contentElementsArticles"
                                    title="Articles (article)"
                                    label="articles"
                                    data={props.contentElementsArticles.data}
                                    handleExportToJSONClick={props.handleExportToJSONClick}
                                    handleExportToCSVClick={props.handleExportToCSVClick} />
                                <ContentPanelArray
                                    id="content-elements-sections"
                                    source="contentElementsSections"
                                    title="Sections (section)"
                                    label="sections"
                                    data={props.contentElementsSections.data}
                                    handleExportToJSONClick={props.handleExportToJSONClick}
                                    handleExportToCSVClick={props.handleExportToCSVClick} />
                                <ContentPanelArray
                                    id="content-elements-paragraphs"
                                    source="contentElementsParagraphs"
                                    title="Paragraphs (p)"
                                    label="paragraphs"
                                    data={props.contentElementsParagraphs.data}
                                    handleExportToJSONClick={props.handleExportToJSONClick}
                                    handleExportToCSVClick={props.handleExportToCSVClick} />
                            </div>
                        </div>
                    }
                </div>
            </section>
        </React.Fragment>
    );
}
