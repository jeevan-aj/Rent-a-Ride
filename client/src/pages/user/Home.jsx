import styles from "../../index";
import Herocar from "../../Assets/homepage_car_copy.jpeg";

function Home() {
  return (
    <>
      {/* This is div is the container for the dot background */}
      <div className="relative h-full w-full mx-auto sm:max-w-[900px] lg:max-w-[1500px] bg-white min-h-[70vh]">
        <div
          className={`px-12 lg:px-28 absolute top-0   z-10 w-full   justify-between items-center flex flex-col  sm:flex-row mt-[50px] md:mt-[150px] gap-10`}
        >
          <div className="">
            <p className={`py-2 text-[9px] md:text-[12px] ${styles.paragraph}`}>
              Plan your trip now
            </p>
            <h1
              className={` md:${styles.heading2} font-extrabold text-[35px] leading-10 lg:font-bold  mb-6  lg:text-[58px] lg:mb-6`}
            >
              Save <span className="text-green-600">big</span> with our <br />
              car rental
            </h1>
            <p className={`${styles.paragraph}`}>
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className=" mt-10  lg:mt-[40px] flex gap-3">
              <button className="bg-green-500  text-black text-[12px] md:text-[16px] py-3 px-3 rounded-sm font-semibold  lg:py-3 lg:px-5">
                Book Ride{" "}
                <span className="ml-2">
                  <i className="bi bi-check-circle-fill"></i>
                </span>
              </button>
              <button className="bg-black text-white rounded-sm text-[12px] md:text-[16px]  px-3 py-2 lg:py-3 lg:px-5">
                Learn More{" "}
                <span>
                  <i className="bi bi-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="object-contain hidden sm:block">
            <img src={Herocar} alt="" />
          </div>
        </div>
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
    </>
  );
}

export default Home;
