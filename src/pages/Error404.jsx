import error404error from '../assets/images/404.jpg';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return ( 
        <div className="pt-5 mt-5 py-3 px-4 vh-100" id="success">
            <div className="container d-flex align-items-center vh-100">
                <div className="row">
                    <div className="col-lg-6 pt-lg-5 mt-lg-3 d-block d-lg-none d-md-none">
                        <img src={ error404error } alt="DotHost" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6 col-12" id="domains">
                        <h1 className="mt-3 pt-lg-5 mt-lg-3 display-3 mb-4 fw-bold">Not<span style={{color: '#009F0F'}}> Found</span></h1>
                        <p className="mb-3">The URL you are attempting to access cannot be found. Please verify the URL and attempt to access it again.</p>
                        <Link to="home" rel="noreferrer"><button className="btn btn-dark px-5 py-3 mt-4 mb-5 rounded-pill"> Go to HomePage</button></Link>
                    </div>
                    <div className="col-lg-6 pt-lg-5 mt-lg-3 d-none d-lg-block d-md-block">
                        <img src={ error404error } alt="DotHost" className="img-fluid"/>
                    </div>

                </div>
                
            </div>
        </div>
    );
}
 
export default Error404;