import React from 'react'
import Body from '../components/Body'
import PageContent from '../components/PageContent'
import HeadContent from '../components/HeadContent'
import PortfolioButton from '../components/PortfolioButton'
import PortfolioItem from '../components/PortfolioItem'
function Portfolio({children}) {
  return (
    <Body aboutsidebar navsidebarHor>
        <HeadContent>
          PORTFOLIO
        </HeadContent>
        <PageContent>
              <PortfolioButton/>
              {children ? children : <PortfolioItem/>  }
        </PageContent>
    </Body>
  )
}

export default Portfolio