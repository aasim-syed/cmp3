const ParticlesConfig = {
    
        particles: {
          number: {
            value: 175,
            density: {
              enable: false,
              value_area: 0
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "star",
            stroke: {
              width: 1,
              color: "#fffafa"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "",
              width: 100,
              height: 50
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 4.005992965476349,
            random: true,
            anim: {
              enable: true,
              speed: 24.345709068776642,
              size_min: 11.361330898762436,
              sync: true
            }
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 10.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 9,
            direction: "down",
            random: false,
            straight: true,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      
      
};
 
export default ParticlesConfig