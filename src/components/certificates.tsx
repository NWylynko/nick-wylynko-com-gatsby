import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import { LinksList, LinkProps } from "./linksList"
import Image from "./image"
import { Link } from "./styledLinks"
import { DropDown } from "./dropDown"

export const Certificates = () => {
  const data = useStaticQuery(graphql`
    query MyCertificates {
      allCertificatesJson {
        edges {
          node {
            id
            body
            date
            image
            links {
              name
              url
            }
            name
          }
        }
      }
    }
  `)

  return <>{data.allCertificatesJson.edges.map(Certificate)}</>
}

interface CertificateProps {
  node: {
    name: string
    id: string
    body: string
    date: string
    image: string
    links: LinkProps[]
  }
}

const Certificate = (props: CertificateProps) => {
  const { name, id, body, date, image, links } = props.node

  return (
    <Article key={id}>
      <p style={{ fontSize: "0.9em" }}>{date}</p>
      <DropDown hidden={<Image imgName={image} />}>
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
