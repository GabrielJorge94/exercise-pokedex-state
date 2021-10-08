// import React from 'react';
// import Button from './Button';
// import Pokemon from './Pokemon';

// class Filter extends React.Component {

//   constructor(){
//     super()

//     this.state ={
//       pokemonType:"Fire"
//     }

//     this.handleTypeFire = this.handleTypeFire.bind(this)
//     this.handleTypePsychic = this.handleTypePsychic.bind(this)

//   }

//   handleTypeFire() {
//     this.setState((eventoAnterior, _props) => ({
//       pokemonType: "Fire"
//     }
//     ))
//   }

//   handleTypePsychic() {
//     this.setState((_eventoAnterior, _props) => (
//       {
//       pokemonType: "Psychic"
//     }
//     ))
//   }

//   render() { 
//     return <div>
//         {this.props.pokemons.filter((pokemon) =>(pokemon.type === this.state.pokemonType)).map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}


//       <Button text='Fire' fun={this.handleTypeFire} />
//       <Button text='Psychic' fun={this.handleTypePsychic} />
//       </div>;
//   }
// }
 
// export default Filter;