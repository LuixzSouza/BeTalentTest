import { useState, useEffect } from 'react';
import arrowBlue from '../assets/icons/arrow_blue.svg';

export function TableRow() {
  const [db, setDb] = useState([]);

  useEffect(() => {
    fetch('../../db/db.json')
      .then((response) => response.json())
      .then((data) => setDb(data.employees)); // Aqui você pega os dados dentro de "employees"
  }, []);

  return (
    <div>
      {db.map((item, index) => (
        <div className='flex items-center justify-between gap-5 py-2 px-8 shadow-shadow_1' key={index}>
            <div className='w-full flex items-center justify-start md:justify-between gap-5' >
                <div className='flex items-center justify-center w-9 h-9 rounded-full overflow-hidden' >
                    <img src={item.image} alt={item.name}/>
                </div>
                <p>{item.name}</p>
                <p className="hidden md:flex" >{item.job}</p>
                <p className="hidden md:flex" >{item.admission_date}</p>
                <p className="hidden md:flex" >{item.phone}</p>
            </div>
            <div className='flex md:hidden' >
                <img src={arrowBlue} alt='Arrow Blue'/>
            </div>
        </div>
      ))}
    </div>
  );
}
