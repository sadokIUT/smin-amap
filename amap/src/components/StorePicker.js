import React from 'react';
import App from './App';
import NotFound from './NotFound';
class StorePicker extends React.Component{

    render(){
   	 switch(window.location.pathname){
   		 case '/home':
   		 case '/': return (
   				 <form className="store-selector">
   					 {/* Comment */}
   					 <h2>Entrez un nom de magasin</h2>
   					 <input type="text" required placeholder="Nom du magasin"/>
   					 <button type="submit">Visiter le magasin</button>

   				 </form>
   			 );
   		 case '/store/un-nom-de-shop': return <App/>;

   		 default: return <NotFound/>
   	 }
    }
}

//fichier peut etre importer ailleurs avec le nom StorePicker
export default StorePicker;
