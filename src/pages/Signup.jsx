import { useState } from "react";
import { account } from "../appwrite/appwrite";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "../components/Header";
import InputField from "../components/InputField";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errorMsg: "",
  });

  const signupUser = async (e) => {
    e.preventDefault();
    const id = uuidv4();

    try {
      if (user.password !== user.confirmPassword) {
        setUser((prevUser) => ({
          ...prevUser,
          errorMsg:
            "The entered passwords do not match. Please make sure your passwords match.",
        }));
        return;
      }

      if (user.name.trim().length === 0) {
        setUser((prevUser) => ({
          ...prevUser,
          name: "",
          errorMsg: "Name cannot be empty",
        }));
        return;
      }

      const response = await account.create(
        id,
        user.email,
        user.password,
        user.name
      );
      console.log(response);
      await account.createEmailSession(user.email, user.password);
      navigate("/profile", { replace: true });
    } catch (error) {
      console.error(error);
      console.log(error.code);
      if (error.message.includes("email")) {
        setUser((prevUser) => ({
          ...prevUser,
          errorMsg: "Please enter a valid email address.",
        }));
      } else if (error.message.includes("password")) {
        setUser((prevUser) => ({
          ...prevUser,
          errorMsg:
            "Password must be at least 8 characters and should not be one of the commonly used passwords.",
        }));
      } else {
        setUser((prevUser) => ({
          ...prevUser,
          errorMsg: "An error occurred while signing up. Please try again.",
        }));
      }
    }
  };

  // function googleSignin(e) {
  //   e.preventDefault();
  //   const currentURL = window.location.href;

  //   // Go to OAuth provider login page
  //   account.createOAuth2Session(
  //     "google",
  //     "https://quizwiz-hackathon.netlify.app/profile",
  //     "https://quizwiz-hackathon.netlify.app/login"
  //   );
  // }
  function googleSignin(e) {
    e.preventDefault();

    // Determine the base URL based on the current environment
    const baseURL = window.location.origin;

    // Use the base URL to construct the OAuth provider URLs
    const profileURL = `${baseURL}/profile`;
    const loginURL = `${baseURL}/login`;

    // Go to OAuth provider login page
    account.createOAuth2Session("google", profileURL, loginURL);
  }
  return (
    <section className="bg-bgColor">
      <Header />
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2   justify-center py-12  px-0 sm:px-8 lg:px-32 items-center">
        <div className="  w-full p-5">
          <img src="Sign up-amico.svg" alt="Tablet signup" />
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full bg-white  p-6 sm:p-16">
          <h2 className="text-center text-[3.5rem] font-bold text-primary">
            Ready to Learn?
          </h2>
          <h3 className="text-center text-[1.5rem] italic pb-16 text-secondary">
            Join QuizWiz and Supercharge Your Learning!
          </h3>

          <div className=" shadow  ">
            <form className="space-y-6" action="#" method="POST">
              <InputField
                label="Username"
                id="name"
                placeholder="Anonymous"
                value={user.name}
                onChange={(e) =>
                  setUser((prevUser) => ({
                    ...prevUser,
                    name:
                      e.target.value.charAt(0).toUpperCase() +
                      e.target.value.slice(1).toLowerCase(),
                  }))
                }
              />

              <InputField
                label="Email Address"
                id="email"
                placeholder="example@example.com"
                value={user.email}
                onChange={(e) =>
                  setUser((prevUser) => ({
                    ...prevUser,
                    email: e.target.value,
                  }))
                }
                type="email"
              />

              <InputField
                label="Password"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) =>
                  setUser((prevUser) => ({
                    ...prevUser,
                    password: e.target.value,
                  }))
                }
                placeholder="**********"
              />
              <InputField
                label="Confirm Password"
                id="confirm"
                type="password"
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser((prevUser) => ({
                    ...prevUser,
                    confirmPassword: e.target.value,
                  }))
                }
                placeholder="**********"
              />

              <p className={`text-[1.4rem] italic text-red-600 `}>
                {user.errorMsg}
              </p>
              <div>
                <button
                  type="submit"
                  className="mt-12 py-4 px-8 border border-transparent rounded-lg shadow-sm text-[1.5rem] font-semibold text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-16"
                  onClick={signupUser}
                >
                  Join the Adventure
                </button>
              </div>

              <div className=" text-center ">
                <p className=" text-[1.5rem] font-medium">
                  Already a part of our community?{"  "}
                  <Link to="/login" className="text-secondary font-bold">
                    Log in Now
                  </Link>
                </p>
              </div>

              <div className="flex items-center gap-4 my-4">
                <hr className="border-t border-gray-300 w-1/2" />
                <p className="uppercase text-center text-[2.5rem] text-gray-400">
                  OR
                </p>
                <hr className="border-t border-gray-300 w-1/2" />
              </div>

              <div
                className="flex justify-center items-center gap-4 bg-bgColor p-8 shadow-md cursor-pointer"
                onClick={googleSignin}
              >
                <FcGoogle className="w-[2rem] h-[2rem]" />
                <span className="text-[1.5rem] text-secondary font-semibold">
                  Sign up with Google
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
