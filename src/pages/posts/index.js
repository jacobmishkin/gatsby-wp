import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class PostsTemplate extends Component {
  render() {
    const data = this.props.data

    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Posts</h1>

        {data.allWordpressPost.edges.map(({ node }) => (
          <div
            key={node.slug}
            className={'post'}
            style={{
              marginBottom: 50,
            }}
          >
            <Link to={'/post/' + node.slug}>
              <h3>{node.title}</h3>
            </Link>
            <div
              className={'post-content'}
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default PostsTemplate

export const pageQuery = graphql`
  query PostsQuery {
    allWordpressPost {
      edges {
        node {
          id
          slug
          status
          title
          excerpt
          template
          format
        }
      }
    }
  }
`
