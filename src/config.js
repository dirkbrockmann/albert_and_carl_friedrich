// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default { 
	widgets:{
		toggle_anchor: {x:2,y:7},
		toggle_label_pos:"right",
		toggle_gap:1.25,
		playbutton_size: 120,
		playbutton_anchor:{x:3,y:2},
		backbutton_anchor:{x:3,y:5},
		radio_anchor:{x:2,y:10.5},
		radio_size:100,
		radio_orientation:"horizontal",
		radio_label_position:"top",
		radio_shape:"rect",
		rw_toggle_anchor: {x:9,y:1.5},
		rw_toggle_label_pos:"right",
		rw_toggle_gap:3,
		rw_toggle_size:12
	},

	simulation: {
		delay:10,
		path_width:1.5,
		// path_color:[
		// 	"#1c4966", // dark blue
		// 	"#7c2855", // dark magenta
		// 	"#a43820", // rust red
		// 	"#7d5700"  // dark amber
		// ],
		path_color:[
			"#7d5700", 
			"darkblue", 
			"darkred", 
			"#2e5a34"  // dark forest green
		],
		pos_size:3
	},
	legend:{
		inset_height : 60,
		inset_width : 60,
		anchor: {x:7,y:1.5},		
		gap:3
	}
}