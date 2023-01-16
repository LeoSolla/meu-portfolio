import './Welcome.css'

const Welcome = () => {
    const Emoji = props => (
        <span
          className="emoji"
          role="img"
          aria-label={props.label ? props.label : ""}
          aria-hidden={props.label ? "false" : "true"}
        >
          {props.symbol}
        </span>
      )

    return (
        <div className="flex flex-col w-full justify-center items-center pt-28 md:pt-48 pb-16 text-center">
            <div className="font-bold font-size-2 text-center">
                <h1 className="text-4xl tracking-tight md:text-5xl xl:text-9xl py-2">
                    Welcome to
                </h1>
                <h2 className="text-white gradient-text font-bold text-4xl xl:text-9xl tracking-tight">
                    Meu-Portfólio.com
                </h2>
                <p className="tracking-wide md:text-base font-normal uppercase mt-0.5 text-rose-500 md:tracking-widest p-6">
                    The simple is (and) beautiful 
                    <Emoji symbol=" ❤️"/>
                </p>
            </div>
            <div className="flex flex-col md:flex-col md:items-center md:p-10">
                <p className="text-2xl xl:text-2xl xl:leading-10 font-thin text-gray-700 max-w-7xl dark:text-white">
                    This website is built with the coolest and newest Front End development technologies.
                    <br/>To give the same effort back to our community, this project is open code.
                    <br/>Click on the buttons bellow to get the codes and animation files.                 
                </p>
                <div className="download mb-16 mt-5 px-8">
                    <a href="https://github.com/LeoSolla/meu-portfolio" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-neutral-600 text-white font-normal py-3 px-8 rounded inline-flex items-center dark:bg-neutral-600 hover:bg-opacity-50 hover:text-white">
                        Download Code
                    </a>
                    <a href="https://drive.google.com/drive/folders/14JjAWyVToQZ4Fu6EE5Ldh2jroCdyP2F6" target="_blank" rel="noopener noreferrer" className="bg-rose-500 hover:bg-red-800 text-white font-normal py-3 px-8 rounded hover:text-white">
                        Download Animation
                    </a>
                </div>
            </div>
        </div>
    );
}




export default Welcome;