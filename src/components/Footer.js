import React from 'react';

export default function Footer() {
    return (
        <React.Fragment>
            <footer className="footer py-5">
                <div className="content has-text-centered grey-light">
                    <p className="has-text-weight-light my-0 is-size-7">
                        Source code available <a href="http://github.com/ademsa/web-page-data">here</a> (<a href="https://github.com/ademsa/web-page-data/blob/master/LICENSE.md">MIT license</a>).
                            </p>
                    <p className="has-text-weight-light mt-2 is-size-7">
                        Developed by
                            </p>
                    <a href="https://ademsa.github.io">
                        <img className="author" src="/web-page-data/author.svg" alt="Author" />
                    </a>
                    <p className="has-text-weight-light my-2 is-size-7">
                        Checkout other projects
                    </p>
                    <a href="https://ademsa.github.io/browser-dashboard" className="mx-2 has-text-weight-normal">Browser Dashboard</a>
                    <a href="https://ademsa.github.io/regex360" className="has-text-weight-normal">RegEx360</a>
                </div>
            </footer>
        </React.Fragment>
    );
}
