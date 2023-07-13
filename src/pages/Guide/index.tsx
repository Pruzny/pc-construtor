import "./styles.css";

const Guide = () => {
  return (
    <>
      <div className="container p-5 bg-secondary-subtle rounded-3 text-center align mb-5">
        <div className="row col-12">
          <div className="col-xl-3 col-lg-4 col-md-5 d-none d-md-block">
            <nav id="navbar-infos" className="position-fixed p-4 bg-gray rounded">
              <nav className="nav nav-pills d-none d-md-block">
                <a className="nav-link me-3 my-1" href="#info-gabinete">Gabinete</a>
                <a className="nav-link me-3 my-1" href="#info-mobo">Placa Mae</a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ms-3 " href="#info-mobo-1">Info 1</a>
                  <a className="nav-link ms-3 " href="#info-mobo-2">Info 2</a>
                </nav>
                <a className="nav-link me-3" href="#info-cpu">Processador</a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ms-3 my-1" href="#info-cpu-1">Info 1</a>
                  <a className="nav-link ms-3 my-1" href="#info-cpu-2">Info 2</a>
                </nav>
              </nav>
            </nav>
          </div>

          <div className="col-xl-9 col-lg-8 col-md-7">
            <h2 id="componentes" className="mb-5">Restrições e Observações</h2>
            <div data-bs-spy="scroll" data-bs-target="#navbar-infos" data-bs-smooth-scroll="true" className="scrollspy" tabIndex={0}>
              <div id="info-gabinete">
                <h4 className="guide-name">Gabinete</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat turpis lorem, vitae hendrerit
                  purus efficitur ut. Cras ullamcorper diam vitae leo sagittis eleifend. Aliquam in lacus vel tellus
                  pellentesque blandit. Proin euismod pretium velit, efficitur tincidunt nisi iaculis a. Aliquam rutrum
                  lacinia elit. Suspendisse eleifend nulla et justo aliquet lobortis. In euismod feugiat ex, in mattis risus
                  scelerisque sit amet. Aliquam lacinia ultricies nibh, id iaculis neque iaculis in. Vivamus vel ultricies
                  risus, sit amet dapibus diam. Vestibulum cursus fringilla nibh eget pulvinar. Nunc sed nunc accumsan
                  libero
                  cursus iaculis ac vitae eros. Mauris lobortis rhoncus lacus, eget tincidunt nibh dapibus a. Suspendisse
                  non
                  semper sapien. </p>
              </div>
              <div id="info-mobo">
                <h4>Placa Mãe</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere nibh lectus, quis vehicula augue
                  pellentesque sed. Praesent tincidunt risus quis dui vestibulum, id porttitor dolor facilisis. Mauris
                  convallis cursus velit, eu blandit lacus maximus ac. Mauris venenatis ultrices lectus, ac commodo ipsum
                  rutrum ut. Praesent sapien nisl, fringilla ut nibh sed, ultrices egestas dolor. Vestibulum est dolor,
                  lobortis id aliquam eu, eleifend eget tortor. Morbi quis aliquet elit. Aenean vel ornare justo, quis
                  lobortis est. Maecenas efficitur vulputate elit et accumsan. Praesent vestibulum lectus vel eros lobortis
                  ultrices. Cras semper magna non ante consequat, sed lacinia diam consectetur. Suspendisse eu dignissim
                  urna.
                  Aliquam erat volutpat. Ut pretium lacus aliquam, semper odio maximus, dapibus orci. Nunc iaculis luctus
                  bibendum. Morbi non magna magna. </p>
              </div>
              <div id="info-mobo-1">
                <h5>Placa Mãe Info 1</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis iaculis ex. Cras tempor mauris
                  feugiat justo elementum pretium. Pellentesque eget sem sed massa efficitur euismod. Proin vel lorem in sem
                  vestibulum cursus. Nulla porttitor, tortor eget faucibus ornare, orci purus pharetra enim, ut ornare
                  tortor
                  elit vel quam. Nulla tempus nec nisi a malesuada. Mauris tempor commodo mi, ac pharetra mauris tincidunt
                  nec. Fusce tempus urna vel arcu tristique, sollicitudin rhoncus erat tincidunt. Fusce at ullamcorper
                  magna,
                  sit amet lobortis urna. Duis venenatis tristique felis, quis pretium velit laoreet sed. Pellentesque
                  feugiat
                  diam non nulla tempus, vel laoreet justo fringilla. </p>
              </div>
              <div id="info-mobo-2">
                <h5>Placa Mãe Info 2</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat sagittis bibendum. Praesent eu
                  est ante. Suspendisse lobortis elit vitae orci condimentum maximus. Ut elementum porttitor lobortis.
                  Vestibulum turpis nisl, fringilla pharetra lacus quis, interdum elementum metus. Mauris id feugiat nisl.
                  Curabitur vel sem in dui mollis facilisis quis ut leo. Cras neque libero, scelerisque quis odio et,
                  interdum efficitur ligula. </p>
              </div>
              <div id="info-cpu">
                <h4>Processador</h4>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sodales ipsum. Duis ornare odio vitae
                  lectus lacinia, sit amet pharetra lectus maximus. Donec dapibus justo a eros ullamcorper tincidunt. In sed
                  viverra ligula. Proin tincidunt et risus eu mattis. Nulla facilisi. Curabitur ipsum eros, pulvinar at leo
                  sit amet, tempor feugiat risus. Nulla facilisi. Etiam pretium nibh sit amet ex maximus, a imperdiet neque
                  laoreet. Etiam scelerisque lectus quis metus euismod, sed sagittis sapien consequat. Maecenas eu sodales
                  lacus. In nec elementum metus. Nunc volutpat neque ut risus feugiat pulvinar. Morbi et ante maximus enim
                  hendrerit euismod suscipit vel mi. Nam velit mauris, ultrices mollis efficitur a, malesuada eget quam.
                </p>
              </div>
              <div id="info-cpu-1">
                <h5>Processador Info 1</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non arcu pretium, auctor turpis vitae,
                  interdum elit. Cras sollicitudin lacinia lectus ut iaculis. Sed finibus lectus sit amet felis placerat
                  commodo. Aliquam erat volutpat. Cras vitae imperdiet orci. Vestibulum viverra dolor vel orci scelerisque
                  euismod. Nullam faucibus tincidunt ex, at lobortis massa placerat vitae. Vestibulum in tellus eget mi
                  consectetur rhoncus et et erat. Mauris finibus tellus in malesuada mollis. Mauris cursus et lacus in
                  maximus. Nulla iaculis, mi a tincidunt venenatis, mauris quam lacinia erat, id accumsan quam arcu sit amet
                  leo. Maecenas lectus enim, accumsan ac sollicitudin eu, ornare id erat. Ut nec posuere mi. Pellentesque a
                  lectus semper, convallis nisi cursus, rhoncus ex. Sed molestie purus sed mattis euismod. </p>
              </div>
              <div id="info-cpu-2">
                <h5>Processador Info 2</h5>
                <p>

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi eros, luctus nec fermentum ac, vehicula
                  vitae
                  dolor. Morbi sed tellus posuere, convallis purus vel, aliquam erat. Vestibulum tempus ipsum lacinia eros
                  iaculis consequat eu ac ligula. Integer vitae nulla dolor. Donec venenatis molestie risus vel
                  sollicitudin.
                  Etiam eu lacinia augue, quis tempor lectus. In hac habitasse platea dictumst. Phasellus ultricies orci ac
                  sodales pretium. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Guide;