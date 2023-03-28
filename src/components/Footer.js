import {useContext} from 'react'
import Context from './Context'
const Footer = () => {
  const store = useContext(Context).user
  return (
    <div className="flex justify-center mt-4 font-medium p-6 bg-pink-100">
      <h1>Developed by {store.name} - { store.gmail}</h1>
    </div>
  );
};
export default Footer;
