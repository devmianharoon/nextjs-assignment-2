import Link from "next/link"
export default function HEADER(){
    return(
        <section className="Sub-header">
        <nav>
            <Link href="/" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </Link>
            <div className="nav-links" id="navLinks">
                {/* <!-- reposnive bar open and close --> */}
                {/* <i className="fa fa-times" onClick={hideMenu}></i> */}
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/course">Course</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="contact">Contact</Link></li>
                </ul>
            </div>
            {/* <i className="fa fa-bars" onClick={showMenu}></i> */}
            {/* <!-- reposnive bar open and close --> */}
        </nav>
        <h1>Our Post</h1>
    </section>

    )
}