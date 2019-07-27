import React from 'react'
import styled from 'styled-components'
import { Heading } from 'rebass'
import theme from '../theme/config'
import Layout from '../components/Layout'
import { Container } from '../components/Container'
import Project from '../components/Project'
import { projects } from '../data.json'

const Header = styled(Container).attrs({ maxWidth: 72, px: 3, my: 4 })`
  display: grid;
  grid-gap: 32px;
  text-align: left;
  width: 100%;

  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default () => (
  <Layout>
    <Heading
      as="h1"
      color="lightRed"
      textAlign="center"
      mb={4}
      fontSize={[4, null, 4, 6]}
    >
      A heading if you want it
    </Heading>
    <Header>
      {projects.map(project => (
        <Project {...project} key={project.img} />
      ))}
    </Header>
  </Layout>
)
