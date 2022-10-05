import "./Footer.css"

function FooterBottom() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span>
          <div className="devTitle">Pear Lotus Github</div>
          <a
            href="https://github.com/EdgarMLee/PearLotus"
            id="repo"
            target="_blank"
          >
            <i className="fab fa-github fa-2xl" />
          </a>
        </span>
        <span>
          <div className="devTitle">Edgar Lee</div>
          <div className="dev-links">
            <a href="https://github.com/EdgarMLee" target="_blank">
              <i className="fab fa-github fa-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/edgar-lee-1357el135/"
              target="_blank"
            >
              <i className="fab fa-linkedin fa-2xl" />
            </a>
          </div>
        </span>
      </div>
    </footer>
  );
}

export default FooterBottom;
