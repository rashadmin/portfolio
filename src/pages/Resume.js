import React from 'react'
import Body from '../components/Body'
import PageContent from '../components/PageContent'
import HeadContent from '../components/HeadContent'
import EducationSection from '../components/EducationSection'
import WorkExperienceSection from '../components/WorkExperienceSection'
import CertificationSection from '../components/CertificationSection'
function Resume() {
  return (
    <Body aboutsidebar navsidebarHor>
        <HeadContent>
          RESUME
        </HeadContent>
        <PageContent>
            <EducationSection/>
            <WorkExperienceSection/>
            <CertificationSection/>
        </PageContent>
    </Body>
  )
}

export default Resume