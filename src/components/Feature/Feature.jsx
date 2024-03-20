import PropTypes from "prop-types"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const Feature = ({feature}) => {
    return (
        <div>
            <h2 className="flex gap-3"><IoMdCheckmarkCircleOutline className="text-green-500" /> {feature}</h2>
        </div>
    );
};

export default Feature;


Feature.propTypes = {
    feature: PropTypes.string
}