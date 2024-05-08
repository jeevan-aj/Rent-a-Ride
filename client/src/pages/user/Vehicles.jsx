import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setVehicleDetail,
  showVehicles,
} from "../../redux/user/listAllVehicleSlice";
import { FaCarSide } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { Link } from "react-router-dom";
import Filter from "../../components/Filter";
import Sort from "../../components/Sort";

export const onVehicleDetail = async (id, dispatch,navigate) => {
  try {
    const res = await fetch("/api/user/showVehicleDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const data = await res.json();
    dispatch(setVehicleDetail(data));
    navigate('/vehicleDetails')
  } catch (error) {
    console.log(error);
  }
};

const Vehicles = () => {
  const { userAllVehicles } = useSelector((state) => state.userListVehicles);
const {data,filterdData} = useSelector((state)=> state.sortfilterSlice)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/user/listAllVehicles");
        if (!res.ok) {
          console.log("not success");
        }
        if (res.ok) {
          const data = await res.json();
          dispatch(showVehicles(data));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch ,data]);

  return (
    <div className=" lg:grid lg:grid-cols-12 gap-x-10 mx-28 justify-between">
      <div className=" mt-10 col-span-3   relative box-shadow-xl drop-shadow-xl ">
        <Filter />
      </div>
      <div className="col-span-9">
        <div className="mt-10  bg-blend-overlay  backdrop-blur-xl opacity-1 box-shadow-xl  top-5 z-40 drop-shadow-lg ">
          <Sort />
        </div>
        <div className=" flex  sm:flex-row  w-full  lg:grid lg:max-w-[1000px]  lg:grid-cols-3 justify-center items-center gap-5 flex-wrap mt-5">
          {filterdData && filterdData.length >0 ? 
            filterdData.map(
              (cur, idx) =>
                cur.isDeleted === "false" && (
                  <div
                    className="bg-white box-shadow rounded-lg  drop-shadow "
                    key={idx}
                  >
                    <div className="mx-auto max-w-[320px] px-4 py-2 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden object-contain rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-80 mb-3">
                        <img
                          src={`${cur.image[0]}`}
                          alt={`cur.name`}
                          className=" w-full object-contain object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="flex justify-between items-start">
                        <h2 className="text-[14px] capitalize font-semibold tracking-tight text-gray-900">
                          <span></span>
                          {cur.name}
                        </h2>

                        <div className="text-[14px]  flex flex-col items-end">
                          <p className="font-semibold">{cur.price}</p>
                          <div className="text-[6px] relative bottom-[3px]">
                            Per Day
                          </div>
                        </div>
                      </div>

                      <div className="my-2 font-mono">
                        <div className="flex justify-between items-center mb-5 mt-5">
                          <h3 className="text-[12px] flex justify-between items-center gap-1 ">
                            <span>
                              <FaCarSide />
                            </span>
                            {cur.company}
                          </h3>
                          <p className=" text-end text-[12px] flex justify-between items-center gap-1">
                            <span>
                              <MdAirlineSeatReclineNormal />
                            </span>
                            {cur.seats}
                          </p>
                        </div>
                        <div className="flex justify-between items-center text-[12px] mb-5 ">
                          <p className="flex items-center justify-center gap-1">
                            <FaCarSide />
                            {cur.car_type}
                          </p>
                          <p className="flex justify-between items-center gap-1">
                            <span>
                              <BsFillFuelPumpFill />
                            </span>
                            {cur.fuel_type}
                          </p>
                        </div>

                        <hr />

                        <div className="flex justify-center items-center gap-x-5  my-3">
                          <Link to={"/vehicleDetails"}>
                            <button
                              className="bg-green-500 px-4 py-2 w-[100px] rounded-sm"
                              onClick={() => onVehicleDetail(cur._id, dispatch)}
                            >
                              <div className="text-[12px] ">Book Ride</div>
                            </button>
                          </Link>

                          <Link to={"/vehicleDetails"}>
                            <button
                              className="bg-black px-4 py-2 w-[100px] rounded-sm"
                              onClick={() => onVehicleDetail(cur._id, dispatch)}
                            >
                              <div className="text-[12px] text-white">
                                Details
                              </div>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            ):userAllVehicles && userAllVehicles.map(
              (cur, idx) =>
                cur.isDeleted === "false" && (
                  <div
                    className="bg-white box-shadow rounded-lg  drop-shadow "
                    key={idx}
                  >
                    <div className="mx-auto max-w-[320px] px-4 py-2 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden object-contain rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-80 mb-3">
                        <img
                          src={`${cur.image[0]}`}
                          alt={`cur.name`}
                          className=" w-full object-contain object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="flex justify-between items-start">
                        <h2 className="text-[14px] capitalize font-semibold tracking-tight text-gray-900">
                          <span></span>
                          {cur.name}
                        </h2>

                        <div className="text-[14px]  flex flex-col items-end">
                          <p className="font-semibold">{cur.price}</p>
                          <div className="text-[6px] relative bottom-[3px]">
                            Per Day
                          </div>
                        </div>
                      </div>

                      <div className="my-2 font-mono">
                        <div className="flex justify-between items-center mb-5 mt-5">
                          <h3 className="text-[12px] flex justify-between items-center gap-1 ">
                            <span>
                              <FaCarSide />
                            </span>
                            {cur.company}
                          </h3>
                          <p className=" text-end text-[12px] flex justify-between items-center gap-1">
                            <span>
                              <MdAirlineSeatReclineNormal />
                            </span>
                            {cur.seats}
                          </p>
                        </div>
                        <div className="flex justify-between items-center text-[12px] mb-5 ">
                          <p className="flex items-center justify-center gap-1">
                            <FaCarSide />
                            {cur.car_type}
                          </p>
                          <p className="flex justify-between items-center gap-1">
                            <span>
                              <BsFillFuelPumpFill />
                            </span>
                            {cur.fuel_type}
                          </p>
                        </div>

                        <hr />

                        <div className="flex justify-center items-center gap-x-5  my-3">
                          <Link to={"/vehicleDetails"}>
                            <button
                              className="bg-green-500 px-4 py-2 w-[100px] rounded-sm"
                              onClick={() => onVehicleDetail(cur._id, dispatch)}
                            >
                              <div className="text-[12px] ">Book Ride</div>
                            </button>
                          </Link>

                          <Link to={"/vehicleDetails"}>
                            <button
                              className="bg-black px-4 py-2 w-[100px] rounded-sm"
                              onClick={() => onVehicleDetail(cur._id, dispatch)}
                            >
                              <div className="text-[12px] text-white">
                                Details
                              </div>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
