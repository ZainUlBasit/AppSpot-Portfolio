import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./AlertStyles.css"; // Import custom CSS for SweetAlert

const MySwal = withReactContent(Swal);

const showAlert = (title, text, customClass) => {
  MySwal.fire({
    title,
    text,
    customClass: {
      popup: customClass,
    },
    background: "#000",
    color: "#fff",
    showConfirmButton: false,
    timer: 1500,
  });
};

// Dedicated function for "Send Email Successful" alert
export const showEmailSuccessAlert = () => {
  showAlert(
    "success",
    "Email Sent!",
    "Your email was sent successfully.",
    "custom-email-success-alert"
  );
};
