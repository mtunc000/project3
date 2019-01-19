import React, { Component } from "react";
import "./Individual.css";
import Logo from "../Logo/Logo";

// let individual = props => {
//   return (
//     <div className={classes.Individual}>
//       {props.inputLength >= 6 ? (
//         <p>"long enough"</p>
//       ) : (
//         <p>"please use at least 6 character"</p>
//       )}
//     </div>
//   );
// };

// export default individual;

class Individual extends Component {
  state = {
    category: "",
    specialty: "",
    personal: "",
    street: "",
    city: "",
    state: "",
    zip: ""
  };

  render() {
    return (
      <div>
        <div className="Individual">
          <h1>Choose a Category</h1>
          <Logo height={100} source={this.state.category} />
          <select
            value={this.state.category}
            onChange={event => this.setState({ category: event.target.value })}
          >
            <option value="bioEnergy.jpg">Bio-Energy</option>
            <option value="ThetaHealing.jpg">Theta-Healing</option>
            <option value="acupuncture.jpg">Accupuncture</option>

            <option value="meditation.jpg">Meditation</option>
            <option value="Chiropractor.jpg">Chiropractic</option>
            <option value="Hydrotherapy.jpg">HydroTherapy</option>
            <option value="Massage Therapy.jpeg">MassageTheraphy</option>
            <option value="nutrition.jpg">Nutrition</option>
            <option value="Other">Other</option>
          </select>

          <label>Add a Description</label>
          <textarea
            rows="4"
            value={this.state.specialty}
            onChange={event => this.setState({ specialty: event.target.value })}
          />

          <label>Personal</label>
          <input
            type="text"
            value={this.state.personal}
            onChange={event => this.setState({ personal: event.target.value })}
          />
        </div>
        <br /> <br />
        <div className="Individual">
          <h1>Add your Location</h1>
          <label>Add your street</label>
          <input
            type="text"
            value={this.state.street}
            onChange={event => this.setState({ street: event.target.value })}
          />

          <label>Add your city</label>
          <input
            type="text"
            value={this.state.city}
            onChange={event => this.setState({ city: event.target.value })}
          />
          <label>Add your State</label>
          <input
            type="text"
            value={this.state.state}
            onChange={event => this.setState({ state: event.target.value })}
          />
          <label>Add your ZipCode</label>
          <input
            type="text"
            value={this.state.zip}
            onChange={event => this.setState({ zip: event.target.value })}
          />

          <button>Add Post</button>
        </div>
      </div>
    );
  }
}

export default Individual;
