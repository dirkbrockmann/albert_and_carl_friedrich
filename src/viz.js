// This is the core module for the implementation of the visualization
// It's analogous to model.js in terms of its relation to other modules,
// e.g. it reads the parameters and provides initialize, go and update functions
// to simulation.js where they get bundled with the analogous functions in model.js
// the observables and variables exported in model.js, e.g. the quantities
// used for the actual visualizations are also imported to viz.js

import * as d3 from "d3"
import param from "./parameters.js"
import {walks} from "./model.js"
import {filter,each,range} from "lodash-es"
import cfg from "./config.js"
import {rw_toggles} from "./controls.js"

const X = d3.scaleLinear()
const Y = d3.scaleLinear()
var line = d3.line().x(d=>X(d.x)).y(d=>Y(d.y));
var C = d3.scaleOrdinal().domain(range(4)).range(cfg.simulation.path_color);

var ctx,W,H;


const draw_path = (walks) => {

	each(walks, w => {
		ctx.beginPath();		
  	  	line(w.tr);
  	  	ctx.lineWidth = cfg.simulation.path_width;
		ctx.strokeStyle = C(w.type);
  	  	ctx.stroke();
		ctx.closePath();
	})
}

const draw_positions = (walks) => {
	
	each(walks, a => {
	  ctx.beginPath();
	  let pos = a.tr[a.tr.length-1];
	  ctx.arc(X(pos.x),Y(pos.y),cfg.simulation.pos_size,0,2*Math.PI);
	  ctx.fillStyle = C(a.type)
	  ctx.fill();
	})
}

const initialize = (display,config) => {
	
	W = config.display_size.width;
	H = config.display_size.height;
	
	X.range([0,W]).domain(param.x_range);
	Y.range([0,H]).domain(param.y_range);
	

	ctx = display.node().getContext('2d');
	line.context(ctx)	
	ctx.clearRect(0,0,W,H);
	
	const shown_walks = filter(walks,w => {
		return w.ix < param.number_of_walkers.choices[param.number_of_walkers.widget.value()] && rw_toggles[w.type].value()
	});	
	if (!param.hide_path.widget.value()) {draw_path(shown_walks)}
	if (!param.hide_positions.widget.value()) {draw_positions(shown_walks)}
		
};


const go = (display,config) => {
	ctx.clearRect(0,0,W,H);
	if(param.tick>param.R0*param.R0){
		X.domain([-Math.sqrt(param.tick)*param.L0,Math.sqrt(param.tick)*param.L0])
		Y.domain([-Math.sqrt(param.tick)*param.L0,Math.sqrt(param.tick)*param.L0])
	}
	const shown_walks = filter(walks,w => {
		return w.ix < param.number_of_walkers.choices[param.number_of_walkers.widget.value()] && rw_toggles[w.type].value()
	});	
	if (!param.hide_path.widget.value()) {draw_path(shown_walks)}
	if (!param.hide_positions.widget.value()) {draw_positions(shown_walks)}
	
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the visualization, if a parameter is changed,
// e.g. a radio button is pressed, when the system is not running, e.g. when it is paused.

const update = go;


export {initialize,go,update}
