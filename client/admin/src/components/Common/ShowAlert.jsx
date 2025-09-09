import Swal from "sweetalert2";
import "animate.css";

const showAlert = async ({
  title,
  text,
  icon = "success",
  goBack = false,
  navigate = null,
  timer = 3000,
  confirm = false,
  link = null,
}) => {
  if (confirm && link) {
    const result = await Swal.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      confirmButtonText: "Yes, print receipt",
      cancelButtonText: "No",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });

    if (result.isConfirmed && link) {
      // Open link in new tab or navigate internally
      window.open(link, "_blank");
    }
  } else {
    await Swal.fire({
      title,
      text,
      icon,
      timer,
      timerProgressBar: true,
      showConfirmButton: false,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }

  if (goBack && navigate) {
    navigate(-1);
  }
};

export default showAlert;
