import React, {useState} from "react";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [inputValue, setInputValue] = useState('');
  
	const handleInputChange = (e) => {
	  setInputValue(e.target.value);
	};
  
	const handleAddTask = (e) => {
	  if (e.key === 'Enter' && inputValue.trim() !== '') {
		setTasks([...tasks, inputValue.trim()]);
		setInputValue('');
	  }
	};
  
	const handleDeleteTask = (index) => {
	  setTasks(tasks.filter((_, i) => i !== index));
	};
  
	return (
	  <div className="todo-container">
		<h1 className="todo-title">todos</h1>
		<div className="todo-input-container">
		  <input
			type="text"
			className="todo-input"
			placeholder="What needs to be done?"
			value={inputValue}
			onChange={handleInputChange}
			onKeyDown={handleAddTask}
		  />
		</div>
		<ul className="todo-list">
		  {tasks.length === 0 ? (
			<li className="todo-item no-tasks">No tasks, add a task</li>
		  ) : (
			tasks.map((task, index) => (
			  <li key={index} className="todo-item">
				{task}
				<span
				  className="delete-icon"
				  onClick={() => handleDeleteTask(index)}
				>
				  &#x2716;
				</span>
			  </li>
			))
		  )}
		</ul>
		<div className="todo-footer">
		  {tasks.length} item{tasks.length !== 1 && 's'} left
		</div>
	  </div>
	);
  };
  export default Home;
