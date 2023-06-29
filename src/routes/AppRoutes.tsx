import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { EditProfile } from '../pages/EditProfile'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<EditProfile />} />
      </Route>
    </Routes>
  )
}
