import '../css/landingpage.css'
import BgVideo from '../assets/bg3.mp4'

const Landingpage = () => {
    return (
        <div className="landingpage">

            <video src={BgVideo} autoPlay muted loop className="video-bg" />
            <div className="bg-overlay"></div>

            <div className="home-text">
                <h1 className="lh1">Err 404 Hackathon</h1>
                <p className="lp">Innovations Roar, Errors No more</p>
            </div>

            <div className="home-btn">Devfolio</div>

        </div>
    )
}

export default Landingpage;