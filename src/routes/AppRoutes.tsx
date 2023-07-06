import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { EditProfile } from '../pages/EditProfile'
import { NewPost } from '../pages/NewPost'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/new" element={<NewPost />} />
      </Route>
    </Routes>
  )
}
