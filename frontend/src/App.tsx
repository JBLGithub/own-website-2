import React from 'react';
import styles from './App.module.scss';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
