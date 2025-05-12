export default function ErrorPage ({error}:{error:string}){
    return(
        <div className="w-full h-[70vh] flex justify-center items-center">
            <div className="error-item flex flex-col gap-4 justify-center items-center">
                <svg className=" animate-ping h-24 w-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f93939">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                        <path d="M12 9V13" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                        <path d="M12 17.0195V17" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                    </g>
                </svg>

                <h1 className="text-3xl  font-bold">{error}</h1>
            </div>
        </div>
    )
}