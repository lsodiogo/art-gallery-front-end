import { Link } from "wouter";


function NotFoundPage() {
    
    return (
        <>
            <div className="main-container">
                <div>PAGE NOT FOUND</div>
                
                <Link href="/">
                  <span>go back home</span>
                </Link>
            </div>
        </>
    );
};


export default NotFoundPage;