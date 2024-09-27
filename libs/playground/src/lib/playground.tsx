import { Header } from './components/header';
import { AddTimer } from './components/add-timer';
import { Timers } from './components/timers';
import TimersContextProvider from './context/timers-context';


export function Playground() {
  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer/>
        <Timers />
      </main>
    </TimersContextProvider>
  );
}

export default Playground;
