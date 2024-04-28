import './index.css'

const Artwork = ({artworks}) => {
    const artworksArray = artworks.title.map((title, index) => ({
        id: artworks.id[index],
        date: artworks.date[index],
        img: artworks.image[index],
        title: title
    }));

    let test = () => {
        console.log("test");
    }

    return (
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
                                    <button className="btn catego bt" data-bs-toggle="modal" data-bs-target="#popup" onClick={test}>
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
    )
}

export default Artwork