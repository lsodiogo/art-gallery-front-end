import { Link, useRoute } from "wouter";
import { useEffect, useState } from "react";


function Header() {

   const [lastScrollY, setLastScrollY] = useState(0);
   const [visible, setVisible] = useState(true) 

   function handleScroll() {

   if (window.scrollY > lastScrollY) {
         setVisible(false); 
      } else {
         setVisible(true);  
      };

      setLastScrollY(window.scrollY); 
   };


   useEffect(function() {
      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, [lastScrollY]);


   // FUNCTION TO ADD CSS WHEN LINK IS ACTIVE //
   function LinkActivated(event) {
      const [isActive] = useRoute(event.href);

      return (
         <Link href={event.href} className={isActive ? "header-button-right-active" : "header-button-right"}>
            {event.children}
         </Link>
      );
   };

   return (
      <>
         <header className={visible ? "header visible" : "header hidden"}>          
            <div className="topline"></div>

            <nav className="header-left">
               <Link href="/" className="header-button-left">
                  <div>ART GALLERY</div>
               </Link>
            </nav>

            <nav className="header-right">

               <LinkActivated href="/">
                  <div>Home</div>
               </LinkActivated>

               <LinkActivated href="/gallery">
                  <div>Gallery</div>
               </LinkActivated>

               <LinkActivated href="/about">
                  <div>Our History</div>
               </LinkActivated>

               <LinkActivated href="/contact">
                  <div>Contact</div>
               </LinkActivated>
            </nav>
         </header>
      </>
   );
};


export default Header;