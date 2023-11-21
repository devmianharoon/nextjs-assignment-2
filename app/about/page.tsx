import Image from "next/image"
import about from "../../public/assest/about.png";
import NAVBAR from "../(componant)/navbar/page";
import Link from "next/link";

export default function ABOUT() {

    return (
        <div>
            <section className="Sub-header">
                <nav>
                <Link href="/" className="logo">Xplore<i className="fab fa-staylinked"></i>kill</Link>
                    <div className="nav-links" id="navLinks">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/course">Course</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <h1>About Us</h1>
            </section>

            {/* <!-- About Us Section Start --> */}

            <section className="about-us">
                <div className="row">
                    <div className="about-col">
                        <h1>We are the worlds largest University</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                        <Link href="/" className="hero_btn btn">EXPLORE NOW</Link>
                    </div>
                    <div className="about-col">
                        <Image src={about} alt="" />
                    </div>
                </div>
            </section>
            {/* Navbar */}
            <NAVBAR />
        </div>
    )
}