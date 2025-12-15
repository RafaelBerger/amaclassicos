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
    slugDoCarro
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

export async function getCarBySlug(slug: string) {
  const query = `
    query ($slug: String!) {
      carro(where: { slugDoCarro: $slug }) {
        id
        nomeDoCarro
        ano
        motor
        documentacao
        preco
        slugDoCarro
        fotos {
          url
        }
      }
    }
  `;

  const data = await hygraphClient.request(query, { slug });
  return data.carro;
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