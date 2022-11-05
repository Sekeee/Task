import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AdminContainer, AdminHome, Course } from './pages/admin'
import { HomeContainer, Home, CourseDetail } from './pages/home'
import { SignIn, SignUp } from './pages/login'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />


          <Route path="/" element={<HomeContainer />}>
            <Route path="" element={<Navigate to='/home' />} />
            <Route path="/home" element={<Home />} />
            <Route path="/coursedetail" element={<CourseDetail />} />
          </Route>

          <Route path="/admin" element={< AdminContainer />} >
            <Route path="" element={<Navigate to='/admin/home' />} />
            <Route path="home" element={< AdminHome />} />
            <Route path="course" element={< Course />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
