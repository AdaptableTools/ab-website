import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Button from '../components/Button'
import BackgroundImage from '../components/BackgroundImage'
import AbsoluteNav from '../components/AbsoluteNav'
import MaxWidth from '../components/MaxWidth'

import { graphql } from 'gatsby'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

/*
 // The `form-name` hidden field is required to support form submissions without JavaScript 
export class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <form
        name="contact"
        method="post"
        action="/contact/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </div>
        <div className="field">
          <label className="label" htmlFor={'name'}>
            Your name
          </label>
          <div className="control">
            <input
              className="input"
              type={'text'}
              name={'name'}
              onChange={this.handleChange}
              id={'name'}
              required={true}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor={'email'}>
            Email
          </label>
          <div className="control">
            <input
              className="input"
              type={'email'}
              name={'email'}
              onChange={this.handleChange}
              id={'email'}
              required={true}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor={'message'}>
            Message
          </label>
          <div className="control">
            <textarea
              className="textarea"
              name={'message'}
              onChange={this.handleChange}
              id={'message'}
              required={true}
            />
          </div>
        </div>
        <div className="field">
          <Button type="submit">Send</Button>
        </div>
      </form>
    )
  }
}
*/

export const ContactPageTemplate = ({
  title,
  image,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content
  return (
    <>
      <BackgroundImage title={title} image={image}>
        <AbsoluteNav />
      </BackgroundImage>
      <MaxWidth className="mt-16 pb-8">
        <PageContent className="content" content={content} />
      </MaxWidth>
    </>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  headerImage: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default ContactPage

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
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
      }
    }
  }
`
