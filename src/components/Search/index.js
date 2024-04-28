import './index.css'
import { useRef } from "react"
import postData from '../../global/postData'

const Search = ({searchNewData, spinChange, spin, notArtistChange}) => {
    const inputName = useRef("");

    let searchName = () => {
       spinChange(true);
       notArtistChange(false);
       const name = inputName.current.value;
       inputName.current.value = "";

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

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <p id="lefttopword">Artist Search</p>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <input type="text" ref={inputName} className="form-control" placeholder="Please enter an artist name." />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-12 text-center">
                        <button onClick={searchName} className="btn" id="inputsend" type="submit">
                            Search
                            {spin && <div className="spinner-border spinner-border-sm text-light"></div>}
                        </button>
                        <button className="btn btn-secondary mx-sm-1">Clear</button>
                    </div>
                </div>
            </div> 
        </> 
    )
}

export default Search