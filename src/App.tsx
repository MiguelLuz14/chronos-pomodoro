import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';

export { Timer } from 'lucide-react';
export { Clock } from 'lucide-react';
export { Play } from 'lucide-react';
export { Pause } from 'lucide-react';
export { Square } from 'lucide-react';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formrow'>
            <label htmlFor='meuInput'>task</label>
            <input id='meuInput' type='text' />
          </div>
          <div className='formrow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formrow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>
          <div className='formrow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
