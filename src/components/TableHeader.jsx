const typeHeader = [
    {
        photo: 'FOTO',
        name: 'NOME',
        cargo: 'CARGO',
        date: 'DATA DE ADMISSÃO',
        phone: 'TELEFONE',
    }
]

export function TableHeader() {
    return (
        <div  >
            {typeHeader.map((item, index) => (
                <div key={index} className="flex items-center md:justify-between gap-4 bg-blue_primary text-white rounded-t-lg px-8 py-[14px] uppercase" >
                    <div className='w-full flex items-center justify-start md:justify-between gap-5' >
                        <p>{item.photo}</p>
                        <p>{item.name}</p>
                        <p className="hidden md:flex" >{item.cargo}</p>
                        <p className="hidden md:flex" >{item.date}</p>
                        <p className="hidden md:flex" >{item.phone}</p>
                    </div>
                    <div className="flex w-2 h-2 rounded-full bg-white md:hidden" ></div>
                </div>
            ))}
        </div>
    );
}
