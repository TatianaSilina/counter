type PropsType={
    name: string,
    callBack: () => void
    disabledButton: boolean

}
export const Button = (props:PropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button className="buttons" disabled={props.disabledButton} onClick={onClickHandler}>{props.name}</button>
    )
}