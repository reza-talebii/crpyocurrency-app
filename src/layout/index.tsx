import React, { ReactNode } from 'react'

import { Layout } from 'antd'

import { Navbar, Footer } from './components'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <section className="app">
      <Navbar />
      <main className="main">
        <Layout>
          <section className="routes">
            <Outlet />
          </section>
        </Layout>
        <Footer />
      </main>
    </section>
  )
}

export default MainLayout
