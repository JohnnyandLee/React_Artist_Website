import './index.css'
import postData from '../../global/postData'

const List = ({artistList, notArtist, secondSpinChange, fillArtistBio, fillArtwork}) => {
    let chooseArtist = (url) => {
        secondSpinChange(true);

        const addressObj = {
            "address": url
        }

        postData("http://localhost:8080/artistEndpoint", addressObj)
          .then((data) => {
               searchArtworks(data["artworks"])
               .then(() => {
                   fillArtistBio(data);
                   secondSpinChange(false);
               })  
           })  
    }

    let searchArtworks = (url) => {
        const addressObj = {
            "address": url
        }

        return postData("http://localhost:8080/artworkEndpoint", addressObj)
                .then((data) => {
                    fillArtwork(data);
                })
    }

    return (
        <div id="show">
            {   notArtist ?
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="alert alert-danger" role="alert">
                                    No results.
                                </div>
                            </div>
                        </div>
                    </div>
                :
                artistList.map((artistObj) => {
                    return (
                        <span key={artistObj.title}>
                            <div className="divmiddle" onClick = {() => chooseArtist(artistObj.artistEnd)}>
                                <img alt="" src={artistObj.img === "/assets/shared/missing_image.png" ? "/artsy_logo.svg" : artistObj.img} width="200"/>
                                <div className="artists">{artistObj.title}</div>
                            </div>

                            <div className="blank"></div>
                        </span>
                    )
                })
            }
        </div>
    )
}

export default List