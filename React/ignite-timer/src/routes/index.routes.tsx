import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/History'
import { History } from '../pages/Home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
