import malo from '../images/malo.jpg';


const Client = () => {
    return ( 
        
          <div className="agent">
            
                <div className="agent1">
                    <input type="submit" value="Dashboard"/>
                    <input type="submit" value="Tracking"/>
                    <input type="submit" value="Historique"/>
                    <input type="submit" value="parametre"/>
                    <input type="submit" value="docs"/>
                    <input type="submit" value="contactez-nous"/>
                </div> 
                
                <div className="general">
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

                <img src={malo} alt="" />

           </div>
  
        


        

     );
}
 
export default Client;