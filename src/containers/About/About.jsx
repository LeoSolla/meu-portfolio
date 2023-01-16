import { Timeline } from "../../components";
import images from '../../assets';

const About = () => {
    return (
        <section id="About Me">
            <div className="flex flex-col w-full justify-center items-center p-4 text-center">
                <div className="flex flex-col md:flex-col md:items-center md:p-10 w-full md:w-auto">
                    <div className="pb-2">
                        <h5 className="text-center font-extrabold text-transparent text-4xl lg:text-9xl tracking-tight py-2 bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-300">
                            About me
                        </h5>                  
                        <p className="text-2xl xl:text-2xl xl:leading-10 font-thin text-gray-700 max-w-7xl p-6 dark:text-white">
                            <b>Hi, I am Leonardo Solla!</b> A front-end developer based in São Paulo, Brazil. <img width="23px" src={images.brazil_flag} alt="Brazil" srcSet=""/>
                            <br/>I solve problems and bring solutions since 2015 to web development environments. When I'm not working, 
                            <br/>I enjoy workout, watching vintage movies,
                            <b> eating pizza</b> and stay with my little daughter.
                        </p>              
                    </div>
                    <div className="w-full">
                        <Timeline/>
                    </div>             
                </div>
            </div>
        </section>
    );
}

export default About;