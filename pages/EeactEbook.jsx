import { ReactReader } from 'react-reader'

const ReactEbook = () => {

    return (
        <div style={{ height: '100vh' }}>
            <ReactReader
                url="https://react-reader.metabits.no/files/alice.epub"
            />
        </div>
    )
}

export default ReactEbook