import React from 'react';
import Form from './Form.js';
import FormRef from './FormRef.js';
import FormState from './FormState.js';

// CHANGE 1: Import HashRouter instead of BrowserRouter (alias it as Router to keep code clean)
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
            {/* These Links will now automatically work with the hash */}
            <Link to='/form-link'>Normal Form</Link>
            <Link to='/form-ref-link'>Ref Form</Link>
            <Link to='/form-state-link'>State Form</Link>
        </nav>

        <Routes>
            <Route path='/form-link' element={<Form/>} />
            <Route path='/form-ref-link' element={<FormRef/>} />
            <Route path='/form-state-link' element={<FormState/>} />
            
            {/* Optional: Add a default route so localhost:8080/ doesn't show a blank screen */}
            <Route path='/' element={<Form/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;