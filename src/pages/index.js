import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Image from "gatsby-image"

/**
 * Начална страница
 */
const IndexPage = ({ data }) => (
  <Layout>
    <Helmet title="Начало" />
    <div className="flex flex-col items-center justify-center mt-8">
      <h1 className="text-6xl pb-8 text-red-500">Здрасти!</h1>
      <Image
        className="rounded-full h-52 w-52 md:w-64 md:h-64 shadow-lg"
        fluid={data.file.childImageSharp.fluid}
      ></Image>
      <h1 className="pt-4 text-4xl">Аз съм Ивайла.</h1>
    </div>

    <div className="flex justify-center mt-10 container mx-auto max-width-600">
      <div className="text-base text-justify px-4">
        <p>На 23 години съм от град Свиленград.</p>
        <p>
          Завършила съм основното си образование в родния си град, а
          гимназиалните години прекарах в Пловдив. Със започването на
          университета, започнах работа и се преместих за постоянно в София.
        </p>
        <p>Обичам разнообразието, новите емоции и големите компании.</p>
      </div>
    </div>
  </Layout>
)
/**
 * GraphQL заявка за началната снимка
 */
export const query = graphql`
  query {
    file(relativePath: { eq: "homeimage.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
