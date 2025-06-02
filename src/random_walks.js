import { random_normal } from "./utils";

const lattice = (current,sigma) => {
	let dx,dy,A;
	Math.random() <= 0.5 ? (dx=0,dy=1) : (dx=1,dy=0)
	Math.random() <= 0.5 ? A = 1 : A = - 1
	return {
        x:current.x+sigma*A*dx,
        y:current.y+sigma*A*dy
    }
}

const fixed_length = (current,sigma) => {
	const theta = 2* Math.random() * Math.PI;
	return {
        x:current.x+sigma*Math.cos(theta),
        y:current.y+sigma*Math.sin(theta)
    }
}

const gaussian = (current,sigma) => {	
	return {
        x:current.x+sigma*random_normal(),
        y:current.y+sigma*random_normal()
    }
}

const triangular = (current,sigma) => {
	const theta = 2* Math.PI / 3 * Math.round(Math.random() * 3);
	return {
        x:current.x+sigma*Math.cos(theta),
        y:current.y+sigma*Math.sin(theta)
    }
}

export {lattice,fixed_length,gaussian,triangular};