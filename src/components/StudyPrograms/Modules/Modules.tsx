import React, {useMemo} from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../store/store";
import {ProgramsType} from "../../../api/programs-api";
import {makeModulesArr} from "../../../utils/utils";
import s from './Modules.module.scss';
import {Module} from "./Module/Module";

type ModulesPropsType = {
    programID: string
    numberOfModules: number
}

export const Modules = React.memo(({programID, numberOfModules}: ModulesPropsType) => {

    const program = useSelector<AppStateType, ProgramsType>(state =>
        state.programs.filter(p => p._id === programID)[0])

    const modulesForRender = useMemo(() => makeModulesArr(numberOfModules, program).map((m, i) =>
            <Module key={i}
                    module={m}/>
        ),
        [numberOfModules, program,])

    return (
        <div className={s.modulesWrapper}>
            {modulesForRender}
        </div>
    );
});
