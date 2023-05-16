import { useEffect, useRef } from "react";
import { SlClose } from "react-icons/sl";

const ImageOverlay = ({ imageUrl, onClose }) => {
  const overlayRef = useRef(null);

  const handleClickOutside = (event) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target)) {
      onClose();
    }
  };

  const exitClick = () => {
    onClose();
  };

  useEffect(() => {
    const handleClick = (event) => {
      handleClickOutside(event);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-500 bg-opacity-75">
      <div className="relative p-8 bg-white">
        <button className="flex justify-center">
          <SlClose className="text-3xl" onClick={exitClick} />
        </button>
        <img src={imageUrl} alt="Overlay" height={600} width={800} />
      </div>
    </div>
  );
};

export default ImageOverlay;
