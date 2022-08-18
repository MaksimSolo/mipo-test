import {ProgramsType} from "../api/programs-api";
import React from "react";

export const makeModulesArr = (number: number, program: ProgramsType) => {
    const subjectQuantity = program.specializedSubjects.length / number;
    const modules = []
    const copySubjectsArr = [...program.specializedSubjects]
    for (let i = 1; i <= number; i++) {
        const module = {
            [i]: copySubjectsArr.splice(0, subjectQuantity)
                .map(s => <li key={s._id}>
                {s.string}
                </li>)
        }
        modules.push(module)
    }
    return modules
}