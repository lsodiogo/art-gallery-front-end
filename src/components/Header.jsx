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
                  <h1>ART GALLERY</h1>
               </Link>
            </nav>

            <nav className="header-right">

               <LinkActivated href="/">
                  <span>Home</span>
               </LinkActivated>

               <LinkActivated href="/gallery">
                  <span>Gallery</span>
               </LinkActivated>

               <LinkActivated href="/about">
                  <span>About</span>
               </LinkActivated>

               <LinkActivated href="/contact">
                  <span>Contact</span>
               </LinkActivated>
            </nav>
         </header>
      </>
   );
};


export default Header;