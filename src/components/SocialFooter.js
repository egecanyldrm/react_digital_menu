import React from 'react'
import { Col } from 'reactstrap'
const SocialFooter = ({data}) => {
    const social = data.user.themeSettings.social;
    return (
        <Col lg='12' md='12' xs='12' className=' d-flex justify-content-center align-items-center '>
            <ul className='list-unstyled d-flex mt-2 '>
                <li >
                    {social.instagram?.length > 0 &&
                        <a className='text-dark' href={social.instagram} target='_blank' rel='noreferrer'>
                            <i className={`bi bi-instagram me-4 fs-1`}></i>
                        </a>
                    }
                </li>
                <li >
                    {social.facebook?.length > 0 &&
                        <a className='text-dark' href={social.facebook} target='_blank' rel='noreferrer'>
                            <i className={`bi bi-facebook me-4 fs-1`}></i>
                        </a>
                    }
                </li>
                <li >
                    {social.twitter?.length > 0 &&
                        <a className='text-dark' href={social.twitter} target='_blank' rel='noreferrer'>
                            <i className={`bi bi-twitter me-4 fs-1`}></i>
                        </a>
                    }
                </li>
                <li >
                    {social.youtube?.length > 0 &&
                        <a className='text-dark' href={social.youtube} target='_blank' rel='noreferrer'>
                            <i className={`bi bi-youtube me-4 fs-1`}></i>
                        </a>
                    }
                </li>

            </ul>
        </Col >

    )
}

export default SocialFooter