import { useState } from "react";
import styles from "../index";
import { Link, useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";


function SignIn() {
  const [formData, setFormData] = useState({});
  const { isLoading, isError } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.succes === false || !res.ok) {
        dispatch(signInFailure(data));
        return;
      }
      if(data.isAdmin){
        dispatch(signInSuccess(data))
        navigate('/adminDashboard')
      }
     
      else if(data.isUser){
        dispatch(signInSuccess(data));
        navigate("/");
      }
      else{
        dispatch(signInFailure(data))
      }

     
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <>
      <div
        className={`pb-10 max-w-lg mx-auto mt-16  rounded-lg overflow-hidden  shadow-2xl`}
      >
        <div
          className={` green px-6 py-2   rounded-t-lg flex justify-between items-center`}
        >
          <h1 className={`${styles.heading2}  text-normal `}>Sign In</h1>
          <Link to={"/"}>
            <div className=" px-3  font-bold  hover:bg-green-300 rounded-md  shadow-inner">
              x
            </div>
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 pt-10 px-5"
        >
          <input
            type="text"
            id="email"
            className="text-black bg-slate-100 p-3 rounded-md"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="text"
            id="password"
            className="text-black bg-slate-100 p-3 rounded-md"
            placeholder="Password"
            onChange={handleChange}
          />
          <button
            className={`${styles.button}  disabled:bg-slate-500 text-black disabled:text-white`}
            disabled={isLoading}
          >
            {isLoading ? "Loading ..." : "Login"}
          </button>
          <div className="flex justify-between">
            <div className="flex justify-between">
              <p className="text-[10px] border-r border-black">
                No account?{" "}
                <span className="text-blue-600 pr-2">
                  {" "}
                  <Link to={`/signup`}>Sign Up</Link>
                </span>
              </p>
              <p className="text-[10px] pl-2 text-blue-600">forgot password</p>
            </div>

            <p className="text-[10px] text-red-600">
              {isError ? isError.message || "something went wrong" : " "}
            </p>
          </div>
        </form>
        <div>
          <h3 className="text-center text-slate-700 pt-3 pb-3 text-[10px]">
            OR
          </h3>
          <div className="flex justify-center items-center gap-3 pb-6">
            <span className="bg-green-300 w-20 h-[.1px]"></span>
            <span className="text-[10px] sm:text-[12px] text-slate-500">
              Continue with social login
            </span>
            <span className="bg-green-300 w-20 h-[.1px]"> </span>
          </div>

          <OAuth />
        </div>
      </div>
    </>
  );
}

export default SignIn;
