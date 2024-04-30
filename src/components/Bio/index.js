import './index.css'
import Artwork from '../Artwork';

const Bio = ({secondSpin, artistBio, left, chooseLeft, artworks}) => {
    let missString = "";

    if(artistBio["nationality"] === "" || artistBio["nationality"] === "null"){
        missString += "No Nationality, ";
    }

    if(artistBio["birthday"] === "" || artistBio["birthday"] === "null"){
        missString += "No Birth Year, ";
    }

    if(artistBio["deathday"] === "" || artistBio["deathday"] === "null"){
        missString += "No Death Year, ";
    }

    if(artistBio["biography"] === "" || artistBio["biography"] === "null"){
        missString += "No Biography, ";
    }
    
    let length = missString.length;
    if(length !== 0){
        missString = missString.substring(0, length-2);
    }

    let handleClick = (res) => {
        chooseLeft(res);
    }

    return (
        <>
            {
                secondSpin ? 
                <div className="container text-center" id="secondSpin">
                    <div className="spinner-border text-dark" role="status"></div>
                </div>
                :
                Object.keys(artistBio).length === 0 ?
                <div></div>
                :
                <div className="container" id="twoButton">
                    <div className="row">
                        <div className="col-6 d-grid" onClick={() => handleClick(true)}>
                            {left ? <button className="btn btn-block" id="buttonBlue">Artist Info</button> : <button className="btn btn-block" id="buttonWhite">Artist Info</button>}
                        </div>
                        <div className="col-6 d-grid" onClick={() => handleClick(false)}>
                            {left ? <button className="btn btn-block" id="buttonWhite">Artworks</button> : <button className="btn btn-block" id="buttonBlue">Artworks</button>}
                        </div>
                    </div>
                </div>
            }    
                
            {
                Object.keys(artistBio).length !== 0 && left ? 
                (
                    <div className="container text-center" id="showID">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="artistinfo">{artistBio.name + " (" + artistBio.birthday + " - " + artistBio.deathday + ")"}</div>
                                <div id="artistnation">{artistBio.nationality}</div>
                                <div id="artistmiss">{missString}</div>
                                <div id="artistbio">{artistBio.biography}</div>
                            </div>
                        </div>
                    </div>
                ) 
                : 
                Object.keys(artistBio).length !== 0 && !left ?
                (
                    <Artwork artworks={artworks}/>
                )
                :
                <></>
            }
        </>
    )
}


export default Bio