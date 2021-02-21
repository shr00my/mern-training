import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import "../styles/test-contact.css";
import Navbar from "./Navbar";

const defaultContactForm = () => {
  return {
    name: "",
    email: "",
    message: "",
  };
};

const TestContact = () => {
  const [contactForm, setContactForm] = useState(defaultContactForm);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmitContactForm = (e) => {
    e.preventDefault();
    successfullySent();

    // setContactForm(defaultContactForm);
  };

  const successfullySent = () => {
    setSuccess(true);
  };

  const closeModal = () => {
    setSuccess(false);
    setContactForm(defaultContactForm);
  };

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      let btn = document.querySelector(".button");
      let loader = document.querySelector(".loaded");
      let check = document.querySelector(".check");

      btn.addEventListener("click", () => {
        loader.classList.add("active");
      });

      loader.addEventListener("animationend", () => {
        check.classList.add("active");
      });
    });
  }, []);

  (function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            console.log("was not validated");
            event.preventDefault();
            event.stopPropagation();
          }
          console.log(form.checkValidity());
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  return (
    <>
      <Navbar />
      {/* Form section */}
      {success ? (
        <div className="modal-success">
          <div className="modal-content modal-dialog modal-dialog-centered">
            <div className="modal-header">
              <h4 className="header-headline">Сообщение отправлено</h4>
            </div>
            <div className="modal-body">
              <div className="personal-thanks">{`${contactForm.name}, спасибо за обращение.`}</div>
              <div className="secondary-text">
                Мы свяжемся с вами в ближайшее время.
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={closeModal}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-lg-3 contact-us-wrapper">
          <div className="contact-us-text">Свяжитесь с нами</div>
          <form
            className="column needs-validation"
            noValidate
            onSubmit={handleSubmitContactForm}
          >
            <div className="col-lg-12 mb-3">
              <label htmlFor="name" className="form-label">
                Имя
              </label>
              <div className="input-group">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  defaultValue={contactForm.name}
                  required
                  pattern="[a-zA-Zа-яА-Я]{3,15}"
                  minLength="3"
                  maxLength="15"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-lg-12 mb-3">
              <label htmlFor="email" className="form-label">
                Почта
              </label>
              <div className="input-group has-validation">
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  id="email"
                  required
                  pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                  defaultValue={contactForm.email}
                  onChange={handleChange}
                />
                <span className="input-group-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="col-lg-12 mb-3">
              <label htmlFor="message" className="form-label">
                Сообщение
              </label>
              <div className="input-group">
                <textarea
                  name="message"
                  type="text"
                  className="form-control"
                  id="message"
                  defaultValue={contactForm.message}
                  required
                  pattern="[a-zA-Zа-яА-Я]{3,15}"
                  minLength="3"
                  maxLength="15"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-lg-12 btn-wrapper">
              <Animated animationIn="fadeIn">
                <button type="submit" className="btn btn-primary btn-center">
                  Написать
                </button>
              </Animated>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default TestContact;
