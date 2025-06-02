// main.js — entry point for the explorable

import './tailwind.css';

import defaultConfig from "./container_config.js";
import setup_container from "./setup_container.js";
import setup_legend from "./legend.js";
import setup_interactions from "./setup_interactions.js";
import setup_controls,{ go, setup as setup_all } from "./controls.js";
import { initialize as setup_simulation } from "./simulation.js";
import meta from 'virtual:meta';

function load(containerId, config = defaultConfig) {
  // Setup the container
  const container = setup_container(containerId, config);
  const display = container.display;
  const controls = container.controls;
  const grid = container.grid;

  // Initialize everything
  setup_controls(controls, grid);
  setup_legend(controls, grid);
  setup_interactions(display, controls, config);
  setup_simulation(display, config);

  // Return a clean instance API
  return {
    halt() {
      if (go.value() === 1) {
        go.press(controls);
      }
    },
    reset() {
      if (go.value() === 1) {
        go.press(controls);
      }
      setup_all.press(controls);
    },
    config,
    meta
  };
}

export { load, defaultConfig as config, meta };
export default load;