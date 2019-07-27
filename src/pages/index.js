import React from 'react'
import styled from 'styled-components'
import theme from '../theme/config'
import Layout from '../components/Layout'
import { Container } from '../components/Container'
import Project from '../components/Project'

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
    <Header>
      <Project
        name="test1"
        desc="tttest 1111"
        url="https://matthewstanciu.me"
        img="maxresdefault.jpg"
      />
      <Project
        name="test2"
        desc="tttest 2222"
        url="https://matthewstanciu.me"
        img="maxresdefault.jpg"
      />
      <Project
        name="test3"
        desc="tttest 3333"
        url="https://matthewstanciu.me"
        img="maxresdefault.jpg"
      />
      <Project
        name="test4"
        desc="tttest 4444"
        url="https://matthewstanciu.me"
        img="maxresdefault.jpg"
      />
    </Header>
  </Layout>
)
