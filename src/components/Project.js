import React from 'react'
import styled from 'styled-components'
import { Card, Text, Heading, Box } from 'rebass'
import theme from '../theme/config'

export const GridItem = styled(Card).attrs({
  bg: 'white',
  width: 1
})`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.125);
  line-height: 0;
  transition: ease-out all 0.125s;
  &:hover,
  &:focus {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.125);
    transform: scale(1.025);
  }
`

export const GridItemBanner = styled(Box).attrs({
  fontSize: 3,
  color: 'coffee',
  bg: 'lightBlue',
  p: 3
})`
  display: block;
  line-height: 1.25;
  text-decoration: none;
  flex: 1 1 auto;
  flex-shrink: none;
`

const Project = ({ name, desc, url, img }) => (
  <GridItem>
    <img src={require(`../../static/${img}`)} alt={name} />
    <GridItemBanner as="a" href={url} target="_blank">
      <Heading as="h3" fontSize={[4, 5]} mb={2}>
        {name}
      </Heading>
      <Text>{desc}</Text>
    </GridItemBanner>
  </GridItem>
)

export default Project
