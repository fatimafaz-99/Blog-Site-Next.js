import Navigation from "../Navigation"
import Head from "next/head";
import Login from "../../pages/login";
const Layout = ({
    children
}) => {
    return (

        <>
            <Head>
                <link href="https://getbootstrap.com/docs/5.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap" rel="stylesheet" />
            </Head>
            <div classNameName="container">
                <header className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1">
                            <a className="link-secondary" href="#">Subscribe</a>
                        </div>
                        <div className="col-4 text-center">
                            <a className="blog-header-logo text-dark" href="#">Large</a>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <a className="link-secondary" href="#" aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5" /><path d="M21 21l-5.2-5.2" /></svg>
                            </a>
                            <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                        </div>
                    </div>
                </header>
                <Login />

                {children}
            </div>

            <style jsx>
            {

                `
                .bd-placeholder-img {
                    font-size: 1.125rem;
                    text-anchor: middle;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    user-select: none;
                  }
            
                  @media (min-width: 768px) {
                    .bd-placeholder-img-lg {
                      font-size: 3.5rem;
                    }
                  }`
             
            }
          </style>
        </>
        
    );

    

}

export default Layout;