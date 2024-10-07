import React from 'react';

const TimersContext = React.createContext({ timerA: 0, timerB: 0 });

export default function App() {
  return (
    <TimersContextProvider>
      <TimersContext.Consumer>
        {state => <Child timerB={state.timerB} />}
      </TimersContext.Consumer>
    </TimersContextProvider>
  );
}

const TimersContextProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const [timerA, setTimerA] = React.useState(0);
  const [timerB, setTimerB] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setTimerA(x => x + 1);
    }, 1_000);

    setInterval(() => {
      setTimerB(x => x + 1);
    }, 10_000);
  }, []);

  return (
    <TimersContext.Provider value={{ timerA, timerB }}>
      {children}
    </TimersContext.Provider>
  );
};

const Child = ({ timerB }: { timerB: number }) => {
  console.log('render');
  return <div>{timerB}</div>;
};
