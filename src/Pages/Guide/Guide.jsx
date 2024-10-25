import Navbar from '../../components/Navbar/Navbar';
import img from './bmichart.webp';
import './guide.css';
function Guide() {
    return (
        <div className="imageshere">
            <Navbar />
            <h1>Guide</h1>
            <img src={img} alt="Chart"></img>
        </div>
    );
}
export default Guide;