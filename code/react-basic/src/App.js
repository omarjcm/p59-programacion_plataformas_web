import React from 'react';
import './styles/App.css';

const todos = [
  { text:'Cortar cebolla', completed:false },
  { text:'Tomar un curso de Javascript Avanzado', completed:false },
  { text:'Llorar con la llorona', completed:false },
]

function App() {
  return (
    <React.Fragment>
      {/*<TodoCounter/>*/}
      <h2>Has completado dos de tres tareas.</h2>
      {/*<TodoSearch/>*/}
      <input placeholder="Cebolla"></input>
      {/*<TodoList>
        todos.map( do => (
          <TodoItem/>
        ) )
      </TodoList>*/}
      <button>*</button>
    </React.Fragment>
  );
}

export default App;
