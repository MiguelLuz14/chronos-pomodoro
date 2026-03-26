import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Ola mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A pariatur
        harum inventore quasi natus hic laborum debitis quos provident possimus,
        labore in nemo! At optio voluptatem possimus aspernatur id quo!
      </p>
    </>
  );
}
