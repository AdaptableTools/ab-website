import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const AdaptableBlotterPageTemplate = ({
  title,
  content,
  keyfeatures,
  headline,
  video,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>

              {video}
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {headline}
              </h2>
              <PageContent className="content" content={content} />
              {keyfeatures ? (
                <ul>
                  {keyfeatures.map(feature => {
                    return (
                      <li key={feature.name}>
                        <p>
                          <b>{feature.name}</b>
                        </p>
                        <p>{feature.description}</p>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AdaptableBlotterPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AdaptableBlotterPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AdaptableBlotterPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        video={post.frontmatter.video}
        headline={post.frontmatter.headline}
        keyfeatures={post.frontmatter.keyfeatures}
        content={post.html}
      />
    </Layout>
  );
};

AdaptableBlotterPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AdaptableBlotterPage;

export const adaptableBlotterPageQuery = graphql`
  query AdaptableBlotterPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        video
        headline
        keyfeatures {
          name
          description
        }
      }
    }
  }
`;
