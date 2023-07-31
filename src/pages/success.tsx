import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { emptyBasket } from "../slices/basketSlice";

type Props = {};

const success = (props: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    // Empty the user's basket
    dispatch(emptyBasket());
  }, [dispatch]);

  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="max-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us. If you would like to see your order(s), please press the link below.
          </p>
          <button onClick={()=>router.push("/orders")} className="button mt-8">Go to my orders</button>
        </div>
      </main>
    </div>
  );
};

export default success;