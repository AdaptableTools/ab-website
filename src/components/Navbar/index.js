import React, { useState } from 'react'
import { Text, Image, Flex, Box } from 'rebass'
import { Link } from 'gatsby'

import './index.scss'
import MaxWidth from '../MaxWidth'
import join from '../join'
import ExternalLink from '../ExternalLink'

const NavText = props => {
  return (
    <Text
      style={{ cursor: 'pointer' }}
      fontSize={3}
      fontWeight={400}
      className="ml-3 p-3 pb-1 border-solid border-b-4 border-transparent hover:border-blue-800 text-blue-800 hover:text-blue-800 NavItem"
    >
      {props.children}
    </Text>
  )
}
const NavItem = props => {
  const { to, children, ...otherProps } = props
  return (
    <Link {...otherProps} to={props.to}>
      <NavText>{children}</NavText>
    </Link>
  )
}

const Navbar = props => {
  const [active, setActive] = useState(false)

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setActive(!active)
  }

  return (
    <nav
      {...props}
      className={join('Navbar', props.className)}
      role="navigation"
      aria-label="main-navigation"
    >
      <Flex width="100%" backgroundColor="washedblue" justifyContent="center">
        <Flex py={[1, 1, 2]} as={MaxWidth} width="100%">
          <div className="Navbar-brand" style={{ flex: 1 }}>
            <NavItem to="/" title="Logo">
              <Image
                src={'/img/header-logo.png'}
                alt="AdaptableTools"
                height={[60, 60, 100]}
              />
            </NavItem>

            <Box display={['block', 'block', 'none']} style={{ flex: 1 }}></Box>
            <Box
              display={['block', 'block', 'none']}
              className={`Navbar-burger burger ${active ? 'is-active' : ''}`}
              data-target="navMenu"
              onClick={() => toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </Box>
          </div>
          <Box
            className={`Navbar-menu`}
            display={[
              active ? 'block' : 'none',
              active ? 'block' : 'none',
              'block'
            ]}
          >
            <Flex flexDirection="column-reverse" justifyContent="center">
              <Flex
                justifyContent={'flex-end'}
                marginBottom={2}
                flexDirection={['column', 'column', 'row']}
              >
                <NavText>
                  <ExternalLink href="https://adaptabletools.zendesk.com/hc/en-us">
                    Technical Support
                  </ExternalLink>
                </NavText>
              </Flex>

              <Flex
                alignItems={['flex-start']}
                flexDirection={['column', 'column', 'row']}
              >
                <NavItem to="/">Home</NavItem>
                <NavItem to="/adaptable">AdapTable</NavItem>
                <NavItem to="/grid-gurus">Grid Gurus</NavItem>
                <NavItem to="/fintech-partners">Fintech Partners</NavItem>
                <NavItem to="/blog">News</NavItem>

                <NavText>
                  <ExternalLink href="https://demo.adaptableblotter.com">
                    Demo
                  </ExternalLink>
                </NavText>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </nav>
  )
}

export default Navbar
