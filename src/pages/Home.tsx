import Footer from '../components/Footer';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <main>
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
      </main>
      <Footer />
    </div>
  );
}

export default Home;
