import React from 'react';
import { Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import card1 from '../assets/images/card1.svg';
import card2 from '../assets/images/card2.svg';
import card3 from '../assets/images/card3.svg';
import card4 from '../assets/images/card4.svg';
import card5 from '../assets/images/card5.svg';
import card6 from '../assets/images/card6.svg';
import card7 from '../assets/images/card7.svg';
import card8 from '../assets/images/card8.svg';
import card9 from '../assets/images/card9.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {   
    AOS.init();
    return ( 
        <div>
            <section className="hero-section px-lg-0 py-lg-0 px-2 py-4">
                <div className='container mt-5'>
                    <div className='row d-flex align-items-center vh-100'>
                        <div className='col-lg-12 px-lg-0'>
                            <h1 className='fw-bold display-5'>Revolutionize Property Inspections with AR Technology: See Beyond the Surface!</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section id="search">
                <div className="container pt-5">
                    <div className="search-form p-5">
                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <div className="input-group mb-3  w-100 h-100">
                                    <input type="text" className="form-width w-100 h-100" aria-label=" input" aria-describedby="inputGroup-sizing-lg" placeholder='Search for property'></input>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12" >
                                <div className="input-group mb-3 w-100 h-100">
                                <select className="form-width w-100 h-100 " type="select"  aria-label="input" >
                                    <option value="1" className='text-secondary m-5 p-5'>Search by:</option>
                                    <option value="2">Price</option>
                                    <option value="3">Location</option>
                                    <option value="4">Company</option>
                                    <option value="5">Type</option>
                                </select>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-12">
                                <button className='btn-black text-white w-100 h-100 btn-md btn-outline-black'>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='courses mt-lg-5 mt-3 pt-5 m-2' id="courses" data-aos="fade-down" data-aos-duration="1000">
                <div className='container mb-5 pb-5'>
                    <div className='row' data-aos="fade-right" data-aos-duration="800">
                        <div className='col-12 col-lg-4 mb-lg-0 mb-5'>
                            <Card className='h-100 px-3 py-3'>
                                <Card.Img src={ card1 }/>
                                <Card.Body className='mt-3'>
                                    <Card.Title className='mb-5 fw-normal'>Terraced Property by Switch Construction </Card.Title>
                                    <Card.Text className='mb-4 fw-bold'>
                                    $95,000
                                    </Card.Text>
                               
                                    <div className="d-flex justify-content-center text-center m-auto">                                
                                    <div className="w-100 text-start">10 Bedrooms  * 14 Bathrooms  *20,000 Sq Ft4.00 Acre(s)</div>
                                    </div>                               
                                </Card.Body>
                            </Card>
                        </div>


                        <div className='col-12 col-lg-4 mb-lg-0 mb-5'>
                        <Card className='h-100 px-3 py-3'>
                        <Card.Img src={ card2 }/>
                        <Card.Body className='mt-3'>
                            <Card.Title className='mb-5 fw-normal'>Terraced Property by Switch Construction </Card.Title>
                            <Card.Text className='mb-4 fw-bold'>
                            $95,000
                            </Card.Text>
                       
                            <div className="d-flex justify-content-center text-center m-auto">                                
                            <div className="w-100 text-start">10 Bedrooms  * 14 Bathrooms  *20,000 Sq Ft4.00 Acre(s)</div>
                            </div>                               
                        </Card.Body>
                    </Card>
                        </div>

                        <div className='col-12 col-lg-4 mb-lg-0 mb-5'>
                        <Card className='h-100 px-3 py-3'>
                        <Card.Img src={ card3 }/>
                        <Card.Body className='mt-3'>
                            <Card.Title className='mb-5 fw-normal'>Terraced Property by Switch Construction </Card.Title>
                            <Card.Text className='mb-4 fw-bold'>
                            $95,000
                            </Card.Text>
                       
                            <div className="d-flex justify-content-center text-center m-auto">                                
                            <div className="w-100 text-start">10 Bedrooms  * 14 Bathrooms  *20,000 Sq Ft4.00 Acre(s)</div>
                            </div>                               
                        </Card.Body>
                    </Card>
                        </div>


                        <div className='row mt-5' data-aos="fade-right" data-aos-duration="2500"> 
                        <div className='col-12 col-lg-4  mb-lg-0 mb-5'>
                        <Card className='h-100 px-3 py-3'>
                        <Card.Img src={ card4 }/>
                        <Card.Body className='mt-3'>
                            <Card.Title className='mb-5 fw-normal'>Terraced Property by Switch Construction </Card.Title>
                            <Card.Text className='mb-4 fw-bold'>
                            $95,000
                            </Card.Text>
                       
                            <div className="d-flex justify-content-center text-center m-auto">                                
                            <div className="w-100 text-start">10 Bedrooms  * 14 Bathrooms  *20,000 Sq Ft4.00 Acre(s)</div>
                            </div>                               
                        </Card.Body>
                    </Card>
                        </div>


                        <div className='col-12 col-lg-4'>
                        <Card className='h-100 px-3 py-3'>
                        <Card.Img src={ card5 }/>
                        <Card.Body className='mt-3'>
                            <Card.Title className='mb-5 fw-normal'>Terraced Property by Switch Construction </Card.Title>
                            <Card.Text className='mb-4 fw-bold'>
                            $95,000
                            </Card.Text>
                       
                            <div className="d-flex justify-content-center text-center m-auto">                                
                            <div className="w-100 text-start">10 Bedrooms  * 14 Bathrooms  *20,000 Sq Ft4.00 Acre(s)</div>
                            </div>                               
                        </Card.Body>
                    </Card>
                        </div>

                        <div className='col-12 col-lg-4 mb-lg-0 mb-5'>
                        <Card className='h-100 px-3 py-3'>
                        <Card.Img src={ card6 }/>
                        <Card.Body className='mt-3'>
                            <Card.Title className='mb-5 fw-normal'>Terraced Property by Switch Construction </Card.Title>
                            <Card.Text className='mb-4 fw-bold'>
                            $95,000
                            </Card.Text>
                       
                            <div className="d-flex justify-content-center text-center m-auto">                                
                            <div className="w-100 text-start">10 Bedrooms  * 14 Bathrooms  *20,000 Sq Ft4.00 Acre(s)</div>
                            </div>                               
                        </Card.Body>
                    </Card>
                        </div>


                    
                    </div>
                            
                    </div>



                    <div className='row mt-5' data-aos="fade-right" data-aos-duration="2500"> 
                        <div className='col-12 col-lg-4  mb-lg-0 mb-5'>
                        <Card className='h-100 px-3 py-3'>
                        <Card.Img src={ card7 }/>
                        <Card.Body className='mt-3'>
                            <Card.Title className='mb-5 fw-normal'>Terraced Property by Switch Construction </Card.Title>
                            <Card.Text className='mb-4 fw-bold'>
                            $95,000
                            </Card.Text>
                       
                            <div className="d-flex justify-content-center text-center m-auto">                                
                            <div className="w-100 text-start">10 Bedrooms  * 14 Bathrooms  *20,000 Sq Ft4.00 Acre(s)</div>
                            </div>                               
                        </Card.Body>
                    </Card>
                        </div>


                        <div className='col-12 col-lg-4'>
                        <Card className='h-100 px-3 py-3'>
                        <Card.Img src={ card8 }/>
                        <Card.Body className='mt-3'>
                            <Card.Title className='mb-5 fw-normal'>Terraced Property by Switch Construction </Card.Title>
                            <Card.Text className='mb-4 fw-bold'>
                            $95,000
                            </Card.Text>
                       
                            <div className="d-flex justify-content-center text-center m-auto">                                
                            <div className="w-100 text-start">10 Bedrooms  * 14 Bathrooms  *20,000 Sq Ft4.00 Acre(s)</div>
                            </div>                               
                        </Card.Body>
                    </Card>
                        </div>

                        <div className='col-12 col-lg-4 mb-lg-0 mb-5'>
                        <Card className='h-100 px-3 py-3'>
                        <Card.Img src={ card9 }/>
                        <Card.Body className='mt-3'>
                            <Card.Title className='mb-5 fw-normal'>Terraced Property by Switch Construction </Card.Title>
                            <Card.Text className='mb-4 fw-bold'>
                            $95,000
                            </Card.Text>
                       
                            <div className="d-flex justify-content-center text-center m-auto">                                
                            <div className="w-100 text-start">10 Bedrooms  * 14 Bathrooms  *20,000 Sq Ft4.00 Acre(s)</div>
                            </div>                               
                        </Card.Body>
                    </Card>
                        </div>


                    
                    </div>

                </div>
                
            
            </section>

        </div>
          

    

    );
}
 
export default Home;
