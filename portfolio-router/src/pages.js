import "./App.css";
import { Link } from "react-router-dom";
import { AiOutlineContacts } from "react-icons/ai";
import { FaPaintBrush, FaProductHunt } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export function Home() {
  return (
    <div>
      <h1> Jordan's Portfolio</h1>
      <nav className="homeNav">
        <Link to="about">
          {" "}
          [<BsFillPersonLinesFill /> About]
        </Link>
        <br />

        <Link to="portfolio">
          {" "}
          [<FaPaintBrush /> Portfolio]
        </Link>
        <br />

        <Link to="products">
          {" "}
          [<FaProductHunt /> Products]
        </Link>

        <br />
        <Link to="contact">
          {" "}
          [<AiOutlineContacts /> Contact]
        </Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <nav>
        <Link to="/"> Home</Link>
      </nav>
      <h1> About</h1>
    </div>
  );
}

export function Portfolio() {
  return (
    <div>
      <h1> Portfolio</h1>
      <nav>
        <Link to="/"> Home</Link>
        <br />
        <Link to="/portfolio/nasa"> [Nasa Daily Image Scroller]</Link>
      </nav>
    </div>
  );
}

export function Products() {
  return (
    <div>
      <nav>
        <Link to="/"> Home</Link>
      </nav>
      <h1> Products</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/"> Home</Link>
      </nav>
      <h1> Contact Me</h1>
      <p>
        <b>Email:</b> jordanwu1996gmail.com
      </p>
      <p>
        <b>Mobile:</b> 07775799353
      </p>
      <p><b>Linkedin:</b> <a href= 'https://www.linkedin.com/in/jordan-w-b82838b7/'> https://www.linkedin.com/in/jordan-w-b82838b7/</a></p>
    </div>
  );
}
