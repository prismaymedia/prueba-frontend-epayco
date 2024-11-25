import { createRoot } from 'react-dom/client';
import { App } from './pages/App';


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);

//const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// root.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
// );
