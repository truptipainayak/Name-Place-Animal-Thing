//if file retuens class or component name file with capital

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';

// import TodoHeader from './TodoHeader';
// import TodoList from './TodoList';
// import TodoForm from './TodoForm';

// const Header = () => <h2>Header</h2> 
const Dashboard = () => <h2>Dashboard</h2> 
const SurevyNew = () => <h2>SurevyNew</h2> 
const Landing = () => <h2>Landing</h2> 


class App extends Component {
  componentDidMount(){
this.props.fetchUser();
  }
  render(){
    return(
<div className="container">
  <BrowserRouter><div>
    <Header></Header>
    <Route exact={true} path="/" component={ Landing }></Route>
    <Route path="/surveys" component={ Dashboard }></Route>
    
    </div></BrowserRouter>
</div>
    );
  }
};

  
// class App extends React.Component {
//   constructor (props) {
//     super(props);
//     this.addItem = this.addItem.bind(this);
//      this.removeItem = this.removeItem.bind(this);
//      this.markTodoDone = this.markTodoDone.bind(this);
//     this.state = {todoItems: todoItems};
//   }
//   addItem(todoItem) {
//     todoItems.unshift({
//       index: todoItems.length+1, 
//       value: todoItem.newItemValue, 
//       done: false
//     });
//     this.setState({todoItems: todoItems});
//   }
//   removeItem (itemIndex) {
//     todoItems.splice(itemIndex, 1);
//     this.setState({todoItems: todoItems});
//   }
//   markTodoDone(itemIndex) {
//     var todo = todoItems[itemIndex];
//     todoItems.splice(itemIndex, 1);
//     todo.done = !todo.done;
//     todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
//     this.setState({todoItems: todoItems});  
//   }
//   render() {
//     return (
//       <div id="main">
//         <TodoHeader />
//        <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
//         <TodoForm addItem={this.addItem} />
//       </div>
//     );
//   }
// }

export default connect(null,actions)(App);

  // ReactDOM.render(<App initItems={todoItems}/>, document.getElementById('root'));

// class App extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { items: [], text: '' };
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     render() {
//       return (
//         <div>
//           <h3>TODO</h3>
//           <TodoList items={this.state.items} />
//           <form onSubmit={this.handleSubmit}>
//             <label htmlFor="new-todo">
//               What needs to be done?
//             </label>
//             <input
//               id="new-todo"
//               onChange={this.handleChange}
//               value={this.state.text}
//             />
//             <button>
//               Add #{this.state.items.length + 1}
//             </button>
//           </form>
//         </div>
//       );
//     }
  
//     handleChange(e) {
//       this.setState({ text: e.target.value });
//     }
  
//     handleSubmit(e) {
//       e.preventDefault();
//       if (this.state.text.length === 0) {
//         return;
//       }
//       const newItem = {
//         text: this.state.text,
//         id: Date.now()
//       };
//       this.setState(state => ({
//         items: state.items.concat(newItem),
//         text: ''
//       }));
//     }
//   }

  
//   class TodoList extends React.Component {
//     render() {
//       return (
//         <ul>
//           {this.props.items.map(item => (
//             <li key={item.id}>{item.text}</li>
//           ))}
//         </ul>
//       );
//     }
//   }