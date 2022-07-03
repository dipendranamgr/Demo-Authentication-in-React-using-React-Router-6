import {Routes,Route} from 'react-router-dom';
import './App.css';
import { Admin, Dashboard, Home, Navigation } from './pages/allPage';
import { ProtectedRoute } from './Route/ProtectedRoute';



function App() {
  return (
    <>
    
      <Navigation />
      <h1>React Router</h1>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />}/>
        <Route path="dashboard" element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        
        }/>
        <Route path="admin" element={
          <ProtectedRoute>
            <Admin/>
          </ProtectedRoute>
        }/>
      </Routes>
     
    </>

  );
}

export default App;
