export default function Patrocinios(){
    return(
        <div>
            <div className="flex items-center flex-col md:flex-row" id="parcerias">
              <div> 
                <h1 className="text-3xl pb-5 pt-20 font-semibold" >
                    Patrocínios e Parcerias
                </h1>
                <p className="text-md md:text-lg">
                A nossa organização possui o apoio de patrocinadores que 
                ajudam a equipe a evoluir e se manter atualizada na inovadora 
                tecnologia que é o drone autônomo. Sem eles, nossa equipe 
                não teria a dimensão que tem hoje, ajudando com investimentos, 
                divulgações e apoios em geral. Somos gratos! 
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="bg-opacity-20 bg-gray-light rounded-3xl mt-6 mb-5">
                <img src="/images/parcerias_e_patrocinios.png" width="960" height="540" alt="patrocinadores"  />
                </div>
            </div>
        </div>

    );
}