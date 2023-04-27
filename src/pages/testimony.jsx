import { useState } from 'react';
import testimony from '../assets/images/testimony.svg';
import previous from '../assets/images/CHEVRON LEFT.svg';
import next from '../assets/images/CHEVRON RIGHT.svg';

function TestimonyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlide = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <section id='testimony'>
    <div className='container testimony'>
      <div className='justify-content-center text-center m-auto'>
          <div className="m-auto pb-3 mt-3 mb-4">
            <h1 className='display-4 fw-bold'>What Our Clients Are <span>Saying</span></h1>    
          </div>
          <div className='row justify-content-center'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className={`active ${activeIndex === 0 ? 'active' : ''}`} aria-current="true" aria-label="Slide 1" onClick={() => handleSlide(0)}></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className={`${activeIndex === 1 ? 'active' : ''}`} aria-label="Slide 2" onClick={() => handleSlide(1)}></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className={`${activeIndex === 2 ? 'active' : ''}`} aria-label="Slide 3" onClick={() => handleSlide(2)}></button>
        </div>
        <div  data-aos="flip-up" data-aos-duration="800">
        <div className="carousel-inner col-lg-4 mb-lg-0 mb-4">
        <div className={`carousel-item box  justify-content-center ${activeIndex === 0 ? 'active' : ''}`}>

            <img src={ testimony } className="d-block w-50 text-center" alt="testimony" aria-hidden="true" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo beatae eveniet nobis sunt quibusdam incidunt maiores libero quisquam. Voluptatum, laborum? Pariatur sed perferendis iusto sunt impedit modi laudantium ut quibusdam!
            Rem eos itaque, debitis, eius omnis libero nobis suscipit ipsam accusantium beatae possimus eveniet inventore voluptas. Vitae aut consequatur delectus dignissimos error impedit obcaecati, non consequuntur nemo fuga suscipit magnam!</p>
          </div>
          <div className={`carousel-item box  justify-content-center ${activeIndex === 0 ? 'active' : ''}`}>

            <img src={testimony} className="d-block w-50 text-center" alt="testimony" aria-hidden="true" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo beatae eveniet nobis sunt quibusdam incidunt maiores libero quisquam. Voluptatum, laborum? Pariatur sed perferendis iusto sunt impedit modi laudantium ut quibusdam!
            Rem eos itaque, debitis, eius omnis libero nobis suscipit ipsam accusantium beatae possimus eveniet inventore voluptas. Vitae aut consequatur delectus dignissimos error impedit obcaecati, non consequuntur nemo fuga suscipit magnam!</p>
          </div>
          <div className={`carousel-item box    justify-content-center ${activeIndex === 0 ? 'active' : ''}`}>

            <img src={testimony} className="d-block w-50 text-center" alt="testimony" aria-hidden="true" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo beatae eveniet nobis sunt quibusdam incidunt maiores libero quisquam. Voluptatum, laborum? Pariatur sed perferendis iusto sunt impedit modi laudantium ut quibusdam!
            Rem eos itaque, debitis, eius omnis libero nobis suscipit ipsam accusantium beatae possimus eveniet inventore voluptas. Vitae aut consequatur delectus dignissimos error impedit obcaecati, non consequuntur nemo fuga suscipit magnam!</p>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={() => handleSlide(activeIndex - 1)}>
          <img src={previous} className="carousel-control-prev-icon w-50" aria-hidden="true" alt="previous" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={() => handleSlide(activeIndex + 1)}>
          <img src={next} className="carousel-control-next-icon w-50" aria-hidden="true" alt="next" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      </div>
      </div>
      </div>
    
    </section>
  );
}

export default TestimonyCarousel;
