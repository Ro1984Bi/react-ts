
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Task} from './interfaces/Task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

interface Props {
  title?: string
}

 

export function App({title}: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title:"Learn React",
      description: "Learn React",
      completed: false
  
  
  
    }
  ])
  
  const getCurrent = (): number => new Date().getTime();

  const newAddTask = (task: Task) => setTasks([...tasks, {...task, id: getCurrent() , completed: false}])

  const deleteTask = (id: number) => setTasks (tasks.filter(task => task.id !== id));


  return (
    <div className="bg-dark text-white" style={{ height: "100vh"}}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
           <img src={logo} alt="React logo" style={{ width: "4rem"}}/>
             {title && <h1>{title}</h1>}
          </a>
        </div>
      </nav>
    

    <main className="container p-4">
      <div className="row">
       <div className="col-md-4">
         <TaskForm newAddTask= {newAddTask} />
       </div>
       <div className="col-md-8">
         <div className="row">
           <TaskList tasks={tasks} deleteTask={deleteTask}/>
         </div>
       </div>
      </div>
      </main>
    </div>
  );

  }
