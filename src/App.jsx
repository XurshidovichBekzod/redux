import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './page/Layout/Layout'
import Input from './page/Inp/Input'
import Card from './page/Card/Card'
import "./App.css"

const App = () => {
  return (
    useRoutes([
      {
        path: "/",
        element: <Layout/>,

        children: [
          {
            index: true,
            element: <Input/>
          },
          {
            path: "/card",
            element: <Card/>
          }
        ]
      }

    ])
  )
}

export default App