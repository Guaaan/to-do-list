import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import './index.css'

function App() {
  return (
    <div className="container">
      <div className="card col-md-8">
        <div className="card-body">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">
                new
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
