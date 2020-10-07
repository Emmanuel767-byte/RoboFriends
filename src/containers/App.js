import React from 'react';
import CardlistArrays from '../components/CardlistArray';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

{/*
//NEW METHOD / AFTER UPDATE
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
*/}


/* PREVIOUS METHOD /BEFORE UPDATE */
class App extends React.Component {
 constructor(){
   super()
   this.state = {
      robots: [],
      searchfield: '' 
   }
 }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(Response=>Response.json())//return fetch('') and convert it to an object we can use 
  .then(users=> this.setState({robots: users}));//Applies converted object to application
 }

 onSearchChange=(event)=>{
   this.setState({searchfield: event.target.value})
 }
  render() {
    const {robots, searchfield}= this.state;
    const filterSearch = robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    //CREATING LOADING function for Page
    if (robots.length=== 0) {
      return <h1>Loading</h1>
    } else {
        return (
        <div className="tc">
          <h2 className="bg-light-green dib br2 " >RoboFriends</h2>
          <Searchbox searchChanged={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardlistArrays robots={filterSearch}/>
            </ErrorBoundry>
          </Scroll>
          </div>
        );
    }
  };
}
 
export default App;
