import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { removeAll } from "../features/todo/todoSlice";


function Todos({ editformhandle, formVisible }) {

  const [todos, setTodos] = useState([]);


  const todosFromStore = useSelector((state) => state.todos);

 
  useEffect(() => {
    setTodos(todosFromStore);
  }, [todosFromStore]);

  const dispatch = useDispatch();
  const [checkedStates, setCheckedStates] = useState(todos.map(() => false));

  const handleChange = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    setCheckedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };


  


  return (
    <>
      <button
        onClick={() => dispatch(removeAll(todos))}
        className="my-3 text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-md deleteall"
      >
        Delete All
      </button>

      <ul className="list-none">
        {todos.map((todo, index) => (
          <li
            className={`mt-4 flex justify-between items-center px-4 py-2 rounded bg-zinc-800`}
            key={todo.id}
            style={{
              backgroundColor: checkedStates[index] ? "red" : "black",
              textDecoration: checkedStates[index] ? "line-through" : "none",
            }}
          >
            <div className="text-white">{todo.text}</div>

            <span className="align-center flex ">
              {!formVisible && (
                <>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </svg>
                  </button>

                  <button
                    onClick={() => editformhandle(todo.id)}
                    className="text-white mx-3 bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </>
              )}

              <input
                type="checkbox"
                onChange={() => handleChange(todo.id)}
                checked={checkedStates[index]}
              />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
