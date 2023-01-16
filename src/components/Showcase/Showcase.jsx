import "./Showcase.css";
import images from '../../assets'

export default function Showcase() {
    return (
        <div className="flex flex-col w-full md:px-56 md:grid grid-cols-4 grid-areas md:pb-36">
            <div className="col-lg-4 container_foto grid-area-a">
                <div className="see_more text-center">
                    <article className="text-left">
                        <h2>Three.js</h2>
                        <h4>Take a ride into deep Universe scrolling the page</h4>
                    </article>
                    <span>
                        <a href="https://threejs-sample-portfolio-smoky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500 underline">https://threejs-sample-portfolio-smoky.vercel.app/</a>
                    </span>
                </div>
                <img src={images.threejs2} alt=""/>
            </div>
            <div className="col-lg-4 container_foto">
                <div className="see_more text-center">
                    <article className="text-left">
                        <h2>Solidity</h2>
                        <h4>Send and receive real crypto using Metamask</h4>
                    </article>
                    <span>
                        <a href="https://web3-project-amber.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500 underline">https://web3-project-amber.vercel.app/</a>
                    </span>
                </div>
                <img src={images.solidity} alt=""/>
            </div>
            <div className="col-lg-4 container_foto">
                <div className="see_more text-center">
                    <article className="text-left">
                        <h2>Three.js</h2>
                        <h4>An example of portfolio using Three.js</h4>
                    </article>
                    <span>
                        <a href="https://hackerrank-threejs.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500 underline">https://hackerrank-threejs.vercel.app/</a>
                    </span>
                </div>
                <img src={images.threejs1} alt=""/>
            </div>
            <div className="col-lg-4 container_foto">
                <div className="see_more text-center">
                    <article className="text-left">
                        <h2>Spline</h2>
                        <h4>3D portfolio made with Spline</h4>
                    </article>
                    <span>
                        <a href="https://my.spline.design/untitled-585198c72ab93b124387e5b6407a8f0c/" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500 underline">https://my.spline.design/portfolio/</a>
                    </span>
                </div>
                <img src={images.spline1} alt=""/>
            </div>
            <div className="col-lg-4 container_foto">
                <div className="see_more text-center">
                    <article className="text-left">
                        <h2>Spline</h2>
                        <h4>Press the key on your keyboard to see the animations</h4>
                    </article>
                    <span>
                        <a href="https://my.spline.design/keyboard-32cd153be760dda72888ac5ad3847f74/" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500 underline text-left">https://my.spline.design/keyboard</a>                        
                    </span>
                </div>
                <img src={images.spline2} alt=""/>
            </div>
        </div>
    );
}