import Footer from '../components/Footer';
import Header from '../components/Header';
import Message from '../components/Message';

function Home() {
  return (
    <div id="page-container">
      <Header />
      <main>
        <div className="titles">
          <h1 className="fs-1">Arca da Sagrada Aliança</h1>
          <h2 className="fs-2">Movimento Cristão</h2>
        </div>
        <div className="description">
          <h3 className="fs-3 homeTitle">Seja bem-vindo(a)!</h3>
          <p className="fs-5 homeText">
            Este é o site da Arca da Sagrada Aliança, um movimento cristão que
            tem como objetivo levar a Palavra de Deus a todos os povos.
          </p>
          <p className="fs-5 homeText">
            A Arca da Sagrada Aliança é um movimento cristão que tem como
            objetivo levar a Palavra de Deus a todos os povos. Para isso, a
            Arca da Sagrada Aliança conta com a ajuda de todos os irmãos e
            irmãs que desejam participar deste movimento. Se você deseja
            participar, entre em contato conosco.
          </p>
        </div>
      </main>
      <hr />
      <Message />
      <Footer />
    </div>
  );
}

export default Home;
