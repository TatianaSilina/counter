import React, {useState} from 'react';
import {Button} from "./Button";

type CounterPropsType = {
    count: number,
    setCount: (value: number) => void
    maxValue: number
    error: string | null
    setError: (error: string | null) => void
    startValue: number
    inputError: boolean
    setInputError: (inputError: boolean) => void
}

export const Counter = (props: CounterPropsType) => {

    const incorrectValue =
        props.startValue < 0
        || props.maxValue < 0
        || props.startValue > props.maxValue
        || (props.startValue === props.maxValue
        && props.maxValue !== 0);

    if (incorrectValue) {
        props.setError("Incorrect value")
        props.setInputError(true)
    }
    else if (props.maxValue === 0) {
        props.setError("enter values and press set")
    }
    else {
        props.setError(null)
        props.setInputError(false)
    }


    return (
        <div className="Container">
            <div className='wrapper'>
                <div className="countWrapper">
                    <div
                        className={props.count === props.maxValue && props.count !== 0 ? 'err' : ''}> {props.error ? (
                            <div className={'counterText'}>{props.error}</div>) :
                        (<div>{props.count}</div>)
                    }</div>
                </div>
                <div className="buttonsWrapper">
                    <Button disabledButton={props.count === props.maxValue} name={"inc"}
                            callBack={() => props.setCount(props.count + 1)}/>
                    <Button disabledButton={props.count === 0} name={"reset"} callBack={() => props.setCount(0)}/>
                </div>
            </div>
        </div>

    );
};

