import React from 'react';
import s from './App.module.scss';
import {StudyPrograms} from "./components/StudyPrograms/StudyPrograms";

function App() {
    return (
        <div className={s.App}>
            <div className={s.mainContainer}>
                <header className={s.header}>
                    <span>Специализированные дисциплины</span>
                </header>
                <StudyPrograms/>
                {/*<PracticeModules/>*/}
            </div>
        </div>
    );
}

export default App;
