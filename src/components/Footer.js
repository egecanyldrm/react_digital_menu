import React, { Fragment } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Row, Col } from 'reactstrap';
const Footer = () => {
    const date = new Date;
    return (
        <Fragment>
            <Col lg='12' md='12' xs='12' className=" kreatif-footer d-flex justify-content-center shadow  text-dark bg-light py-3 mt-5 border-top">
                <span  >{date.getFullYear()} {' '} <a className='text-decoration-none ' href='https://kreatifdestek.com/' >  Kreatif Destek </a> Tüm Hakları Saklıdır.</span>
            </Col>
        </Fragment>
    )
}

export default Footer