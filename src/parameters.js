// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

const parameters = {
		sigma : 1.0,
		x_range:[-18,18],
		y_range:[-18,18],
		L0 : 1.8,
		R0 : 10,
		T_max : 5000,
		number_of_walkers : {
			choices:[1,5,25],
		default:1
		},
		hide_path: {
			default: false
		},
		hide_positions: {
			default: false
		}		
}

const random_walks = {
	n_w_s_o:{
		default: true,
		label:"N-W-S-O",
	},
	
	ring:{
		default:true
	},
	gaussian: {
		default: true
	},
	triangular: {
		default: true
	}
}

export default parameters;
export { random_walks };