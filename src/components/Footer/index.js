import React from 'react'
import { Link } from 'gatsby'

import { Flex, Box } from 'rebass'

import logo from '../../img/logo.png'

import Button from '../Button'

import './index.scss'
import GridLayout from '../GridLayout'
import MaxWidth from '../MaxWidth'
import ExternalLink from '../ExternalLink'

const FooterMenuLink = ({ children, to, as }) => {
  const Component = as || Link
  return (
    <Component
      className="Footer-navbar-item rounded-sm my-2 block p-3 w-full text-blue-100 hover:text-blue-800 hover:bg-white"
      to={to}
    >
      {children}
    </Component>
  )
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Footer = class extends React.Component {
  state = {
    email: '',
    feedback: '',
    error: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target

    const body = {
      'form-name': form.getAttribute('name'),
      email: this.state.email,
      inputemail: this.state.email,
      test: 'a test'
    }

    this.setState({
      feedback: 'Thank you for subscribing!',
      error: null,
      email: ''
    })

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(body)
    })
      .then(() => () => {
        setTimeout(() => {
          this.setState({
            feedback: null,
            error: null
          })
        }, 2000)
      })
      .catch(error => {
        this.setState({
          error: 'Oups ... there was an error! Try again later'
        })
        setTimeout(() => {
          this.setState({
            feedback: null,
            error: null
          })
        }, 2000)
      })
  }

  render() {
    const feedback = this.state.feedback ? (
      <Box py={2}>{this.state.feedback}</Box>
    ) : null
    const error = this.state.error ? (
      <Box py={2} style={{ color: 'red' }}>
        {this.state.error}
      </Box>
    ) : null
    return (
      <Flex
        alignItems="center"
        width={1}
        as="footer"
        flexDirection="column"
        className="Footer bg-blue-900"
        paddingTop={4}
        paddingBottom={5}
      >
        <MaxWidth className="text-white">
          <Flex
            marginTop={4}
            marginBottom={4}
            alignItems="center"
            flexDirection="column"
          >
            <img src={logo} style={{ width: '10em' }} />
          </Flex>

          <GridLayout style={{ padding: 0 }} gridGap={'5rem'}>
            <section className="xl:-m-5">
              <ul>
                <li>
                  <FooterMenuLink to="/">Home</FooterMenuLink>
                </li>
                <li>
                  <FooterMenuLink to="/adaptable">AdapTable</FooterMenuLink>
                </li>
                <li>
                  <FooterMenuLink to="/grid-gurus">Grid Gurus</FooterMenuLink>
                </li>
                <li>
                  <FooterMenuLink as="div">
                    <ExternalLink href="https://demo.adaptableblotter.com">
                      Demo
                    </ExternalLink>
                  </FooterMenuLink>
                </li>
              </ul>
            </section>

            <section
              className="text-base mt-2 p-3"
              style={{
                '--ab-space-4': 'var(--ab-space-3)'
              }}
            >
              <p>
                Adaptable Tools is a startup focussed on transforming the user
                interface in data systems.
              </p>
              <p>
                It currently works with clients in Financial Services from its
                London HQ.
              </p>

              <p>
                <a href="tel:+4402070784141" style={{ color: 'inherit' }}>
                  <Box
                    as="i"
                    mr={1}
                    className="material-icons"
                    style={{ verticalAlign: 'middle' }}
                  >
                    phone
                  </Box>
                  +44 (0)20 7078 4141
                </a>
              </p>
              <p>
                <a
                  href="mailto:sales@adaptabletools.com"
                  style={{ color: 'inherit' }}
                >
                  <Box
                    as="i"
                    mr={1}
                    className="material-icons "
                    style={{ verticalAlign: 'middle' }}
                  >
                    email
                  </Box>
                  sales@adaptabletools.com
                </a>
              </p>

              <p>
                <ExternalLink href="https://www.linkedin.com/company/adaptable-tools/">
                  <img
                    src="/img/linkedin.svg"
                    style={{
                      height: 20,
                      width: 20,
                      display: 'inline-block',
                      position: 'relative',
                      top: -4,
                      marginRight: 5
                    }}
                  />
                  LinkedIn
                </ExternalLink>
              </p>
            </section>
            <section className=" mt-2 p-3 text-base">
              <ul>
                <li>
                  <Flex
                    flexDirection="column"
                    alignItems="flex-end"
                    as="form"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    name="contact"
                    method="post"
                    onSubmit={this.handleSubmit}
                  >
                    <Box style={{ textAlign: 'right' }} marginBottom={3}>
                      Keep up with news at Adaptable Tools
                    </Box>

                    <input type="hidden" name="form-name" value="contact" />

                    <Box
                      as="input"
                      width={1}
                      fontSize={3}
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={e => {
                        this.setState({
                          email: e.target.value
                        })
                      }}
                      className="text-blue-800 rounded-sm p-3"
                      placeholder="Your email"
                    />

                    {feedback}
                    {error}

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
