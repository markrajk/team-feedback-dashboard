import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import GiveFeedback from './components/pages/GiveFeedback/GiveFeedback';
import FeedbackData from './components/pages/FeedbackData/FeedbackData';
import Widgets from './components/pages/Widgets/Widgets';
import Navbar from './components/common/Navbar/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route exact path="/giveFeedback" render={() => <GiveFeedback />} />
        <Route
          exact
          path="/feedbackData"
          render={(routeProps) => <FeedbackData routeProps={routeProps} />}
        />
        <Route
          exact
          path="/widgets"
          render={(routeProps) => <Widgets routeProps={routeProps} />}
        />
      </Switch>
    </Provider>
  );
}

export default App;
