export interface Project {
    title: string;
    description: string;
    links?: { text: string; url: string }[];
    image?: string;
  }
  
  export const PROJECT_LIST: Project[] = [
    {
      title: 'Recipient of the 2022 EdgeX Foundry Innovation Award!',
      description: `
        In 2022, I received the prestigious EdgeX Foundry Innovation Award, 
        recognizing my significant contributions to one of the largest 
        open-source edge computing projects. My work included developing 
        innovative device and application services, addressing critical bugs, 
        and proposing numerous feature improvements based on real world usage, 
        demonstrating a strong commitment to the EdgeX community and advancing 
        the platform's capabilities for real-world use cases.
      `,
      links: [
        { text: 'Article Link', url: 'https://lfedge.org/congratulations-to-the-recipients-of-the-2022-edgex-awards/' }
      ],
      image: 'https://github.com/user-attachments/assets/7250dc5d-f0e9-48b2-aba2-0e9d83c1e4a0'
    },
    {
      title: 'RC Race Vision',
      description: `
        Trajectory tracking of RC Cars on a race-track using YOLOv11 + Roboflow Supervision. 
        Utilizes background object detection for global path stabilization despite the camera 
        being in motion.
      `,
      links: [
        { text: 'GitHub Repo', url: 'https://github.com/ajcasagrande/rc-race-vision' },
        { text: 'Roboflow Universe', url: 'https://universe.roboflow.com/birdrc/rc-race-vision' },
        { text: 'Blog Post', url: 'https://ajcasagrande.medium.com/your-next-pit-crew-enhancing-rc-racing-with-computer-vision-bee25c494c69' }
      ],
      image: 'https://github.com/user-attachments/assets/3e4b13fb-ba4a-490b-b6f0-dbb220c004b7'
    },
    {
      title: 'Open Retail Reference Architecture (ORRA)',
      description: `
        EdgeX Foundry + Edge Video Analytics + Camera Management
        Deployment files for running EdgeX Kamakura with the ONVIF device service, 
        as well as Intel's Edge Video Analytics on the Open Horizon platform.
      `,
      links: [
        { text: 'GitHub Repo', url: 'https://github.com/edgexfoundry-holding/orra/tree/main/demos/OH-EXF-Kamakura' }
      ],
      image: 'https://github.com/user-attachments/assets/1125fb25-f985-452e-94f2-497be4765a2f'
    },
    {
      title: 'Smart City Situational Awareness - Reference Implementation',
      description: `
        Computer Vision to Secure Your Surroundings with AI/ML Solution 
        Built Using Open Source Tools at the Edge
      `,
      links: [
        { text: 'YouTube Customer Demo', url: 'https://youtu.be/kVcb_R-MdHo?feature=shared' },
        { text: 'Open Source Summit 2022 Presentation', url: 'https://ossna2022.sched.com/event/11Nhu/computer-vision-to-secure-your-surroundings-with-aiml-solution-built-using-open-source-tools-at-the-edge-samantha-coyle-neethu-elizabeth-simon-intel-corporation' }
      ],
      image: 'https://github.com/user-attachments/assets/717cdb0e-a386-4a16-bac8-21525d300fa0'
    },
    {
      title: 'EdgeX Foundry',
      description: `
        - EdgeX Foundry - Core Services  
        - USB Camera Device Service  
        - Go ONVIF library  
        - Go Device Service SDK  
        - EdgeX UI  
        - EdgeX Compose  
        - RFID LLRP Device Service  
        - RFID LLRP Inventory Application Service  
        - ONVIF Camera Device Service  
        - Go Device Service SDK  
        - Official EdgeX Foundry Examples  
        - Go Bootstrap Module  
      `,
      links: [
        { text: 'Core Services', url: 'https://github.com/edgexfoundry/edgex-go' },
        { text: 'USB Camera Device Service', url: 'https://github.com/edgexfoundry/device-usb-camera' },
        { text: 'Go ONVIF library', url: 'https://github.com/IOTechSystems/onvif' },
        { text: 'EdgeX Foundry Examples', url: 'https://github.com/edgexfoundry/edgex-examples' }
        // ...Add more if you like
      ]
    },
    {
      title: 'Intel IoT Contributions',
      description: `
        - Intel® RFID Sensor Platform (RSP) - Inventory Suite  
        - Intel® Inventory Suite inventory-service  
        - RSP MQTT Device Service  
        - Inventory Suite Demo UI  
        - Inventory Suite - Loss Prevention Service  
        - Intel® Inventory Suite alert-service
      `,
      links: [
        { text: 'Inventory Suite Repo', url: 'https://github.com/intel/rsp-sw-toolkit-im-suite-inventory-suite' }
      ],
      image: 'https://github.com/user-attachments/assets/12349165-eef1-4ce4-8c74-a7e89e1ed773'
    },
    {
      title: 'ESP-IDF Contributions',
      description: `
        Major performance improvements to idf_size.py (IDFGH-2404) #4518 
      `,
      links: [
        { text: 'GitHub Pull Request', url: 'https://github.com/espressif/esp-idf/pull/4518' }
      ]
    },
    {
      title: 'GopherCon 2022 Presentation',
      description: `
        A Journey Through Integration Testing with Go - What Could Go Wrong?
        (Video available on YouTube)
      `,
      links: [
        { text: 'YouTube Video', url: 'https://youtu.be/o_B4HFfeKEs?feature=shared' }
      ]
    },
    {
      title: 'Spektrum Bootloader and SG3 Decoder',
      description: `
        High Level Analyzer for Saleae Logic 2.x software. Decodes Spektrum Programmer 
        and iX12/14/20 SG3 UART communications of compatible Surface and Air Transmitter and Receivers.
      `,
      links: [
        { text: 'GitHub Source', url: 'https://github.com/ajcasagrande/spektrum-bootloader-and-sg3-decoder' }
      ]
    },
    {
      title: 'Collect All Pets Calculator + Metallic Optimizer',
      description: `
        Really neat probability calculator created for a video game back in 2022. 
        Built from scratch using AngularJS, it features real-time updates, local-storage, 
        live chart visualizations, and more!
      `,
      links: [
        { text: 'GitHub Source Code', url: 'https://github.com/collect-all-pets/collect-all-pets.github.io' },
        { text: 'Live Demo', url: 'https://collect-all-pets.github.io/' }
      ]
    }
  ];
  