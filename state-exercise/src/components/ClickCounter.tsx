type Props = {
    handleClickCounter: () => void
}

const ClickCounter = (props: Props) => {
    return (
        <div>
            <button onClick={props.handleClickCounter}>Click Counter</button>
        </div>
    )
}

export default ClickCounter