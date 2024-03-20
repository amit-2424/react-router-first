
import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {

    const { name, price, features } = option;

    return (
        <div className='bg-blue-500 p-4 text-white flex flex-col'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='my-12 w-full py-4 rounded-xl font-bold duration-300 bg-green-500 hover:bg-green-900'>Buy now</button>
        </div>
    );
};

export default PriceOption;


PriceOption.propTypes = {
    option: PropTypes.object
}