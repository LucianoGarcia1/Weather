const Container = ()=>{
    return(
        <div className='Container'>
            <div className='temp'>
                <div>
                    <h1>Verifique agora a previsão do tempo da sua cidade</h1>
                    <h3 className='clima'></h3>
                    <h3 className='humidade'></h3>
                    <h3 className='vento'></h3>
                </div>
                <div className='temperatura'>
                    <img src='' className='Imagem'/>
                    <h3 className='graus'></h3>
                </div>
            </div>

            <div className='Content'>
                <h3 className='timer'></h3>
            </div>
        </div>
    );
}

export default Container;