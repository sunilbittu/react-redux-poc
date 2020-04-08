import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "Slide1Title": "Slide 1 Title",
      "Slide1Desc": "Slide 1 Desc",
      "Welcome":"Welcome!",
      "SwipeText":"Swipe to learn more about Skype.",
      "SignUp":"Sign Up",
      "SignIn":"Sign In",
      "MyBooking":"My Booking",
      "WheresYourSkype":"Where’s your Skype",
      "OnRequest":"On Request",
      "Completed":"Completed"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;