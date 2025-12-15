import {hygraphClient} from "./hygraph-client";

export async function getCars(){
    const query = `
    query {
  carros {
    id
    nomeDoCarro
    ano
    motor
    documentacao
    preco
     fotos{
      url
    }
  }
}
`;

const data = await hygraphClient.request(query);
return data.carros
}



export async function getInfos(){
    const query = `
    query {
  informacoesDeContatos(first: 1) {
    aviso
    numeroDoWhatsapp
    emailDeContato
  }
}
`;

const data = await hygraphClient.request(query);
return data.informacoesDeContatos[0]
}