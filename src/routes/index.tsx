import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './AppRoutes'
// import { AuthRoutes } from './AuthRoutes'

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
