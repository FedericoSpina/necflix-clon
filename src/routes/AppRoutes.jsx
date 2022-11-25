import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import PublicRoute from './PublicRoute'
import ProtectedRoutes from './ProtectedRoutes'
import Browse from '../pages/Browse'

export const AppRoutes = () => {

        return (
          <BrowserRouter>
            <Routes>
              <Route
                path="*"
                element={
                  <ProtectedRoutes url={"/login"}>
                    <Routes>
                      <Route path='/Browse' element={<Browse/>}/>
                    </Routes>
                  </ProtectedRoutes>}/>
      
                   <Route 
                  path='/login'
                  element={
                    <PublicRoute url={'/Browse'}>
      
                      <Login/>
                    </PublicRoute>
      
                  }/> 
                
              
      
      
            </Routes> 
          </BrowserRouter>
        );
      };
      
      export default AppRoutes;
      
  
      





{/* <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/Browse' element={<Browse/>}/>
        </Routes> */}
