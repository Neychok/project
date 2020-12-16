import React from "react"
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
              <div className="relative">
                <Image
                  key={`${image.node.name}`}
                  fluid={image.node.childImageSharp.fluid}
                />
                <a
                  className="absolute bottom-0 right-0 p-1"
                  href={image.node.childImageSharp.original.src}
                  download
                >
                  <div className="flex items-center border bg-white rounded-lg py-1 px-2">
                    <div className="pr-2">Изтегли</div>
                    <DownloadIcon className="h-6" />
                  </div>
                </a>
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
