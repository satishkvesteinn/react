import { Link } from "react-router-dom";
import homeBg from '../images/bgHome.png'
import './home.css'

function Common(props) {
    return (
        <>
            <section id="header" className="d-flex bg-primary align-items-center pb-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-11 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.heading}<strong className="brand-name">Satish Vishwakarma</strong></h1>
                                    <h2 className="my-3">We are team of talented developer making websites</h2>
                                    <div className="mt-3">
                                        <Link className="btn-get-started" to={`/${props.link}`}>{props.btnName}</Link>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-5 pt-lg-0 order-1 header-img order-lg-2">
                                    <img src={homeBg} className="img-fluid animated" alt="Loding image..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;