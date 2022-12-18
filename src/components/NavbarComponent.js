import React, {  useState } from 'react'
import { Menu } from 'react-feather'
import { Row, OffcanvasHeader, NavItem, Navbar, Button, NavbarBrand, Offcanvas, OffcanvasBody } from 'reactstrap'
import { useSelector } from 'react-redux'
import LangModal from './LangModal'

const NavbarComponent = () => {
    // ** Store
    const store = useSelector(state => state.data);
    const { data, locale } = store;
    // ** States
    const [canvasOpen, setCanvasOpen] = useState(false);
    const [lang, setLang] = useState(false);


    const toggleMenuCanvas = () => {
        setCanvasOpen(!canvasOpen)
    }

    return (
        <Navbar expand="md" className='bg-white fixed-top '>
            {
                data?.user?.userLogo ? <div className='ps-2 pt-2' >
                    <img src={data.user.userLogo} style={{ width: 180, height: 30 }} alt='İşletme Logosu'
                    />
                </div>
                    : <NavbarBrand className='ms-2 fw-bolder'>{data?.user.companyName}</NavbarBrand>
            }
            <NavItem className='list-unstyled  me-md-5 '>

                <Button className='bg-white border-0 pe-1'>
                    <Menu className='hamburger_icon' color='#000000' onClick={toggleMenuCanvas} />
                </Button>

                { /*  MODAL && OFFCANVAS */}
                <Offcanvas direction='bottom' isOpen={canvasOpen} toggle={toggleMenuCanvas}>
                    <OffcanvasHeader toggle={toggleMenuCanvas}></OffcanvasHeader>
                    <OffcanvasBody className='d-flex justify-content-center align-items-center'  >
                        <i className="bi bi-translate text-dark fs-2  fw-normal"
                            onClick={() => setLang(!lang)}
                        >
                            <span className='text-capitalize ms-1 '>
                                {locale === 'tr' && 'Türkçe'}
                                {locale === 'en' && 'English'}
                                {locale === 'ru' && 'Русский'}
                                {locale === 'fr' && 'Français'}
                                {locale === 'de' && 'Deutsch'}
                                {locale === 'ar' && 'عربي'}
                            </span>
                        </i>
                    </OffcanvasBody>
                    <Row className=' text-center pb-5'>
                        <strong >{data.user.companyName}</strong>
                        <span className='mt-2'>{data.user.contact.address}</span>
                        <a className='text-decoration-none mt-3' href={`tel:+9${data.user.contact.phone}`}>{data.user.contact.phone}</a>
                    </Row>
                </Offcanvas>
                {lang ? <LangModal /> : null}

            </NavItem>
        </Navbar>
    )
}

export default NavbarComponent

