import { useState } from 'react'
import './App.css'

async function getWakeLock() {
  try {
    const wakeLock = await navigator.wakeLock.request("screen");
    console.log(wakeLock);
  } catch (err: any) {
    // the wake lock request fails - usually system related, such being low on battery
    console.log(`${err.name}, ${err.message}`);
  }
}
getWakeLock();

function App() {
  const [pass, setPass] = useState(false)
  return (
      <div className={`main ${pass ? 'pass' : 'active'}`} onClick={() => setPass(!pass)}>
        {pass ? 'PASS' : 'ACTIVE'}
      </div>
  )
}

export default App;
