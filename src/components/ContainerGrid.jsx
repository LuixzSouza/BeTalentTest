import PropTypes from 'prop-types'; // Importando PropTypes
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

// Definindo a validação para as props
ContainerGrid.propTypes = {
  children: PropTypes.node.isRequired, // Validando que children é um nó React
  className: PropTypes.string, // className pode ser uma string opcional
};
