import "./App.css";
import "./styles/about.css";
import carro1 from "./assets/carro-1.svg";
import carro2 from "./assets/carro-2.svg";

import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <header className="header_container"></header>
      <div className="header_slogan">
        <div className="slogan_content">
          <p>
            Na ama Clássicos, cada carro carrega história, esclusividade e
            emoção
          </p>
          <p>São mais de 200 veículos restaurados, originais e únicos</p>
        </div>
      </div>
      <section className="about_section_container" id="sobre">
        <h2>Sobre nós</h2>

        <div className="about_content_container">
          <img src={carro1} alt="" className="image" />
          <div className="info">
            <h3>Nossa História</h3>
            <p>
              O proprietário, apaixonado por restauração de veículos decidiu
              montar uma oficina para estender jipe Toyota bandeirantes. Alugou
              em amplo galpão, importou uma equipe especializada nesta atividade
              da cidade de Brejo de Madre de Deus, PE, montou a infraestrutura
              completa com oficina, pintura, lanternagem, estofaria, peças,
              inclusive marcenaria para criar verdadeiras esculturas em veículos
              antigos, tipo jardineira e diversos outros e iniciou. <br />{" "}
              <br /> Na sequência, tomando mais gosto e identificando a
              capacidade artesanal da equipe, ampliou as atividades de
              restauração e passou a comprar todo tipo de veículos disponíveis
              em todo território nacional, inclusive criando veículos próprios,
              moldes em fibra de vidro e fazendo interessantes adaptações
              diferenciadas. <br /> <br /> Importou diversos veículos antigos
              formando uma grande coleção. Atualmente sua coletânea é composta
              de veículos restaurados e a restaurar, entre automóveis,
              camionetes, caminhões, ônibus, chassis diversos, motores e peças
              como podem ser visto na galeria. Em 2025 decidiu dividir este
              patrimônio com colecionadores interessados colocando a maioria
              deste patrimônio à venda. Este site tem o objetivo de divulgar e
              comercializar este patrimônio interessante. Seja bem vindos ao
              paraíso dos carros.
            </p>
          </div>
        </div>

        <div className="about_content_container reverse_desktop">
          <img src={carro2} alt="" className="image" />
          <div className="info">
            <h3>Antigomobilismo</h3>
            <p>
              O antigomobilismo reúne admiradores de veículos para proteger as
              memorias de automóveis com mais de 30 anos de fabricação, conforme
              a (FBVA) Federação Brasileira de Veiculos Antigos. O Brasil é
              líder entre colecionadores de carros antigos na América Latina,
              são 1,2 milhões de colecionadores; Segundo a (FIVA) Véhicules
              Anciens, 87% preferem originalidade e 13% os modificados. A
              valorização dos automóveis antigos começou a se desenvolver a
              partir de 1987, quando foi fundada a FBVA. Responsável por
              coordenar as atividades e calendários de clubes automotivos que
              surgiram espalhados na época; A Federação também assumiu um papel
              de representatividade junto às autoridades para proteger os carros
              antigos. A cultura de carros antigos movimenta R$ 32 bi e possui
              3,2 milhões de veículos históricos. colecionadores. A valorização
              de carros antigos costuma superar os investimentos financeiros do
              mercado. <br />
              <br /> Aqui, você que gosta de carros clássicos, antigos,
              diferentes, restaurados, peças e história, encontrará o que tem de
              melhor. Ama Classicos é uma oficina gigante, que chegou ter 80
              pessoas, verdadeiros artesões, trabalhando continuamente na
              restauração e até mesmo na construção de veículos, formando uma
              coleção com muita variedade e diversidade. Trata-se de uma coleção
              formada a mais de vinte anos com muito carinho e dedicação. Além
              da comercialização da coleção podemos customizar veículos que
              estejam à venda, de acordo com o interesse do cliente.
            </p>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}

export default App;
