import { Route, Routes } from 'react-router-dom';
import styles from './Body.module.scss';

const Body = () => {
    return (
        <div className={styles.body}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <p>body</p>
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default Body;