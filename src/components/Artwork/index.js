import './index.css'
import postData from '../../global/postData'
import { useState } from "react";
import Endpoint from '../Endpoint';

const Artwork = ({artworks}) => {
    const [endPoints, setEndpoints] = useState([]);
    const [endPointObj, setendPointObj] = useState({});
    const [showModal, setShowModal] = useState(false);

    let fillEndpoint = (res) => {
        setEndpoints(res);
    }

    let fillEndpointObj = (img, name, year) => {
        setendPointObj({img, name, year});
    }

    const controlModal = (res) => {
        setShowModal(res);
    };

    const artworksArray = artworks.title.map((title, index) => ({
        id: artworks.id[index],
        date: artworks.date[index],
        img: artworks.image[index],
        title: title
    }));

    let test = (obj) => {
        const data = {
            "id": obj.id
        }

        postData("http://localhost:8080/geneEndpoint",data)
            .then((res)=>{
                const endPointArray = res.artname.map((artname, index) => ({
                    artname: res.artname[index],
                    img: res.image[index]
                }));
                fillEndpointObj(obj.img, obj.title, obj.date);
                fillEndpoint(endPointArray);
                controlModal(true);
            })
    }

    return (
        <>
            <div className="container text-center" id="showArtworks">
                <div className="row gy-2">
                {
                    artworksArray.map((artworkObj) => {
                        return (
                            <div className="col-lg-3 col-md-4" key={artworkObj.img}>
                                <div className="card20 h-100 d-flex">
                                    <img alt="" src={artworkObj.img}/>
                                    <div className="mt-auto">
                                        <p id="pname1">{artworkObj.title}</p>
                                        <p id="pyear1">{artworkObj.date}</p>
                                        <button className="btn catego bt" data-bs-toggle="modal" data-bs-target="#popup" onClick={() => test(artworkObj)}>
                                            <span className="insid">Categories</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>

            {
                endPoints.length !== 0 ? 
                <Endpoint endPointObj={endPointObj} endPoints={endPoints} showModal={showModal} controlModal={controlModal}/>
                : <></>
            }
        </>
    )
}

export default Artwork