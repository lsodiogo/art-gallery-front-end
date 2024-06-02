import { Link } from "wouter";


function Footer() {

   return (
      <>
         <footer className="footer-container">
            <div className="footer-logo">
               <Link href="/">
                  <div>ART GALLERY</div>
               </Link>
            </div>

            <div className="footer-information">
               <div>
                  <Link href="/contact">
                     CONTACT US
                  </Link>
                  <br/>
                  xxx, Rue xxxxxxxxxx
                  <br/>
                  xxxx Brussels, Belgium
               </div>

               <div className="footer-contacts">
                  <div>
                     <img src="/icons/phone.svg" alt="phone-icon"/>
                     <a href="tel:+32xxxxxxxx">+32 (0)1 234 56 78</a>
                  </div>

                  <div>
                     <img src="/icons/email.svg" alt="email-icon"/>
                     <a href="mailto:xxx@xxx.com">art@gallery.com</a>
                  </div>
               </div>
            </div>
            
            <ul className="footer-links">
               <li>
                  <Link href="/">
                     <div>HOME</div>
                  </Link>
               </li>

               <li>
                  <Link href="/gallery">
                     <div>GALLERY</div>
                  </Link>
               </li>

               <li>
                  <Link href="/about">
                     <div>OUR HISTORY</div>
                  </Link>
               </li>
            </ul>
         </footer>

         <div className="copyrights-container">
            <div className="copyrights">
               <div>ART GALLERY LIMITED © 2024 ALL RIGHTS RESERVED</div>

               |

               <Link href="/termsandconditions">
                  <div>TERMS & CONDITIONS</div>
               </Link>

               |

               <Link href="/privacypolicy">
                  <div>PRIVACY POLICY</div>
               </Link>
            </div>

            <div className="credits">
               <div>
                  <span>DESIGNED & DEVELOPED BY </span>
                  <a href="https://github.com/lsodiogo/" target="_blank">
                     DIOGO LIMA
                  </a>
               </div>
            </div>
         </div>

         <div className="bottomline"></div>
      </>
   );
};


export default Footer;