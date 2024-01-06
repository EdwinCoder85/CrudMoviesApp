import { FaStar } from "react-icons/fa";

const StartRate = ({ rating }) => {
  return (
    <div className="flex flex-row items-center justify-center my-2">
      {[...Array(5)].map((start, index) => {
        const currentRate = index + 1;
        return (
            <FaStar
            key={index}
              size={30}
              color={currentRate <= rating ? "#F3BA16 " : "#81807E "}
            />
        );
      })}
    </div>
  );
};

export default StartRate;
