// react
import PropTypes from "prop-types"; 

export function NotFindDiv({ search }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5 py-12 px-8 shadow-shadow_1 text-center bg-white">
      <img src={"https://betalentluixz.netlify.app/assets/icons/not_find.svg/"} alt="Not Find" />
      <p>
        {`Nome, Cargo ou Telefone de funcionário não encontrado por: `}
        <span className="text-[#e60909b0]">{` "${search}" `}</span>
      </p>
    </div>
  );
}

NotFindDiv.propTypes = {
  search: PropTypes.string.isRequired,
};
