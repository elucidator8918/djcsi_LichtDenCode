
    import React from 'react'
    //import { useCallback } from "react";
    //import { loadFull } from "tsparticles";
    import { useCallback } from "react";
    import Particles from "react-tsparticles";
    import { loadFull } from "tsparticles";
    //import particlesConfig from './config/particles.confic';
    //params={particlesConfig}
    export default function Particles1() {
        const particlesInit = useCallback(async engine => {
            console.log(engine);
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadFull(engine);
        }, []);

        const particlesLoaded = useCallback(async container => {
            await console.log(container);
        }, []);
    return (
        <div className='z-0'>
        <Particles 
        id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                  color: {
                    value: "#000000"
                  }
                },
                fpsLimit: 60,
                interactivity: {
                  detectsOn: "canvas",
                  events: {
                    onHover: {
                      enable: true,
                      mode: "pull"
                    },
                    onClick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 2,
                      opacity: 1,
                      size: 10
                    }
                  }
                },
                particles: {
                  color: {
                    value: "#ffffff",
                    
                  },
                  links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0,
                    width: 1
                  },
                  collisions: {
                    enable: true
                  },
                  move: {
                    direction: "bottom",
                    enable: true,
                    outModes: {
                      default: "out",
                      bottom: "out"
                    },
                    random: false,
                    speed: 0.3,
                    straight: false
                  },
                  number: {
                    density: {
                      enable: true,
                      value_area: 800
                    },
                    value: 150
                  },
                  opacity: {
                    value: 0.5,
                    anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false
                    }
                  },
                  shape: {
                    type: "circle"
                  },
                  size: {
                    value:4,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 10,
                      size_min: 0.1,
                      sync: false
                    }
                  }
                },
                detectRetina: true
              
            }}
        
        />

        </div>
    )
    }
