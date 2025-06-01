import React from "react";
import "./Form.css";
import { useForm } from "react-hook-form";
function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
    reset();
  };
  return (
    <section className="form-wrapper">
      <div className="form-container innerWidth top-space">
        <h2>Request a Quotation</h2>
        <p className="form-description">
          Do you need our help? Please enter your contact information and order
          details below, and our team will respond as soon as possible.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="quotation-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              className="form-input"
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && (
              <p className="error-text">{errors.fullName.message}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              className="form-input"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="error-text">{errors.email.message}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="tel"
              placeholder="Phone Number"
              className="form-input"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && (
              <p className="error-text">{errors.phone.message}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Company Name"
              className="form-input"
              {...register("companyName", {
                required: "Company Name is required",
              })}
            />
            {errors.companyName && (
              <p className="error-text">{errors.companyName.message}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Brands Interested In"
              className="form-input"
              {...register("brandsInterested", {
                required: "Brands Interested In is required",
              })}
            />
            {errors.brandsInterested && (
              <p className="error-text">{errors.brandsInterested.message}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Which Countries Will You Be Selling or Distributing our Products?
              "
              className="form-input"
              {...register("countries", { required: "This field is required" })}
            />
            {errors.countries && (
              <p className="error-text">{errors.countries.message}</p>
            )}
          </div>

          <div className="form-group">
            <label>I Want To Be Contacted</label>
            <select className="form-select" {...register("contactMethod")}>
              <option value="email">Anytime</option>
              <option value="phone">During Working hours, 8 am to 5 pm</option>
            </select>
          </div>

          <div className="form-group">
            <textarea
              className="form-textarea"
              placeholder="Order Details"
              {...register("orderDetails", {
                required: "Order Details are required",
              })}
            ></textarea>
            {errors.orderDetails && (
              <p className="error-text">{errors.orderDetails.message}</p>
            )}
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              {...register("terms", { required: "You must agree to proceed" })}
            />
            <label>
              By submitting this form, you agree that Neweast may use the
              information...
            </label>
            {errors.terms && (
              <p className="error-text">{errors.terms.message}</p>
            )}
          </div>

          <div className="form-group checkbox-group">
            <input type="checkbox" {...register("marketing")} />
            <label>
              By checking this box, you agree to receive marketing
              communications and promotional offers from Neweast. You may
              unsubscribe at any time.
            </label>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
