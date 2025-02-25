import PropTypes from 'prop-types';

export function ExpandedRowDiv({ job, date, phone }) {
    return (
        <div className="w-full flex flex-col items-start justify-start md:hidden">
            <div className='flex items-center justify-between w-full border-dashed border-b border-gray_10 mb-4' >
                <h2 className='text-black_neutral text-base font-bold ' >Cargo: </h2>
                <h3 className='font-normal' >{job}</h3>          
            </div>
            <div className='flex items-center justify-between w-full border-dashed border-b border-gray_10 mb-4' >
                <h2 className='text-black_neutral text-base font-bold ' >Data de admissão: </h2>
                <h3 className='font-normal' >{date}</h3>          
            </div>
            <div className='flex items-center justify-between w-full border-dashed border-b border-gray_10 mb-4' >
                <h2 className='text-black_neutral text-base font-bold ' >Telefone: </h2>
                <h3 className='font-normal' >{phone}</h3>          
            </div>
        </div>
    );
}

ExpandedRowDiv.propTypes = {
    job: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired, 
};
