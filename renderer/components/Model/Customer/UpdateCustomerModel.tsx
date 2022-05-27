import { Dialog, Transition } from "@headlessui/react";
import { AxiosError } from "axios";
import { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiFillPlusCircle } from "react-icons/ai";
import { useMutation } from "react-query";
import { updateCustomer } from "../../../querys/customer/index";

type errorType = {
  uniq: string;
  name: string;
  email?: string;
  phone: string;
  address?: string;
  active?: string;
};
export default function UpdateCustomerModel({
  isOpen,
  closeModal,
  userToEdit,
  allUser,
  setAllUser,
}: any) {
  // // create a post request to the server
  // const createUser = async (data: any) => {

  //         const response = await createData(data, '/customers');
  //         console.log(response);
  // }

  // useEffect(() => {
  //   console.log(userToEdit);
  // }, []);

  // console.log(userToEdit);
  const {
    data: updateCustomerData,
    error: updateCustomerError,
    isLoading: updateCustomerLoading,
    mutate: updateCustomerMutate,
  } = useMutation<any, AxiosError, any>(updateCustomer, {
    onSuccess: (data) => {
      console.log(data);
      setTimeout(() => {
        closeModal();
      }, 1500);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const {
    register,
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<errorType>();

  const onSubmit = async (data: any) => {
    if (data.active == 1) {
      data.active = true;
    } else {
      data.active = false;
    }
    updateCustomerMutate(data);
    console.log(data);
    reset();
  };

  // const formTitles = {
  //   name: "name",
  //   status: "status",
  //   address: "address",
  //   email: "email",
  //   phone: "phone",
  // };

  useEffect(() => {
    reset(userToEdit);
  }, [userToEdit]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-0.8 bg-black"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30 " />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0.8 scale-95"
            >
              {/* MODAL CONTENT */}

              <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-semibold leading-6 text-rose-500 pt-5 pb-8 w-11/12 mx-auto"
                >
                  <span className="inline-block text-2xl mr-3 relative top-1 justify-center">
                    <AiFillPlusCircle />
                  </span>
                  Edit and Update user
                </Dialog.Title>

                <div className="w-11/12 mx-auto">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                      <input
                        type="hidden"
                        id="uniq"
                        {...register("uniq", { required: false })}
                      />

                      <label htmlFor="name">Name</label>
                      <input
                        className="py-3 px-3 outline-none bg-gray-100 mb-3 rounded-md"
                        id="name"
                        {...register("name", { required: true })}
                      />
                      {errors.name && errors.name.type === "required" && (
                        <span className="text-red-600 italic">
                          <small>Type a name</small>
                        </span>
                      )}

                      <label htmlFor="email">Email</label>
                      <input
                        className="py-3 px-3 outline-none bg-gray-100 mb-3 rounded-md"
                        type="email"
                        id="email"
                        {...register("email", { required: true })}
                      />
                      {errors.email && errors.email.type === "required" && (
                        <span className="text-red-600 italic">
                          <small>Type a valid email</small>
                        </span>
                      )}

                      <label htmlFor="phone">Phone</label>
                      <input
                        className="py-3 px-3 outline-none bg-gray-100 mb-3 rounded-md"
                        type="text"
                        id="phone"
                        {...register("phone", { required: true })}
                      />
                      {errors.phone && errors.phone.type === "required" && (
                        <span className="text-red-600 italic">
                          <small>Type a valid phone number</small>
                        </span>
                      )}

                      <label htmlFor="address">Address</label>
                      <input
                        className="py-3 px-3 outline-none bg-gray-100 mb-3 rounded-md"
                        id="address"
                        {...register("address", { required: true })}
                      />
                      {errors.address && errors.address.type === "required" && (
                        <span className="text-red-600 italic">
                          <small>Type a valid address</small>
                        </span>
                      )}
                      <label htmlFor="active">Status</label>
                      <select
                        className="py-3 px-3 outline-none bg-gray-100 mb-3 rounded-md"
                        id="active"
                        {...register("active", { required: false })}
                      >
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                      </select>

                      <div className="flex">
                        <div className="w-1/2 mr-3">
                          <input
                            type="submit"
                            value="Update user"
                            className="w-full  px-5 py-3 bg-rose-500 mt-5 text-black rounded cursor-pointer hover:bg-rose-600 transition duration-300"
                          />
                        </div>
                        <div
                          onClick={closeModal}
                          className="ml-3 w-1/2 px-10 text-center py-3 mt-5 bg-gray-500 text-white rounded cursor-pointer hover:bg-gray-600 transition duration-300"
                        >
                          Cancel
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
