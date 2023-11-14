import { RecursivePartial, IOptions } from "tsparticles-engine";

const particleOptions: RecursivePartial<IOptions> = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B"]
      },
      shape: {
        type: "change this to bring back the node shapes",
      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
      }
    }
};

export default particleOptions;