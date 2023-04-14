import React from 'react';
import styles from './App.module.scss';
import Header from './components/header/Header';
import Body from './components/body/Body';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
