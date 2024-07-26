import React from 'react'
import Body from '../components/Body'
import PageContent from '../components/PageContent'
import HeadContent from '../components/HeadContent'
import Stack from 'react-bootstrap/Stack'
import Messagebox from '../components/Messagebox'

function Contact() {
  return (
    <Body aboutsidebar navsidebarHor>
      <Stack>
        <HeadContent>
          CONTACT
        </HeadContent>
        <PageContent>
            <>
              <Messagebox/>
            </>
        </PageContent>

      </Stack>
    </Body>
  )
}

export default Contact