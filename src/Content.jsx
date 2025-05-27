import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loader from "./Loader";
import TextDisplay from "./contentDisplay/TextDisplay";
import ImageDisplay from "./contentDisplay/ImageDisplay";


const Content = () => {
    const [displayElements, setDisplayElements] = useState([]);
    const { post } = useFetch("https://uztechtips.onrender.com/api/v1/");
    
    
    const params = useParams();

    const displayMap = {
        TEXT : (content) => <TextDisplay content={content}/>,
        IMAGE : (imageName) => <ImageDisplay imageName={imageName}/>
    }

    useEffect(() => {
        post("getTopicContent", {
            app : {
                appName : params.appName
            },
            topic : {
                topicName : params.topicName
            }
        }).then(data => {
            setDisplayElements(data);
        })
    }, [params]);
    

    return <>
        <div className="content">
            {displayElements && displayElements.map(element => {
                return (<div className="display-content" key={element.orderNumber}>{displayMap[element.dataType]?.(element.content.content)}</div>);
            })}
        </div>
    </>
}

export default Content;