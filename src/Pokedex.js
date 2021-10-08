import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import Filter from './Filter';

class Pokedex extends React.Component {

    constructor(){
        super()

        this.state = {
        pokemonIndex:0,
        pokemonType:"Fire"
        }

        this.nextPokemon = this.nextPokemon.bind(this);
        this.handleTypeFire = this.handleTypeFire.bind(this);
        this.handleTypePsychic = this.handleTypePsychic.bind(this);
    }

    
    nextPokemon() {
        if(this.state.pokemonIndex === this.props.pokemons.length-1){
            this.setState((_estadoAnterior, _props)=> ({pokemonIndex:0}))
        } else{
            this.setState((estadoAnterior, _props)=> ({pokemonIndex:estadoAnterior.pokemonIndex + 1}))
    }}

    handleTypeFire() {
        this.setState((eventoAnterior, _props) => ({
          pokemonType: "Fire"
        }
        ))
      }
    
      handleTypePsychic() {
        // this.props.pokemons.filter((pokemon) =>(pokemon.type === this.state.pokemonType))
        this.setState((_eventoAnterior, _props) => (
          {
          pokemonType: "Psychic"
        }
        ))
      }

    render() {
        return (
            <div className="pokedex">

                {/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}

                {/* {this.props.pokemons.filter((pokemon) =>(pokemon.type === this.state.pokemonType)).map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
                
                {<Pokemon pokemon={this.props.pokemons[this.state.pokemonType]} />}

                {/* <Filter pokemons={this.props.pokemons} /> */}

                <Button fun={this.nextPokemon} text='>>' />
                <Button text='Fire' fun={this.handleTypeFire} />
                <Button text='Psychic' fun={this.handleTypePsychic} />
            </div>
        );
    }
}

export default Pokedex;