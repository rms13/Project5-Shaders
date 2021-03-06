
// This file exports available shaders to the GUI.

// don't worry about this one. This is just to apply no filter
export function None(renderer, scene, camera) {
    return {
        initGUI: function(gui) {

        },

        render: function() {
            renderer.render(scene, camera);
        }
    }
}

// follow this syntax to make your shaders available to the GUI
export {default as Grayscale} from './grayscale'
export {default as Sepia} from './sepia'
export {default as Gaussian} from './gaussian'
export {default as UnsharpMask} from './unsharpmask'
export {default as SpiralWarp} from './spiral'
export {default as Averaging} from './averaging'
export {default as Edge} from './edge'
export {default as Negative} from './negative'
