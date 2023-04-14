import { Route, Routes } from 'react-router-dom';
import styles from './Body.module.scss';
import Home from '../home/Home';

const Body = () => {
    return (
        <div className={styles.body}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home />
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default Body;