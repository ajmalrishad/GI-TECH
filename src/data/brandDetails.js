import invertekLogo from "../assets/brands/invertek.svg";
import kebLogo from "../assets/brands/keb.svg";
import aucomLogo from "../assets/brands/aucom.svg";
import kendrionLogo from "../assets/brands/kendrion.svg";
import vogelLogo from "../assets/brands/vogel.svg";
import solartechLogo from "../assets/brands/solartech.svg";

import invertek1 from "../assets/Products/invertek1.png";
import keb1 from "../assets/Products/keb1.png";
import aucom1 from "../assets/Products/aucom1.png";
import kendrion1 from "../assets/Products/kendrion1.png";
import vogel1 from "../assets/Products/vogel1.png";
import solartech1 from "../assets/Products/solartech1.png";

export const brandDetailsData = [
  {
    id: "invertek",
    name: "Invertek Drives",
    website: "https://www.invertekdrives.com",
    category: "High-performance VFDs",
    tag: "Variable Frequency Drives",
    logo: invertekLogo,
    image: invertek1,
    tagline: "Dedicated to the Design and Manufacture of Variable Frequency Drives",
    description:
      "World-class variable frequency drives engineered for precision motor speed control, maximum energy efficiency, and reliable operation across HVAC, pumping, and industrial machinery.",
    highlights: [
      "Compact footprint with rugged IP20 & IP66 outdoor enclosures",
      "Sensorless vector control for Induction, PM, Brushless DC, and SynRM motors",
      "Built-in EMC filters, Modbus RTU, BACnet, and energy-saving algorithms",
      "Rapid parameter setup with Bluetooth / PC tools and intuitive diagnostics",
    ],
    products: [
      {
        series: "Optidrive E3",
        headline: "General Purpose Micro Drive (0.37kW - 37kW)",
        details:
          "Ultra-compact micro drive designed for fast commissioning with 14 basic parameters. Available in IP20 and robust IP66 dust and washdown enclosures.",
        specs: ["Voltage: 110V - 480V (1-phase & 3-phase)", "Control: Sensorless vector & V/F", "Built-in: Internal Category C1 EMC filter"],
      },
      {
        series: "Optidrive Eco",
        headline: "Dedicated HVAC, Fan & Pump Drive (0.75kW - 250kW)",
        details:
          "Energy-optimized variable frequency drive with multi-pump cascade staging, pipe fill function, fire override mode, and native building automation protocols.",
        specs: ["Protocols: BACnet MS/TP, Modbus RTU natively", "Features: Resonance avoidance, dry run detection", "Harmonics: Low harmonic technology"],
      },
      {
        series: "Optidrive P2",
        headline: "High Performance Heavy Industrial Drive (0.75kW - 250kW)",
        details:
          "Engineered for demanding dynamic applications requiring closed-loop encoder feedback, 200% torque overload capacity, and Safe Torque Off (STO SIL2).",
        specs: ["Overload: 200% for 4 seconds", "Safety: Integrated Safe Torque Off (STO)", "Applications: Cranes, hoists, extruders, mixers"],
      },
      {
        series: "Optidrive Elevator",
        headline: "Dedicated Lift & Elevator Drive (4kW - 110kW)",
        details:
          "Whisper-quiet, ultra-compact elevator drive delivering jerk-free ride comfort with direct-to-floor landing and full rescue operation integration.",
        specs: ["Direct-to-floor positioning", "Compatible with gearless PM & geared induction motors"],
      },
    ],
    applications: [
      "HVAC & Building Automation (Air Handling Units, Cooling Towers, Extract Fans)",
      "Pumping & Booster Stations (Water utilities, municipal sewage, booster skids)",
      "Conveying & Material Handling (High-speed sorting, logistics conveyors)",
      "Manufacturing & Process Automation (Mixers, centrifuges, rolling mills)",
      "Cranes, Hoists & Marine Winches",
    ],
  },
  {
    id: "keb",
    name: "KEB Automation",
    website: "https://www.keb-automation.com/en-uk",
    category: "Motion Control & Drive Systems",
    tag: "Motion & Drives",
    logo: kebLogo,
    image: keb1,
    tagline: "German-Engineered Automation & Drive Technologies for Dynamic Motion",
    description:
      "Precision motion control systems, servo drives, geared motors, and industrial control architectures engineered in Germany for complex multi-axis industrial automation.",
    highlights: [
      "High-dynamic drive controllers with integrated functional safety (FSoE, STO, SS1)",
      "Multi-Ethernet communication (EtherCAT, PROFINET, POWERLINK, Modbus TCP)",
      "Industrial PCs, embedded PLCs, and high-definition HMI touch interfaces",
      "Wide application coverage from machine tools to material flow and high-speed turbomachinery",
    ],
    products: [
      {
        series: "COMBIVERT F6 & S6 Drive Controllers",
        headline: "High-Performance Servo Drives & Frequency Inverters (0.75kW - 450kW)",
        details:
          "Modular drive controllers offering high-dynamic motor shaft control, dual-channel functional safety, multi-fieldbus interfaces, and universal motor feedback encoder support.",
        specs: [
          "Safety: Integrated STO, SS1, SOS, SLS, SDI via FSoE",
          "Fieldbus: EtherCAT, PROFINET, Ethernet/IP, CANopen",
          "Cooling: Air-cooled, push-through, and liquid-cooled options",
        ],
      },
      {
        series: "Control & Automation (C6 Industrial PCs & PLCs)",
        headline: "Embedded Controllers, Edge Devices & HMI Panels",
        details:
          "Scalable automation hardware including C6 SMART controllers, C6 COMPACT embedded systems, C6 Industrial Touch HMIs, and decentralized remote I/O modules.",
        specs: [
          "Real-time: Microsecond-precision EtherCAT master architecture",
          "Software: COMBIVIS studio 6 integrated programming suite",
          "Connectivity: Secure remote access router and telemetry",
        ],
      },
      {
        series: "Motors & Geared Drive Systems",
        headline: "Synchronous Servo Motors & Heavy-Duty Geared Motors",
        details:
          "High-acceleration dynamic servo motors (DL4 / TA series), high-torque asynchronous motors, and rugged helical-bevel, helical-worm, and shaft-mounted geared units.",
        specs: [
          "Servo Motors: High overload capacity and low inertia rotors",
          "Geared Units: Precision-machined gears with high efficiency",
        ],
      },
      {
        series: "Brakes & Clutches (COMBISTOP & COMBINORM)",
        headline: "Electromagnetic Brakes & High-Torque Clutches",
        details:
          "Safety-critical spring-applied holding and dynamic stopping brakes (COMBISTOP) along with electromagnetic clutches (COMBINORM) for industrial drive trains.",
        specs: [
          "Holding torque up to 10,000 Nm",
          "Fail-safe power-off braking actuation",
        ],
      },
    ],
    applications: [
      "FAN (Ventilation equipment, HVAC industrial blowers, tunnel exhaust & cooling fans)",
      "Pumps & Liquid Handling Systems",
      "Horizontal Conveying & Material Flow Systems",
      "Refrigeration Engineering & Heat Pumps",
      "Storage & Retrieval Machines (AS/RS Logistics)",
      "Material Handling (Warehouse Logistics, Gantry Cranes & Hoists)",
      "Robotics & Dynamic Pick-and-Place Automation",
      "Pack & Food (Packaging Machinery, Food Processing & Bottling)",
      "Plastics Machinery (High-Precision Extrusion & Injection Moulding)",
      "Recycling (Heavy Industrial Shredders, Crushers & Granulators)",
      "Lift & Elevator Traction Drive Systems",
      "Turbo Compressors & High-Speed Aeration Blowers",
      "Wind Energy (Turbine Pitch & Yaw Drive Automation)",
      "Woodworking Machinery (Multi-Axis CNC Routers & Saws)",
      "E-Mobility & Commercial Vehicle Drive Units",
      "Medical Technology & Diagnostic Equipment",
    ],
  },
  {
    id: "aucom",
    name: "Aucom",
    website: "https://www.aucom.com",
    category: "Intelligent Soft Starters",
    tag: "Motor Soft Starters",
    logo: aucomLogo,
    image: aucom1,
    tagline: "The Global Specialists in Motor Soft Starters & Motor Protection",
    description:
      "World-renowned motor control solutions engineered to eliminate mechanical shock, reduce electrical inrush stress, and optimize pump lifecycle performance in harsh industrial environments.",
    highlights: [
      "Patented XLR-8 adaptive acceleration and deceleration control",
      "Complete electrical and thermal motor protection suite",
      "Internal bypass contactor minimizing heat build-up and panel size",
      "Comprehensive USB data logging and SCADA fieldbus telemetry",
    ],
    products: [
      {
        series: "EMX4e & EMX4i Intelligent Soft Starters",
        headline: "Advanced Industrial Soft Starters (18A - 1200A, 200V - 690V)",
        details:
          "Next-generation motor control center featuring XLR-8 adaptive acceleration, simulation testing tools, comprehensive metering, and optional plug-in communication cards.",
        specs: [
          "Control: Adaptive acceleration control (XLR-8)",
          "Bypass: Integrated bypass contactor up to 1200A",
          "Connectivity: Modbus, Profibus, DeviceNet, Ethernet/IP",
        ],
      },
      {
        series: "CSX & CSXi Compact Soft Starters",
        headline: "Space-Saving Constant Current Soft Starters (18A - 200A)",
        details:
          "Ultra-compact DIN-rail or backplate mounted starters providing smooth ramp-up and motor protection with zero configuration complexity.",
        specs: [
          "Compact design for motor control center integration",
          "Built-in motor thermal overload protection (CSXi)",
        ],
      },
      {
        series: "MVE Series Medium Voltage Soft Starters",
        headline: "Heavy-Duty Medium Voltage Starters (Up to 15kV)",
        details:
          "Fiber-optically isolated MV soft starters engineered for critical pumps, compressors, and mills in mining, petrochemical, and municipal water plants.",
        specs: [
          "Voltage: 2.3kV to 15kV",
          "Enclosure: Rugged IP54 / NEMA 4X powder-coated steel",
        ],
      },
    ],
    applications: [
      "Municipal Water & Wastewater Pumping Stations (Water hammer elimination)",
      "Industrial Compressors & Chiller Refrigeration Plants",
      "Crushers, Ball Mills, Grinders & Pulverizers",
      "Heavy Conveyors, Bucket Elevators & Ship Loaders",
      "Forestry Wood Chippers, Debarkers & Sawmills",
    ],
  },
  {
    id: "kendrion",
    name: "Kendrion Intorq",
    website: "https://www.kendrion.com/en/products-services/industrial-brakes",
    category: "Electromagnetic Brakes & Clutches",
    tag: "Braking & Clutches",
    logo: kendrionLogo,
    image: kendrion1,
    tagline: "Safety Brakes & Electromagnetic Clutches for Precision Motion",
    description:
      "Global pioneers in fail-safe electromagnetic brakes and clutches. Trusted internationally for mission-critical holding and emergency stopping in elevators, cranes, and automated machinery.",
    highlights: [
      "Modular spring-applied brakes with variable torque adjustments",
      "EN 81-20/50 elevator code compliant redundant braking systems",
      "High thermal energy absorption and noise-dampened actuation",
      "Cold-climate and marine-certified corrosion-proof configurations",
    ],
    products: [
      {
        series: "INTORQ BFK458 Modular Spring-Applied Brakes",
        headline: "The Universal Industry Standard Safety Brake (1.5 Nm - 600 Nm)",
        details:
          "Versatile modular brake system used worldwide on electric motors, cranes, and hoists with selectable torque ratings, manual hand release, and IP65 sealing.",
        specs: [
          "Braking Torque: 1.5 Nm to 600 Nm in 9 frame sizes",
          "Features: Preset air gap for rapid maintenance",
          "Options: Microswitches for air gap and wear monitoring",
        ],
      },
      {
        series: "INTORQ BFK468 Multi-Disc Industrial Brakes",
        headline: "High Torque Density Brakes for Mobile & Heavy Machinery",
        details:
          "Multi-surface friction brake engineered for mobile equipment, forklift drive axles, and heavy winches requiring maximum braking force in confined dimensions.",
        specs: [
          "High torque-to-volume ratio",
          "Long-life friction linings for harsh duty cycles",
        ],
      },
      {
        series: "Elevator & Escalator Safety Brakes (BFK456 / BFK464)",
        headline: "Redundant Twin-Circuit Brakes for Passenger Lifts",
        details:
          "Redundant dual-circuit fail-safe brakes providing whisper-quiet operation (< 50 dBA) and compliant with international elevator safety codes.",
        specs: [
          "Compliance: EN 81-20, EN 81-50, ASME A17.1",
          "Acoustics: Special noise-dampening ring technology",
        ],
      },
      {
        series: "Wind Turbine Dynamic Holding Brakes",
        headline: "Pitch & Yaw Safety Dynamic Stopping Systems",
        details:
          "High-capacity electromagnetic brakes for onshore and offshore wind turbines, providing emergency stopping and reliable yaw positioning under extreme gale loads.",
        specs: [
          "Cold-climate package down to -40°C",
          "Offshore anti-corrosion surface coating (C5-M)",
        ],
      },
    ],
    applications: [
      "Passenger & Freight Elevators, Escalators and Moving Walks",
      "Overhead Factory Cranes, Electric Hoists & Port Container Winches",
      "Automated Guided Vehicles (AGV), Autonomous Mobile Robots & Forklifts",
      "Wind Turbine Rotor, Pitch & Yaw Safety Holding Systems",
      "Stage Machinery, Theatre Rigging & Amusement Rides",
    ],
  },
  {
    id: "vogel",
    name: "VOGEL Antriebstechnik",
    website: "https://www.vogel-antriebe.de/en/",
    category: "Precision Gearboxes & Drive Systems",
    tag: "Precision Gearboxes",
    logo: vogelLogo,
    image: vogel1,
    tagline: "High-Quality Precision Gearboxes & Customer-Specific Drive Solutions (Over 70 Years)",
    description:
      "German-manufactured precision planetary, spiral bevel, and servo gearboxes delivering maximum torque density, whisper-quiet operation, and energy efficiency up to 98%.",
    highlights: [
      "Low backlash (< 1 arcmin) for high-accuracy positioning in dynamic automation",
      "High torque capacity with case-hardened ground bevel and planetary gearing",
      "Universal mounting orientation with versatile motor adapter flanges",
      "More than 70 years of German manufacturing engineering and reliability",
    ],
    products: [
      {
        series: "Low-Backlash Planetary Gearboxes (MPR / MPG / MPL)",
        headline: "Precision Planetary Gearboxes for High-Dynamic Servo Applications",
        details:
          "Coaxial servo planetary gearboxes with high torsional rigidity, extreme acceleration torque, and minimal backlash for robotic and automation axes.",
        specs: [
          "Backlash: Down to < 1 arcmin",
          "Efficiency: Up to 97%",
          "Output Options: Smooth shaft, keyed shaft, or rotary flange",
        ],
      },
      {
        series: "Spiral Bevel & Bevel Helical Gearboxes (Series L / H / K / MK)",
        headline: "High-Efficiency Right-Angle Gearboxes (Up to 98% Efficiency)",
        details:
          "Right-angle transmission gearboxes with ground hypoid/spiral bevel teeth delivering high torque throughput, low vibration, and quiet operation.",
        specs: [
          "Gear Ratios: 1:1 to 6:1 (higher with auxiliary stages)",
          "Lubrication: Lifetime synthetic lubrication",
        ],
      },
      {
        series: "Servo Spiral Bevel Gearboxes (SKPR / SKPG)",
        headline: "Compact Right-Angle Servo Drive Gearboxes",
        details:
          "Combines right-angle geometry with precision low-backlash planetary output stages for dynamic pick-and-place systems and packaging machines.",
        specs: [
          "High radial and axial load capacity on output shaft",
          "Optimized motor flange connection for all common servomotors",
        ],
      },
      {
        series: "Rack & Pinion Linear Drive Systems",
        headline: "High-Precision Linear Drive Solutions",
        details:
          "Complete linear actuation systems pairing VOGEL low-backlash gearboxes with hardened precision gear racks for CNC gantries and cutting tables.",
        specs: [
          "Feed forces up to thousands of Newtons",
          "High positioning repeatability over long travel lengths",
        ],
      },
    ],
    applications: [
      "Robotics, Cartesian Gantry Systems & Pick-and-Place Automation",
      "CNC Machine Tools, Laser / Plasma Cutting Machines & Milling Centers",
      "Packaging, Cartoning, Shrink-Wrapping & Labelling Machinery",
      "Food Processing Lines & High-Speed Beverage Bottling Plants",
      "Automotive Assembly Lines & Special Purpose Machine Construction",
    ],
  },
  {
    id: "solartech",
    name: "Solartech",
    website: "https://www.solartech.cn/",
    category: "Solar Pumping Solutions",
    tag: "Solar Pumping",
    logo: solartechLogo,
    image: solartech1,
    tagline: "World's Leading Professional Manufacturer of Solar Pumping Systems",
    description:
      "Global leaders in solar water conservancy technologies, manufacturing high-efficiency solar water pumping inverters, submersible borehole pumps, and off-grid agricultural irrigation systems.",
    highlights: [
      "Patented dynamic MPPT algorithm achieving up to 99% conversion efficiency",
      "Automatic solar / grid dual-power hybrid input switching with zero interruption",
      "Battery-free direct solar drive reducing system capital and lifecycle maintenance costs",
      "Global deployments across agricultural irrigation, community water supply, and desert control",
    ],
    products: [
      {
        series: "PB-G4 Solar Pumping Inverters",
        headline: "Intelligent Dynamic MPPT Solar Inverters (0.75kW - 110kW)",
        details:
          "Fully automated solar pumping inverters with patented motor vector control, wide DC input voltage window, and integrated lightning and dry-run protection.",
        specs: [
          "Efficiency: Up to 99% MPPT tracking efficiency",
          "Protection: IP65 outdoor waterproof enclosure",
          "Hybrid: Automatic seamless switching between solar and AC grid / diesel backup",
        ],
      },
      {
        series: "SPB Solar Water Pumps",
        headline: "High-Efficiency Submersible & Surface Solar Pumps",
        details:
          "Stainless-steel multi-stage borehole pumps and centrifugal surface pumps engineered for continuous duty under direct solar irradiance.",
        specs: [
          "Head capacity up to 350+ meters",
          "Flow rates from 1 m³/h to over 120 m³/h per unit",
          "Material: Corrosion-resistant SS304 / SS316 construction",
        ],
      },
      {
        series: "SPMD Solar Direct-Drive Systems",
        headline: "Battery-Free Plug-and-Play Solar Pumping Packages",
        details:
          "Modular turn-key kits including solar panels, inverter, pump, and float switches for rural agricultural and off-grid drinking water installations.",
        specs: [
          "100% solar powered without chemical batteries",
          "Zero operating electricity costs",
        ],
      },
      {
        series: "Smart Telemetry & Remote Monitoring (DM System)",
        headline: "Cloud Water Conservancy Supervisory System",
        details:
          "4G / GPRS telemetry module allowing operators to monitor solar power input, water yield, pump speed, and fault diagnostics via mobile app or web browser.",
        specs: [
          "Remote start/stop and scheduled water distribution",
          "Daily and cumulative flow logging",
        ],
      },
    ],
    applications: [
      "Agricultural Drip, Micro-Sprinkler & Center-Pivot Crop Irrigation",
      "Rural Community Drinking Water Supply & Livestock Watering Skids",
      "Desertification Control, Sand Dune Fixation & Ecological Forestry Greening",
      "Salt Production Pan Circulation & Commercial Aquaculture Pumping",
      "Remote Island Facilities & Forest Fire Prevention Water Reserves",
    ],
  },
];
