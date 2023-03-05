import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "./Button";
import {SuperInput} from "./SuperInput";
type SettingsCounterPropsType = {
    setStartValue:(number: number)=>void
    startValue: number
    setCount: (number: number)=>void
    count: number
    setMaxValue:(number: number)=>void
    error: string | null
    setError: ( error: string | null)=>void
    inputError: boolean
    maxValue: number
}
export const SettingsCounter = (props:SettingsCounterPropsType) => {

    useEffect(() => {
        let valueAsString = localStorage.getItem('inputStartValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            props.setStartValue(newValue)
        }
    }, [])
    useEffect(() => {
        let valueAsString = localStorage.getItem('inputMaxValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            props.setMaxValue(newValue)
        }
    }, [])


    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(Number(e.currentTarget.value))

    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {

        props.setMaxValue(Number(e.currentTarget.value))

    }

    const callBackHandler = () => {
        props.setCount(props.startValue)
        localStorage.setItem('inputMaxValue', JSON.stringify(props.maxValue))
        localStorage.setItem('inputStartValue', JSON.stringify(props.startValue))

    }

    return (
        <div className="Container">
            <div className='wrapper'>
                <div className="countWrapper">
                    <div className={"inputWrapper"}>
                        <SuperInput value={props.startValue} inputError={props.inputError} onChange={onChangeStartValue} spanValue={"start value:"}/>
                        <SuperInput value={props.maxValue} inputError={props.inputError} onChange={onChangeMaxValue} spanValue={"max value:"}/>

                    </div>
                </div>
                <div className="buttonsWrapper" >
                    <Button disabledButton={props.inputError} name={"set"} callBack={callBackHandler}/>
                </div>
            </div>
        </div>

    );
};