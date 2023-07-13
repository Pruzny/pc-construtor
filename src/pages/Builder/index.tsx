import "./styles.css";

const Builder = () => {
  return (
    <>
      <div className="row p-5 bg-secondary-subtle rounded-3 text-center mb-4">
        <ul className="nav nav-tabs col-3 flex-column flex-wrap align-content-around" id="componentsTab" role="tablist">
          <li className="nav-item d-flex" role="presentation">
            <button className="nav-link btn btn-light col-12 flex-fill active" id="case-tab" data-bs-toggle="tab"
              data-bs-target="#caseOptions" type="button" role="tab" aria-controls="caseOptions"
              aria-selected="true">Gabinete</button>
          </li>
          <li className="nav-item d-flex" role="presentation">
            <button className="nav-link btn btn-light col-12 flex-fill" id="mobo-tab" data-bs-toggle="tab" data-bs-target="#moboOptions"
              type="button" role="tab" aria-controls="moboOptions" aria-selected="false">Placa-Mãe</button>
          </li>
          <li className="nav-item d-flex" role="presentation">
            <button className="nav-link btn btn-light col-12 flex-fill" id="cpu-tab" data-bs-toggle="tab" data-bs-target="#cpuOptions"
              type="button" role="tab" aria-controls="cpuOptions" aria-selected="false">Processador</button>
          </li>
          <li className="nav-item d-flex" role="presentation">
            <button className="nav-link btn btn-light col-12 flex-fill" id="ram-tab" data-bs-toggle="tab" data-bs-target="#ramOptions"
              type="button" role="tab" aria-controls="ramOptions" aria-selected="false">RAM</button>
          </li>
          <li className="nav-item d-flex" role="presentation">
            <button className="nav-link btn btn-light col-12 flex-fill" id="storage-tab" data-bs-toggle="tab"
              data-bs-target="#storageOptions" type="button" role="tab" aria-controls="storageOptions"
              aria-selected="false">Armazenamento</button>
          </li>
          <li className="nav-item d-flex" role="presentation">
            <button className="nav-link btn btn-light col-12 flex-fill" id="power-tab" data-bs-toggle="tab" data-bs-target="#powerOptions"
              type="button" role="tab" aria-controls="powerOptions" aria-selected="false">Fonte</button>
          </li>
          <li className="nav-item d-flex" role="presentation">
            <button className="nav-link btn btn-light col-12 flex-fill" id="gpu-tab" data-bs-toggle="tab" data-bs-target="#gpuOptions"
              type="button" role="tab" aria-controls="gpuOptions" aria-selected="false">Placa de Vídeo</button>
          </li>
          <li className="nav-item d-flex" role="presentation">
            <button className="nav-link btn btn-light col-12 flex-fill" id="cooler-tab" data-bs-toggle="tab"
              data-bs-target="#coolerOptions" type="button" role="tab" aria-controls="coolerOptions"
              aria-selected="false">Cooler CPU</button>
          </li>
          <li className="nav-item d-flex" role="presentation">
            <button className="nav-link btn btn-light col-12 flex-fill" id="fan-tab" data-bs-toggle="tab" data-bs-target="#fanOptions"
              type="button" role="tab" aria-controls="fanOptions" aria-selected="false">Ventoinha</button>
          </li>
        </ul>

        <div className="tab-content col-6" id="componentsTabContent">
          <div className="tab-pane fade show active" id="caseOptions" role="tabpanel" aria-labelledby="case-tab">
            <div className="card card-ph col-lg-11 col-xl-10 col-xxl-8" aria-hidden="true">
              <img src="" className="card-img-top" alt="Carregando" />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a className="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
            <div className="card card-ph col-lg-11 col-xl-10 col-xxl-8" aria-hidden="true">
              <img src="" className="card-img-top" alt="Carregando" />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a className="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
            <div className="card card-ph col-lg-11 col-xl-10 col-xxl-8" aria-hidden="true">
              <img src="" className="card-img-top" alt="Carregando" />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a className="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="moboOptions" role="tabpanel" aria-labelledby="mobo-tab">
            <div className="card card-ph col-lg-11 col-xl-10 col-xxl-8" aria-hidden="true">
              <img src="" className="card-img-top" alt="Carregando" />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a className="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
            <div className="card card-ph col-lg-11 col-xl-10 col-xxl-8" aria-hidden="true">
              <img src="" className="card-img-top" alt="Carregando" />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a className="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
            <div className="card card-ph col-lg-11 col-xl-10 col-xxl-8" aria-hidden="true">
              <img src="" className="card-img-top" alt="Carregando" />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a className="btn btn-primary disabled placeholder col-6"></a>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="cpuOptions" role="tabpanel" aria-labelledby="cpu-tab">
          </div>
          <div className="tab-pane fade" id="ramOptions" role="tabpanel" aria-labelledby="ram-tab">
          </div>
          <div className="tab-pane fade" id="storageOptions" role="tabpanel" aria-labelledby="storage-tab">
          </div>
          <div className="tab-pane fade" id="powerOptions" role="tabpanel" aria-labelledby="power-tab">
          </div>
          <div className="tab-pane fade" id="gpuOptions" role="tabpanel" aria-labelledby="gpu-tab">
          </div>
          <div className="tab-pane fade" id="coolerOptions" role="tabpanel" aria-labelledby="cooler-tab">
          </div>
          <div className="tab-pane fade" id="fanOptions" role="tabpanel" aria-labelledby="fan-tab">
          </div>
        </div>
      </div>
    </>
  );
}
export default Builder;