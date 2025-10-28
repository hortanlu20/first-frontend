import { toast } from "react-toastify";

export const successMessage = (message) => toast.success(message);
export const errorMessage = (message) => toast.error(message);

export const currencyFormatter = (val) => {
  const fm = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });
  return fm.format(val);
};
