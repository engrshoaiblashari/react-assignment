import logo from './logo.svg';
import './App.css';
import './Custom.css';

function App(props) {
  return <div className="marginText">
    Welcome <strong>{props.name}</strong>
    <hr />
    <h1> Todo List</h1>
    <ul>
      <li>Go to Academy</li>
      <li>Assign tasks to Students</li>
      <li>Learn React.JS</li>
    </ul>
    <hr />
    <h2> Exams Result </h2>
    <p> Total Marks: {props.total}</p>
    <p> Obtained Marks: {props.obtained}</p>
    <p> Total Percentage: {props.obtained / props.total * 100}%</p>
    <hr />
  </div>
}

export default App;
