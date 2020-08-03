import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  align-items: center;
  min-height: 80vh;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StyledSection>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </StyledSection>
  </Layout>
)

export default NotFoundPage
