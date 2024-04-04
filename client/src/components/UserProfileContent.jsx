
import { useSelector } from "react-redux";
import ProfileEdit from "../pages/user/ProfileEdit";

const UserProfileContent = () => {
  const { email, username ,profilePicture} = useSelector((state) => state.user.currentUser);
  
  
  return (
    <div className="px-4 mx-auto mt-12  bg-white w-full sm:px-6 lg:px-8">
      <div className="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
        <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        <div className="px-5 py-2 flex flex-col gap-3 pb-6">
          <div className="h-[90px] relative shadow-md w-[90px] rounded-full border-4  -mt-14 border-white">
            <img
              src={profilePicture} alt="profile_picture"
              className="w-full h-full rounded-full object-center object-cover"
            />
             <div className="absolute bottom-0 left-[60px] z-10 ">
           
           <button
             type="button"
             className=" p-3"
           >
             <ProfileEdit/>
           </button>
         </div>
          </div>
          <div className="">
            <h3 className="text-xl text-slate-900 relative font-bold leading-6">
              {username}
            </h3>
            <p className="text-sm text-gray-600">{email}</p>
           

          </div>
          <div>
          <h4 className="text-sm font-medium leading-1 mb-2">User Informations</h4>
          <div className="flex flex-col gap-y-2">
          <p className="text-sm text-gray-600">Phone:110100101001</p>
          <p className="text-sm text-gray-600 max-w-[150px]">Adress:jeevan joji oollirickal house manjadi po thiruvalla 689105</p>
          </div>
          

          </div>
         
          
          
         
        </div>
      </div>
    </div>
  );
};

export default UserProfileContent;