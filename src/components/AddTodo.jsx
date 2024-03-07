import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { Updatetodo } from '../features/todo/todoSlice';


function AddTodo({ formVisible, updateFormData,setFormVisible }) {

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (updateFormData !== undefined && updateFormData !== '') {
 
      setInput(updateFormData.text || '');
    } else {
      setInput('');
    }
  }, [updateFormData]);
  


  const addTodoHandler = (e) => {
    e.preventDefault();
  
    if (formVisible) {
     
      const updatedTodo = {
        id: updateFormData.id,
        text: input,
      }
      
      dispatch(Updatetodo(updatedTodo));
      setFormVisible(false); 
      
    }

     else {
      dispatch(addTodo(input));
      setInput("");
    }
  
    setInput("");
  };
  
  

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {formVisible ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
