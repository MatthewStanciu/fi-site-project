import React from 'react'
import Helmet from 'react-helmet'
import ThemeProvider from '../theme'
import theme from '../theme/config'
//import { name, title, description, url, img } from '../data.json'

const meta = tags =>
  tags.map((props, index) =>
    React.createElement('meta', { ...props, key: index })
  )

export default ({ children }) => (
  <ThemeProvider>
    <Helmet title="Matthew Stanciu">
      <html lang="en" />
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,viewport-fit=cover"
      />
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    {children}
  </ThemeProvider>
)
