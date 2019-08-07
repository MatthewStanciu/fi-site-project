import React from 'react'
import styled from 'styled-components'
import { Heading } from 'rebass'
import theme from '../theme/config'
import Layout from '../components/Layout'
import { Container } from '../components/Container'
import Project from '../components/Project'
import Project2 from '../components/Project2'
import { Projects } from '../components/Project2'
import { projects } from '../data.json'

const Header = styled(Container).attrs({ maxWidth: 72, px: 3, my: 4 })`
  width: 100%;

  ${theme.mediaQueries.md} {
    column-count: 2;
    column-gap: 32px;
    // grid-template-columns: repeat(2, 1fr);
  }
`

export default () => (
  <Layout>
    <Heading
      as="h1"
      color="lightRed"
      textAlign="center"
      mb={4}
      fontSize={[4, 6]}
    >
      A heading if you want it
    </Heading>
    <Projects>
      {projects.map(project => (
        <Project2 {...project} key={project.img} />
      ))}
    </Projects>
  </Layout>
)
