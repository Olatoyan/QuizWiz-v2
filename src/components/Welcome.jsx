import { Link } from "react-router-dom";
import { useProfile } from "../contexts/ProfileContext";

function Welcome({ userDetails }) {
  const { handleLogout: onLogout } = useProfile();

  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <div className="mb-4 sm:mb-32">
      {userDetails ? (
        <>
          <div className="min-h-min max-w-7xl mx-auto shadow-md flex  items-center justify-between text-right py-3 px-8 mt-2 rounded-2xl bg-white text-[1.4rem] md:text-[1.9rem] font-besley">
            <div>
              <p className="">
                {greeting}, {userDetails.name} !
              </p>
            </div>
            <div>
              <button
                className="bg-red-600 hover:bg-red-300 transition-all duration-300 text-white py-4 px-8 rounded-xl text-[1.3rem]"
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className="mt-4  sm:text-[2rem]">
          Please Login To see Profile
          <Link to="/login">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md ml-8">
              Login now
            </span>
          </Link>
        </p>
      )}
    </div>
  );
}

export default Welcome;
