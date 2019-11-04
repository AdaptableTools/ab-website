import React from 'react';
import { Link } from 'gatsby';

import { Button,Flex, Box } from 'rebass';

import logo from '../../img/logo.png';
import facebook from '../../img/social/facebook.svg';
import instagram from '../../img/social/instagram.svg';
import twitter from '../../img/social/twitter.svg';
import vimeo from '../../img/social/vimeo.svg';
import theme from '../theme';

import './index.scss'
import GridLayout from '../GridLayout';

const preventDefault = e => e.preventDefault();

const Footer = class extends React.Component {
  render() {
    return (
      <Flex alignItems="center" width={1} as="footer"  flexDirection="column" className="Footer has-text-white-ter" paddingTop={4}>
        
        <Flex width={1} flexDirection="column" maxWidth="var(--ab-max-content-size)">
        <Flex alignItems="center" flexDirection="column">
          <img src={logo} alt="Kaldi" style={{ width: '10em' }} />
        </Flex>
        <Box
          className="content has-text-centered  has-text-white-ter"
          
        >
          <div className="container has-text-white-ter">
            <GridLayout>
              
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="Footer-navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="Footer-navbar-item" to="/adaptable-blotter">
                        About Adaptable Blotter
                      </Link>
                    </li>
                  </ul>
                </section>
              
              
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="Footer-navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              
              
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Flex flexDirection="column" alignItems="stretch" as="form"  onSubmit={preventDefault}>
                        <Box marginBottom={2}>
                          Keep up with news at Adaptable Tools
                        </Box>
                        
                          <Box as="input"
                          width={1}
                          padding={2}
                          fontSize={3}
                            type="email"
                            placeholder="Your email"
                          />
                        
                        <Button alignSelf="flex-start" backgroundColor="transparent" marginTop={2}>
                          Send
                        </Button>
                      </Flex>
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
              
            </GridLayout>
          </div>
        </Box>
        </Flex>
      </Flex>
    );
  }
};

export default Footer;
