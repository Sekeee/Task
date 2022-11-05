import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { HomeContainer, Home, CourseDetail } from './pages/home'
import { AdminContainer } from './pages/admin'
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
            {/* <Route path="login" element={< AdminLogin />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
