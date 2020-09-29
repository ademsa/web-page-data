import React from 'react';
import './App.css'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Message from './Message';
import ArrayOfObjectsToCSV from './../csv';
import Analyze from './../analyze';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.domParser = new DOMParser();

    this.getInitialState = this.getInitialState.bind(this);

    this.handleAnalyzeByKey = this.handleAnalyzeByKey.bind(this);
    this.handleAnalyzeByClick = this.handleAnalyzeByClick.bind(this);
    this.validateBeforeAnalysis = this.validateBeforeAnalysis.bind(this);
    this.analyze = this.analyze.bind(this);

    this.handleResetActionClick = this.handleResetActionClick.bind(this);

    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);

    this.handleExportToJSONClick = this.handleExportToJSONClick.bind(this);
    this.handleExportToCSVClick = this.handleExportToCSVClick.bind(this);
    this.downloadData = this.downloadData.bind(this);

    this.closeActionMessage = this.closeActionMessage.bind(this);

    this.actionInputRef = React.createRef();
    this.actionMessageRef = React.createRef();

    this.state = {
      ...this.getInitialState()
    };
  }

  getInitialState() {
    return {
      content: "",
      contentActionMsg: "",
      contentMetadataLang: "",
      contentMetadataDir: {},
      contentMetadataTitle: {},
      contentMetadataMeta: {},
      contentResourcesAnchors: {},
      contentResourcesImages: {},
      contentResourcesScripts: {},
      contentResourcesLinks: {},
      contentTablesAll: {},
      contentListsUnordered: {},
      contentListsOrdered: {},
      contentHeadingsH1: {},
      contentHeadingsH2: {},
      contentHeadingsH3: {},
      contentHeadingsH4: {},
      contentHeadingsH5: {},
      contentElementsArticles: {},
      contentElementsSections: {},
      contentElementsParagraphs: {},
    }
  }

  handleAnalyzeByKey(event) {
    if (event.keyCode !== 13 && event.key !== "Enter") {
      return;
    }

    this.validateBeforeAnalysis(this.actionInputRef.current.value);
  }

  handleAnalyzeByClick() {
    this.validateBeforeAnalysis(this.actionInputRef.current.value);
  }

  validateBeforeAnalysis(content) {
    if (content === "") {
      this.setState(prevState => ({
        ...prevState,
        contentActionMsg: "Please enter HTML page source.",
      }));
      if (this.actionMessageRef.current.className.indexOf("is-active") < 0) {
        this.actionMessageRef.current.className += " is-active";
      }
    } else {
      this.setState(prevState => ({
        ...prevState,
        content: content,
      }));
      this.analyze(content);
    }
  }

  analyze(content) {
    let doc = this.domParser.parseFromString(content, "text/html");

    let contentState = Analyze(doc);

    this.setState(prevState => ({
      ...prevState,
      ...contentState,
    }), () => {
      document.getElementById("content").scrollIntoView({ "behavior": "smooth", "block": "start" });
    });
  }

  handleResetActionClick() {
    this.actionInputRef.current.value = "";
    this.setState(prevState => ({
      ...prevState,
      ...this.getInitialState()
    }));
    window.scrollTo({ top: 0, left: 0 });
  }

  handleMenuItemClick(event) {
    event.preventDefault();
    Array.from(document.getElementsByClassName("content-panel")).forEach(element => {
      if (element.className.indexOf("is-hidden") < 0) {
        element.className = element.className + " is-hidden";
      }
    });
    let panelId = event.currentTarget.href.replace(window.location.href, "").replace("#", "").replace("/", "");
    let panelElement = document.getElementById(panelId);
    if (panelElement !== undefined && panelElement !== null) {
      panelElement.className = panelElement.className.replace(" is-hidden", "");
      panelElement.scrollIntoView({ "behavior": "smooth", "block": "start" });
    }
  }

  handleExportToJSONClick(event) {
    let idx = event.currentTarget.dataset.sourceidx;
    let dataSource = this.state[event.currentTarget.parentElement.dataset.source];
    let data = dataSource.data;
    if (idx !== undefined && !isNaN(idx)) {
      data = dataSource.data[idx];
    }
    this.downloadData(dataSource.selectors[0], JSON.stringify(data), "application/json", "json");
  }

  handleExportToCSVClick(event) {
    let idx = parseInt(event.currentTarget.dataset.sourceidx);
    let source = event.currentTarget.parentElement.dataset.source;
    let dataSource = this.state[source];
    let csv = "";
    if (source === "contentTablesAll") {
      csv = ArrayOfObjectsToCSV(dataSource.data[idx].rows, dataSource.data[idx].headers);
    } else {
      if (idx !== undefined && !isNaN(idx)) {
        csv = ArrayOfObjectsToCSV(dataSource.data[idx]);
      } else {
        csv = ArrayOfObjectsToCSV(dataSource.data);
      }
    }
    this.downloadData(dataSource.selectors[0], csv, "text/csv", "csv");
  }

  downloadData(selector, data, dataType, fileExt) {
    let a = document.createElement("a");
    a.style.visibility = "hidden";
    a.download = "wpd-" + selector + "-data." + fileExt;
    a.href = "data:" + dataType + ";charset=utf-8," + encodeURIComponent(data);
    a.click();
    a.remove();
  }

  closeActionMessage() {
    this.actionMessageRef.current.className = this.actionMessageRef.current.className.replace(" is-active", "");
  }

  componentDidMount() {
    document.title = 'Web Page Data';
  }

  render() {
    return (
      <React.Fragment>
        <Header
          content={this.state.content}
          actionInputRef={this.actionInputRef}
          handleAnalyzeByKey={this.handleAnalyzeByKey}
          handleAnalyzeByClick={this.handleAnalyzeByClick}
          handleResetActionClick={this.handleResetActionClick} />

        <Content
          handleMenuItemClick={this.handleMenuItemClick}
          handleExportToJSONClick={this.handleExportToJSONClick}
          handleExportToCSVClick={this.handleExportToCSVClick}
          content={this.state.content}
          contentMetadataLang={this.state.contentMetadataLang}
          contentMetadataDir={this.state.contentMetadataDir}
          contentMetadataTitle={this.state.contentMetadataTitle}
          contentMetadataMeta={this.state.contentMetadataMeta}
          contentResourcesAnchors={this.state.contentResourcesAnchors}
          contentResourcesImages={this.state.contentResourcesImages}
          contentResourcesScripts={this.state.contentResourcesScripts}
          contentResourcesLinks={this.state.contentResourcesLinks}
          contentTablesAll={this.state.contentTablesAll}
          contentListsUnordered={this.state.contentListsUnordered}
          contentListsOrdered={this.state.contentListsOrdered}
          contentHeadingsH1={this.state.contentHeadingsH1}
          contentHeadingsH2={this.state.contentHeadingsH2}
          contentHeadingsH3={this.state.contentHeadingsH3}
          contentHeadingsH4={this.state.contentHeadingsH4}
          contentHeadingsH5={this.state.contentHeadingsH5}
          contentElementsArticles={this.state.contentElementsArticles}
          contentElementsSections={this.state.contentElementsSections}
          contentElementsParagraphs={this.state.contentElementsParagraphs} />

        <Footer />

        <Message
          messageRef={this.actionMessageRef}
          message={this.state.contentActionMsg}
          closeMessage={this.closeActionMessage} />
      </React.Fragment>
    );
  }
}
