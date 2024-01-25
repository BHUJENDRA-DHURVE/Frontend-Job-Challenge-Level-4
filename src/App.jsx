import React,{useState} from 'react';


const App = () => {
  const [title, setTitle] = useState("");
  const [selectPriority, setSelectPriority] = useState('Low Priority');
  const [lowPriorityTasks, setLowPriorityTasks] = useState([]);
  const [mediumPriorityTasks, setMediumPriorityTasks] = useState([]);
  const [highPriorityTasks, setHighPriorityTasks] = useState([]);


  const addTask =()=>{
    if(title.trim()!==""){
      const newTask = {title,priority:selectPriority};
      switch(selectPriority){
        case 'Low Priority':
          setLowPriorityTasks([...lowPriorityTasks,newTask]);
          break;
          case 'Medium Priority':
          setMediumPriorityTasks([...mediumPriorityTasks,newTask]);
          break;
          case 'High Priority':
          setHighPriorityTasks([...highPriorityTasks,newTask]);
          break;
          default:
            break;
      }
      setTitle("");
    }
  };

  const deleteTask = (priority, index)=>{
    switch(priority){
      case 'Low Priority':
        setLowPriorityTasks(lowPriorityTasks.filter((_, i)=>i !== index));
        break;
        case 'Medium Priority':
          setMediumPriorityTasks(mediumPriorityTasks.filter((_, i)=>i !== index));
          break;
          case 'High Priority':
            setHighPriorityTasks(highPriorityTasks.filter((_, i)=>i !== index));
            break;
            default:
              break;
    }
  };

  return (
    <div>
      <div className="container">
      <div className="container text-center">
        <h2>Priority To-Do List</h2>
  <div className="row">
    <div className="col">
      <input className="form-control" type="text" placeholder='Add a new Task' value ={title} onChange ={(e)=>{setTitle(e.target.value);}} />
    </div>
    <div className="col col-md-auto">
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {selectPriority}
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#" onClick={()=> setSelectPriority('Low Priority')}>Low Priority</a></li>
    <li><a className="dropdown-item" href="#" onClick={()=> setSelectPriority('Medium Priority')}>Medium Priority</a></li>
    <li><a className="dropdown-item" href="#" onClick={()=> setSelectPriority('High Priority')}>High Priority</a></li>
  </ul>
</div>
    </div>
    <div className="col">
<button type="button" className="btn btn-primary" onClick={addTask}>Add</button>
    </div>
  </div>
</div>
<br />
<br />
<div className="container text-Start">
  <div className="row align-items-start">
    <div className="col">
      <h4>Low Priority</h4>
      <ul className="list-group mt-3">
        {lowPriorityTasks.map((task,index) => (
          <li key ={index} className= "list-group-item d-flex justify-content-between align-items-center">
            {task.title}
            <button type="button" className="btn btn-danger" onClick ={()=>deleteTask('Low Priority' ,index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    <div className="col">
    <h4>Medium Priority</h4>
    <ul className="list-group mt-3">
        {mediumPriorityTasks.map((task,index) => (
          <li key ={index} className= "list-group-item d-flex justify-content-between align-items-center">
            {task.title}
            <button type="button" className="btn btn-danger" onClick ={()=>deleteTask('Medium Priority' ,index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    <div className="col">
    <h4>High Priority</h4>
    <ul className="list-group mt-3">
        {highPriorityTasks.map((task,index) => (
          <li key ={index} className= "list-group-item d-flex justify-content-between align-items-center">
            {task.title}
            <button type="button" className="btn btn-danger" onClick ={()=>deleteTask('High Priority' ,index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default App