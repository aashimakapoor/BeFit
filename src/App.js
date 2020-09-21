import React ,{Component} from 'react';
import './App.css';
// routes
import HomeView from "./pages/homeView/homeView";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeView />
      </React.Fragment>
    );
  }
}

export default App;