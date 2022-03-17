import './App.css';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import {Todos} from './Components/Todos';
import { AddTodo } from './Components/AddTodo';

function App() {

  const onDelete = (todos) => {
            console.log("On Delete Function!")

  }

  let todos = [
    {
      sno: 1,
      title: "Do Some Stuff @ 9",
      desc: "You need to done the job 1"
    },
    {
      sno: 2,
      title: "Do some stuff @ 10",
      desc: "You need to done the job 2"
    },
    {
      sno: 3,
      title: "Do some stuff @ 11",
      desc: "You need to done the job 3"
    }
  ]
  return (
    <div className="App">
      <Header title="My Todo List" />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;


// changed javaScript to javaScript React to use emit