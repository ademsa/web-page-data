import React from 'react';

export default function Header(props) {
    return (
        <React.Fragment>
            <section className="section has-text-centered action-ui">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-offset-2 is-8">
                            <img src="/logo.svg" alt="Logo" width="200" height="200" />
                            <p className="title is-size-3-mobile is-size-1-tablet has-text-white">Web Page as a Data Source</p>
                            <p className="subtitle is-4 has-text-white">Analyze and extract data from HTML page source</p>
                            <div className="field">
                                <div className="control is-expanded">
                                    <textarea className="textarea" placeholder="Paste HTML page source here..." ref={props.actionInputRef} defaultValue={props.content} onKeyDown={props.handleAnalyzeByKey}></textarea>
                                </div>
                            </div>
                            <div className="columns is-vcentered mt-3 is-mobile is-multiline">
                                <div className="column is-12">
                                    <div className="field">
                                        <div className="control has-text-centered">
                                            <button className="button is-primary mr-3" onClick={props.handleAnalyzeByClick}>Analyze</button>
                                            <button className="button is-white is-outlined" onClick={props.handleResetActionClick}>Reset</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
