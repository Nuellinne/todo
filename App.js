import react, {useState} from 'react';
import './App.css';


function App() {
// State hook = 'useState'
const [newItem, setNewItem] = useState("")
const [Items, setItems] = useState([])

//helper functions
function addItem() {

  if(!newItem) {
    alert('Please enter an item.')
    return;
  }

  const item = {
    id: Math.floor(Math.random() * 1000 ),
    value: newItem
  };

  setItems(oldList => [...oldList, item]);
  setNewItem("")
  
} 
function deleteItem(id) {
  const newArray = Items.filter(Item => Item.id !== id)
  setItems(newArray)
}

  return (
    <div className="App">
  
     <h1>TODO APP</h1>


     <input type = 'text'  placeholder='Add an item' value = {newItem} onChange= {event => setNewItem(event.target.value)}/>
      
      <button class='addtodo' onClick={()=> addItem()}>
        Add Todo
      </button>

      <ul>
      {Items.map(item => {
        return(
          <li key={item.id}>
             {item.value} <button class ='deletebutton' onClick={() => deleteItem(item.id)} >Delete</button>
          </li>
        )
      }
      
        )}
        
      </ul>
     

    </div>
  );
}

export default App;

