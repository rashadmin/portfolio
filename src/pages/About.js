import React from 'react'
import Body from '../components/Body'
import PageContent from '../components/PageContent'
import HeadContent from '../components/HeadContent'
import Skills from '../components/Skills'
import AboutmeDesc from '../components/AboutmeDesc'
function About() {
  return (
    <Body aboutsidebar navsidebarHor>
        <HeadContent>
          ABOUT
        </HeadContent>
        <PageContent>
         <AboutmeDesc/>
          <br/><br/>
          <h2>What i do !</h2>
          <br/>
          <Skills/>
        </PageContent>
    </Body>
  )
}

export default About