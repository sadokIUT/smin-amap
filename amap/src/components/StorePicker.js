import React from 'react';
import {getFunName} from '../helpers'
import PropTypes from 'prop-types'

class StorePicker extends React.Component{
  constructor(){
    super();
    this.goToStore=this.goToStore.bind(this);
  }
  goToStore(event){
    console.log('Bj bg');
    event.preventDefault();
    const storeId = this.storeInput.value;
    this.props.history.push(`store/${storeId}`);
    }
    render(){
      return (
   				 <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
   					 {/* Comment */}
   					 <h2>Entrez un nom de magasin</h2>
   					 <input type="text" ref={(input) => { this.storeInput = input}}  required placeholder="Nom du magasin" defaultValue={getFunName()}/>
   					 <button type="submit">Visiter le magasin</button>

   				 </form>
   			 );
   		}
    }
    StorePicker.contextTypes = {
      router: PropTypes.object
      }


//fichier peut etre importer ailleurs avec le nom StorePicker
export default StorePicker;
