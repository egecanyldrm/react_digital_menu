import React from 'react'

const ErrorPage = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center row">
                <div className=" col-md-12">
                    <h1 className='display-1'>404</h1>
                </div>
                <div className=" col-md-12 mt-3">
                    <p className="fs-3"> <span className="text-danger">Opps!</span> </p>
                    <p className="lead">
                        Aradığınız Müşteri Bulunamadı.
                    </p>
                    <a href={process.env.REACT_APP_COMPANY_WEBSITE_URL} className="btn btn-primary">Kayboldum {' :( '}</a>
                </div>

            </div>
        </div>
    )
}

export default ErrorPage