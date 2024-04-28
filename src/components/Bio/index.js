import './index.css'
import Artwork from '../Artwork';

const Bio = ({secondSpin, artistBio, left, chooseLeft, artworks}) => {

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
                                <div id="artistmiss"></div>
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