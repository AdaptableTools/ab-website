import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Button from '../components/Button'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

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
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
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

export const ContactPageTemplate = ({
  title,
  headerImage,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content
  return (
    <section className=" section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            {headerImage ? (
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url(${
                    !!headerImage.childImageSharp
                      ? headerImage.childImageSharp.fluid.src
                      : headerImage
                  })`,
                  backgroundPosition: 'left top',
                  backgroundAttachment: 'fixed'
                }}
              >
                <h1
                  style={{ color: 'white' }}
                  className="title is-size-2 has-text-weight-bold is-bold-light"
                >
                  {title}
                </h1>
              </div>
            ) : null}

            <PageContent className="content" content={content} />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
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
        headerImage={post.frontmatter.headerimage}
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
        headerimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
      }
    }
  }
`
