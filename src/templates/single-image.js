import React from "react"
import Image from "gatsby-image"
import Layout from "../components/layout"
import DownloadIcon from "../assets/down-arrow.svg"
import { graphql } from "gatsby"
import { FacebookProvider, Comments } from "react-facebook"
const Gallery = ({ data }) => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="px-4 container lg:mx-0 mx-auto max-width-600">
          <Image
            key={`${data.file.name}`}
            fluid={data.file.childImageSharp.fluid}
          />
        </div>
        <div className="px-4 container lg:mx-0 mx-auto max-width-600">
          <a
            href={data.file.childImageSharp.original.src}
            download
            className="flex justify-center items-center my-2 py-4 bg-white rounded border shadow"
          >
            <p className="text-xl pr-5">Изтегли снимка</p>
            <DownloadIcon className="h-8" />
          </a>
          <FacebookProvider className="w-full" appId="173233211178604">
            <Comments
              mobile={true}
              width="100%"
              href={`https://ivaila.netlify.app/gallery/${data.file.name}`}
            />
          </FacebookProvider>
        </div>
      </div>
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
