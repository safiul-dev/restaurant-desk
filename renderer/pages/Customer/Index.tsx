import { FunctionComponent, useState } from "react";
import CustomerTable from "../../components/Comon/tables//CustomerTable";
import CreateModal from "../../components/Model/Customer/CreateModal";
interface IndexProps {}

const Index: FunctionComponent<IndexProps> = () => {
  // FOR - CREATE USER MODAL
  let [isCreateModalOpen, setCreateModalOpen] = useState(false);
  function closeCreateModal() {
    setCreateModalOpen(false);
  }
  return (
    <>
      <div className="w-full h-middleHeight flex">
        <div className="w-width3% bg-black h-full"></div>
        <div className="w-width94% bg-white h-full">
          <div className="w-width70% h-full mx-auto 2xl:mt-6 xl:mt-5 lg:mt-4 md:mt-3 sm:mt-2">
            <div className="h-height9% w-full flex justify-center items-center 2xl:mb-6 xl:mb-5 lg:mb-4 md:mb-3 sm:mb-2">
              <svg
                className="h-full"
                viewBox="0 0 45 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M45 0L45 80L3.17786e-07 80L19.3835 39.8988L3.8147e-06 -1.96701e-06L45 0Z"
                  fill="#519E8A"
                />
              </svg>
              <div className="bg-primary h-full text-center flex items-center justify-center">
                <h1 className=" text-white 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold sm:font-medium 2xl:text-4xl xl:text-xl lg:text-lg md:text-base sm:text-tiny uppercase">
                  Customers
                </h1>
              </div>
              <svg
                className="h-full"
                viewBox="0 0 45 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 80L2.79753e-06 0L45 2.45877e-06L25.6165 40.1012L45 80L0 80Z"
                  fill="#519E8A"
                />
              </svg>
            </div>
            <div className="h-height70% w-full bg-primary rounded-md">
              <div className="float-right pr-2 my-1 text-center">
                <button
                  onClick={() => setCreateModalOpen(true)}
                  className=" bg-gray text-white rounded-full px-2 font-bold tracking-widest uppercase hover:text-primary hover:bg-white"
                >
                  Add Customer
                </button>
              </div>
              <CustomerTable isCreateModalOpen={isCreateModalOpen} />
            </div>
          </div>
        </div>
      </div>
      <CreateModal isOpen={isCreateModalOpen} closeModal={closeCreateModal} />
    </>
  );
};

export default Index;
