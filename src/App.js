import React from 'react'
import {BrowserRouter} from "react-router-dom"
import {WebRouter, AdminRouter} from "./router"
import {AuthProvider} from "./context/AuthContext"

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <WebRouter />
        <AdminRouter />
      </BrowserRouter>
    </AuthProvider>
  )
}
