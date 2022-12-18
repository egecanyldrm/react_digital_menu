// import { useRouter } from 'next/router'
import { Fragment, useEffect, useState, } from 'react'
import { Card, Row, Col, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap'
import Footer from '../components/Footer'
import SocialFooter from '../components/SocialFooter'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import NavbarComponent from '../components/NavbarComponent'
import { Container } from 'reactstrap'
import Products from '../components/Products'
import { useSelector, useDispatch } from 'react-redux'
import LangModal from '../components/LangModal'
import { changeLocale } from '../store/reducers/DataReducer'

const Athena = () => {

    // ** Store 
    const store = useSelector(state => state.data);
    const dispatch = useDispatch()
    const { locale, data, localedetection } = store;

    // ** States
    const [category, setCategory] = useState(null)

    // ** Handlers && Functions
    const handleShowProduct = (id) => setCategory(data.categories.find(category => category._id === id))
    const toggleProductCanvas = () => setCategory(null)

    // ** Side Effects

    useEffect(() => {
        if (localedetection) {
            dispatch(changeLocale(window.navigator.language))
        }
    }, [])


    return (
        <Fragment>
            <Container tag='main' className=' fw-bold' >
                <NavbarComponent />
                <Row className=' mt-5 pt-4 justify-content-center'  >
                    {data.categories.map((category, key) => (
                        <Col xs={6} key={key} className='mb-3 px-1' >
                            <Card className='border-0' onClick={() => handleShowProduct(category._id)}>
                                <LazyLoadImage
                                    src={category.imageUrl}
                                    className='img-fluid rounded-3 category-image'
                                    effect='blur'
                                    alt="Kategori resimi"
                                />
                                <div className="card-img-overlay d-flex ">
                                    <h5 className="card-title m-auto text-white text-center text-center">{category[locale].name}</h5>
                                </div>
                            </Card>
                        </Col>)
                    )
                    }
                </Row>
                <Offcanvas direction='top' isOpen={category ? true : false} toggle={toggleProductCanvas}>
                    <OffcanvasHeader toggle={toggleProductCanvas}> <span className='mt-3 ms-2'>{category ? category[locale].name : ''}</span> </OffcanvasHeader>
                    <OffcanvasBody >
                        {category ? <Products category={category} locale={locale} /> : null}
                    </OffcanvasBody>
                </Offcanvas>
                <Row tag='footer' className=" mt-4 text-black ">
                    {data.user.themeSettings.general.footerSocial && <SocialFooter data={data} />}
                </Row>
                <Footer />
            </Container >
            {!localedetection ? <LangModal /> : null}
        </Fragment >
    )
}

export default Athena

