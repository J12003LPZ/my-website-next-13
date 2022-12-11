export default function Navbar() {
  return (
    <div>
      <div className="controls">
        <div className="control active-btn" data-id="home">
          <i className="fas fa-home"></i>
        </div>
        <div className="control" data-id="about">
          <i className="fas fa-user"></i>
        </div>
        <div className="control" data-id="portfolio">
          <i className="fas fa-briefcase"></i>
        </div>
        <a href="mailto:leonardojeziellopez@gmail.com">
          <div className="contact">
            <i className="fas fa-envelope-open"></i>
          </div>
        </a>
      </div>
      <div className="theme-btn">
        <i className="fas fa-adjust"></i>
      </div>
    </div>
  );
}
