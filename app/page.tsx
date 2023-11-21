import Image from 'next/image';
import campus1Image from '../public/assest/Campus1.png';
import campus2Image from '../public/assest/Campus2.png';
import campus3Image from '../public/assest/Campus3.png';
import libary from '../public/assest/libary.png';
import playground from '../public/assest/playground.png';
import food from '../public/assest/food.png';
// import showMenu from '../public/assest/showMenu.png'
import user from '../public/assest/user.png';
import NAVBAR from './(componant)/navbar/page';
import Link from 'next/link'




export default function Home() {
//   var navLinks = document.getElementById("navLinks");

// function showMenu() {
//     navLinks!.style.right = "0";
// }

// function hideMenu() {
//   if (navLinks) {
//     navLinks.style.right = "0";
//   }
  
// }
  return (
    <div>
      <section className="header">
        <nav>
          <Link href="/" className="logo">Xplore
            <i className="fab fa-staylinked"></i>kill
          </Link>
          <div className="nav-links" id="navLinks">
            {/* <!-- Reposnive bar open and close --> */}
            {/* <i className="fa fa-times" onClick={hideMenu}></i> */}
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/course">Course</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          {/* <i className="fa fa-bars" onClick={showMenu}></i> */}
         

          {/* <!-- Reposnive bar open and close --> */}
        </nav>

        <div className="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
            <br/> esse blanditiis in quae perspiciatis quo.
          </p>
          <Link href="/" className="hero_btn">Visit Us To Know More</Link>
        </div>
      </section>

      {/* <!-- Course Section Start --> */}
      <section className="course">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br/> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="course-col">
            <h3>Undergraduate Programs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
              soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.</p>
          </div>
          <div className="course-col">
            <h3>Graduate Programs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
              soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.</p>
          </div>
          <div className="course-col">
            <h3>Adult Learning & Degree Completion</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
              soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.</p>
          </div>
        </div>
      </section>
      {/* <!-- Course Section End --> */}

      {/* <!-- Campus Section Start--> */}

      <section className="campus">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="campus-col">
            <Image src={campus1Image} alt=""/>
              <div className="layer">
                <h3>DELHI</h3>
              </div>
          </div>
          <div className="campus-col">
            <Image src={campus2Image} alt=""/>
              <div className="layer">
                <h3>HYDERABAD</h3>
              </div>
          </div>
          <div className="campus-col">
            <Image src={campus3Image} alt=""/>
              <div className="layer">
                <h3>MUMBAI</h3>
              </div>
          </div>
        </div>
      </section>
      {/* <!-- Campus Section End --> */}

      {/* <!-- Facilities Section Start --> */}
      <section className="facilities">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="facilities-col">
            <Image src={libary} alt=""/>
              <h3>Best Libary</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
              </p>
          </div>
          <div className="facilities-col">
            <Image src={playground }alt=""/>
              <h3>Athletics</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
              </p>
          </div>
          <div className="facilities-col">
            <Image src={food} alt=""/>
              <h3>Tasty and Healthy Food</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
              </p>
          </div>
        </div>
      </section>
      {/* <!-- Facilities Section End --> */}

      {/* <!-- Testimonials Section Start --> */}
      <section className="testimonials">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="testimonials-col">
            <Image src={user} alt="oo.."/>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                  praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                  deserunt. In quia repellat maxime.</p>
                <h3>Student Name</h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
          </div>
          <div className="testimonials-col">
            <Image src={user} alt="oo.."/>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                  praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                  deserunt. In quia repellat maxime.</p>
                <h3>Student Name</h3>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-alt"></i>
              </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonials Section End --> */}

      {/* <!-- Call To Action Section Start --> */}
      <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Link href="/contact" className="hero_btn">CONTACT US</Link>
      </section>
      {/* <!-- Call To Action Section End --> */}

      {/* <!-- Footer Section Start --> */}
      <NAVBAR/>
    </div>
  )
  }
