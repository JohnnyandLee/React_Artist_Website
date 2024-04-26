import './index.css'

const Search = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <p id="lefttopword">Artist Search</p>
        </nav>

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <input type="text" className="form-control"  placeholder="Please enter an artist name."/>      
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-12 text-center">
                    <button className="btn" id="inputsend" type="submit">
                        Search
                        <div className="spinner-border spinner-border-sm text-light" id="firstSpin" role="status"></div>
                    </button>
                    <button className="btn btn-secondary mx-sm-1" >Clear</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Search