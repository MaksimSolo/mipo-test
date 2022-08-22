import React from 'react';
import s from './App.module.scss';
import {StudyPrograms} from "./components/StudyPrograms/StudyPrograms";
import {AdditionalInfo} from "./components/AdditionalInfo/AdditionalInfo";

function App() {
    return (
        <main className={s.App}>
            <div className={s.container}>
                <h2 className={s.titleMain}>Специализированные дисциплины</h2>
                <StudyPrograms/>
                <AdditionalInfo/>
            </div>
        </main>
    );
}

export default App;
