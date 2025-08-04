import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './page/Layout/Layout'
import Input from './page/Inp/Input'

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
          }
        ]
      }

    ])
  )
}

export default App