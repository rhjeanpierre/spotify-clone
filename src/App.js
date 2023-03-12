import './App.css';
import Login from "./Login";
import {useEffect} from "react";
import {getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
    const [{ user, token }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";

        const _token = hash.access_token;

        if (_token) {
            dispatch({
                type: "SET_TOKEN",
                token: _token,
            })
            spotify.setAccessToken(_token);

            spotify.getMe().then(user => {
                console.log("USER", user);


                dispatch({
                    type: 'SET_USER',
                    user: user,   //this is the payload
                })
            });

            spotify.getUserPlaylists().then((playlists)=>{
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists,
                })
                //console.log('playlists from spotify', playlists);
            });

            spotify.getPlaylist('4GpBODwgLjOwL6JcBunQcr').then(response => {
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover_weekly: response,
                })
            })

        }

        //console.log('access token >> ', token);


    }, []);

    console.log("The USER", user);
    console.log("the TOKEN: ", token);
    return (
        <div className="App">
            {
                token ? (
                    <Player spotify={spotify}/>
                ) : (
                    <Login/>
                )
            }
        </div>
    );
}

export default App;
