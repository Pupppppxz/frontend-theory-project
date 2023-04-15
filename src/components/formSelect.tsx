import React from "react";
import Select, { GroupBase, OptionsOrGroups, PropsValue } from "react-select";
// import { ISelectOption } from "interfaces/form";
// import { ValueType } from 'react-select/lib/types';

interface CustomSelectProps {
    id: string;
    name: string;
    value: PropsValue<string> | undefined;
    options: OptionsOrGroups<string, GroupBase<string>> | undefined;
    isMulti?: boolean;
    className?: string;
    onChange?: any;
    onBlur?: any;
    placeholder?: string;
}

export const CustomSelect = ({
    id,
    name,
    value,
    options,
    isMulti,
    className,
    onChange,
    onBlur,
    placeholder
}: CustomSelectProps) => {
    const handleChange = (val: any) => {
        onChange(name, val);
    };

    const handleBlur = () => {
        onBlur(name, true);
    };

    return (
        <Select
            id={id}
            className={className}
            options={options}
            isMulti={isMulti}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
            placeholder={placeholder}
        />
    );
};
