import { Header, Title, Button } from '@fpkit/react'
import React from 'react'

export interface HeaderProps {
    title: React.ReactNode
    ctaLabel?: React.ReactNode
}
export const ThemeHeader = ({ title, ctaLabel }: HeaderProps) => {
    return (
        <Header>
        <Title elm="h2" styles={{"--fs": "var(--h1)"}}>
          {title}
        </Title>
        <p>
          <Button
            type="button"
            data-variant="primary"
            data-style="pill lg"
          >
            { ctaLabel || 'Get Started' }
          </Button>
        </p>
      </Header>
    )
}

ThemeHeader.displayName = 'Header'
export default ThemeHeader
