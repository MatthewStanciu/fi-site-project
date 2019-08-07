import React from 'react'
import styled from 'styled-components'
import { Card, Box, Heading, Text } from 'rebass'

export const GridCard = styled(Card).attrs({
  bg: 'white',
  width: 1,
  mb: 4
})`
  display: block;
  overflow: hidden;
  border-radius: 6px;
  line-height: 0;
  break-inside: avoid;
`

export const GridCardBanner = styled(Box).attrs({
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

const Project = ({ name, desc, url, img, ...props }) => (
  <GridCard {...props}>
    <img src={img} />
    <GridCardBanner>
      <Heading as="h3" fontSize={[4, 5]} mb={2}>
        {name}
      </Heading>
      <Text>{desc}</Text>
    </GridCardBanner>
  </GridCard>
)

export default Project
