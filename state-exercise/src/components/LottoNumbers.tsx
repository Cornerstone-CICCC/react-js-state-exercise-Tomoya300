type Props = {
    getNumbers: () => void
}

const LottoNumbers = (props: Props) => {
    return (
        <div>
            <button onClick={props.getNumbers}>Generate Lotto Numbers</button>
        </div>
    )
}

export default LottoNumbers