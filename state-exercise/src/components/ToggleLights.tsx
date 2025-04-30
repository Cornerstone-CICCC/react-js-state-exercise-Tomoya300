type Props = {
    onToggle: () => void
}

const ToggleLights = (props: Props) => {
    return (
        <div>
            <button onClick={props.onToggle}>Toggle Lights</button>
        </div>
    )
}

export default ToggleLights