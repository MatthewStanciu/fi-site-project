import React from 'react'
import styled from 'styled-components'
import { Heading } from 'rebass'
import theme from '../theme/config'
import Layout from '../components/Layout'
import { Container } from '../components/Container'
import Project from '../components/Project'
import { projects } from '../data.json'

const Projects = styled(Container).attrs({
  maxWidth: 72,
  px: 3,
  my: 4
})`
  ${theme.mediaQueries.md} {
    column-count: 2;
    column-gap: ${theme.space[4]}px;
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
        <Project {...project} key={project.img} />
      ))}
    </Projects>
  </Layout>
)
