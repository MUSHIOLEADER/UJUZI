import collis from '../images/collis.png';
const Body = () => {
    const malo= "je suis un cllis"
    return(  
    
    <div className="div2">
         
        <div className='div4'>
            <h2>CREAS TRACKING COLLIS</h2>
            <p>Une agence de suivis  des colis par mail</p>
            <p>Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Esse modi 
                consequatur vel provident eos quaerat <br/>optio fuga ad impedit mollitia suscipit 
            </p>
            
            <button >Conexion</button>
        </div>
        <img src={collis} alt={malo} />
       
        
        
    </div>
       
    );
}
 
export default Body;