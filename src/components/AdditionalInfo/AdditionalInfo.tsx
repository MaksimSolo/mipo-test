import React from 'react';
import s from './AdditionalInfo.module.scss';

export const AdditionalInfo = () => {
    return (
        <aside className={s.additionalInfo}>
            <article className={s.practice}>
                <h2>Практические модули</h2>
                <p>
                    Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе
                </p>
            </article>
            <article className={s.attestation}>
                <h2>Итоговая аттестация</h2>
                <ul>
                    <li>
                        Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по
                        бизнес-проектированию)
                    </li>
                    <li>
                        Защита итоговой аттестационной работы
                    </li>
                </ul>
            </article>
        </aside>
    );
};

