import { useState } from 'react';
import './App.css';
import Menubar from './components/Menubar'
import Main from './components/Main';
import Footer from './components/Footer';
import StudentCard from './components/StudentCard';
import Coffee from './components/Coffee';
const student = {
  name: 'Khali Gopaul',
  age:37,
  id:'20idj',
  term: 'Su22'
}

function App() {
const [name,setName] = useState('Max')


  return (
   <div> 
    <Menubar name={name} setName={setName}/>
  <Main name={name}/>
  
    {name ?
    <StudentCard student = {student}/> :
    <p>Please login</p>
    
}<Coffee/>
<Footer/>

    </div>
  );
}

export default App;
