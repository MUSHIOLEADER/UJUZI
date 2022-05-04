import malo from '../images/malo.jpg';
import Save from './Save';

const Agent = () => {
    const Dashboard= () =>{
        document.getElementById('general').style.display="flex";
    }
    const maloo= () =>{
        document.getElementById('general').style.display="none";
    }
 
const saven=()=>{
    document.getElementById('record').style.visibility="visible";
}
const maloo1=() =>{
    document.getElementById('record').style.visibility="hidden";
}
const update=()=>{
    document.getElementById('updatevol').style.display="grid";
}
const update1=()=>{
    document.getElementById('updatevol').style.display="none";
}
const notify=()=>{
    document.getElementById('tablearray').style.display="inherit";
}
const notify1=()=>{
    document.getElementById('tablearray').style.display="none";
}
    return ( 
        
          <div className="agent">
            
                <div className="agent1">
                    <input type="submit"  onMouseOver={() =>{
                        Dashboard()
                    }} onMouseOut={()=>{
                        maloo()
                    }} value="Dashboard"/>
                    <input type="submit" onMouseOver={()=>{
                        saven()
                    }}
                     onMouseOut={()=>{
                         maloo1()
                     }} value="Enregistrement expediteur"/>
                    <input type="submit" value="Mis a jour du vol" onMouseOver={()=>{
                        update()
                    }} onMouseOut={()=>{
                        update1()
                    }}/>
                    <input type="submit" value="notifications" onMouseOver={()=>{
                        notify()
                    }} onMouseOut={()=>{
                        notify1();
                    }}/>
                    <input type="submit" value="historique"/>
                    <input type="submit" value="contactez-nous"/>
                </div> 
                
                <div className="general" id='general'>
                   <div className="expedition">
                            <h1 className="classse1">Expedition</h1>
                            <div className='malo'>
                                <p className="paragrpah">En cours :</p>
                                <p className="paragrpah">Terminer :</p>
                            </div>

                   </div>
                   <div className="livraison">
                   <h1 className="classe2">Livraison</h1>
                   <div className="malo2">
                        <p className="paragrpahe">En cours :</p>
                        <p className="paragrpahe">Terminer :</p>
                   </div>

                  </div>
                </div>
                <div className="updatevol" id='updatevol'>
                    <p>Mobile from : </p>
                    <p>Mobile to : </p>
                </div>

  


                <div className="tablearray" id='tablearray'>
                        <table>
                            <tr>
                            <th>Mobile</th>
                            <th>Symbole de decalage</th>
                            <th>Symbole d'expedition</th>
                            </tr>
                            <tr>
                            <td>Mobile 1</td>
                            <td>Symbole</td>
                            <td>Symnbol2</td>
                            </tr>
                            <tr>
                            <td className='mobile2'>Mobile 2</td>
                            <td className='mobile2'>Symbole 8</td>
                            <td className='mobile2'>Symbole9</td>
                            </tr>
                            <tr>
                            <td>mobile 3</td>
                            <td className='mobile2'>Symbole5</td>
                            <td>Symbole 6</td>
                            </tr>
                            <tr>
                            <td className='mobile2'>Mobile 4</td>
                            <td className='mobile2'>Symbole 4</td>
                            <td className='mobile2'>Symbole5</td>
                            </tr>
                            <tr>
                            <td>Mobile 5</td>
                            <td>symbloe4</td>
                            <td>symbole 3</td>
                            </tr>
                            <tr>
                            <td className='mobile2'>Mobile 6</td>
                            <td className='mobile2'>symobole1</td>
                            <td className='mobile2'>symbole2</td>
                            </tr>
                    </table>
              
                </div>
                <div className="record" id="record">
                <p>Espediteur :</p>
                <p>Destinateur :</p>
                <p>Types de coli :</p>
                <p>Ville de destination :</p>
                <p>Mobile :</p>
            </div>
            <div className="general" id='general1'>
            <div className="expedition">
                    <h1 className="classse1">Expedition</h1>
                    <div className='malo'>
                        <p className="paragrpah"></p>
                        <p className="paragrpah"></p>
                    </div>

            </div>
            <div className="livraison">
                    <h1 className="classe2">Livraison</h1>
                    <div className="malo2">
                        <p className="paragrpahe"></p>
                        <p className="paragrpahe"></p>
                    </div>

            </div>
    </div>

                <img src={malo} alt="" />

           </div>
  
        

     );
}
 
export default Agent;