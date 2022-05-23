import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import UsersList from './components/users/UsersList';

function App(){

  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect(()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res=> setUsers(res.data))
  },[])

  const getUser = ()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res=> setUsers(res.data))
  }

  const addUser = (userItem)=>{
    axios.post('https://users-crud1.herokuapp.com/users/', userItem)
      .then(()=> getUser())
  }

  const removeUser = (id)=>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(()=> getUser())
  }

  const selected = (user) => {
    setUserSelected(user)
  }

  const deselected = ()=> setUserSelected(null)

  const editData = (userEdit)=>{
    axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, userEdit)
      .then(()=> getUser());
  }

  return (
    <div className="App">
      <main className='App-main'>
        <Form addUser={addUser} userSelected={userSelected} deselected={deselected} editData={editData}/>
        <UsersList users={users} selected={selected} removeUser={removeUser}/>
      </main>
    </div>
  );
}

export default App;
