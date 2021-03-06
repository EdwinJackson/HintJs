import React from 'react'
import styled from 'styled-components'
import { spacing, fonts, colour } from '../../util/styles'

const Logo = styled.h1`
  display: block;
  width: 100vw;
  margin-top: 1rem;
  font-family: 'Playfair Display', serif;
  font-weight: lighter;
  font-size: 2.5rem;
  text-decoration: none;
  text-align: center;
  color: black;
`

const HeaderOne = styled.h1`
  margin: ${spacing.lg} 0;
  font-family: ${fonts.header.family};
  font-size: ${fonts.header.sizes.lg};
  line-height: 2.5rem;
  color: ${props => props.diminished ? colour.diminished : colour.black};
`

const HeaderTwo = styled.h2`
  margin: ${spacing.md} 0;
  font-family: ${fonts.header.family};
  font-size: ${fonts.header.sizes.md};
  line-height: ${fonts.header.sizes.lg};
  color: ${props => props.diminished ? colour.diminished : colour.black};
`

const Body = styled.p`
  font-size: ${fonts.body.size};
  font-family: ${fonts.body.family};
  line-height: 1.5rem;
  color: ${props => props.diminished ? colour.diminished : colour.black};
`

export {
  Logo,
  HeaderOne,
  HeaderTwo,
  Body,
}