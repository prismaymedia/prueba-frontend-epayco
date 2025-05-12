import Provider from './context/store';
import Home from './components/page//home';

const App = () => {
  return (
    <Provider>
        <Home />
    </Provider>
    
  );
};

export default App;