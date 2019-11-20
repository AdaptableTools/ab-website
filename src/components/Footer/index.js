import React from 'react'
import { Link } from 'gatsby'

import { Flex, Box } from 'rebass'

import logo from '../../img/logo.png'

import Button from '../Button'

import './index.scss'
import GridLayout from '../GridLayout'

const FooterMenuLink = ({ children, to }) => {
  return (
    <Link
      className="Footer-navbar-item rounded-sm my-2 block p-3 w-full text-blue-100 hover:text-blue-800 hover:bg-white"
      to={to}
    >
      {children}
    </Link>
  )
}

const preventDefault = e => e.preventDefault()

const Footer = class extends React.Component {
  render() {
    return (
      <Flex
        alignItems="center"
        width={1}
        as="footer"
        flexDirection="column"
        className="Footer bg-blue-900"
        paddingTop={4}
      >
        <Flex
          width={1}
          flexDirection="column"
          maxWidth="var(--ab-max-content-size)"
        >
          <Flex alignItems="center" flexDirection="column">
            <img src={logo} alt="Kaldi" style={{ width: '10em' }} />
          </Flex>
          <Box className="content has-text-centered  has-text-white-ter">
            <div className="container has-text-white-ter">
              <GridLayout>
                <section className="menu">
                  <ul>
                    <li>
                      <FooterMenuLink to="/">Home</FooterMenuLink>
                    </li>
                    <li>
                      <FooterMenuLink to="/adaptable-blotter">
                        About Adaptable Blotter
                      </FooterMenuLink>
                    </li>
                  </ul>
                </section>

                <section>
                  <ul>
                    <li>
                      <FooterMenuLink to="/contact">Contact</FooterMenuLink>
                    </li>
                  </ul>
                </section>

                <section className="menu">
                  <ul>
                    <li>
                      <Flex
                        flexDirection="column"
                        alignItems="stretch"
                        as="form"
                        onSubmit={preventDefault}
                      >
                        <Box marginBottom={2}>
                          Keep up with news at Adaptable Tools
                        </Box>

                        <Box
                          as="input"
                          width={1}
                          fontSize={3}
                          type="email"
                          className="text-blue-800 rounded-sm p-3"
                          placeholder="Your email"
                        />

                        <Button className="mt-3 self-start ">Send</Button>
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
    )
  }
}

export default Footer
