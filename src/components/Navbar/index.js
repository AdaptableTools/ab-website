import React from 'react'
import { Text, Flex, Box } from 'rebass'
import { Link } from 'gatsby'

import logo from '../../img/logo.png'

import './index.scss'

const NavItem = props => {
  const { to, children, ...otherProps } = props
  return (
    <Link {...otherProps} to={props.to}>
      <Text
        fontSize={3}
        fontWeight={300}
        className="ml-3 p-3 border-solid border-b-4 border-white hover:border-blue-800 text-blue-600 hover:text-blue-800 NavItem"
      >
        {children}
      </Text>
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
        className="Navbar is-transparent"
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
            <div className="Navbar-brand" style={{ flex: 1 }}>
              <NavItem to="/" title="Logo">
                <img src={logo} alt="Kaldi" style={{ maxHeight: 100 }} />
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
                  <NavItem to="/contact">Contact</NavItem>
                  <NavItem to="/contact">Technical Support</NavItem>
                </Flex>

                <Flex
                  alignItems={['flex-start']}
                  flexDirection={['column', 'column', 'row']}
                >
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
