import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer p-20 md:p-12 text-center md:p-24">
      <nav role="navigation">
        <div className="text-white text-center gradient-text font-bold text-4xl xl:text-3xl tracking-tight mb-4">
          <span>Meu-Portfolio.com</span>
        </div>
        <div className="footer_group">
          <ul className="footer_list">
            <li className="footer_item">
              <a className="footer_item_link" href="#">Home</a>
            </li>
            <li className="footer_item">
              <a className="footer_item_link" href="#About Me">About Me</a>
            </li>
            <li className="footer_item">
              <a className="footer_item_link" href="#Portfolio">Portfolio</a>
            </li>
            <li className="footer_item">
              <a className="footer_item_link" href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <section>
        <div className="footer_wrapper">
          <span className="footer_copyright">
            <span>Copyright</span> © 2023 Meu-Portfolio.com
          </span>
          <span className="footer_contact">
            <ul className="footer_social">
              <li className="opacity-40 hover:opacity-100">
                <a aria-label="GitHub" href="https://github.com/LeoSolla" rel="noopener" target="_blank">
                  <svg aria-label="github" height="19" viewBox="0 0 14 14" width="19">
                    <path d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z" fillRule="nonzero"></path>
                  </svg>
                </a>
              </li>
              <li className="opacity-40 hover:opacity-100">
                <a aria-label="Twitter" href="https://twitter.com/LeoSolla_" rel="noopener" target="_blank">
                  <svg aria-label="twitter" height="16" viewBox="0 0 18 15">
                    <path d="M18 1.684l-1.687 1.684v.28c0 .307-.05.602-.123.886-.04 2.316-.777 5.387-3.816 7.81C6.404 17.115 0 12.907 0 12.907c5.063 0 5.063-1.684 5.063-1.684-1.126 0-3.376-2.243-3.376-2.243.563.56 1.689 0 1.689 0C.56 7.295.56 5.61.56 5.61c.563.561 1.689 0 1.689 0C-.563 3.368 1.124.561 1.124.561 1.687 3.368 9 4.49 9 4.49l.093-.046A6.637 6.637 0 0 1 9 3.368C9 1.353 10.636 0 12.656 0c1.112 0 2.094.506 2.765 1.286l.329-.163L17.437 0l-1.122 2.245L18 1.684z" fillRule="nonzero"></path>
                  </svg>
                </a>
              </li>
              <li className="opacity-40 hover:opacity-100">
                <a aria-label="LinkedIn" href="https://www.linkedin.com/in/leonardo-solla-19a1a6231/" rel="noopener" target="_blank">
                  <svg stroke="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="19" xmlns="http://www.w3.org/2000/svg"><path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"></path></svg>
                </a>
              </li>
            </ul>
          </span>
          <div className="footer_status">
            <div className="footer_status_hire">
              <small className="status">Status:</small>
              <span className="indicator"></span>
              <span className="w-full">Available for hire</span>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center md:pl-8 opacity-40">
        <span className="mdpf">M.D.P.F</span>
      </div>
    </footer>
  )
}

export default Footer;
