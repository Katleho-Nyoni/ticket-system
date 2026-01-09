import { DNA } from "react-loader-spinner"

export default function VideoShortsLoader(){

    return(
        <>
            <div className="flex justify-center items-center  h-screen w-screen">
              <DNA 
                visible={true}
                height="120"
                width="120"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div>
        </>
    );
}