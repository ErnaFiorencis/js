import styles from './App.module.css';
import Navigation from './components/Navigation';
import Create from './scenes/Create';
import Home from './scenes/Home';

import { Route, Routes } from 'react-router-dom'; 

const App = () => {
  return (
    <div className={styles.app}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/update/:id" element={<Create/>}></Route> 
      </Routes>
    </div>
  );
}

export default App;