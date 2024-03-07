// App.jsx file
import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { useSelector, useDispatch } from 'react-redux';

import { Updatetodo } from './features/todo/todoSlice';




function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [formVisible, setFormVisible] = useState(false);

  const [updateFormData, setUpdateFormData] = useState('');

  const editformhandle = (id) => {
    
    let data = todos.filter((todo) => todo.id === id);
    setUpdateFormData(data[0]);
    setFormVisible(true);
  
    const datas = {
      id: data[0].id,
      text: data[0].text
    };
    
  
    dispatch(Updatetodo(datas));
  };
  

  return (
    <>
      <h1 className='text-white text-6xl font-bold'>Todo App Using RTK</h1>

      <AddTodo formVisible={formVisible} updateFormData={updateFormData} setFormVisible ={setFormVisible}/>
      <Todos formVisible={formVisible} editformhandle={editformhandle} />
    </>
  );
}

export default App;
