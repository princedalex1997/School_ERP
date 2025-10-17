import React, {  useRef,useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 540,
  facingMode: "environment"
};


const Webcam1 = () => {

    const webcamRef = useRef(null);
    const [url, setUrl] = useState(null);

    const capturePhoto = React.useCallback(async()=>{
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl(imageSrc);
    },[webcamRef])

    const onUserMedia = (e)=> {
        console.log(e);
    }

  return (
    <div>
        <Webcam  
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
        />
        <button onClick={capturePhoto} >Capture</button>
        <button onClick={()=>setUrl(null)} >Refresh</button>
        {url && (
            <div>
                <img src={url} alt="Screenshot" />
            </div>
        )}
    </div>
  )
}

export default Webcam1