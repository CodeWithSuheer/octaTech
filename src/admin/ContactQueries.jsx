import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDelete } from "react-icons/md";
import { deleteQuerysAsync } from "../features/queriesSlice";
import { useNavigate } from "react-router-dom";

const ContactQueries = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [queryId, setQueryId] = useState(null);

  // GETTING QUERIES
  const { queries, isLoading, deleteLoading } = useSelector(
    (state) => state.queries
  );

  const handleMsgShow = (id) => {
    navigate(`/dashboard/client-message/${id}`);
  };

  // TOGGLE MODAL
  const toggleModal = (id) => {
    setQueryId(id);
    setIsModalOpen(!isModalOpen);
  };

  // HANDLE DELETE
  const handleDelete = () => {
    dispatch(deleteQuerysAsync(queryId)).then(() =>
      setIsModalOpen(!isModalOpen)
    );
  };

  return (
    <>
      {isLoading ? (
        <>
          <div
            className="mx-auto flex justify-center items-center h-screen max-w-screen-xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
            role="status"
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </>
      ) : (
        <>
          <section className="bg-gray-200 dark:bg-gray-900 p-3 sm:p-5 min-h-screen">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-3">
              <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <h2 className="p-6 text-2xl font-semibold text-gray-700 tracking-wide">
                  Contact Queries
                </h2>

                {/* ----------- TABLE ----------- */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th className="px-4 py-3" scope="col">
                          Sr #
                        </th>
                        <th className="px-4 py-3" scope="col">
                          Client Name
                        </th>
                        <th className="px-4 py-3" scope="col">
                          Email
                        </th>
                        <th className="px-4 py-3" scope="col">
                          Date
                        </th>
                        <th className="px-4 py-3" scope="col">
                          Message
                        </th>
                        <th className="px-4 py-3" scope="col">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {queries
                        ?.slice()
                        .reverse()
                        .map((data, index) => (
                          <tr key={index} className="border-b cursor-pointer">
                            <th
                              onClick={() => handleMsgShow(data._id)}
                              className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              scope="row"
                            >
                              {index + 1}
                            </th>
                            <td
                              onClick={() => handleMsgShow(data._id)}
                              className="px-4 py-3"
                            >
                              {data.name}
                            </td>
                            <td
                              onClick={() => handleMsgShow(data._id)}
                              className="px-4 py-3"
                            >
                              {data.email}
                            </td>
                            <td
                              onClick={() => handleMsgShow(data._id)}
                              className="px-4 py-3"
                            >
                              2-2-22
                            </td>
                            <td
                              onClick={() => handleMsgShow(data._id)}
                              className="px-4 py-3"
                            >
                              <p>
                                {data.message.length > 50
                                  ? `${data.message.substring(0, 30)}...`
                                  : data.message}
                              </p>
                            </td>
                            <td className="px-4 py-3">
                              <button
                                onClick={() => toggleModal(data._id)}
                                data-modal-target="popup-modal"
                                data-modal-toggle="popup-modal"
                                type="button"
                              >
                                <MdOutlineDelete
                                  size={22}
                                  className="text-red-600"
                                />
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* DELETE MODAL */}
          <div
            id="deleteModal"
            className={`${
              isModalOpen ? "fixed" : "hidden"
            } overflow-y-auto overflow-x-hidden top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}
            tabIndex="-1"
            aria-hidden={!isModalOpen}
          >
            <div className="relative p-4 w-full max-w-md">
              {/* Modal content */}
              <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                {/* Close button */}
                <button
                  type="button"
                  className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleModal} // Call toggleModal function on close button click
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>

                {/* Modal content */}
                <svg
                  className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="mb-4 text-gray-500 dark:text-gray-300">
                  Are you sure you want to delete this query?
                </p>
                <div className="flex justify-center items-center space-x-4">
                  <button
                    onClick={toggleModal}
                    className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100  hover:text-gray-900 focus:z-10"
                  >
                    No, cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    type="submit"
                    className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700"
                  >
                    {deleteLoading && (
                      <svg
                        aria-hidden="true"
                        role="status"
                        class="inline w-4 h-4 me-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                    Yes, I'm sure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ContactQueries;
