import {createRoot} from 'react-dom/client';
import App from './App';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return Promise.resolve();
  }

  const {START_OPTIONS} = await import('./mocks/constants');
  const {worker} = await import('./mocks/browser');

  return worker.start(START_OPTIONS);
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(<App />);
});
