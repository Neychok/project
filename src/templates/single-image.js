import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import React from "react"
import Image from "gatsby-image"
import Layout from "../components/layout"
import DownloadIcon from "../assets/down-arrow.svg"
import { graphql } from "gatsby"

const Gallery = ({ data }) => {
  const disqusConfig = {
    url: `/gallery/${data.file.name}`,
    identifier: data.file.id,
    title: data.file.name,
  }

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
      <CommentCount config={disqusConfig} placeholder={"..."} />
      <Disqus config={disqusConfig} />
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
