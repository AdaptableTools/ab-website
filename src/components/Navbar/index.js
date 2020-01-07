import React from 'react'
import { Text, Image, Flex, Box } from 'rebass'
import { Link } from 'gatsby'

import logo from '../../img/logo.png'

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
      className="ml-3 p-3 border-solid border-b-4 border-transparent hover:border-blue-800 text-blue-800 hover:text-blue-800 NavItem"
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

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <nav
        {...this.props}
        className={join('Navbar', this.props.className)}
        role="navigation"
        aria-label="main-navigation"
      >
        <Flex width="100%" backgroundColor="washedblue" justifyContent="center">
          <Flex py={[2, 2, 3]} as={MaxWidth} width="100%">
            <div className="Navbar-brand" style={{ flex: 1 }}>
              <NavItem to="/" title="Logo">
                <Image src={logo} alt="AdaptableTools" maxHeight={[80, 100]} />
              </NavItem>

              <Box
                display={['block', 'block', 'none']}
                className={`Navbar-burger burger ${
                  this.state.active ? 'is-active' : ''
                }`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </Box>
            </div>
            <Box
              className={`Navbar-menu`}
              display={[
                this.state.active ? 'block' : 'none',
                this.state.active ? 'block' : 'none',
                'block'
              ]}
            >
              <Flex flexDirection="column" justifyContent="center">
                <Flex
                  justifyContent={'flex-end'}
                  marginBottom={3}
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
                  <NavItem to="/adaptable">AdapTable</NavItem>
                  <NavItem to="/grid-gurus">Grid Gurus</NavItem>
                  <NavItem to="/other-data-tools-partners">
                    Other Data Tools
                  </NavItem>
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
}

export default Navbar
