import React from 'react'
import { Container } from 'react-bootstrap'

interface Header {
    title: string
}

const MainHeader: React.FC<Header> = ({title}) => {
    return (
        <Container fluid className="p-4 bg my-3 mt-0">
            <Container>
                <h1 className='title'>{title}</h1>
            </Container>
        </Container>
    )
}

export default MainHeader