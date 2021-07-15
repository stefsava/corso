import React from 'react'
import Header from  './Header.js'
import Menu from './Menu.js'
import Body from './Body.js'
import Footer from './Footer.js'

export default ({children}) => (
  <div>
    <Header />
    <Menu />
    <Body >
      {children}
    </Body>
    <Footer />
    </div>
)
