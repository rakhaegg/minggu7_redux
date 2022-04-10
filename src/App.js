import logo from './logo.svg';
import './App.css';
import CreateTodo from './containers/CreateTodo';
import Table from './containers/Table';

function App() {
  return (
   
      <div>
          <div>
            <CreateTodo/>
          </div>
          <div>
            <Table/>
          </div>
      </div>
  );
}

export default App;
