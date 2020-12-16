import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import Masonry from "react-masonry-css"
import DownloadIcon from "../assets/down-arrow.svg"

const Gallery = ({ data }) => {
  const imageData = data.allFile.edges

  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
  }

  return (
    <Layout>
      <div className="md:px-4 px-2 container mx-auto">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {imageData.map(image => {
            return (
              <div>
                <Link to={"/gallery/" + image.node.name}>
                  <Image
                    key={`${image.node.name}`}
                    fluid={image.node.childImageSharp.fluid}
                  />
                </Link>
              </div>
            )
          })}
        </Masonry>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { relativePath: { regex: "/gallery/" } }) {
      edges {
        node {
          name
          relativePath
          childImageSharp {
            original {
              src
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Gallery
