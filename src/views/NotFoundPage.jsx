import { Link } from "wouter";


function NotFoundPage() {
    
    return (
        <>
            <div className="main-container">
                <div>PAGE NOT FOUND</div>
                
                <Link href="/">
                  <div>go back home</div>
                </Link>
            </div>
        </>
    );
};


export default NotFoundPage;