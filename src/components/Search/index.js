import './index.css'
import { useRef } from "react"
import postData from '../../global/postData'

const Search = ({searchNewData, spinChange, spin, notArtistChange, fillArtistBio, fillArtwork, chooseLeft}) => {
    const inputName = useRef("");

    let handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          searchName();
        }
    };

    let searchName = () => {
       const name = inputName.current.value;
       if(name === "") return;
       inputName.current.value = "";

       //clear the previous material
       clearAll();

       spinChange(true);

       const nameObj = { name }

       postData("http://localhost:8080/searchEndpoint", nameObj)
          .then((data) => {
            const combinedArray = data.title.map((title, index) => ({
                title: title,
                img: data.img[index],
                artistEnd: data.artistEnd[index]
              }));
              
              console.log(combinedArray);
              if(combinedArray.length === 0) notArtistChange(true);
              
              spinChange(false);
              searchNewData(combinedArray);
           })
    }

    let clearAll = () => {
        searchNewData([]);
        fillArtistBio({});
        fillArtwork([]);
        chooseLeft(true);
        notArtistChange(false);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <p id="lefttopword">Artist Search</p>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <input type="text" ref={inputName} className="form-control" onKeyDown={handleKeyPress} placeholder="Please enter an artist name." />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-12 text-center">
                        <button onClick={searchName} className="btn" id="inputsend" type="submit">
                            Search
                            {spin && <div className="spinner-border spinner-border-sm text-light"></div>}
                        </button>
                        <button onClick={clearAll} className="btn btn-secondary mx-sm-1">Clear</button>
                    </div>
                </div>
            </div> 
        </> 
    )
}

export default Search