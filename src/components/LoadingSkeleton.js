import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import { Col, Container, Row } from 'reactstrap';
const LoadingSkeleton = ({ loading, children }) => {
    if (loading) {
        return (

            <Container tag='main' fluid>
                <Row xs={12}>
                    <Skeleton variant="rounded" width='100%' height={70} />
                </Row>
                <Row className='mt-2 '>
                    {
                        [...Array(8)].map((item, key) => (
                            <Col xs={6} className='my-2 d-flex justify-content-center ' key={key}>
                                <Skeleton variant="rounded" width={250} height={190} />
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        )
    }
    return (
        <>
            {children}
        </>
    )
}

export default LoadingSkeleton