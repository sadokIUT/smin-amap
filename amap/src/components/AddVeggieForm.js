import React from 'react';

class AddVeggieForm extends React.Component{
  createVeggie(event) {
    event.preventDefault();
    const veggie = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      description: this.description.value,
      image: this.image.value
      }
      this.props.addVeggie(veggie);
      this.veggieForm.reset();
  }

  render() {
    return(
      <form  ref={(input) => this.veggieForm = input} className="veggie-edit" onSubmit={(e) => this.createVeggie(e)}>
        <input ref={(input) => this.name = input} type="text" placeholder="VeggieName"/>
        <input ref={(input) => this.price = input} type="text" placeholder="VeggiePrice"/>
        <select ref={(input) => this.status = input}>
          <option value="available">Frais</option>
          <option value="unvalaible">Yen a plus</option>
        </select>
        <textarea ref={(input) => this.description = input} placeholder="veggieDescription"></textarea>
        <input ref={(input) => this.image = input} type="text" placeholder="VeggieImage"/>
        <button type="submit">Ajouter un article</button>
      </form>
      )
  }
}

export default AddVeggieForm;
