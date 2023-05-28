import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="footer py-5">
        <div className="content has-text-centered grey-light">
          <p className="has-text-weight-light my-0 is-size-7">
            Source code available{" "}
            <a href="https://github.com/ademsa/web-page-data">here</a> (
            <a href="https://github.com/ademsa/web-page-data/blob/master/LICENSE.md">
              MIT license
            </a>
            ).
            <br />
            Hosted on <a href="https://pages.github.com/">GitHub Pages</a>
          </p>
          <br />
          <a className="mt-2" href="https://ademsabic.com">
            <img
              className="author"
              src="/web-page-data/author.svg"
              alt="Author"
            />
          </a>
          <p className="has-text-weight-light mt-2 mb-0 is-size-7">
            Explore other projects on
          </p>
          <a href="https://niceweb.app" className="mx-2 has-text-weight-normal">
            NiceWeb.app
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
}
