import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Profile, CampaignDetails, CreateCampaign, About, Calculator } from './pages'
import { Sidebar } from './components'

const App = () => {
  return (
    <div className="relative sm:p-4 p-2 sm:min-h-screen h-[100dvh] flex">
      <div className='flex md:flex-row flex-col-reverse gap-4 bg-secondary-bg p-5 rounded-lg backdrop-blur-lg max-sm:w-full w-[1500px] h-[95vh] mx-auto sm:pr-5'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/campaign-details/*" element={<CampaignDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App