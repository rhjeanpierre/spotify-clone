//https://developer.spotify.com/documentation/web-plaayback-sdk/quick-start/#

//click login button -> redirects to spotify login page
export const authEndPoint = "https://accounts.spotify.com/authorize";

//redirects to home page once logged in
const redirectUri = "http://localhost:3000/";

const clientId = "079217e30ff044a7ae1bf3aff29e9f17";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];


export const getTokenFromUrl = () => {
  return window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item)=>{
        // #accessToken=mysupersecretkey&name=jeanpierre&abc=def
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
      }, {});
}
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
