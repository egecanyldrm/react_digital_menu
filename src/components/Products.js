import React from 'react'
import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap';

const Products = ({ category, locale }) => {
    return (
        <Container>
            {
                category.categoryProducts.map((product, key) => {
                    const variant = product.variant?.length > 0;
                    return (
                        <Row className='product mb-4 ' key={key} >
                            <Col xs={variant ? 12 : 10} className=' d-flex align-items-center justify-content-start' >
                                {
                                    <Card className='border-0 me-0 '>
                                        <CardBody className='ps-1'>
                                            <div className='lh-1  product-title'>{product[locale].name}</div>
                                            {
                                                product[locale].description.length > 1 && // Açıklama varsa devreye giriyor
                                                <CardText className='product-description mt-2 lh-sm'>
                                                    {product[locale].description}
                                                </CardText>
                                            }
                                        </CardBody>
                                    </Card>

                                }
                            </Col>
                            <Col xs={variant ? 12 : 2} className=' d-flex align-items-center justify-content-center' >
                                {
                                    variant ?
                                        <Row className='w-100'>
                                            {
                                                product.variant.map((variant, key) => {
                                                    return (
                                                        <Col xs={12} key={key} className='my-1 d-flex justify-content-between'>
                                                            <span >
                                                                {variant.key}
                                                            </span>
                                                            <span>
                                                                {variant.value + '₺'}
                                                            </span>
                                                        </Col>
                                                    )
                                                })
                                            }
                                        </Row>
                                        :
                                        <span className=' product-price  ' >
                                            {product.price + '₺'}
                                        </span>
                                }
                            </Col>
                        </Row>

                    )
                })
            }
        </Container>
    )
}

export default Products

