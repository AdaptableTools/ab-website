import React from 'react';
import { Text, Flex, Box } from 'rebass';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.png';

const NavItem = props => {
  const { to, children, ...otherProps } = props;
  return (
    <Link {...otherProps} to={props.to}>
      <Text fontSize={5} fontWeight={300} marginLeft={3}>
        {children}
      </Text>
    </Link>
  );
};

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
        <Flex width="100%" backgroundColor="washedblue">
          <Flex
            py={3}
            maxWidth="var(--ab-max-content-size)"
            mx="auto"
            width="100%"
          >
            <div className="navbar-brand" style={{ flex: 1 }}>
              <NavItem to="/" title="Logo">
                <img src={logo} alt="Kaldi" style={{ maxHeight: 100 }} />
              </NavItem>
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
            <div className={`navbar-menu ${this.state.navBarActiveClass}`}>
              <div>
                <Flex justifyContent={['center', 'center', 'flex-end']}>
                  <NavItem to="/contact">Contact</NavItem>
                  <NavItem to="/contact">Technical Support</NavItem>
                </Flex>

                <Flex className=" has-text-centered">
                  <NavItem to="/adaptable-blotter">Adaptable Blotter</NavItem>
                  <NavItem to="/grid-gurus">Grid Gurus</NavItem>
                  <NavItem to="/other-data-tools-partners">
                    Other Data Tools
                  </NavItem>
                  <NavItem to="/blog">News</NavItem>

                  <NavItem>
                    <a
                      href="https://demo.adaptableblotter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </NavItem>

                  {/*
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>*/}
                </Flex>
              </div>
            </div>
          </Flex>
        </Flex>
      </nav>
    );
  }
};

export default Navbar;
