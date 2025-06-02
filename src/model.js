// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param,{random_walks as random_walk_types} from "./parameters.js"
import {each,range,shuffle} from "lodash-es"
import {toArray} from "./utils"
import { lattice, triangular,gaussian, fixed_length } from "./random_walks.js";

var walks;
const max_number_of_walkers_per_type = param.number_of_walkers.choices[param.number_of_walkers.choices.length-1];
const number_of_types = toArray(random_walk_types).length;
const stepper = [
	lattice,
	fixed_length,
	gaussian,
	triangular
]


// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;
	walks = [];

	each(range(number_of_types),ty=>{
		each(range(max_number_of_walkers_per_type),i=>{
			walks.push({ix:i,type:ty,tr:[{x:0,y:0}]})
			})
	})
	
	walks = shuffle(walks)
	
	
	// make agents
	
};

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.

const go  = () => {
	
	
	each(walks,w=>{
		w.tr.push(stepper[w.type](w.tr[param.tick],param.sigma));
	})

	param.tick++;
	return param.tick>param.T_max
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 

const update = () => {
	

}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {walks,initialize,go,update}
