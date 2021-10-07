import React from 'react';
import Button from './Button';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

    constructor(){
        super()

        this.state = {
        pokemonIndex:0
        }

        this.nextPokemon = this.nextPokemon.bind(this);
    }

    
    nextPokemon() {
        if(this.state.pokemonIndex === this.props.pokemons.length-1){
            this.setState((_estadoAnterior, _props)=> ({pokemonIndex:0}))
        } else{
            this.setState((estadoAnterior, _props)=> ({pokemonIndex:estadoAnterior.pokemonIndex + 1}))
    }}

    render() {
        return (
            <div className="pokedex">
                
                {<Pokemon pokemon={this.props.pokemons[this.state.pokemonIndex]} />}

                <button onClick={this.nextPokemon}>Next Pokemon</button>
            </div>
        );
    }
}

export default Pokedex;