import './App.css';
import React, {useRef} from 'react';
import Navbar from './component/Navbar';
import Contactme from './component/Contactme';

function App() {

  const contactRef = useRef(null);

  return (
    <div className="App">
      <Navbar contactRef={contactRef} />
      <Contactme contactRef={contactRef} />

    </div>
  );
}

export default App;
