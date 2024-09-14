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
    <main className="relative w-full h-screen bg-stone-200 p-[10%] flex flex-col items-center justify-center">
      <header className="text-stone-900 text-center mb-10">
        <h1 className="text-[3em] md:text-[5em] font-header">SIGN UP TODAY</h1>
      </header>

      <p className="mb-[1rem] text-[1em] font-text mx-auto text-center text-stone-900 w-[90%] lg:w-2/3">
        Make sure to secure your spot at our gym by either signing up online or
        in person at our gym.
      </p>

      {/* Form Section */}
      <section aria-labelledby="sign-up-form">
        <h2
          id="sign-up-form"
          className="text-[3em] font-header text-center mb-4"
        >
          Sign up digitally
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="fullName" className="sr-only">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            aria-describedby={errors.fullName ? "fullNameError" : undefined}
            className={`p-2 border ${
              errors.fullName ? "border-red-500" : "border-stone-400"
            } rounded`}
          />
          {errors.fullName && (
            <p id="fullNameError" className="text-red-500 text-sm">
              {errors.fullName}
            </p>
          )}

          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            aria-describedby={errors.email ? "emailError" : undefined}
            className={`p-2 border ${
              errors.email ? "border-red-500" : "border-stone-400"
            } rounded`}
          />
          {errors.email && (
            <p id="emailError" className="text-red-500 text-sm">
              {errors.email}
            </p>
          )}

          <label htmlFor="dropdownOption" className="sr-only">
            Select Membership Option
          </label>
          <select
            id="dropdownOption"
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

          <label htmlFor="comment" className="sr-only">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
            rows="4"
            className="p-2 border border-stone-400 rounded"
          />

          <label htmlFor="giftCard" className="flex items-center gap-2">
            <input
              type="checkbox"
              id="giftCard"
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
      </section>

      {/* Display selected option and price */}
      {formData.dropdownOption && (
        <section aria-labelledby="selected-option">
          <h3
            id="selected-option"
            className="text-[2.5em] font-header text-center"
          >
            {formData.dropdownOption}
          </h3>
          <p className="text-[2em] font-header text-center">
            {getPrice(formData.dropdownOption)}
          </p>
        </section>
      )}

      <p className="mb-[1rem] text-[1em] font-text mx-auto text-center text-stone-900 w-2/3">
        You will be sent an invoice that you can pay through your bank or by
        card at your first visit. <br /> If it's not paid within 30 days your
        hold will be removed.
      </p>
    </main>
  );
}

export default MemberPage;
