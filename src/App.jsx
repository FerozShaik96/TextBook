import textBook from './assets/textBook.png';
function App() {
  return (
    <>
      <div className="  relative mx-auto my-12 flex h-[371px] w-[284px]  items-center justify-center ">
        <div className="absolute bottom-3 left-[23px] h-[20px] w-[100px] rounded-l-3xl bg-red"></div>
        <div className="bg-pink absolute right-[2px] top-8 h-[327px] w-[240.5px]  "></div>
        <div className="bg-shadowWhite absolute right-[8px] top-[30px] h-[323px] w-[250px] rounded-l-[10px] "></div>
        <div className="relative h-[323px] w-[238.5px] border-none  bg-yellow/90">
          <div className="text-white/75 absolute left-[6px]  h-[90px] w-[232.5px] bg-red">
            <h1 className=" mt-[20px] text-center text-5xl font-light  tracking-wide ">
              PHYSICS
            </h1>
            <p className="ms-7 mt-[3px] text-[9px]">Textbook for Class XII</p>
          </div>
          <div className=" absolute bottom-0 left-[22px] h-[80px] w-[16px] bg-gray"></div>
          <div className="absolute bottom-0 left-[58px] h-[80px] w-[25px] bg-liteYellow "></div>
          <div className="absolute left-[6px] top-[90px] h-[5px] w-[135px] bg-liteYellow "></div>
          <div className="absolute left-[6px] top-[95px] h-[5px] w-[135px] bg-gray "></div>
          <div className=" absolute bottom-2 right-0 h-[5px] w-[97px]  bg-gray "></div>
          <div className=" absolute bottom-0 right-0 h-[8px] w-[97px] bg-liteYellow "></div>
          <div className="absolute left-[140px] top-[90px] h-[233px] w-[5px] bg-red "></div>
          <div className="absolute left-[160px] top-[90px] h-[233px] w-[15px] bg-red "></div>
          <div className="absolute bottom-0 right-0 h-[233px] w-[0.5px] bg-red "></div>
          <div className="absolute bottom-0 left-[6px] h-[233px] w-[1px] bg-red "></div>
          <h2 className="absolute bottom-7 left-[23px] font-semibold  text-red">
            <span className="text-2xl font-normal tracking-wider">P</span>ART{' '}
            <span className="ms-[2px] text-2xl font-medium">I</span>
          </h2>
          <img
            src={textBook}
            alt="PHYSICS textbook"
            className="absolute -right-4 drop-shadow-lg"
          />
        </div>
      </div>
    </>
  );
}

export default App;
