import React from "react"
import styled from "styled-components"

import "../globalStyle/index.css"
import "../globalStyle/headers.css"

import SEO from "../components/seo"
import Title from "../components/title"
import { List, Item } from "../components/list"
import { List as HList, Item as HItem } from "../components/horizontalList"
import { Link } from "../components/styledLinks"

// import Badge from "react-simple-Badges"
import { Certificates } from "../components/certificates"
import { Projects } from "../components/projects"

const IndexPage = () => (
  <>
    <SEO title="Resume" />
    <Layout>
      <Section>
        <Title />
        <HList>
          <HItem>Perth, WA, Australia</HItem>
          <HItem>
            <Link style={{ color: "black" }} href="tel:+61434901870">
              0434 901 870
            </Link>
          </HItem>
        </HList>
        <HList>
          <HItem>
            <Link href="mailto:nick1014375@gmail.com">Email</Link>
          </HItem>
          <HItem>
            <Link href="https://linkedin.com/in/nick-wylynko-17a202193/">
              LinkedIn
            </Link>
          </HItem>
          <HItem>
            <Link href="https://github.com/nwylynko">Github</Link>
          </HItem>
        </HList>
        <h2>Objective</h2>
        <p>
          To gain further knowledge and experience in Software and Hardware in
          this rapidly developing world.
        </p>
        <h2>Education</h2>
        <p>Christ Church Grammar School, 2013 to 2021 (Queenslea)</p>
        <h3>Subjects</h3>
        <HList>
          <HItem>Computer Science</HItem>
          <HItem>Digital Design</HItem>
          <HItem>Maths Applications</HItem>
        </HList>
        <HList>
          <HItem>Business & Enterprise</HItem>
          <HItem>English</HItem>
          <HItem>Materials & Design Technology</HItem>
        </HList>
        <h3>Experiences</h3>
        <List>
          <Item>
            4 Week exchange to Virginia, USA to learn at St Christophers from
            24th of March, 2019 to 22nd of April
          </Item>
          <Item>
            2 Week school camp 'venture', walking over 200km from 19th of
            November, 2019 to the 29th
          </Item>
        </List>
        <h2>Skills</h2>

        <h3>Languages</h3>
        {/* <StyledBadge name="JavaScript" />
        <StyledBadge name="TypeScript" />
        <StyledBadge name="HTML5" />
        <StyledBadge name="CSS3" />
        <StyledBadge name="Python" /> */}
        <h3>Libraries</h3>
        {/* <StyledBadge name="React" />
        <StyledBadge name="React Router" />
        <StyledBadge name="Expo" />
        <StyledBadge name="Socket.io" />
        <StyledBadge name="Material-UI" />
        <StyledBadge name="styled-components" /> */}
        <h3>Tools</h3>
        {/* <StyledBadge name="GitHub" />
        <StyledBadge name="Visual Studio Code" />
        <StyledBadge name="Blender" />
        <StyledBadge name="Adobe Photoshop" />
        <StyledBadge name="Adobe Illustrator" /> */}
        <h3>Other</h3>
        {/* <StyledBadge name="Node.js" />
        <StyledBadge name="NPM" />
        <StyledBadge name="Docker" />
        <StyledBadge name="Firebase" />
        <StyledBadge name="Google Cloud" />
        <StyledBadge name="Redis" />
        <StyledBadge name="NGINX" /> */}
        <h3>Office</h3>
        {/* <StyledBadge name="Microsoft Word" />
        <StyledBadge name="Microsoft PowerPoint" />
        <StyledBadge name="Microsoft Excel" />
        <StyledBadge name="Microsoft OneNote" /> */}
        <h2>Certificates</h2>
        <Certificates />
      </Section>
      <Section>
        <h2>Projects</h2>
        <Projects />
      </Section>
    </Layout>
  </>
)

export default IndexPage

// const StyledBadge = styled(Badge)`
//   height: 30px;
//   width: auto;
//   display: inline-block;
//   padding: 1px;
//   margin: 1px;
// `

const Layout = styled.main`
  display: inline-flex;

  @media (min-width: 1280px) {
    /* desktop */
    max-width: 1280px;
    flex-direction: row;
  }

  @media (max-width: 1280px) {
    /* mobile */
    max-width: 640px;
    flex-direction: column;
  }
`

const Section = styled.section`
  max-width: 65ch;

  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 1280px) {
    /* desktop */
    width: 65ch;
  }

  @media (max-width: 1280px) {
    /* mobile */
    width: calc(100vw - 40px);
  }
`
