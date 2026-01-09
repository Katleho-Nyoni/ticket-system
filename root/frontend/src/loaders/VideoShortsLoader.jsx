import { DNA } from "react-loader-spinner"

export default function VideoShortsLoader(){

    return(
        <>
            <div className="flex justify-center items-center m-10 p-8">
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