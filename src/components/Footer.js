import {useContext} from 'react'
import Context from './Context'
const Footer = () => {
  const store = useContext(Context).user
  return (
    <div className="flex hover:bg-pink-300 justify-center mt-4 font-medium p-6 bg-pink-200">
      <h1>Developed by Ashwin Singh</h1>
    </div>
  );
};
export default Footer;
