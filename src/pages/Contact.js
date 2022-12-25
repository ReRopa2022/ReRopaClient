import React from "react";

const Contact = () => {
  return (
    <section className="mb-32 text-center text-gray-800 pl-60">
      <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <h2 className="text-3xl rtl-grid font-bold mb-6">צרו איתנו קשר</h2>
        <p className="text-gray-500 rtl-grid mb-2">
          מעוניינים להצטרף לשירותי האתר?
        </p>
        <p className="text-gray-500 rtl-grid mb-2">
          בא לכם לשלוח מייל לגביי חווית המשתמש שלכם?
        </p>
        <p className="text-gray-500 rtl-grid mb-6">
          בכל נושא, אנא שלחו מייל, נשמח לעמוד לשירותכם.
        </p>

        <p className="text-gray-500 rtl-grid mb-2">חולון, ישראל</p>

        <p className="text-gray-500 rtl-grid mb-2">reropa123@gmail.com</p>
      </div>
      <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <form
          action="https://mail.google.com/mail/?view=cm&fs=1&to=reropa123@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div className="form-group mt-8">
            <h2 className="text-3xl rtl-grid font-bold mb-6">איך שולחים?</h2>
            <p className="text-gray-500 rtl-grid mb-2">
              יש לציין את שם הארגון/פונה
            </p>
            <p className="text-gray-500 rtl-grid mb-2">
              יש לציין את סיבת הפניה
            </p>
          </div>

          <div className="form-group form-check text-center mb-6"></div>
          <input
            type="submit"
            value="צרו קשר"
            className="
    w-full
    px-4
    py-2.5
    bg-green-500
    text-white
    font-medium
    text-xs
    leading-tight
    rounded
    shadow-md
    hover:bg-green-700 hover:shadow-lg
    focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-green-800 active:shadow-lg
    transition
    duration-150
    ease-in-out"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
