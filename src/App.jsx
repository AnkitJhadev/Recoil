import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atom/count'

function App() {

  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  )
}

function Count() {
  return (
    <div>
      <CountReducer />
      <Button />
    </div>
  )
}

function CountReducer() {
  const count = useRecoilValue(countAtom);

  return <div>{count}</div>
}

function Button() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  const isEven = useRecoilValue(evenSelector);

  return (
    <>
      <button onClick={() => setCount(count => count+1)}>Increase Count</button>
      <button onClick={() => setCount(count => count-1)}>Decrease Count</button>
      {
        isEven ? <h1>Is Even</h1> : <h1>Is Odd</h1>
      }
    </>
  )
}

export default App
