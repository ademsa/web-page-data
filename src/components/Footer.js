import React from 'react';

export default function Footer() {
    return (
        <React.Fragment>
            <footer className="footer">
                <div className="container">
                    <div className="columns is-centered is-vcentered">
                        <div className="column is-12 has-text-centered">
                            <img src="/web-page-data/logo-alt.svg" alt="Logo" width="30" height="30" />
                            <p className="subtitle is-6 has-text-centered mt-3">
                                Source code available <a href="http://github.com/ademsa/web-page-data">here</a> (<a href="https://github.com/ademsa/web-page-data/blob/master/LICENSE.md">MIT license</a>).
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}
