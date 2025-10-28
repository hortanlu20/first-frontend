import { useEffect, useState } from "react";
import sender from "../../../api/sender";
import { errorMessage, successMessage } from "../../../utils/helper";
import useFetch from "../../../api/useFetch";
import AppInputField from "../../../components/globals/form/AppInputField";
import { useNavigate } from "react-router-dom";

const CreateProductPage = () => {
  const [productTitle, setproductTitle] = useState();
  const [productCategory, setproductCategory] = useState();
  const [price, setprice] = useState();
  const [productDescription, setproductDescription] = useState();
  const [productSpecification, setproductSpecification] = useState([]);
  const [productImage, setproductImages] = useState();
  const [buttonTitle, setbuttonTitle] = useState("Submit");
  const [errors, setErrors] = useState({});
  const [rerender, setrerender] = useState(false);

  const navigate = useNavigate();

  const { data: productsData } = useFetch("products");

  const handleProductImages = (value) => {
    const images = value.split(", ");
    setproductImages(images);
  };
  const handleProductSpecification = (value) => {
    const specs = value.split(". ");
    setproductSpecification(specs);
  };

  useEffect(() => {
    if (productTitle) {
      delete errors["productTitle"];
    }
    if (productCategory) {
      delete errors["productCategory"];
    }
    if (price) {
      delete errors["price"];
    }
    if (productDescription) {
      delete errors["productDescription"];
    }
    if (productSpecification?.length) {
      delete errors["productSpecification"];
    }
    if (productImage?.length) {
      delete errors["productImage"];
    }
  }, [
    productTitle,
    productCategory,
    price,
    productDescription,
    productSpecification,
    productImage,
  ]);

  const handleSubmit = async () => {
    setrerender(!rerender);
    if (!productTitle) {
      errors.productTitle = "Product title is missing!";
      // const err = "Product title is missing!";
      // setErrors((prevData) => {
      //   let objs = prevData;
      //   objs.productTitle = err
      // })
    }
    if (!productCategory) {
      errors.productCategory = "Product category is missing!";
    }
    if (!price) {
      errors.price = "Product price is missing!";
    }
    if (!productDescription) {
      errors.productDescription = "Provide at least one description!";
    }
    if (!productSpecification?.length) {
      errors.productSpecification = "Provide at least one specification!";
    }
    if (!productImage?.length) {
      errors.productImage = "Provide at least one image!";
    }

    if (Object.keys(errors).length < 1) {
      const productExists = productsData?.filter(
        (item) =>
          item?.productTitle?.toLowerCase() === productTitle?.toLowerCase()
      )[0];

      if (productExists) {
        errorMessage("Product already exists");
      } else {
        let permalink = productTitle?.toLowerCase()?.split(" ").join("-");
        permalink = `${permalink}-${price}`;

        const payload = {
          productTitle,
          productCategory,
          price,
          productDescription,
          productSpecification,
          productImage,
          permalink,
        };
        console.log("payload", payload);

        const { data, error, loading } = await sender(
          "products",
          "post",
          payload
        );
        if (data) {
          successMessage("Successfuly added a new product!");
          navigate("/shop");
        }
        if (error) {
          errorMessage("Unable to add a new product!");
        }
        if (loading) {
          setbuttonTitle("Loading...");
        }
      }
    }
  };

  return (
    <div className="container py-20">
      <div className="w-full px-5 lg:w-[50%] mx-auto flex flex-col gap-5">
        <div className="text-xl lg:text-2xl font-semibold">Add New Product</div>

        <div className="flex flex-col gap-5">
          <AppInputField
            name="productTitle"
            label="Product title"
            onChange={(e) => setproductTitle(e.target.value)}
            error={errors?.productTitle}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <AppInputField
              name="productCategory"
              label="Product category"
              onChange={(e) => setproductCategory(e.target.value)}
              error={errors.productCategory}
            />
            <AppInputField
              name="price"
              label="Price"
              onChange={(e) => setprice(e.target.value)}
              error={errors.price}
            />
          </div>

          <AppInputField
            name="productDescription"
            label="Product description"
            onChange={(e) => setproductDescription(e.target.value)}
            error={errors.productDescription}
          />

          <AppInputField
            name="productSpecification"
            label="Product specification"
            onChange={(e) => handleProductSpecification(e.target.value)}
            error={errors.productSpecification}
          />

          <AppInputField
            name="productImage"
            label="Product images"
            onChange={(e) => handleProductImages(e.target.value)}
            error={errors.productImage}
          />

          <div onClick={handleSubmit} className="primary-btn w-full py-3">
            {buttonTitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProductPage;
