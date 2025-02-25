// React
import PropTypes from 'prop-types'; 
import { twMerge } from 'tailwind-merge';

export function ContainerGrid({ children, className }) {
  const defaultClass = "w-full mx-auto px-8";
  const combinedClasses = twMerge(defaultClass, className);

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}

ContainerGrid.propTypes = {
  children: PropTypes.node.isRequired, 
  className: PropTypes.string, 
};
