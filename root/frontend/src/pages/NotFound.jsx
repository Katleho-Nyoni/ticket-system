import {Helmet} from 'react-helmet'

export default function NotFoundPage(){
    return(
        <>
            <div className="h-screen w-screen flex flex-col justify-center items-center">
                <div className="flex flex-row">
                    <h1 className="font-extrabold text-5xl mr-5">404</h1>
                    <h2 className="font-bold text-3xl">Page Not Found</h2>
                </div>
                <p>The page you are looking for is not found.</p>
            </div>
        </>
    );
}