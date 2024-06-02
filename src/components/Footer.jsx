import { Link } from "wouter";


function Footer() {

   return (
      <>
         <footer>
            <Link href="/">
               <span>HOME</span>
            </Link>

            <Link href="/gallery">
               <span>GALLERY</span>
            </Link>

            <Link href="/">
               <span>ART GALLERY</span>
            </Link>

            <Link href="/about">
               <span>ABOUT</span>
            </Link>

            <Link href="/contact">
               <span>CONTACT</span>
            </Link>

            
         </footer>

         <div className="bottomline"></div>
      </>
   );
};


export default Footer;