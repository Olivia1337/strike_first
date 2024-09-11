import React, { useState } from "react";

function MemberPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    giftCard: false,
    dropdownOption: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Handle form submission logic here
      console.log(formData);
    }
  };

  const getPrice = (option) => {
    switch (option) {
      case "Flexible":
        return "$100 / 10-class pass";
      case "Dedicated":
        return "$80 / 3 classes per week";
      case "Pro":
        return "$850 / Unlimited classes for 1 year";
      case "Children":
        return "$90 / 10-class pass";
      case "Women-only":
        return "$50 / All women's classes per month";
      case "Pro-monthly":
        return "$100 / Unlimited classes per month";
      default:
        return "";
    }
  };

  return (
    <div className="relative w-full h-screen bg-stone-200 p-[10%] flex flex-col items-center">
      <div className="text-stone-900 ">
        <h1 className="text-[5em] font-header text-center">SIGN UP TODAY</h1>
      </div>
      <p className=" mb-[1rem] text-[1em] font-text mx-auto text-center text-stone-900 w-2/3">
        Make sure to secure your spot at our gym by either signing up online or
        in person at our gym.
      </p>

      {/* Form Section */}
      <div className="w-[30%] mt-[2rem]">
        <h2 className="text-[3em] font-header text-center mb-4">
          Sign up digitally
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className={`p-2 border ${
              errors.fullName ? "border-red-500" : "border-stone-400"
            } rounded`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`p-2 border ${
              errors.email ? "border-red-500" : "border-stone-400"
            } rounded`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <select
            name="dropdownOption"
            value={formData.dropdownOption}
            onChange={handleChange}
            className="p-2 border border-stone-400 rounded"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="Flexible">Flexible</option>
            <option value="Dedicated">Dedicated</option>
            <option value="Pro">Pro</option>
            <option value="Children">Children</option>
            <option value="Women-only">Women only</option>
            <option value="Pro-monthly">Pro-monthly</option>
          </select>
          <textarea
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
            rows="4"
            className="p-2 border border-stone-400 rounded"
          />
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="giftCard"
              checked={formData.giftCard}
              onChange={handleChange}
              className="w-5 h-5"
            />
            Is this a gift card?
          </label>
          <button
            type="submit"
            className="bg-stone-900 text-[1.5em] font-text text-stone-200 py-2 px-4 rounded mt-4"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Display selected option and price */}
      {formData.dropdownOption && (
        <div className="text-stone-900 mt-3">
          <h1 className="text-[2.5em] font-header text-center">
            {formData.dropdownOption}
          </h1>
          <h1 className="text-[2em] font-header text-center">
            {getPrice(formData.dropdownOption)}
          </h1>
        </div>
      )}

      <p className=" mb-[1rem] text-[1em] font-text mx-auto text-center text-stone-900 w-2/3">
        You will be sent an invoice that you can pay through your bank or by
        card at your first visit. <br /> If it's not paid within 30 days your
        hold will be removed.
      </p>
    </div>
  );
}

export default MemberPage;
