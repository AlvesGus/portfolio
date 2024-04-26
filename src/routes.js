import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/home'
import Project from './Projects/project'

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </BrowserRouter>
  )
}
