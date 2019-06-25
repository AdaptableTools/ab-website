import React from 'react';
import { Link } from 'gatsby';

import { Button, Box } from 'rebass';

import logo from '../img/logo.png';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';
import theme from './theme';

const preventDefault = e => e.preventDefault();

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img src={logo} alt="Kaldi" style={{ height: '10em' }} />
        </div>
        <Box
          className="content has-text-centered has-background-black has-text-white-ter"
          fontSize={2}
        >
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/adaptable-blotter">
                        About Adaptable Blotter
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <form onSubmit={preventDefault}>
                        <Box marginBottom={2}>
                          Keep up with news at Adaptable Tools
                        </Box>
                        <Box>
                          <input
                            style={{
                              padding: theme.space[2],
                              fontSize: theme.fontSizes[2]
                            }}
                            type="email"
                            placeholder="Your email"
                          />
                        </Box>
                        <Button backgroundColor="blue" marginTop={2}>
                          Send
                        </Button>
                      </form>
                    </li>
                  </ul>
                  {/*
                  <a title="facebook" href="https://facebook.com">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="twitter" href="https://twitter.com">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="vimeo" href="https://vimeo.com">
                    <img
                      src={vimeo}
                      alt="Vimeo"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>*/}
                </section>
              </div>
            </div>
          </div>
        </Box>
      </footer>
    );
  }
};

export default Footer;
