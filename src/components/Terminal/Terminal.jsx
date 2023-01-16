import React, { useState, useCallback } from "react";
import images from '../../assets';
import './Terminal.css';

export default function Terminal() {
    const [idNumber, setIdNumber] = useState(0);

    const sliderData = [
      {
        title: "React Developer",
        id: 1,
        company: "Pague Menos",
        project: "Search Tool",
        host: "https://www.paguemenos.com.br",
        browser: "paguemenos.com.br",
        description: "Developed the search engine, filters, ordination, list of products and add to cart from scratch of Pague Menos e-commerce.",
        screen: images.screen1,
      },
      {
        title: "React Developer",
        id: 2,
        company: "Grupo O Boticario",
        project: "VTEX IO",
        host: "https://www.boticario.com.br",
        browser: "boticario.com.br",
        description: "Implemented the first ReactJs store on the VTEX IO platform of Grupo O Boticário, paving the way for other substores and companies.",
        screen: images.screen2,
      },
      {
        title: "Angular Developer",
        id: 3,
        company: "Sem Parar",
        project: "Minha Conta",
        host: "https://minhaconta.semparar.com.br",
        browser: "semparar.com.br",
        description: "Migrated the Minha Conta B2C platform in Java to Angular 10 and participated with UX/UI team to renew the layout for customers. ",
        screen: images.screen3,
      },
      {
        title: "Angular Developer",
        id: 4,
        company: "Raia Drogasil",
        project: "DPO (Data Protection Officer)",
        host: "Internal Link Office",
        browser: "Internal Link Office",
        description: "With the purpose of carrying out the initial fulfillment of requests that Raia Drogasil customers send about LGPD consents.",
        screen: images.screen4,
      },
      {
        title: "Angular Developer",
        id: 5,
        company: "Raia Drogasil",
        project: "Univers PME",
        host: "https://univers-pbm.com.br",
        browser: "https://univers-pbm.com.br",
        description: "The companies hire health benefits for their employees, sending PDF documents and authenticating signatures with CertiSign without sending by post.",
        screen: images.screen5,
      },
    ];
  

    const inc = useCallback(() => {
      if (idNumber + 1 < sliderData.length) {
        setIdNumber(idNumber + 1);
      }
    }, [idNumber, sliderData.length]);
  
    const dec = useCallback(() => {
      if (idNumber > 0) {
        setIdNumber(idNumber - 1);
      }
    }, [idNumber]);

    return (
        <>
          <div className="slider_box_left">
            <p className="slider_box_left_company">
              {sliderData[idNumber].title}
            </p>
            
            <div className="slider_box_left_bidding">
              <div>
                <p className="slider_box_left_bidding_text">
                {sliderData[idNumber].description}
                </p>
              </div>

              <div className="animated animatedFadeInUp fadeInUp" key={sliderData[idNumber].id}>
                <div className="terminal">
                  <div className="terminal__task_bar">
                    <span className="terminal__circle"></span>
                    <span className="terminal__circle"></span>
                    <span className="terminal__circle"></span>
                  </div>
                  <div className="terminal__window">
                    <p className="terminal__prompt">$ <span className="terminal__prompt_typing">
                        <span className="cover cover_gimme_dev"></span>npm run build</span>
                    </p>
                    <p className="terminal__prompt terminal__prompt_checkout">
                        <span className="terminal__window_highlight">
                            Compiled successfully.
                        </span>
                    </p>
                    <br/>                    
                    <p className="terminal__prompt terminal__prompt_show_contact">$ <span className="terminal__prompt_typing">
                        <span className="cover cover_show_contact"></span>show project info</span>
                    </p>
                    <p className="terminal__prompt terminal__prompt_mail">
                        <span className="label">➜ Company: </span>
                        <span className="terminal__prompt">
                            <span className="terminal__prompt_label">{sliderData[idNumber].company}</span>
                        </span>
                    </p>
                    <p className="terminal__prompt terminal__prompt_mail">
                        <span className="label">➜ Project: </span>
                        <span className="terminal__prompt">
                            <span className="terminal__prompt_label">{sliderData[idNumber].project}</span>
                        </span>
                    </p>
                    <p className="terminal__prompt terminal__prompt_mail">
                        <span className="label">➜ Host: </span>
                        <span className="terminal__window_link">
                            <a href={`${sliderData[idNumber].host}`} target="_blank">{sliderData[idNumber].host}</a>
                        </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="slider_box_left_sliderBtn">
              <button className="text-2xl hover:bg-transparent bg-stone-500 hover:text-stone-700 font-semibold text-white py-1 px-4 border hover:border-stone-500 rounded" onClick={() => dec()}>
                {'< Prev'}
              </button>
              <button className="text-2xl hover:bg-transparent bg-stone-500 hover:text-stone-700 font-semibold text-white py-1 px-4 border hover:border-stone-500 rounded" onClick={() => inc()}>
              {'Next >'}
              </button>
            </div>
          </div>
          
            <div className="flex justify-center sm:mt-24 lg:-right-80 lg:col-span-6 lg:mt-0 xl:right-0 xl:w-2/5 rounded-md bg-gray-100">
              <div className="animated animatedFadeInUp fadeInUp browser" key={sliderData[idNumber].id}>
                <div className="flex w-full flex-col items-center justify-center rounded-md border border-gray-300 shadow-2xl">
                  <div className="bg-gray-200 flex h-9 w-full items-center justify-start px-2 border-b rounded-t-md">
                    <div className="dots">
                      <div className="bg-gray-400 mr-2 h-2 w-2 rounded-full"></div>
                      <div className="bg-gray-400 mr-2 h-2 w-2 rounded-full"></div>
                      <div className="bg-gray-400 mr-2 h-2 w-2 rounded-full"></div>
                    </div>
                    <div className="browser_input dark:text-black">
                      <div className="browser_url">
                        <i className="browser_lock">
                          <svg fill="currentColor" height="12" viewBox="0 0 24 24" width="12">
                            <path d="M5 10.2H19V21H5V10.2Z"></path>
                            <path clipRule="evenodd" d="M12 12C13.933 12 15.5 10.3882 15.5 8.4C15.5 6.41177 13.933 4.8 12 4.8C10.067 4.8 8.5 6.41177 8.5 8.4C8.5 10.3882 10.067 12 12 12ZM12 13.8C14.8995 13.8 17.25 11.3823 17.25 8.4C17.25 5.41766 14.8995 3 12 3C9.10051 3 6.75 5.41766 6.75 8.4C6.75 11.3823 9.10051 13.8 12 13.8Z" fillRule="evenodd"></path>
                          </svg>
                        </i>
                        <span className="browser_url_disable">{sliderData[idNumber].browser}</span>
                        <i className="browser_refresh">
                          <svg fill="none" height="12" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="12">
                            <path d="M23 4v6h-6"></path>
                            <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"></path>
                          </svg>
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-1000 w-full rounded-b-md">
                  <img
                    src={sliderData[idNumber].screen}
                    alt="Project"
                    className="slider_box_right_box_img"
                  />
                  </div>
                </div>
              </div>
          </div>
        </>
    );
}

