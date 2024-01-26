import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  return (
    <div>
     <Item name="lucky"></Item>
     <ItemDate day="21" month="June" year="2002"></ItemDate>
     <Item name="Bicky"></Item>
     <ItemDate day="5" month="Aug" year="2003"></ItemDate>
     <Item name="Aryan"></Item>
     <ItemDate day="2" month="June" year="2022"></ItemDate>

     <div className="App">Hello Jee</div>
    </div>
  );
}

export default App;
