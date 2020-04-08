import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from 'rebass'
import { navigate } from 'gatsby-link'

import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Button from '../components/Button'
import BackgroundImage from '../components/BackgroundImage'
import AbsoluteNav from '../components/AbsoluteNav'
import MaxWidth from '../components/MaxWidth'

import { graphql, Link } from 'gatsby'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Input = (props) => (
  <Box
    as="input"
    {...props}
    width={1}
    fontSize={3}
    my={2}
    mb={4}
    p={2}
    style={{
      background: 'var(--ab-color-washedblue)',
      ...props.style,
    }}
    className=" rounded-sm "
  />
)

const Label = (props) => {
  return <Box as="label" {...props} />
}

// The `form-name` hidden field is required to support form submissions without JavaScript
export class BookDemoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isValidated: false,
      // name: 'test',
      // email: 'test@test.com',
      // message: 'xxx',
      name: '',
      email: '',
      message: '',
      phone: '',
      organization: '',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target

    localStorage.setItem(
      'book-demo',
      JSON.stringify({ time: Date.now(), ...this.state })
    )
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => {
        navigate(form.getAttribute('action'))
      })
      .catch((error) => alert(error))
  }

  render() {
    return (
      <form
        className="BookDemoForm"
        name="book-demo"
        method="post"
        action="/book-demo/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="book-demo" />
        <div hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </div>
        <Flex flexDirection={['column', 'column', 'row']}>
          <div>
            <div className="field">
              <Label htmlFor={'name'}>Your name</Label>
              <div className="control">
                <Input
                  type={'text'}
                  name={'name'}
                  value={this.state.name}
                  onChange={this.handleChange}
                  id={'name'}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <Label htmlFor={'email'}>Email</Label>
              <div className="control">
                <Input
                  type={'email'}
                  name={'email'}
                  value={this.state.email}
                  onChange={this.handleChange}
                  id={'email'}
                  required={true}
                />
              </div>
            </div>

            <Flex flexDirection="row" justifyContent="stretch">
              <Box className="field" mr={2} flex={1}>
                <Label htmlFor={'organization'}>Organization</Label>
                <div className="control">
                  <Input
                    type={'organization'}
                    name={'organization'}
                    value={this.state.organization}
                    onChange={this.handleChange}
                    id={'organization'}
                  />
                </div>
              </Box>
              <div className="field" style={{ flex: 1 }}>
                <Label htmlFor={'phone'}>Phone Number</Label>
                <div className="control">
                  <Input
                    type={'phone'}
                    name={'phone'}
                    value={this.state.phone}
                    onChange={this.handleChange}
                    id={'phone'}
                  />
                </div>
              </div>
            </Flex>

            <div className="field">
              <Label htmlFor={'country'}>Country</Label>
              <div className="control">
                <Input
                  type={'country'}
                  name={'country'}
                  value={this.state.country}
                  onChange={this.handleChange}
                  id={'country'}
                />
              </div>
            </div>
          </div>
          <Flex
            flex={3}
            className="field"
            ml={[0, 0, 4]}
            flexDirection="column"
          >
            <Label htmlFor={'message'}>Message</Label>
            <Flex flex={1} className="control">
              <Input
                as="textarea"
                rows={5}
                name={'message'}
                value={this.state.message}
                onChange={this.handleChange}
                id={'message'}
              />
            </Flex>
          </Flex>
        </Flex>

        <div className="field">
          <Button type="submit">Send</Button>
        </div>
      </form>
    )
  }
}

const ThankYouPage = ({ content }) => {
  let theContent = <HTMLContent content={content} />

  let bookInfo =
    typeof localStorage === 'undefined' ? '' : localStorage.getItem('book-demo')
  let showLink = false
  try {
    bookInfo = JSON.parse(bookInfo)

    if (Date.now() > bookInfo.time + 1000) {
      throw 'old entry'
    }
  } catch (ex) {
    theContent =
      ex === 'old entry'
        ? 'Thank you for your interest.'
        : `Looks like you haven't submitted any info`
    showLink = true
  }

  const button = (
    <Button
      onClick={() => {
        if (!showLink) {
          window.history.back()
        }
      }}
    >
      Go Back
    </Button>
  )
  return (
    <>
      {theContent}

      <Box mt={3} />
      {showLink ? <Link to="/book-demo">{button}</Link> : button}
    </>
  )
}

export const BookDemoPageTemplate = ({
  title,
  image,
  content,
  is_thank_you,
}) => {
  return (
    <>
      <BackgroundImage title={title} image={image}>
        <AbsoluteNav />
      </BackgroundImage>
      <MaxWidth className="mt-16 pb-16">
        {is_thank_you == 'yes' ? (
          <ThankYouPage content={content} />
        ) : (
          <BookDemoForm />
        )}
      </MaxWidth>
    </>
  )
}

BookDemoPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const BookDemoPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BookDemoPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        is_thank_you={post.frontmatter.is_thank_you}
        content={post.html}
      />
    </Layout>
  )
}

BookDemoPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BookDemoPage

export const BookDemoPageQuery = graphql`
  query BookDemoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        is_thank_you
      }
    }
  }
`
