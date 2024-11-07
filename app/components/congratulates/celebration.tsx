// Import necessary modules
import { IoShieldCheckmark } from 'react-icons/io5';


// Congratulatory Popup Components
const CongratulationsPopup: React.FC = () => {

  return (
    <div className="mt-16 flex items-center justify-center bg-background shadow-xl z-50 h-fit md:h-96 w-96 md:w-[550px]">
      <div className="p-6 rounded-md text-center space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold text-skin mb-4">Congratulations!</h2>
        <p className="text-gray-700 md:text-2xl">You have successfully joined Muuza!</p>
        <div className='flex items-center w-full justify-center'>
        <IoShieldCheckmark className='text-skin text-7xl'/>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsPopup;
