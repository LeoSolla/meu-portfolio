import { Showcase, Slider } from "../../components";
import Terminal from "../../components/Terminal/Terminal";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section id="Portfolio">
      <div className="flex flex-col w-full justify-center"> 
        <div className="flex flex-col md:flex-col md:items-center md:p-10 text-center">
            <h1 className="text-center font-extrabold text-transparent text-4xl lg:text-9xl tracking-tight py-6 bg-clip-text bg-gradient-to-r from-purple-700 to-violet-300">
                Portfolio
            </h1>
            <p className="text-2xl xl:text-2xl xl:leading-10 font-thin max-w-7xl p-6">
              These are some of the must revelant projects that I developed in my journey.
              <br/>Always thinking in providing the speed, reliability and reusable code.
            </p>
        </div>
        <div className="w-full mx-auto"> 
          <div className="flex flex-col lg:flex-row w-full justify-center items-center">
            <Terminal />
          </div>
          
          <div className="flex flex-col md:flex-col md:items-center md:p-14 text-center my-24">
            <p className="text-2xl xl:text-2xl xl:leading-10 font-thin text-gray-500 dark:text-gray-400 align-middle">
                For more professional experiences and personal details, please check my
              <a href="https://www.linkedin.com/in/leonardo-solla-19a1a6231/" target="_blank" rel="noopener noreferrer" className="p-2 text-blue-600 dark:text-blue-500 "> 
                LinkedIn
              </a>
              profile.
            </p>
          </div>

          <div className="ship_section_stats">
            <section className="light statistics">
              <div className="stats homepage">
                <div className="stats_item">
                  <p className="highlight">40</p>
                  <span className="description">hours per week</span>
                </div>
                <div className="stats_item">
                  <p className="highlight">170K+</p>
                  <span className="description">hours of development</span>
                </div>
                <div className="stats_item">

                  <p className="highlight">≈7</p>
                  <span className="description">coffees a day</span>
                </div>
                <div className="stats_item">
                  <p className="highlight">99.98%</p>
                  <span className="description">committed</span>
                </div>
              </div>
            </section>
          </div> 
        </div>

        <div className="client-slider py-32">
          <div className="text-base text-center align-center font-semibold uppercase text-gray-400 md:tracking-widest p-12">
              <h1>Who trusted me</h1>
          </div>
          <Slider/>
        </div>

        <div className="flex flex-col md:flex-col md:items-center text-2xl border-y bg-[#fafafa] border-[#eaeaea] dark:bg-[#202c33]">
          <div className="text-center py-16">
            <h2 className="text-5xl">Showcase</h2>
            <h3 className="text-2xl xl:text-2xl xl:leading-10 font-thin text-gray-700 p-6 dark:text-white">With Solidity, Three.js and Spline, we can do amazing things.</h3>
          </div>
          <Showcase/>
        </div>
        
      </div>
    </section>
  );
};


export default Portfolio;