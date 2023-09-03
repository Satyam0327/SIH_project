



import img1 from './assets/img1.jpg';
import img2 from './assets/img2.webp';
import img3 from './assets/img3.webp';
function About() {
  return (
    <>
    <header>
        <nav>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#popular">Popular</a></li>
                <li><a href="#login">Log In</a></li>
                <li><a href="#explore">Explore</a></li>
            </ul>
        </nav>
    </header>
    
    
    
    
    
    <div className="about-container">
        <span>WR</span>
        <img src={img1} alt="" />
    </div>
    <div class="container">
        <span>Powerful AI Insights:)</span>
        <div className='box'>

        </div>
        <div class="box">
            <h2>Suitability Analysis</h2>
            <p>Discover the most suitable locations for water well placement.</p>
        </div>
        <div class="box">
            <h2>Drilling Techniques</h2>
            <p>Learn the best drilling methods for optimized water extraction.</p>
        </div>
        <div class="box">
            <h2>Depth Prediction</h2>
            <p>Uncover the ideal depth for your water well based on location data.</p>
        </div>
        <div class="box">
            <h2>Discharge Estimation</h2>
            <p>Maximize the water discharge rate using our sophisticated AI models.</p>
        </div>
        <div class="box">
            <h2>Groundwater Quality</h2>
            <p>Obtain vital information about the groundwater quality in your area.</p>
        </div>
        <div class="box">
            <h2>User-Friendly Interface</h2>
            <p>Enjoy a seamless experience with our intuitive and interactive platform.</p>
        </div>
    </div>
    <div className='photo'>
        <p> <h1>Transform Water Well Decisions</h1>
Harness the power of CGWB's NAQUIM data and revolutionize your approach to water well decisions. GeoWellAdvisor's AI-driven platform is specifically designed for India's unique groundwater landscape.</p>
     <img src={img2} alt="" />
    </div>
    <div className='photo'>
         <img src={img3} alt="" />
        <p> <h1>Transform Water Well Decisions</h1>
Harness the power of CGWB's NAQUIM data and revolutionize your approach to water well decisions. GeoWellAdvisor's AI-driven platform is specifically designed for India's unique groundwater landscape.</p>
      

    </div>
    <section class="get-started-container">
        <h2 class="get-started-heading">Get Started</h2>
        <p>Dive into a new era of water well decisions and join the GeoWellAdvisor community today.</p>
        <a href="#" class="join-button">Join GeoWellAdvisor Now</a>
    </section>
    
        </>
    
  );
}
export default About;