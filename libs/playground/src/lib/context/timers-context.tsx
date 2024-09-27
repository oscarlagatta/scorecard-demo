import { createContext, ReactNode, useContext, useState } from 'react';

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error('TimersContext is null - that should not be the case!');
  }

  return timersCtx;
}

const { Provider } = TimersContext;

type TimersContextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const [timers, setTimers] = useState<Timer[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const addTimer = (timerData: Timer) => {
    setTimers([...timers, timerData]);
  };

  const startTimers = () => {
    setIsRunning(true);
  };

  const stopTimers = () => {
    setIsRunning(false);
  };

  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer,
    startTimers,
    stopTimers,
  };

  return <Provider value={ctx}>{children}</Provider>;
}
