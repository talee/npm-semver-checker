import React, {useState} from 'react'
import './App.css'

const semver = require('semver')

function App() {
  const [version, setVersion] = useState<string>('1.2.3-dev.90')
  const [range, setRange] = useState<string>('>= 1.2.3-dev.0')
  const hasMatched = semver.satisfies(version, range)
  function onVersionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setVersion(event.currentTarget.value)
  }
  function onRangeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRange(event.currentTarget.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>NPM Semver Checker</h1>
        <section>
          <label>
            <code>Version Range</code>
            <input className='code' type='text' onChange={onRangeChange} value={range}/>
          </label>
          <label>
            <code>Version</code>
            <input className='code' type='text' onChange={onVersionChange} value={version}/>
          </label>
        </section>
        <h3 className={hasMatched ? 'valid' : 'invalid'}>{hasMatched ? '✓ Matched Version' : '𝗫 Unmatched Version'}</h3>
        <div className='docs'>
          <p>Checks whether a version matches the range specified in NPM.</p>
          <span>
            <a href='https://docs.npmjs.com/misc/semver#prerelease-tags' target='_blank' rel='noopener noreferrer'>Documentation</a> on how NPM semver for prereleases is implemented.
          </span>
        </div>
      </header>
      <p>Made with <span role='img' aria-label='red heart'>❤️</span>️ in San Francisco</p>
      <p>Written by <a className='dark' href='https://tlee.io' target='_blank'  rel='noopener noreferrer'>Thomas Lee</a></p>
    </div>
  )
}

export default App