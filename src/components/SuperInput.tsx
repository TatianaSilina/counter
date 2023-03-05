import React, {ChangeEvent} from 'react';

type SuperInputPropsType = {
    spanValue: string
    onChange:(e: ChangeEvent<HTMLInputElement>) => void
    inputError: boolean
    value: number
}


export const SuperInput = (props: SuperInputPropsType) => {

    return (
        <div>
            <span>{props.spanValue}</span> <input value={props.value} type={"number"} onChange={props.onChange} className={props.inputError ? 'inputErr' :'input'}/>
        </div>
    );
};

