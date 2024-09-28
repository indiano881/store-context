import Logo from "../Logo";

const SplashScreen= ()=> {
    return(<>
        <div
          id="splash-screen"
          className="fixed inset-0 flex items-center justify-center bg-pt-primary z-50 transition-opacity duration-1000 ease-out opacity-100"
        >
          <div className="text-pt-secondary text-3xl md:text-7xl font-bold animate-zoom flex flex-col justify-center items-center"><Logo width={"200px"} height={"200px"} color={"#E0A73F"} /> <p>Pandorum</p>  </div>
        </div>
        
      </>)
}

export default SplashScreen;