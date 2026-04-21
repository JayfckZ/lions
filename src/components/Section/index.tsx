import { Section as SectionContainer } from './styles'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Section = ({ children }: Props) => {
  return <SectionContainer>{children}</SectionContainer>
}

export default Section
