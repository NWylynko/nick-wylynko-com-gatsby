import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { LinksList, LinkProps } from "./linksList"
import { DropDown } from './dropDown'
import Image from './image'
import { Link } from './styledLinks'

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query MyProjects {
      allProjectsJson {
        edges {
          node {
            id
            body
            image
            links {
              name
              url
            }
            info
            subtitle
            title
            stat
          }
        }
      }
    }
  `)

  return <>{data.allProjectsJson.edges.map(Project)}</>
}

interface ProjectProps {
  node: {
    id: string;
    body: string;
    image: string;
    links?: LinkProps[];
    info: string;
    subtitle: string;
    title: string;
    stat?: string;
  }
}

const Project = (props: ProjectProps) => {

  const { id, body, image, links, info, subtitle, title, stat } = props.node

  return (<Article key={id}>
    <p style={{ fontSize: "0.9em" }}>{subtitle}</p>
    <DropDown hidden={<Image imgName={image} />}>
      <div>
        <Link style={{ fontSize: "1.3em", display: 'inline-block' }} light >{title.toUpperCase()}</Link>
        <p style={{ fontSize: "0.8em", display: 'inline-block' }}>{info}</p>
      </div>
    </DropDown>
    <p>{body}</p>
    <LinksList links={links}/>
  </Article>)
}

const Article = styled.article`
  padding: 0.5rem;
  margin: 0.5rem;
`;
