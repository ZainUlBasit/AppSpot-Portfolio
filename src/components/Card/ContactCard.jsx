import React, { useEffect, useState } from "react";
import Input from "../Inputs/Input";
import { SendEmailContactUsAPI } from "../../axios";
import { SuccessToast } from "../../utils/ShowToast";
import { showEmailSuccessAlert } from "../../utils/AlertMessage";
import ContactLoader from "../Loader/ContactLoader";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactCard = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [purposeOfContact, setPurposeOfContact] = useState([]);
  const [description, setDescription] = useState("");
  const [Loading, setLoading] = useState(false);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setPurposeOfContact((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = {
      name: fullName,
      sender_email: email,
      reciever_email: "info@appspot.com.pk",
      purpose: purposeOfContact,
      desc: description,
    };
    console.log(formData);

    try {
      const response = await SendEmailContactUsAPI(formData);
      console.log(response.data.data.msg);
      if (response.data.success) {
        showEmailSuccessAlert(response.data.data.msg);
        // Reset all state variables
        setFullName("");
        setEmail("");
        setDescription("");
        setPurposeOfContact([]);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can set a default duration for animations
  }, []);

  return (
    <div
      className="flex py-12 items-center justify-center bg-black"
      data-aos="fade-left"
    >
      <form
        className="bg-[#141414] p-10 rounded-lg flex flex-col gap-10 max-w-4xl w-full font-spartan border-2 border-[#FF916F]"
        id="contact"
        onSubmit={handleSubmit}
        data-aos="fade-right"
      >
        <div className="flex gap-10 bg-[#141414] justify-between items-center w-full flex-wrap">
          <div className="w-full bg-[#1C1C1C] px-8 py-5 rounded-lg sm:w-[40%]">
            <Input
              label="Full Name"
              type="text"
              placeholder="Type here"
              id="FullName"
              name="FullName"
              autoComplete="off"
              customClasses="bg-[#1C1C1C]"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="w-full bg-[#1C1C1C] px-8 py-5 rounded-lg sm:w-[40%]">
            <Input
              label="Email"
              type="text"
              placeholder="Type here"
              id="email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-[#1C1C1C] px-8 rounded-lg w-full font-spartan">
          <label className="block bg-[#1C1C1C] text-white py-5 text-base xsm:text-xl sm:text-2xl">
            Why are you contacting us?
          </label>
          <div className="bg-[#1C1C1C] flex justify-start items-start flex-col msm:flex-row msm:justify-between msm:items-center">
            <div className="flex bg-[#1C1C1C] justify-start w-[100%] msm:w-[50%] flex-col">
              <div className="bg-[#1C1C1C] flex items-center mb-4 mr-4">
                <input
                  type="checkbox"
                  className="form-checkbox bg-[#1e1e1e] border-[#333] focus:outline-none"
                  value="App Development"
                  checked={purposeOfContact.includes("App Development")}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-sm xsm:text-base text-white bg-[#1C1C1C]">
                  App Development
                </span>
              </div>
              <div className="flex items-center mb-4 mr-4 bg-[#1C1C1C]">
                <input
                  type="checkbox"
                  className="form-checkbox bg-[#1e1e1e] border-[#333] focus:outline-none"
                  value="Web Development"
                  checked={purposeOfContact.includes("Web Development")}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-sm xsm:text-base text-white bg-[#1C1C1C]">
                  Web Development
                </span>
              </div>
              <div className="bg-[#1C1C1C] flex items-center mb-4">
                <input
                  type="checkbox"
                  className="form-checkbox bg-[#1e1e1e] border-[#333] focus:outline-none"
                  value="UI/UX Design"
                  checked={purposeOfContact.includes("UI/UX Design")}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-sm xsm:text-base text-white bg-[#1C1C1C]">
                  UI/UX Design
                </span>
              </div>
            </div>
            <div className="flex bg-[#1C1C1C] justify-start w-[100%] msm:w-[50%]  flex-col">
              <div className="flex bg-[#1C1C1C] items-center mb-4">
                <input
                  type="checkbox"
                  className="form-checkbox bg-[#1e1e1e] border-[#333] focus:outline-none"
                  value="JavaScript Development"
                  checked={purposeOfContact.includes("JavaScript Development")}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-sm xsm:text-base text-white bg-[#1C1C1C]">
                  JavaScript Development
                </span>
              </div>
              <div className="bg-[#1C1C1C] flex items-center mb-4 mr-4">
                <input
                  type="checkbox"
                  className="form-checkbox bg-[#1e1e1e] border-[#333] focus:outline-none"
                  value="AI & Machine Learning"
                  checked={purposeOfContact.includes("AI & Machine Learning")}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-sm xsm:text-base text-white bg-[#1C1C1C]">
                  AI & Machine Learning
                </span>
              </div>
              <div className="flex items-center mb-4 mr-4 bg-[#1C1C1C]">
                <input
                  type="checkbox"
                  className="form-checkbox bg-[#1e1e1e] border-[#333] focus:outline-none"
                  value="Technical Consultation"
                  checked={purposeOfContact.includes("Technical Consultation")}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-sm xsm:text-base text-white bg-[#1C1C1C]">
                  Technical Consultation
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1C1C1C] px-8 rounded-lg w-full font-spartan">
          <label className="block bg-[#1C1C1C] text-white py-5 text-base xsm:text-xl sm:text-2xl">
            Provide a brief description of your project
          </label>
          <textarea
            id="description"
            placeholder="Kindly share the details of your project here"
            className="w-full bg-[#1C1C1C] border-b border-[#333] text-white focus:outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center bg-[#141414]">
          {Loading ? (
            <ContactLoader />
          ) : (
            <button
              type="submit"
              className="py-2 px-8 bg-main text-white rounded-full focus:outline-none"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactCard;
