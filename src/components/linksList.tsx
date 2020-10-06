import React from 'react'

import { Link } from './styledLinks'

export interface LinkProps {
  url: string;
  name: string;
}

interface LinksListProps {
  links?: LinkProps[]
}

export const LinksList = ({ links = [] }: LinksListProps) => {
  // return (<div>{links.map((link, index, array) => <Item {...{link, index, array}} key={index} />)}</div>)
  
  if (!links) return null;
  
  return (<div>{links.map(Item)}</div>)
}

const Item = (link: LinkProps, index: number, array: LinkProps[]) => {
  return <Link href={link.url} key={index}>{`${link.name}${index === array.length - 1 ? '' : ','}`}</Link>
}
