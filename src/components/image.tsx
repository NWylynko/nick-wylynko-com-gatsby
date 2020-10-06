import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

interface Data {
  allImageSharp: {
    edges: {
      node: {
        fluid:
          | (FluidObject & { originalName: string, presentationHeight: number })
          | (FluidObject[] & { originalName: string, presentationHeight: number })
      }
    }[]
  }
}

const Image = ({ imgName, className = '' }: { imgName: string, className?: string }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={(data: Data) => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgName
      )
      if (!image) {
        return null
      }
      return <Img fluid={image.node.fluid} className={className} />
    }}
  />
)
export default Image
