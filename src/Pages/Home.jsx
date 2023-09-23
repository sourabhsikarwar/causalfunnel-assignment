import { Link } from "react-router-dom";
import { TestContext } from "../context/TestContext";
import { useContext, useEffect, useRef, useState } from "react";
import heroImg from "../assets/hero.svg";

const Home = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const { data, dispatch } = useContext(TestContext);

  // function for validating the email 
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };
  const [validData, setValidData] = useState(false);

  useEffect(() => {
    if (validateEmail(data.user.email) && data.user.name.length > 0) {
      setValidData(true);
    } else {
      setValidData(false);
    }
  }, [data.user]);

  return (
    <section className="flex flex-col sm:flex-row items-center justify-center gap-8 py-8">
      <div className="w-full">
        <img src={heroImg} alt="homeImg" className="w-2/3 mx-auto animate-wiggle" />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="text-sky-900 text-3xl font-semibold mb-2">
          Welcome to <span className="font-bold">CausalFunnel</span> Quiz!
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sky-900 font-semibold">
            User name
          </label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            value={data.user.name}
            placeholder="your name"
            className="border-2 border-gray-300 rounded p-2"
            onChange={(e) => {
              dispatch({
                type: "UPDATE_USER",
                payload: { name: e.target.value, email: emailRef.current.value },
              });
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sky-900 font-semibold">
            Email
          </label>
          <input
            ref={emailRef}
            type="text"
            id="name"
            value={data.user.email}
            placeholder="yourname@gmail.com"
            className="border-2 border-gray-300 rounded p-2"
            onChange={(e) => {
              dispatch({
                type: "UPDATE_USER",
                payload: { name: nameRef.current.value, email: e.target.value },
              });
            }}
          />
        </div>
        <Link to="/start">
          <button
            disabled={!validData}
            className={`py-2 px-4 rounded shadow w-fit my-2 ${
              validData ? "bg-sky-300 hover:bg-sky-400" : "bg-gray-300"
            }`}
          >
            Submit
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
