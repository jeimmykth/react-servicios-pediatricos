import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-primary mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">Servicios Pediatricos</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/profesional"><a className="nav-link">Home</a></Link>
            <Link href="/Sigin"><a className="nav-link">Sigin</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;