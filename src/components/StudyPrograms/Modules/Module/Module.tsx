import React, {useState} from 'react';
import s from "./Module.module.scss";
import imgPlus from "../../../../icons/plus.svg";
import imgMinus from "../../../../icons/minus.svg";


type ModulePropsType={
module: {[p: number]: JSX.Element[]}
}

export const Module = ({module}: ModulePropsType) => {

    const [moduleCollapsed, setCollapsed] = useState<boolean>(true)
    const changeModuleView = () => {
        setCollapsed(!moduleCollapsed)
    }

    const defineModuleClass= moduleCollapsed ? s.module : `${s.module} ${s.show}`


    return (
        <article className={defineModuleClass}>
            <span className={s.desktopSpan}>{`${Object.keys(module)} модуль`}</span>
            <div onClick={changeModuleView}
                 className={s.mobileView}>
                <img className={s.imgPlus} src={imgPlus} alt="symbol plus"/>
                <img className={s.imgMinus} src={imgMinus} alt="symbol minus"/>
                <span className={s.mobileSpan}>{`${Object.keys(module)} модуль`}</span>
            </div>
            <ul>
                {Object.values(module)}
            </ul>
        </article>
    );
};
