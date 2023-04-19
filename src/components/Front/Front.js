import './front.css'; 
import banner from '../../images/banner.jpg'

const Front= () => {
    return(
        <div>
            <div className="home">
                <div className="home_Container">
                    <div className="homeSliderContainer">
                        <div className="homeSlide">
                            <img className="homeImg"
                            src={banner} alt="img"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Front;