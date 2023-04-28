import React from 'react'
import Container from '../../components/container'
import { Outlet } from 'react-router-dom'

function BasePage() {
  return (
    <main>
        <Container>
            <Outlet />
        </Container>
    </main>
  )
}

export default BasePage;