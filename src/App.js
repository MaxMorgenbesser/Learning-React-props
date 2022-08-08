import { useState } from 'react';
import './App.css';
import Menubar from './components/Menubar'
import Main from './components/Main';
import Footer from './components/Footer';
import StudentCard from './components/StudentCard';
const student = {
  name: 'Khali Gopaul',
  age:37,
  id:'20idj',
  term: 'Su22'
}

function App() {
const [name,setName] = useState('Mason')


  return (
   <div> 
    <Menubar/>
  <Main name={name}/>
    <Footer/>
    <StudentCard student = {student}/>
    </div>
  );
}

export default App;
