import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateHat() {
  const [locations, setLocations] = useState([]);
  const [style, setStyle] = useState("");
  const [color, setColor] = useState("");
  const [fabric, setFabric] = useState("");
  const [photo, setPhoto] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  // pull in locations first
  useEffect(() => {
    axios
      .get("http://localhost:8100/api/locations/")
      .then(({ data }) => setLocations(data.locations))
      .catch((err) => console.log(err));
  }, []);

    console.log(locations)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newHat = {
      style_name: style,
      color: color,
      fabric: fabric,
      photo_url: photo,
    };
    axios
      .post(`http://localhost:8090/api/locations/${location}/hats/`, newHat)
      .then(() => {
        navigate("/list-hats");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add a new hat!</h1>
            <form onSubmit={handleSubmit} id="create-hat-form">
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => setStyle(e.target.value)
                }
                    value={style}
                    placeholder="Style"
                    required
                    type="text"
                    name="style"
                    id="style"
                    className="form-control"
                />
                <label htmlFor="style">Hat Style</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  onChange={(e) => setColor(e.target.value)
                }
                value={color}
                  placeholder="Color"
                  required
                  type="text"
                  name="color"
                  id="color"
                  className="form-control"
                />
                <label htmlFor="color">Color</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  onChange={(e) => setFabric(e.target.value)
                }
                  placeholder="Fabric"
                  required
                  type="text"
                  name="fabric"
                  id="fabric"
                  className="form-control"
                />
                <label htmlFor="fabric">Fabric</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  onChange={(e) => setPhoto(e.target.value)
                }
                  placeholder="Image URL..."
                  required
                  type="text"
                  name="photo"
                  id="photo"
                  value={photo}
                  className="form-control"
                />
                <label htmlFor="photo">Image URL</label>
              </div>

              <div className="mb-3">
                <select
                  onChange={(e) => setLocation(e.target.value)
                }
                  required
                  name="location"
                  id="location"
                  className="form-select"
                >
                  <option value="">Choose a location</option>
                  {locations.map((location, index) => (
                      <option key={index} value={location.id}>
                        {location.closet_name}
                      </option>
                  ))};
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
