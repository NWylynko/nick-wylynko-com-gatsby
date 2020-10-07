import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { LinksList, LinkProps } from "./linksList"
import { DropDown } from "./dropDown"
import Image from "./image"
import { Link } from "./styledLinks"
import Img, { FluidObject } from "gatsby-image"

interface DirtyData {
  allContentfulProjects: {
    edges: {
      node: {
        id: string;
        body: {
          body: string;
        };
        info: string;
        subtitle: string;
        title: string;
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
  body: string;
  info: string;
  subtitle: string;
  title: string;
  links: LinkProps[];
  image: FluidObject | FluidObject[];
}

export const Projects = () => {
  const dirtyData: DirtyData = useStaticQuery(graphql`
    query MyProjects {
      allContentfulProjects(sort: {fields: order, order: DESC}) {
        edges {
          node {
            id
            body {
              body
            }
            info
            subtitle
            title
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

  const data: Data[] = dirtyData.allContentfulProjects.edges.map(edge => {
    const { id, body, info, subtitle, title, links, image } = edge.node
    return {
      id,
      body: body.body,
      info,
      subtitle,
      title,
      links,
      image: image.fluid
    }
  })

  return <>{data.map(Project)}</>
}

const Project = ({ id, body, image, links, info, subtitle, title }: Data) => {
  return (
    <Article key={id}>
      <p style={{ fontSize: "0.9em" }}>{subtitle}</p>
      <DropDown hidden={<Img fluid={image} />}>
        <div>
          <Link style={{ fontSize: "1.3em", display: "inline-block" }} light>
            {title.toUpperCase()}
          </Link>
          <p style={{ fontSize: "0.8em", display: "inline-block" }}>{info}</p>
        </div>
      </DropDown>
      <p>{body}</p>
      <LinksList links={links} />
    </Article>
  )
}

const Article = styled.article`
  padding: 0.5rem;
  margin: 0.5rem;
`
