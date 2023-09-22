import { Modal } from "flowbite-react";
import { Link } from "react-router-dom";
import { TestContext } from "../context/TestContext";
import { useContext } from "react";

const EndModal = ({ openModal, setOpenModal, totalSeconds }) => {
  const {dispatch} = useContext(TestContext);
  return (
    <Modal
      dismissible
      show={openModal}
      size="md"
      popup
      onClose={() => setOpenModal(false)}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <div className="mb-5 text-lg text-gray-700 dark:text-white">
            Are you sure you want to submit?
          </div>
          <div className="flex justify-center gap-4">
            <Link to="/result">
              <button
                className="px-4 py-2 bg-sky-300 hover:bg-sky-400 rounded shadow"
                onClick={() => {
                  dispatch({type: "UPDATE_TOTAL_TIME", payload: totalSeconds})
                  setOpenModal(false);
                }}
              >
                Yes
              </button>
            </Link>
            <button
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded shadow"
              color="gray"
              onClick={() => setOpenModal(false)}
            >
              No
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EndModal;
