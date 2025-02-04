import {
  CaretUp,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center lg:pb-20 mt-20 ">
      <ScrollToTop
        smooth
        component={<CaretUp size={32} color="#fff" />}
        className="top-btn scroll-to-top z-50"
      />
      <strong className="text-sm">© Vitor Lima</strong>

      <ul className="flex gap-4 mt-5">
        <Link
          to="https://www.linkedin.com/in/vitor-limaa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="footer-social-medias">
            <LinkedinLogo weight="fill" className="" />
          </li>
        </Link>
        <Link
          to="https://github.com/vitorl1maa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="footer-social-medias">
            <GithubLogo weight="fill" />
          </li>
        </Link>
        <Link
          to="https://www.instagram.com/v_nasc_?igsh=MW1rcWplMnA3anRoNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="footer-social-medias">
            <InstagramLogo weight="fill" />
          </li>
        </Link>
      </ul>
    </footer>
  );
}

export default Footer;
