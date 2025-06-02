import * as d3 from "d3"
import cfg from "./config.js"
import {range,each} from "lodash-es"
import {rw_toggles} from "./controls.js"
import param from "./parameters.js"
import styles from "./styles.module.css"
import {gaussian} from "./random_walks.js"


const L0 =param.L0;
const inset_width = cfg.legend.inset_width;
const inset_height = cfg.legend.inset_height;

var X_inset = d3.scaleLinear().domain([-L0,L0]).range([-inset_width/2,inset_width/2]);	
var Y_inset = d3.scaleLinear().domain([-L0,L0]).range([inset_height/2,-inset_height/2]);
var gaussian_gradient;
var gaussian_gradient_dark;

const pdf_lattice = (anchor,index) => {
	const data = [{x:1,y:0},{x:-1,y:0},{x:0,y:-1},{x:0,y:1}];
	anchor.selectAll("."+styles.pdf_lattice).data(data).enter().append("circle")
		.attr("r",3)
		.attr("class",styles.pdf_lattice)
		.attr("cx",function(d){return X_inset(d.x)})
		.attr("cy",function(d){return Y_inset(d.y)})
        .style("fill",cfg.simulation.path_color[index])		
}

const pdf_ring = (anchor,index)=>{
	anchor.append("circle")
	    .attr("r",X_inset(1)-X_inset(0))
	    .attr("cx",function(d){return X_inset(0)})
	    .attr("cy",function(d){return Y_inset(0)})
	    .attr("class",styles.pdf_ring)
        .style("stroke",cfg.simulation.path_color[index])
}

const pdf_gaussian = (anchor,index) => {
    gaussian_gradient.append("stop").attr("offset","0%").attr("stop-color",cfg.simulation.path_color[index])	
    gaussian_gradient.append("stop").attr("offset","100%").attr("stop-color","white")
	gaussian_gradient_dark.append("stop").attr("offset","0%").attr("stop-color",cfg.simulation.path_color[index])	
    gaussian_gradient_dark.append("stop").attr("offset","100%").attr("stop-color","black")
	
    anchor.append("circle")
		.attr("r",1.5*(X_inset(1)-X_inset(0)))
		.attr("cx",function(d){return X_inset(0)})
		.attr("cy",function(d){return Y_inset(0)})
		.attr("class",styles.pdf_gaussian)
}

const pdf_triangular = (anchor,index) => {
    const data = [{theta:0},{theta:120/180*Math.PI},{theta:240/180*Math.PI}];
	anchor.selectAll("."+styles.pdf_triangular).data(data).enter().append("circle")
		.attr("r",3)
		.attr("class",styles.pdf_triangular)
		.attr("cx",function(d){return X_inset(Math.cos(d.theta))})
		.attr("cy",function(d){return Y_inset(Math.sin(d.theta))})
		.style("fill",cfg.simulation.path_color[index])
}

export default (controls,grid) => {

    gaussian_gradient = controls.append('defs').append('radialGradient').attr('id', 'gaussian_gradient');
    gaussian_gradient_dark = controls.append('defs').append('radialGradient').attr('id', 'gaussian_gradient_dark');		

    const pos=grid.position(cfg.legend.anchor.x,range(rw_toggles.length)
            .map(x=>(cfg.legend.anchor.y+cfg.legend.gap*x)));

    const insets = controls.selectAll("."+styles.inset).data(range(rw_toggles.length)).enter()
        .append("g")
        .attr("class",styles.inset)
        .attr("id",(d,i) => "inset_"+i)
        .attr("transform",(d,i) => "translate("+(pos[i].x)+","+pos[i].y+")");	
    
    insets.append("line").attr("class",styles.insetaxis)
		.attr("x1",X_inset(-L0))
		.attr("y1",Y_inset(0))
		.attr("x2",X_inset(L0))
		.attr("y2",Y_inset(0))
		
    insets.append("line").attr("class",styles.insetaxis)
		.attr("x1",X_inset(0))
		.attr("y1",Y_inset(-L0))
		.attr("x2",X_inset(0))
		.attr("y2",Y_inset(L0))
    
    
    pdf_lattice(controls.select("#inset_"+0),0);
    pdf_ring(controls.select("#inset_"+1),1);
    pdf_gaussian(controls.select("#inset_"+2),2);
    pdf_triangular(controls.select("#inset_"+3),3);

}
