import React from "react";
import GreenButton from "../../components/ui/GreenButton";

const Contact = () => {
  return (
    <section className="w-full flex justify-center text-gray-800">
      <div className="w-full flex flex-col justify-center">
        <div className="w-full text-center mb-6 md:mb-0">
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
        <div className=" w-full text-center mb-12 md:mb-0 ">
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
            <GreenButton type="submit" buttonName="צרו קשר" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
