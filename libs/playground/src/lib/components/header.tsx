import { useTimersContext } from '../context/timers-context';
import Button from './ui/button';

export const Header = () => {
  const timersContext = useTimersContext();

  return (
    <header>
      <h1>Welcome to Playground !</h1>
      <Button>{timersContext.isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
};
