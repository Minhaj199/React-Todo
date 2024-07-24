import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './toastCSS.css'

export const showSuccessToast = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 2000,
    className: "toastify-toast toastify-toast--warning",
  });
};



export const showInfoToast = (message, duration = 5000) => {
  toast.info(message, {
    position: "top-center",
    autoClose: duration,
    className: "toastify-toast toastify-toast--warning",
  });
};

export const showWarningToast = (message, duration = 5000) => {
        
    
  const id= toast.warning(message, {
    position: "top-center",
    autoClose: duration,
    className: "toastify-toast toastify-toast--warning",
  });
  return id
};
