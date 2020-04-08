import React from 'react'
import { Link } from 'gatsby'

import { Flex, Box } from 'rebass'

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
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Footer = class extends React.Component {
  state = {
    email: '',
    loading: false,
    feedback: '',
    error: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target

    const body = {
      'form-name': form.getAttribute('name'),
      email: this.state.email,
    }

    if (!this.state.email) {
      return
    }

    this.setState({
      feedback: 'Thank you for subscribing!',
      error: null,
      loading: true,
      email: '',
    })

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(body),
    })

    setTimeout(() => {
      this.setState({
        loading: false,
        feedback: null,
        email: '',
        error: null,
      })
    }, 2000)
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
        className="Footer"
        paddingTop={5}
        paddingBottom={3}
      >
        <MaxWidth className="text-white">
          <Flex
            flexDirection={['column', 'column', 'row']}
            style={{ padding: 0 }}
            justifyContent="space-between"
          >
            <Box
              as="section"
              marginBottom={['var(--ab-space-5)', 'var(--ab-space-5)', '']}
              className="mr-4"
              style={{ flex: 2 }}
            >
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
                  <FooterMenuLink to="/fintech-partners">
                    Fintech Partners
                  </FooterMenuLink>
                </li>
                <li>
                  <FooterMenuLink to="/blog">News</FooterMenuLink>
                </li>
                <li>
                  <FooterMenuLink as="div">
                    <ExternalLink href="https://demo.adaptabletools.com">
                      Demo
                    </ExternalLink>
                  </FooterMenuLink>
                </li>
              </ul>
            </Box>

            <Flex
              order={[-1, -1, 'initial']}
              flexFlow="row"
              justifyContent="center"
              style={{
                paddingTop: 0,
                flex: 3,

                '--ab-space-4': 'var(--ab-space-3)',
              }}
            >
              <Box
                as="section"
                className="text-base p-3 mr-4"
                maxWidth={['', '', '26rem']}
                marginBottom={['var(--ab-space-5)', 'var(--ab-space-5)', '']}
              >
                <Flex
                  marginBottom={4}
                  alignItems="center"
                  flexDirection="column"
                >
                  <img
                    src={'/img/footer-logo.png'}
                    style={{ maxWidth: '18rem', width: '100%' }}
                  />
                </Flex>
                <p>
                  Adaptable Tools is a startup focussed on transforming the user
                  interface in data systems.
                </p>
                <p>
                  Adaptable Tools currently works with clients in Financial
                  Services and other sectors from its London HQ.
                </p>
              </Box>
            </Flex>
            <section className=" p-3 pt-0 text-base" style={{ flex: 2 }}>
              <ul>
                <li>
                  <Flex
                    flexDirection="column"
                    as="form"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    name="contact"
                    method="post"
                    mb={4}
                    onSubmit={this.handleSubmit}
                  >
                    <Box marginBottom={3}>
                      Keep up with news at Adaptable Tools
                    </Box>

                    <input type="hidden" name="form-name" value="contact" />

                    <Flex flexFlow={'row'}>
                      <Box
                        as="input"
                        width={1}
                        fontSize={3}
                        mr={2}
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={(e) => {
                          this.setState({
                            email: e.target.value,
                          })
                        }}
                        p={3}
                        style={{ paddingTop: 0, paddingBottom: 0 }}
                        className="text-blue-800 rounded-sm "
                        placeholder="Your email"
                      />
                      <Button
                        disabled={this.state.loading || !this.state.email}
                        style={{
                          marginTop: 0,
                          opacity:
                            this.state.loading || !this.state.email ? 0.5 : 1,
                        }}
                      >
                        Send
                      </Button>
                    </Flex>

                    {feedback}
                    {error}
                  </Flex>
                </li>
              </ul>

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
                      marginRight: 5,
                    }}
                  />
                  LinkedIn
                </ExternalLink>
              </p>
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
          </Flex>
        </MaxWidth>
      </Flex>
    )
  }
}

export default Footer
