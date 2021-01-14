import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import GiveFeedback from './components/pages/giveFeedback/GiveFeedback';
import Navbar from './components/common/Navbar/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route exact path="/giveFeedback" render={() => <GiveFeedback />} />
      </Switch>
    </Provider>
  );
}

export default App;
