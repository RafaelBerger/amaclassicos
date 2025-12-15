declare module "swiper/css";
declare module "swiper/css/pagination";
declare module "swiper/css/navigation";


type Car = {
  id: string
  nomeDoCarro: string
  ano: number
  motor: string
  documentacao: string
  preco: number
  fotos: {
    url: string
  }[]
}

type Infos = {
  aviso: string | null
  numeroDoWhatsapp: string
  emailDeContato: string
}