import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

import Image from "gatsby-image"
import Layout from "../components/layout"
import Masonry from "react-masonry-css"

/**
 * Страница с галерия
 */
const Gallery = ({ data }) => {
  /** Резултат от graphql заявката */
  const imageData = data.allFile.edges

  /** Responsive Breakpoint-ове за модула react-masonry-css */
  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
  }

  return (
    <Layout>
      <Helmet title="Галерия" />
      <div className="md:px-4 px-2 container mx-auto">
        {/** Контейнер за модула react-masonry-css, който подрежда снимките в стил Mansonry  */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {/** Обхаждаме всички снимки и ги визуализираме */}
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

/**
 * GraphQL заявка за Името, Оригинала и оптимизирана версия на снимките,
 * които са в папката /images/gallery
 */
export const query = graphql`
  query {
    allFile(filter: { relativePath: { regex: "/gallery/" } }) {
      edges {
        node {
          name
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
