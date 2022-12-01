import { Routes, Route } from 'react-router-dom'

import { Layout } from '@/layout'

import { Home, Patients } from '@/pages'

import 'antd/dist/reset.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/patients' element={<Patients />} />
      </Routes>
    </Layout>
  )
}

export default App
