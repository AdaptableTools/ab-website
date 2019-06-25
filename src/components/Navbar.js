import React from 'react';
import { Text, Flex } from 'rebass';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.png';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ''
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active'
            })
          : this.setState({
              navBarActiveClass: ''
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand" style={{ flex: 1 }}>
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ maxHeight: 100 }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div>
              <Flex justifyContent={['center', 'center', 'flex-end']}>
                <Link className="navbar-item" to="/contact">
                  <Text fontSize={1}>Contact</Text>
                </Link>
                <Link className="navbar-item" to="/contact">
                  <Text fontSize={1}>Technical Support</Text>
                </Link>
              </Flex>
              <div className="navbar-start has-text-centered">
                <Link className="navbar-item" to="/adaptable-blotter">
                  Adaptable Blotter
                </Link>
                <Link className="navbar-item" to="/grid-gurus">
                  Grid Gurus
                </Link>
                <Link className="navbar-item" to="/other-data-tools-partners">
                  Other Data Tools
                </Link>
                <Link className="navbar-item" to="/blog">
                  News
                </Link>

                <a
                  className="navbar-item"
                  href="https://demo.adaptableblotter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>

                {/*
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>*/}
              </div>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/adaptabletools/ab-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
