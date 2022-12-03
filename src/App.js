import { useState } from 'react'

import Logo from './Logo.js'
import styles from './App.module.scss'

const App = () => {
  const [color, setColor] = useState('orange')
  const [logoSize, setLogoSize] = useState('40vmin')

  return (
    <div className={styles.app}>
      <header>
        <Logo className={styles.logo} style={{ '--logo-color': color, '--logo-size': logoSize }} />
      </header>
      <div>
        <button onClick={() => setColor('orange')}>orange</button>
        <button onClick={() => setColor('blueviolet')}>blueviolet</button>
        <button onClick={() => setColor('red')}>red</button>
      </div>
      <div>
        <input
          name="size"
          min="0"
          max="100"
          type="range"
          defaultValue="40"
          onChange={e => setLogoSize(`${e.currentTarget.value}vmin`)}
        />
      </div>
    </div>
  )
}

export default App
