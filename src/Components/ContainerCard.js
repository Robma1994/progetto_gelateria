import React, { useState } from 'react'

const ContainerCard = (iceCream) => {
/* console.log(iceCream.default) */
  let [newMenu, setNewMenu] = useState(iceCream.default)
  let [categorie] = useState(['all','cono', 'coppetta', 'stick']) ;
  let [numResult, setNumResult] = useState(0)

  const btnChange = (e) => {
    let {value} = e.target
    if(value === 'all') {
        setNewMenu(iceCream.default)
    } else {
        setNewMenu(iceCream.default.filter(el => el.categoria === value))
    }
 }
  return (
    <>
        <div className="my-container-fluid">
            <div className="my-container-top">        
                <h1 className='text-center pt-3 pb-3'>Le nostre scelte</h1>
                <div className='d-flex justify-content-between mb-3 mt-3'>
                    <button className='btn-choice' onClick={btnChange} value={categorie[0]}> All </button>
                    <button className='btn-choice' onClick={btnChange} value={categorie[1]}>Cono</button>
                    <button className='btn-choice' onClick={btnChange} value={categorie[2]}>Coppetta</button>
                    <button className='btn-choice' onClick={btnChange} value={categorie[3]}>Stick</button>

                </div>
                <hr/>
            </div>
            <div className="container-bottom" >
                <div>Numero risultati: {numResult}</div>
                    {
                        newMenu.map((el) => {
                            let {id, nome, decrizione: descrizione, prezzo,img} = el
                            return(
                                <>
                                    <div className="card mt-5 " key={id}>
                                        <div className='d-flex color-bg-card p-3 '>
                                            <div className='container-img'>
                                                <img src={img} className="card-img-top" alt="..."/>
                                            </div>
                                            <div className="card-body">
                                                <div className='d-flex justify-content-between'>
                                                    <h1>{nome}</h1>
                                                    <p className='btn-price'>{prezzo} €</p>
                                                </div>
                                                <hr />
                                                <p className="card-text">{descrizione}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }) 
                    }
            </div>
        </div>
    </>
  )
}

export default ContainerCard