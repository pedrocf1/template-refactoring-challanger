import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/index';

import GlobalStyle from './styles/global';

const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
