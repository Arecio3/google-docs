import { ThreeBounce } from 'better-react-spinkit';

function Loading() {
    return (
        <center style={{display: "grid", placeItems: "center", height: "100vh"}}>
            <div>
            <ThreeBounce color="orange" size={40}/>
            </div>
        </center>
    )
}

export default Loading