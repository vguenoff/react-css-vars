import { useEffect } from 'react'

import Logo from './Logo.js'
import styles from './App.module.scss'

const App = () => {
    // useEffect(() => {
    //     const color = getComputedStyle(
    //         document.documentElement,
    //     ).getPropertyValue('--logo-color')

    //     console.log(color)
    // }, [])

    const setColor = newColor => {
        document.documentElement.style.setProperty('--logo-color', newColor)
    }

    const handleOnSizeChange = e => {
        document.documentElement.style.setProperty(
            '--logo-size',
            `${e.currentTarget.value}vmin`,
        )
    }

    return (
        <div className={styles.app}>
            <header>
                <Logo className={styles.logo} />
            </header>
            <div>
                <button onClick={() => setColor('orange')}>orange</button>
                <button onClick={() => setColor('blueviolet')}>
                    blueviolet
                </button>
                <button onClick={() => setColor('red')}>red</button>
            </div>
            <div>
                <input
                    name="size"
                    min="0"
                    max="100"
                    type="range"
                    defaultValue="40"
                    onChange={handleOnSizeChange}
                />
            </div>
        </div>
    )
}

export default App
