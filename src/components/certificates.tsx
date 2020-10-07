import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import { LinksList, LinkProps } from "./linksList"
// import Image from "./image"
import { Link } from "./styledLinks"
import { DropDown } from "./dropDown"
import Img, { FluidObject } from "gatsby-image"

interface DirtyData {
  allContentfulCertificates: {
    edges: {
      node: {
        id: string;
        name: string;
        body: {
          body: string;
        };
        date: string;
        links: LinkProps[];
        image: {
          fluid: FluidObject | FluidObject[];
        };
      }
    }[]
  }
}

interface Data {
  id: string;
  name: string;
  body: string;
  date: string;
  links: LinkProps[];
  image: FluidObject | FluidObject[];
}

export const Certificates = () => {
  const dirtyData: DirtyData = useStaticQuery(graphql`
    query MyCertificates {
      allContentfulCertificates {
        edges {
          node {
            id
            name
            body {
              body
            }
            date(formatString: "YYYY")
            links {
              name
              url
            }
            image { fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  const data: Data[] = dirtyData.allContentfulCertificates.edges.map(edge => {
    const { id, name, date, links, image, body } = edge.node
    return {
      id,
      name,
      date,
      body: body.body,
      links,
      image: image.fluid
    }
  })

  return <>{data.map(Certificate)}</>
}

const Certificate = ({ name, id, body, date, image, links }: Data) => {
  return (
    <Article key={id}>
      <p style={{ fontSize: "0.9em" }}>{date}</p>
      <DropDown hidden={<Img fluid={image} />}>
        <Link style={{ fontSize: "1.3em" }}>{`${name}`}</Link>
      </DropDown>
      <p>{body}</p>
      {links && <LinksList links={links} />}
    </Article>
  )
}

const Article = styled.article`
  margin: 0.5rem;
  padding: 0.5rem;
`
