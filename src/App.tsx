import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import { Header, Footer } from 'containers'
import { Contacts, AddContact, NotFound } from 'pages'

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/contacts/add" component={AddContact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Container>
      <Footer />
    </>
  )
}

export default App

const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`
