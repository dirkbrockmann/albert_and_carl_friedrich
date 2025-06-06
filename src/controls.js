// this sets up the controls in the control panel
// it adds the widgets to the container and generates attaches the widget to the 
// variables and parameters defined in parameters.js

import * as widgets from "d3-widgets"
import {range,map,toPairs} from "lodash-es"

import cfg from "./config.js"
import parameters, { random_walks } from './parameters.js';

import {toArray,add_id_label,add_widget,get_booleans,get_choices} from "./utils.js"

// defined variables for variables, booleans and choices, extracting the information from parameters.js

//const variables = get_variables(parameters);
const booleans = get_booleans(parameters);
const choices = get_choices(parameters);
const rw_booleans = get_booleans(random_walks);

// adding ids and labels to the variables based on names for the variables, see utils.js for the function add_id_label

//add_id_label(variables)
add_id_label(booleans)
add_id_label(rw_booleans)
add_id_label(choices)

// making arrays for the three types of parameters

//const va = toArray(variables);
const bo = toArray(booleans);
const rw_bo = toArray(rw_booleans);
const ch = toArray(choices);

// making the slider widgets objects, based on the variables

// making the toggle widgets objects, based on the switches
		
const toggles = map(bo, 
		v => widgets.toggle()
					.id(v.id)
					.label(v.label)
					.value(v.default)
					.labelposition(cfg.widgets.toggle_label_pos)					
		);

const rw_toggles = map(rw_bo, 
		v => widgets.toggle()
					.id(v.id)
					.label(v.label)
					.value(v.default)
					.labelposition(cfg.widgets.rw_toggle_label_pos)
					.size(cfg.widgets.rw_toggle_size)					
		);

// making the radio widgets objects, based on the choices
		
const radios = map(ch, 
		v => widgets.radio()
					.choices(v.choices)
					.id(v.id)
					.value(v.default)
					.orientation(cfg.widgets.radio_orientation)
					.labelposition(cfg.widgets.radio_label_position)
		);


// you can remove some of these, if the explorable doesn't have a subset of parameters,
// e.g. if the explorable doesn't need toggles, you can remove all the toggle stuff


// this is handy, because the actual widgets are connected to the associated parameters
// this is important, if one wants to access the widgets based on parameters.
		
add_widget(bo,toggles);
add_widget(rw_bo,rw_toggles);
add_widget(ch,radios);

// This is generic for many explorables, the action buttons, play/pause, back and rewind
// there are some explorables that have different buttons, so one needs to code this here.

const go = widgets.button().actions(["play","pause"]).id("play")
const setup = widgets.button().actions(["back"]).id("reset")

// all the buttons in an array
		
const buttons = [go,setup];

// here's the important function accessible to the outside, there's flexibility on how
// to code this. bottomline is that all the widgets get attached to the controls panel,
// that is provided as an argument. the grid object is also passed, which makes it easier
// to place the widgets on the grid. The positional stuff here needs to be adapted
// to the needs of the explorable

export default (controls,grid)=>{

//	const sl_pos=grid.position(cfg.widgets.slider_anchor.x,range(sliders.length)
//			.map(x=>(cfg.widgets.slider_anchor.y+cfg.widgets.slider_gap*x)));
	
	const tg_pos=grid.position(cfg.widgets.toggle_anchor.x,range(toggles.length)
			.map(x=>(cfg.widgets.toggle_anchor.y+cfg.widgets.toggle_gap*x)));
	
	const rw_tg_pos=grid.position(cfg.widgets.rw_toggle_anchor.x,range(rw_toggles.length)
		.map(x=>(cfg.widgets.rw_toggle_anchor.y+cfg.widgets.rw_toggle_gap*x)));
			
	const ra_pos=grid.position(cfg.widgets.radio_anchor.x,cfg.widgets.radio_anchor.y);		
	
	toggles.forEach((tg,i) => tg.position(tg_pos[i]));
	rw_toggles.forEach((tg,i) => tg.position(rw_tg_pos[i]));

	radios[0].position(ra_pos)
		.size(cfg.widgets.radio_size).shape(cfg.widgets.radio_shape)
	
	go.position(grid.position(cfg.widgets.playbutton_anchor.x,cfg.widgets.playbutton_anchor.y))
		.size(cfg.widgets.playbutton_size);
	
	setup.position(grid.position(cfg.widgets.backbutton_anchor.x,cfg.widgets.backbutton_anchor.y));
	
	//setup.position(grid.position(cfg.widgets.resetbutton_anchor.x,cfg.widgets.resetbutton_anchor.y));
	

	controls.selectAll(null).data(rw_toggles).enter().append(widgets.widget);
	controls.selectAll(null).data(toggles).enter().append(widgets.widget);
	controls.selectAll(null).data(buttons).enter().append(widgets.widget);
	controls.selectAll(null).data(radios).enter().append(widgets.widget)

}

// here are all the exported objects, all the parameters, their associated widgets and the action buttons

export {rw_toggles,toggles,radios,go,setup,rw_booleans,booleans,choices}


