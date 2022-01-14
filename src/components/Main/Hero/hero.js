import bg from '../../img/web-development.svg'
import ModalContent from "./modal";

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="heroContent">
                    <div className="firsContent">
                        <h2>MOTION WEB LLC</h2>
                        <span>IT<span>-академиясы</span></span>
                        <p>
                            Биз нөлдөн баштап IT кесиптерин үйрөтөбүз жана IT-тармагында талап
                            кылынган адистиктер жана багыттар боюнча билим беребиз.
                        </p>
                        <ModalContent/>
                    </div>
                    <div className="secondContent">
                        <img src={bg} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;