const typeHeader = [
    {textHead: 'FOTO'},
    {textHead: 'NOME'},
    {textHead: 'CARGO'},
    {textHead: 'DATA DE ADMISSÃO'},
    {textHead: 'TELEFONE'},
]

export function TableHeader() {
    return (
        <div  >
            <div className="flex items-center md:justify-between gap-4 bg-blue_primary text-white rounded-t-lg px-8 py-[14px] uppercase shadow-shadow_1" >
                <div className='w-full grid grid-cols-3 items-center justify-start md:justify-between gap-5 md:grid-cols-5' >
                    {typeHeader.map((item, index) => (
                         <p key={index} className={` ${ index > 1 ? 'hidden md:block' : ''}`}>
                            {item.textHead}
                        </p>
                    ))}
                </div>
                <div className="flex w-2 h-2 rounded-full bg-white md:hidden" ></div>
            </div>
        </div>
    );
}
