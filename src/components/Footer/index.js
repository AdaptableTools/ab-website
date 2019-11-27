import React from 'react'
import { Link } from 'gatsby'

import { Flex, Box } from 'rebass'

import logo from '../../img/logo.png'

import Button from '../Button'

import './index.scss'
import GridLayout from '../GridLayout'
import MaxWidth from '../MaxWidth'

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
        <MaxWidth className="text-white">
          <Flex alignItems="center" flexDirection="column">
            <img src={logo} alt="Kaldi" style={{ width: '10em' }} />
          </Flex>

          <GridLayout style={{ padding: 0 }} gridGap={'5rem'}>
            <section className="-m-5">
              <ul>
                <li>
                  <FooterMenuLink to="/">Home</FooterMenuLink>
                </li>
                <li>
                  <FooterMenuLink to="/adaptable-blotter">
                    Adaptable Blotter
                  </FooterMenuLink>
                </li>
                <li>
                  <FooterMenuLink to="/grid-gurus">Grid Gurus</FooterMenuLink>
                </li>
                <li>
                  <FooterMenuLink to="/blog">News</FooterMenuLink>
                </li>
                <li>
                  <FooterMenuLink to="/contact">Contact</FooterMenuLink>
                </li>
              </ul>
            </section>

            <section className="menu mt-2 p-3">
              <p>
                Cupidatat eu do aliquip labore non ea deserunt ullamco. Sint in
                irure ullamco esse qui aliquip dolore. Ullamco nisi officia
              </p>
              <p>
                in do cupidatat sint tempor id id deserunt mollit cupidatat
                eiusmod.
              </p>
            </section>
            <section className="menu mt-2 p-3">
              <ul>
                <li>
                  <Flex
                    flexDirection="column"
                    alignItems="flex-end"
                    as="form"
                    onSubmit={preventDefault}
                  >
                    <Box style={{ textAlign: 'right' }} marginBottom={3}>
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

                    <Button className="mt-3 self-end ">Send</Button>
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
        </MaxWidth>
      </Flex>
    )
  }
}

export default Footer
