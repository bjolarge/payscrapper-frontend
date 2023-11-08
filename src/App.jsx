import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import CreateBook from './pages/CreateBook'
import Profile from './pages/Profile'
import Book from './pages/Book'
import Look from './pages/Look'
import Delete from './pages/Delete'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* <Route index element={<Dashboard />} /> */}
      <Route Route index element={<Signup />} />
      <Route path="createbook" element={<CreateBook />} />
      <Route path="delete" element={<Delete />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Signin />} />
      <Route path="book" element={<Book />} />
      <Route path="look" element={<Look />} />
      <Route path="dashboard" element={<Dashboard />} />
      {/* <Route path="signup" element={<Signup />} /> */}
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
