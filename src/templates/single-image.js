import React from "react"
import Image from "gatsby-image"
import Layout from "../components/layout"
import DownloadIcon from "../assets/down-arrow.svg"
import { graphql } from "gatsby"
import { FacebookProvider, Comments } from "react-facebook"
const Gallery = ({ data }) => {
  return (
    <Layout>
      <div className="px-4 container mx-auto image">
        <Image
          key={`${data.file.name}`}
          fluid={data.file.childImageSharp.fluid}
        />
        <a
          href={data.file.childImageSharp.original.src}
          download
          className="flex justify-center items-center my-2 py-4 border shadow"
        >
          <p className="text-xl pr-5">Изтегли</p>
          <DownloadIcon className="h-8" />
        </a>
      </div>
      <FacebookProvider appId="173233211178604">
        <Comments
          href={`https://ivaila.netlify.app/gallery/${data.file.name}`}
        />
      </FacebookProvider>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    file(id: { eq: $id }) {
      id
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
`

export default Gallery
