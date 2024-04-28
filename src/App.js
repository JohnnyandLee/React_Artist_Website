import Search from './components/Search'
import List from './components/List'
import Bio from './components/Bio'
import Footer from './components/Footer'
import { useState } from "react";

const App = () => {
    const [artists, setArtists] = useState([]);
    const [spin, setSpin] = useState(false);
    const [notArtist, setNotArtist] = useState(false);

    const [secondSpin, setSecondSpin] = useState(false);
    const [artistBio, setArtistBio] = useState({});
    const [artworks, setArtworks] = useState([]);
    const [left, setLeft] = useState(true);

    let artistsChange = (newArtistsArray) => {
        setArtists(newArtistsArray);
    };

    let spinChange = (res) => {
        setSpin(res);
    };

    let notArtistChange = (res) => {
        setNotArtist(res);
    };

    let secondSpinChange = (res) => {
        setSecondSpin(res);
    }

    let fillArtistBio = (res) => {
        setArtistBio(res);
    }

    let fillArtwork = (res) => {
        setArtworks(res);
    }

    let chooseLeft = (res) => {
        setLeft(res);
    }

    return (
        <>
           <Search searchNewData={artistsChange} spinChange={spinChange} spin={spin} notArtistChange={notArtistChange}/>
           <List artistList={artists} notArtist={notArtist} secondSpinChange={secondSpinChange} fillArtistBio={fillArtistBio} fillArtwork={fillArtwork}/>
           <Bio secondSpin={secondSpin} artistBio={artistBio} artworks={artworks} left={left} chooseLeft={chooseLeft}/>
           <Footer />
        </>
    )
}

export default App