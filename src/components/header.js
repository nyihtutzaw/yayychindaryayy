import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <a
      className="github-link"
      href="https://github.com/nyihtutzaw"
      target="_blank"
    >
      Github
    </a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
