import searchIcon from '../assets/icons/search.svg'

export function Search() {
    return(
        <div className='w-full flex flex-col items-start justify-between mb-8 gap-6 md:flex-row md:items-center md:gap-0' >
            <h3 className='text-black_neutral font-semibold' >Funcionários</h3>
            <div className="w-full md:max-w-[280px] h-12 group">
                <div className="relative h-12">
                    <input className="peer w-full h-12 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray_10 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow pl-4"/>
                    <label className="absolute cursor-text bg-white px-1 left-2.5 top-[.9063rem] text-gray_20 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                        Pesquisar
                    </label>
                    <img src={searchIcon} alt="Icon Search" className='absolute top-3 right-3 group-active:scale-110'/>
                </div>
            </div>
        </div>
    )
}