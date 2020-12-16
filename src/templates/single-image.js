import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import { FacebookProvider, Comments } from "react-facebook"
import Layout from "../components/layout"
import Image from "gatsby-image"
import DownloadIcon from "../assets/down-arrow.svg"

/** Template (Образец) за страница на снимка */
const Gallery = ({ data }) => (
  <Layout>
    <Helmet title={data.file.name} />
    {/* Flex Контейнер, който си сменя посоката при различен размер на екрана */}
    <div className="flex flex-col lg:flex-row justify-center">
      {/* Контейнер за снимката */}
      <div className="px-4 container lg:mx-0 mx-auto max-width-600">
        <Image key={data.file.name} fluid={data.file.childImageSharp.fluid} />
      </div>

      {/** Контейнер за бутона за изтегляне и коментарите */}
      <div className="px-4 container lg:mx-0 mx-auto max-width-600">
        {/** Бутон за изтегляне на снимката */}
        <a
          href={data.file.childImageSharp.original.src}
          download
          className="flex justify-center items-center my-2 py-4 bg-white rounded border shadow"
        >
          <p className="text-xl pr-5">Изтегли снимка</p>
          <DownloadIcon className="h-8" />
        </a>

        {/** Фейсбук коментари */}
        <h1 className="mt-8 mb-2 text-2xl">Фейсбук коментари</h1>
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

/**
 * GraphQL заявка за Името, Оригинала и оптимизирана версия на снимката,
 * която отговаря на ID–то, подадено при създаването на страницата.
 */
export const query = graphql`
  query($id: String!) {
    file(id: { eq: $id }) {
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
`

export default Gallery
