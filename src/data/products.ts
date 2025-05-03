export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  specs?: { name: string; value: string }[];
  keyFeatures?: string[];
  applications?: string[];
  galleryImages?: string[];
}

export const allProducts: Product[] = [
  // Hydrogen-Powered Drones
  {
    id: 'phoenix-h25',
    name: 'Phoenix H25',
    category: 'Hydrogen-Powered Drones',
    description: 'Optimized power and strong system integration, adapting to various mission equipment and sensors. Widely used in land surveying, forest security, wind power inspection, and maritime law enforcement.',
    image: '协氢产品图片整理250310/产品-2青鸾H25-1.jpg',
    tags: ['hydrogen-drones', 'quadcopter', 'land-surveying', 'forest-security', 'wind-power-inspection', 'maritime-law-enforcement'],
    // Add more detailed specs, key features, applications here if needed for detail page
    specs: [
      { name: 'Wheelbase', value: '1640 mm' },
      { name: 'Hydrogen Fuel Cell', value: '3.6 Kw' },
      { name: 'Hydrogen Tank', value: '12 L @ 35MPa' },
      { name: 'Empty Weight', value: '26 Kg' },
      { name: 'Max Payload', value: '7 kg' },
      { name: 'Max Endurance', value: '90 min' },
      { name: 'Max Flight Altitude', value: '3000 m' },
      { name: 'Max Flight Speed', value: '18 m/s' },
      { name: 'Max Climb Rate', value: '3 m/s' },
      { name: 'Max Descent Rate', value: '2 m/s' },
      { name: 'Wind Resistance', value: 'Level 6' },
      { name: 'Operating Temp.', value: '-40°C to 50°C' },
      { name: 'Hovering Accuracy (GNSS Enabled)', value: 'Horizontal: ±1.5m; Vertical: ±0.5m;' },
      { name: 'Unfolded Dimensions', value: '1250×1300×680 mm (L×W×H)' },
      { name: 'Folded Dimensions', value: '860×660×790 mm (L×W×H)' },
      { name: 'Mission Payload', value: 'Electro-Optical Pod / Loudspeaker / Searchlight, etc.' },
      { name: 'Transmission Range', value: '50km' }
    ],
    keyFeatures: [
      'Optimized power and strong system integration',
      'Adapts to various mission equipment and sensors',
      'Open data interface and communication protocol'
    ],
    applications: [
      'Land Surveying',
      'Forest Security',
      'Wind Power Inspection',
      'Maritime Law Enforcement'
    ],
    galleryImages: [
      '协氢产品图片整理250310/产品-2青鸾H25-1.jpg',
      '协氢产品图片整理250310/产品-2青鸾H25-2.jpg',
      '协氢产品图片整理250310/产品-2青鸾H25-3.jpg',
      '协氢产品图片整理250310/产品-2青鸾H25-4.jpg',
      '协氢产品图片整理250310/场景-H25光伏板巡检.jpg' // Added application scenario image
    ]
  },
  {
    id: 'phoenix-h25-extended',
    name: 'Phoenix H25 (Extended Endurance)',
    category: 'Hydrogen-Powered Drones',
    description: 'Optimized power and strong system integration, adapting to various mission equipment and sensors. Widely used in land surveying, forest security, wind power inspection, and maritime law enforcement.',
    image: '协氢产品图片整理250310/产品-2青鸾H25-1.jpg', // Using the same image as standard H25 for now
    tags: ['hydrogen-drones', 'quadcopter', 'extended-endurance', 'land-surveying', 'forest-security', 'wind-power-inspection', 'maritime-law-enforcement'],
     specs: [
      { name: 'Wheelbase', value: '1650 mm' },
      { name: 'Hydrogen Fuel Cell', value: '3.6 Kw' },
      { name: 'Hydrogen Tank', value: '19 L @ 35MPa' },
      { name: 'Empty Weight', value: '28 Kgs' },
      { name: 'Max Payload', value: '5 kg' },
      { name: 'Max Endurance', value: '140 min' },
      { name: 'Max Flight Altitude', value: '3000 m' },
      { name: 'Max Flight Speed', value: '18 m/s' },
      { name: 'Max Climb Rate', value: '3 m/s' },
      { name: 'Max Descent Rate', value: '2 m/s' },
      { name: 'Wind Resistance', value: 'Level 6' },
      { name: 'Operating Temp.', value: '-40°C to 50°C' },
      { name: 'Hovering Accuracy (GNSS Enabled)', value: 'Horizontal: ±1.5m; Vertical: ±0.5m;' },
      { name: 'Unfolded Dimensions', value: '1250×1330×720mm (L×W×H)' },
      { name: 'Folded Dimensions', value: '930×670×790 mm (L×W×H)' },
      { name: 'Mission Payload', value: 'Electro-Optical Pod / Loudspeaker / Searchlight, etc.' },
      { name: 'Transmission Range', value: '50km' }
    ],
    keyFeatures: [
      'Optimized power and strong system integration',
      'Adapts to various mission equipment and sensors',
      'Open data interface and communication protocol'
    ],
    applications: [
      'Maritime Law Enforcement',
      'Wind Power Inspection',
      'Forest Security',
      'Land Surveying'
    ],
     galleryImages: [
      '协氢产品图片整理250310/产品-2青鸾H25-1.jpg', // Using the same image as standard H25 for now
      '协氢产品图片整理250310/产品-2青鸾H25-2.jpg',
      '协氢产品图片整理250310/产品-2青鸾H25-3.jpg',
      '协氢产品图片整理250310/产品-2青鸾H25-4.jpg',
      '协氢产品图片整理250310/场景-H25光伏板巡检.jpg' // Added application scenario image
    ]
  },
  {
    id: 'atlas-h100',
    name: 'Atlas H100',
    category: 'Hydrogen-Powered Drones',
    description: 'Advanced technology, strong load capacity, stable flight performance, and high-precision positioning. Customizable payload system meets diverse application needs, ideal for curtain wall/solar panel cleaning, material hoisting, and forest firefighting.',
    image: '协氢产品图片整理250310/产品-1擎天H100-1.jpg',
    tags: ['hydrogen-drones', 'quadcopter', 'heavy-lift', 'curtain-wall-cleaning', 'solar-panel-cleaning', 'material-hoisting', 'forest-firefighting'],
     specs: [
      { name: 'Wheelbase', value: '2525 mm' },
      { name: 'Hydrogen Fuel Cell', value: '7 kW ×2' },
      { name: 'Hydrogen Tank', value: '19 L ×2 @ 35 MPa' },
      { name: 'Empty Weight', value: '76 kg' },
      { name: 'Max Payload', value: '40 kg (Customized Version: 60 kg)' },
      { name: 'Max Endurance', value: '2 h' },
      { name: 'Max Flight Altitude', value: '3000 m' },
      { name: 'Max Flight Speed', value: '18 m/s' },
      { name: 'Max Climb Rate', value: '3 m/s' },
      { name: 'Max Descent Rate', value: '2 m/s' },
      { name: 'Wind Resistance', value: 'Level 6' },
      { name: 'Operating Temp.', value: '-40°C to 50°C' },
      { name: 'Hovering Accuracy (GNSS Enabled)', value: 'Horizontal: ±1.5m; Vertical: ±0.5m;' },
      { name: 'Unfolded Dimensions', value: '1890×2050×1200 mm (L×W×H)' },
      { name: 'Folded Dimensions', value: '1240×1020×1280 mm (L×W×H)' },
      { name: 'Mission Payload', value: 'Cleaning Module / Hoisting Module / Logistics Box, etc.' },
      { name: 'Transmission Range', value: '50km' }
    ],
    keyFeatures: [
      'Advanced technology',
      'Strong load capacity',
      'Stable flight performance',
      'High-precision positioning',
      'Customizable payload system'
    ],
    applications: [
      'Curtain Wall Cleaning',
      'Solar Panel Cleaning',
      'Material Hoisting',
      'Forest Firefighting'
    ],
     galleryImages: [
      '协氢产品图片整理250310/产品-1擎天H100-1.jpg',
      '协氢产品图片整理250310/产品-1擎天H100-2.jpg',
      '协氢产品图片整理250310/产品-1擎天H100-3.jpg',
      '协氢产品图片整理250310/产品-1擎天H100-4.jpg',
      '协氢产品图片整理250310/场景-H100严寒测飞-1.jpg', // Added application scenario image
      '协氢产品图片整理250310/场景-H100严寒测飞.jpg',
      '协氢产品图片整理250310/场景-H100光伏板吊运-2.jpg',
      '协氢产品图片整理250310/场景-H100光伏板吊运1.jpg',
      '协氢产品图片整理250310/场景-H100光伏板清洗-1.jpg',
      '协氢产品图片整理250310/场景-H100光伏板清洗-2.jpg',
      '协氢产品图片整理250310/场景-H100光伏板清洗-3.jpg',
      '协氢产品图片整理250310/场景-H100光伏板清洗-4.jpg',
      '协氢产品图片整理250310/场景-H100医疗物资运输-1.jpg',
      '协氢产品图片整理250310/场景-H100医疗物资运输-2.jpg',
      '协氢产品图片整理250310/场景-H100喷洒-1.jpg',
      '协氢产品图片整理250310/场景-H100喷洒.jpg',
      '协氢产品图片整理250310/场景-H100应急消防-1.jpg',
      '协氢产品图片整理250310/场景-H100应急消防-2.jpg',
      '协氢产品图片整理250310/场景-H100应急消防.jpg',
      '协氢产品图片整理250310/场景-H100物流运输-1.jpg',
      '协氢产品图片整理250310/场景-H100物流运输-2.jpg',
      '协氢产品图片整理250310/场景-H100玻璃幕墙清洗-1.jpg',
      '协氢产品图片整理250310/场景-H100玻璃幕墙清洗-2.jpg',
      '协氢产品图片整理250310/场景-H100玻璃幕墙清洗-3.jpg'
    ]
  },
  {
    id: 'atlas-h200',
    name: 'Atlas H200',
    category: 'Hydrogen-Powered Drones',
    description: 'Coming Soon. Supports multi-sensor data collection system.',
    image: 'placeholder_for_atlas_h200_image', // No specific image found
    tags: ['hydrogen-drones', 'quadcopter', 'heavy-lift', 'coming-soon'],
     specs: [
      { name: 'Fuel Cell Power', value: '28 kW' },
      { name: 'Max Takeoff Weight', value: '200 kg' },
      { name: 'Payload Capacity', value: '80 kg' },
      { name: 'Endurance', value: '2 h' },
      { name: 'Flight Altitude', value: '3000 m' },
      { name: 'Operating Temperature', value: '-40°C to 50°C' },
      { name: 'Data Collection', value: 'Supports multi-sensor data collection system' },
      { name: 'Hydrogen Tank Pressure', value: '35 MPa' },
      { name: 'Wheelbase', value: '3500 mm' },
      { name: 'Propulsion', value: '6-Axis, 6-Rotor' }
    ],
    keyFeatures: [
      'Supports multi-sensor data collection system'
    ],
    applications: [
      'Application Scenarios' // Generic from PDF
    ],
     galleryImages: [] // No specific images found
  },
  {
    id: 'atlas-h400',
    name: 'Atlas H400',
    category: 'Hydrogen-Powered Drones',
    description: 'Coming Soon. Supports multi-sensor data collection system.',
    image: 'placeholder_for_atlas_h400_image', // No specific image found
    tags: ['hydrogen-drones', 'quadcopter', 'heavy-lift', 'coming-soon'],
     specs: [
      { name: 'Fuel Cell Power', value: '56 kW' },
      { name: 'Max Takeoff Weight', value: '400 kg' },
      { name: 'Payload Capacity', value: '200 kg' },
      { name: 'Endurance', value: '2 h' },
      { name: 'Flight Altitude', value: '3000 m' },
      { name: 'Operating Temperature', value: '-40°C to 50°C' },
      { name: 'Data Collection', value: 'Supports multi-sensor data collection system' },
      { name: 'Hydrogen Tank Pressure', value: '35 MPa' },
      { name: 'Wheelbase', value: '4200 mm' },
      { name: 'Propulsion', value: '6-Axis, 12-Rotor' }
    ],
    keyFeatures: [
      'Supports multi-sensor data collection system'
    ],
    applications: [
      'Application Scenarios' // Generic from PDF
    ],
     galleryImages: [] // No specific images found
  },
  {
    id: 'hydrogen-vtol-hf150',
    name: 'Hydrogen VTOL HF150',
    category: 'Hydrogen-Powered Drones',
    description: 'Long flight time, high speed, stable structure, and high reliability. Supports a 30 kg payload with various optional mission equipment, suitable for high-altitude continuous flight. Ideal for logistics transportation, reconnaissance & surveillance, and maritime patrol missions.',
    image: 'placeholder_for_hydrogen_vtol_hf150_image', // No specific image found, user chose to replace on homepage
    tags: ['hydrogen-drones', 'vtol-fixed-wing', 'logistics-transportation', 'reconnaissance-surveillance', 'maritime-patrol'],
     specs: [
      { name: 'Wingspan', value: '6300 mm' },
      { name: 'Dimensions', value: '3300×6300×1200 mm (L×W×H)' },
      { name: 'Hydrogen Fuel Cell', value: '3.6 kW *2' },
      { name: 'Hydrogen Tank', value: '40 L ×2 @ 35 MPa (Standard)' },
      { name: 'Empty Weight', value: '120 kg' },
      { name: 'Max Payload', value: '30 kg' },
      { name: 'Endurance', value: '>6 h' },
      { name: 'Max Flight Altitude', value: '3000 m' },
      { name: 'Communication Range', value: '30 km (Optional 50 km / 100 km Communication Link)' },
      { name: 'Max Flight Speed', value: '160 km/h' },
      { name: 'Cruise Speed', value: '110-125 km/h' },
      { name: 'Max Climb Rate', value: '5 m/s' },
      { name: 'Max Descent Rate', value: '3 m/s' },
      { name: 'Wind Resistance', value: 'Level 6' },
      { name: 'Operating Temperature', value: '-40°C~50°C' },
      { name: 'Positioning Accuracy (GNSS)', value: 'Horizontal: ±1.5 m, Vertical: ±0.5 m' },
      { name: 'Mission Payloads', value: 'EO/IR Gimbal, Cargo Pods, etc.' }
    ],
    keyFeatures: [
      'Modular Design',
      'High Safety & Efficiency',
      'Versatile Payloads',
      'Superior Flight Performance'
    ],
    applications: [
      'Logistics Transportation',
      'Reconnaissance & Surveillance',
      'Maritime Patrol'
    ],
     galleryImages: [] // No specific images found
  },
  // Lithium Battery Drone Series
  {
    id: 'iris-l2',
    name: 'Iris L2 Series',
    category: 'Lithium Battery Drone Series',
    description: 'Streamlined, compact, and portable design with powerful performance. Equipped with a robust power system and comprehensive industry applications, they offer autonomous flight with precise obstacle detection and automatic return-to-home when signals weaken or are lost. Their excellent obstacle avoidance ensures a reliable flight experience, adapting flexibly to complex environments and various operational needs.',
    image: 'placeholder_for_iris_l2_image', // No specific image found
    tags: ['lithium-drones', 'quadcopter', 'park-patrol', 'power-line-inspection', 'event-security', 'aerial-inspection'],
     specs: [
      { name: 'Wheelbase', value: '486 mm' },
      { name: 'Weight / Max Takeoff Weight', value: '1750 g / 2300 g' },
      { name: 'Max Flight Time', value: '45 min' },
      { name: 'Max Ascent / Descent Speed', value: '8 m/s; 6 m/s' },
      { name: 'Wind Resistance Level', value: 'Level 6' },
      { name: 'Max Flight Altitude', value: '6000 m' },
      { name: 'Communication Range', value: '15km (FCC); 8km (CE/SRRC/MIC)' },
      { name: 'Wide-Angle Visible Light Camera', value: '1/1.49" CMOS, 50 MP' },
      { name: 'Telephoto Visible Light Camera', value: '1/2" CMOS, 48 MP, Optical Zoom: 10x; Hybrid Zoom: 160x' },
      { name: 'Infrared Camera (L2T)', value: '640×512 @30fps' },
      { name: 'Hovering Accuracy (RTK)', value: 'Vertical: ±1.0 cm + 1 ppm, Horizontal: ±1cm + 1 ppm' }
    ],
    keyFeatures: [
      'Streamlined, compact, and portable design',
      'Powerful performance',
      'Robust power system and comprehensive industry applications',
      'Autonomous flight with precise obstacle detection',
      'Automatic return-to-home',
      'Excellent obstacle avoidance'
    ],
    applications: [
      'Park Patrol',
      'Power Line Inspection',
      'Event Security',
      'Aerial Inspection'
    ],
     galleryImages: [] // No specific images found
  },
  {
    id: 'iris-l7',
    name: 'Iris L7',
    category: 'Lithium Battery Drone Series',
    description: 'Newly launched lightweight industrial flagship drone. Integrates multiple cutting-edge drone system technologies, making significant breakthroughs in stability, autonomy, and intelligence. Equipped with advanced multi-drone collaborative networking technology, it enables seamless smart communication between multiple drones and control devices, significantly enhancing operational efficiency.',
    image: 'placeholder_for_iris_l7_image', // No specific image found
    tags: ['lithium-drones', 'quadcopter', 'smart-city', 'power-line-inspection', 'event-security', 'forest-security'],
     specs: [
      { name: 'Wheelbase', value: '725 mm' },
      { name: 'Max Takeoff Weight', value: '7 kg' },
      { name: 'Max Payload', value: '3 kg' },
      { name: 'Max Flight Time', value: '63 min' },
      { name: 'Communication Range', value: '15 km' },
      { name: 'Max Flight Altitude', value: '5000 m' },
      { name: 'Max Flight Speed', value: '23 m/s' },
      { name: 'Max Climb Rate', value: '4 m/s' },
      { name: 'Max Descent Rate', value: '3 m/s' },
      { name: 'Wind Resistance', value: 'Level 7' },
      { name: 'Protection Level', value: 'IP45' },
      { name: 'Operating Temperature', value: '-20°C to 50°C' },
      { name: 'Positioning Accuracy (GNSS)', value: 'Horizontal: ±1.5 m, Vertical: ±0.5 m' },
      { name: 'Positioning Accuracy (Visual)', value: 'Horizontal: ±0.3 m, Vertical: ±0.3 m' },
      { name: 'Obstacle Avoidance System', value: 'Omnidirectional Obstacle Avoidance' },
      { name: 'Unfolded Dimensions (Without Propellers)', value: '549×592×424 mm (L×W×H))' },
      { name: 'Folded Dimensions (With Landing Gear)', value: '347×367×424 mm (L×W×H)' }
    ],
    keyFeatures: [
      'Lightweight industrial flagship',
      'Integrates multiple cutting-edge drone system technologies',
      'Significant breakthroughs in stability, autonomy, and intelligence',
      'Advanced multi-drone collaborative networking technology',
      'Seamless smart communication'
    ],
    applications: [
      'Smart City',
      'Power Line Inspection',
      'Event Security',
      'Forest Security'
    ],
     galleryImages: [] // No specific images found
  },
  {
    id: 'phoenix-l25',
    name: 'Phoenix L25',
    category: 'Lithium Battery Drone Series',
    description: 'Optimized power system with strong integration capabilities, supporting various mission equipment and sensors. Features open data interfaces and communication protocols for easy integration and data exchange. Widely used in land surveying, forest security, wind power inspection, and maritime patrol.',
    image: 'placeholder_for_phoenix_l25_image', // No specific image found
    tags: ['lithium-drones', 'quadcopter', 'maritime-patrol', 'wind-power-inspection', 'forest-security', 'land-surveying'],
     specs: [
      { name: 'Wheelbase', value: '1640 mm' },
      { name: 'Power Battery', value: '12S 22Ah (Standard)' },
      { name: 'Max Takeoff Weight', value: '25 kg' },
      { name: 'Max Payload', value: '10 kg' },
      { name: 'Max Flight Time', value: '45 min' },
      { name: 'Communication Range', value: '15 km (Optional 50 km Link)' },
      { name: 'Max Flight Altitude', value: '3000 m' },
      { name: 'Max Flight Speed', value: '18 m/s' },
      { name: 'Max Climb Rate', value: '3 m/s' },
      { name: 'Max Descent Rate', value: '2 m/s' },
      { name: 'Wind Resistance', value: 'Level 6' },
      { name: 'Operating Temperature', value: '-20°C to 50°C' },
      { name: 'Hovering Accuracy (GNSS Enabled)', value: 'Horizontal: ±1.5 m; Vertical: ±0.5 m' },
      { name: 'Unfolded Dimensions', value: '1250×1300×680 mm (L×W×H)' },
      { name: 'Folded Dimensions', value: '860×660×790 mm (L×W×H)' },
      { name: 'Mission Payloads', value: 'EO/IR Gimbal, Loudspeaker, Searchlight, etc.' }
    ],
    keyFeatures: [
      'Optimized power system',
      'Strong integration capabilities',
      'Supports various mission equipment and sensors',
      'Open data interfaces and communication protocols'
    ],
    applications: [
      'Maritime Patrol',
      'Wind Power Inspection',
      'Forest Security',
      'Land Surveying'
    ],
     galleryImages: [] // No specific images found
  },
  {
    id: 'atlas-l100',
    name: 'Atlas L100',
    category: 'Lithium Battery Drone Series',
    description: 'Uses advanced technology and materials, offering strong load capacity, stable flight performance, and high-precision positioning. Customizable payload system meets diverse application needs. Widely used in curtain wall/solar panel cleaning, logistics hoisting, and forest firefighting.',
    image: 'placeholder_for_atlas_l100_image', // No specific image found
    tags: ['lithium-drones', 'quadcopter', 'heavy-lift', 'curtain-wall-cleaning', 'solar-panel-cleaning', 'material-hoisting', 'forest-firefighting'],
     specs: [
      { name: 'Wheelbase', value: '2310 mm' },
      { name: 'Power Battery', value: '18S 30Ah' },
      { name: 'Max Takeoff Weight', value: '100 kg' },
      { name: 'Max Payload', value: '60 kg (Dual-Battery Version: 46 kg)' },
      { name: 'Max Flight Time', value: '30 min (Customizable Dual-Battery Version: 45 min)' },
      { name: 'Communication Range', value: '15 km (Optional 50 km Link)' },
      { name: 'Max Flight Altitude', value: '3000 m' },
      { name: 'Max Flight Speed', value: '18 m/s' },
      { name: 'Max Climb Rate', value: '3 m/s' },
      { name: 'Max Descent Rate', value: '2 m/s' },
      { name: 'Wind Resistance', value: 'Level 6' },
      { name: 'Operating Temperature', value: '-20°C to 50°C' },
      { name: 'Hovering Accuracy (GNSS Enabled)', value: 'Horizontal: ±1.5 m; Vertical: ±0.5 m' },
      { name: 'Unfolded Dimensions', value: '1740×1870×820 mm (L×W×H)' },
      { name: 'Folded Dimensions', value: '1150×870×950 mm (L×W×H)' },
      { name: 'Mission Payloads', value: 'Cleaning Module, Hoisting Module, Logistics Box, etc.' }
    ],
    keyFeatures: [
      'Uses advanced technology and materials',
      'Strong load capacity',
      'Stable flight performance',
      'High-precision positioning',
      'Customizable payload system'
    ],
    applications: [
      'Curtain Wall Cleaning',
      'Solar Panel Cleaning',
      'Material Hoisting',
      'Forest Firefighting'
    ],
     galleryImages: [] // No specific images found
  },
  {
    id: 'vtol-fixed-wing-lf12',
    name: 'VTOL Fixed-Wing LF12',
    category: 'Lithium Battery Drone Series',
    description: 'Adopts a modular design and integrated operating system with fully automatic one-key takeoff and landing. Simplifies user operation, suitable for single-person operations. Applicable to land surveying, search & reconnaissance, maritime patrol, and power line inspection.',
    image: 'placeholder_for_lf12_image', // No specific image found
    tags: ['lithium-drones', 'vtol-fixed-wing', 'land-surveying', 'search-reconnaissance', 'maritime-patrol', 'power-line-inspection'],
     specs: [
      { name: 'Wingspan', value: '2500 mm' },
      { name: 'Fuselage Length', value: '1450 mm' },
      { name: 'Power Source', value: 'Lithium Battery' },
      { name: 'Takeoff and Landing Method', value: 'Vertical Take-Off and Landing (VTOL)' },
      { name: 'Max Takeoff Weight', value: '12 kg' },
      { name: 'Max Payload', value: '2 kg' },
      { name: 'Max Endurance', value: '>2 h' },
      { name: 'Max Flight Altitude', value: '3000 m' },
      { name: 'Communication Range', value: '15 km (Optional 50 km Link)' },
      { name: 'Flight Speed', value: '65 -100 km/h' },
      { name: 'Economic Cruise Speed', value: '70 -90 km/h' },
      { name: 'Max Climb Rate', value: '5 m/s' },
      { name: 'Max Descent Rate', value: '3 m/s' },
      { name: 'Wind Resistance', value: 'Level 6' },
      { name: 'Operating Temperature', value: '-20°C to 50°C' },
      { name: 'Positioning Accuracy (GNSS)', value: 'Horizontal: ±1.5m; Vertical: ±0.5m;' },
      { name: 'Mission Payloads', value: 'EO/IR Gimbal, Mapping Equipment, etc.' }
    ],
    keyFeatures: [
      'Modular Design',
      'Enhanced Performance',
      'High Reliability',
      'Fully Automatic'
    ],
    applications: [
      'Land Surveying',
      'Search & Reconnaissance',
      'Maritime Patrol',
      'Power Line Inspection'
    ],
     galleryImages: [] // No specific images found
  },
  {
    id: 'vtol-fixed-wing-lf30',
    name: 'VTOL Fixed-Wing LF30',
    category: 'Lithium Battery Drone Series',
    description: 'Long flight time, high speed, stable structure, and high reliability. Supports a 10 kg payload with various optional mission equipment, suitable for high-altitude continuous flight. Applicable to land surveying, search & reconnaissance, maritime patrol, and power line inspection.',
    image: 'placeholder_for_lf30_image', // No specific image found
    tags: ['lithium-drones', 'vtol-fixed-wing', 'land-surveying', 'search-reconnaissance', 'maritime-patrol', 'power-line-inspection'],
     specs: [
      { name: 'Wingspan', value: '3600 mm' },
      { name: 'Fuselage Length', value: '1820 mm' },
      { name: 'Power Source', value: 'Lithium Battery' },
      { name: 'Takeoff and Landing Method', value: 'Vertical Take-Off and Landing (VTOL)' },
      { name: 'Max Takeoff Weight', value: '30 kg' },
      { name: 'Max Payload', value: '10 kg' },
      { name: 'Max Endurance', value: '>2 h' },
      { name: 'Max Flight Altitude', value: '3000 m' },
      { name: 'Communication Range', value: '15 km (Optional 50 km Link)' },
      { name: 'Flight Speed', value: '80 -120 km/h' },
      { name: 'Economic Cruise Speed', value: '80 -95 km/h' },
      { name: 'Max Climb Rate', value: '5 m/s' },
      { name: 'Max Descent Rate', value: '3 m/s' },
      { name: 'Wind Resistance', value: 'Level 6' },
      { name: 'Operating Temperature', value: '-20°C to 50°C' },
      { name: 'Positioning Accuracy (GNSS)', value: 'Horizontal: ±1.5m; Vertical: ±0.5m;' },
      { name: 'Mission Payloads', value: 'EO/IR Gimbal, Mapping Equipment, etc.' }
    ],
    keyFeatures: [
      'Modular Design',
      'High Safety & Efficiency',
      'Versatile Payloads',
      'Superior Flight Performance'
    ],
    applications: [
      'Land Surveying',
      'Search & Reconnaissance',
      'Maritime Patrol',
      'Power Line Inspection'
    ],
     galleryImages: [] // No specific images found
  },
  {
    id: 'racing-drone-c7',
    name: 'Racing Drone C7',
    category: 'Lithium Battery Drone Series',
    description: 'Features high speed, agility, a compact frame, simple structure, and low cost. After modification, pilots can operate it using custom VR goggles, providing real-time situational awareness and responsive control. Widely used in aerial cinematography, racing competitions, and integrated recon and strike.',
    image: 'placeholder_for_c7_image', // No specific image found
    tags: ['lithium-drones', 'quadcopter', 'racing', 'aerial-cinematography', 'integrated-recon-strike'],
     specs: [
      { name: 'Frame Material', value: 'Carbon Fiber + Aerospace Aluminum' },
      { name: 'Power Source', value: 'Lithium Battery' },
      { name: 'Battery Pack', value: '6S 6500mAh' },
      { name: 'Max Payload', value: '2 kg' },
      { name: 'Empty Weight (Excluding Battery)', value: '0.42 kg' },
      { name: 'Max Endurance', value: '30 min' },
      { name: 'Max Flight Altitude', value: '5000 m' },
      { name: 'Max Flight Speed', value: '215 km/h' },
      { name: 'Video Transmission Frequency', value: '5.8 GHz' },
      { name: 'Video Transmission Range', value: '3 km to 5 km' },
      { name: 'Video Transmission Latency', value: '20 ms' },
      { name: 'Adjustable Transmission Power', value: '25 mW –2500 mW' },
      { name: 'Wind Resistance', value: 'Level 6' },
      { name: 'Operating Temperature', value: '-20°C to 50°C' }
    ],
    keyFeatures: [
      'High-Speed & Agile',
      'Compact Design',
      'Multiple Flight Modes',
      'Modular Components'
    ],
    applications: [
      'Racing Competitions',
      'Aerial Cinematography',
      'Integrated Recon and Strike'
    ],
     galleryImages: [] // No specific images found
  },
  {
    id: 'racing-drone-c10',
    name: 'Racing Drone C10',
    category: 'Lithium Battery Drone Series',
    description: 'Features high speed, agility, a compact frame, simple structure, and low cost. After modification, pilots can operate it using custom VR goggles, providing real-time situational awareness and responsive control. Widely used in aerial cinematography, racing competitions, and integrated recon and strike.',
    image: 'placeholder_for_c10_image', // No specific image found
    tags: ['lithium-drones', 'quadcopter', 'racing', 'aerial-cinematography', 'integrated-recon-strike'],
     specs: [
      { name: 'Frame Material', value: 'Carbon Fiber + Aerospace Aluminum' },
      { name: 'Power Source', value: 'Lithium Battery' },
      { name: 'Battery Pack', value: '6S 8000mAh' },
      { name: 'Max Payload', value: '3.5 kg' },
      { name: 'Empty Weight (Excluding Battery)', value: '0.78 kg' },
      { name: 'Max Endurance', value: '30 min' },
      { name: 'Max Flight Altitude', value: '5000 m' },
      { name: 'Max Flight Speed', value: '186 km/h' },
      { name: 'Video Transmission Frequency', value: '5.8 GHz' },
      { name: 'Video Transmission Range', value: '3 km to 5 km' },
      { name: 'Video Transmission Latency', value: '20 ms' },
      { name: 'Adjustable Transmission Power', value: '25 mW –2500 mW' },
      { name: 'Wind Resistance', value: 'Level 6' },
      { name: 'Operating Temperature', value: '-20°C to 50°C' }
    ],
    keyFeatures: [
      'High-Speed & Agile',
      'Compact Design',
      'Multiple Flight Modes',
      'Modular Components'
    ],
    applications: [
      'Racing Competitions',
      'Integrated Recon and Strike',
      'Aerial Cinematography'
    ],
     galleryImages: [] // No specific images found
  },
  // Air-Cooled Hydrogen Fuel Cell Products
  {
    id: 'hits-400',
    name: 'HiTS-400',
    category: 'Air-Cooled Hydrogen Fuel Cells',
    description: 'Specifications available in PDF.', // Can add more detailed specs on detail page
    image: 'placeholder_for_hits_image', // No specific image found for individual fuel cells
    tags: ['fuel-cells', 'two-wheelers'],
     specs: [
      { name: 'Model', value: 'HiTS-400' },
      { name: 'Application', value: 'Two-Wheelers' },
      { name: 'Operating Temp.', value: '-10 to 60°C' },
      { name: 'Lifespan', value: '6000h' },
      { name: 'Weight', value: '450g' },
      { name: 'Peak Power', value: '435W' },
      { name: 'Start-Up Time', value: '<5s' },
      { name: 'Standard Endurance', value: '130km' }
    ],
    keyFeatures: [], // No specific key features listed in PDF table
    applications: [
      'Two-Wheelers'
    ],
     galleryImages: [] // No specific images found
  },
  {
    id: 'hits-1000',
    name: 'HiTS-1000',
    category: 'Air-Cooled Hydrogen Fuel Cells',
    description: 'Specifications available in PDF.',
    image: 'placeholder_for_hits_image', // No specific image found
    tags: ['fuel-cells', 'two-wheelers', 'mobile-power-supply'],
     specs: [
      { name: 'Model', value: 'HiTS-1000' },
      { name: 'Application', value: 'Two-Wheelers, Mobile Power Supply' },
      { name: 'Operating Temp.', value: '-10 to 60°C' },
      { name: 'Lifespan', value: '6000h' },
      { name: 'Weight', value: '900g' },
      { name: 'Peak Power', value: '1120W' },
      { name: 'Start-Up Time', value: '<5s' },
      { name: 'Standard Endurance', value: '280km' }
    ],
    keyFeatures: [], // No specific key features listed in PDF table
    applications: [
      'Two-Wheelers',
      'Mobile Power Supply'
    ],
     galleryImages: [] // No specific images found
  },
  {
    id: 'hits-3000',
    name: 'HiTS-3000',
    category: 'Air-Cooled Hydrogen Fuel Cells',
    description: 'Specifications available in PDF.',
    image: 'placeholder_for_hits_image', // No specific image found
    tags: ['fuel-cells', 'sightseeing-vehicles', 'drones'],
     specs: [
      { name: 'Model', value: 'HiTS-3000' },
      { name: 'Application', value: 'Sightseeing Vehicles, Drones' },
      { name: 'Operating Temp.', value: '-40 to 50°C' },
      { name: 'Lifespan', value: '6000h' },
      { name: 'Weight', value: '2400g' },
      { name: 'Peak Power', value: '3325W' },
      { name: 'Start-Up Time', value: '<5s' },
      { name: 'Standard Endurance', value: '3 hours (for drones)' }
    ],
    keyFeatures: [], // No specific key features listed in PDF table
    applications: [
      'Sightseeing Vehicles',
      'Drones'
    ],
     galleryImages: [] // No specific images found
  },
  {
    id: 'hits-5000',
    name: 'HiTS-5000',
    category: 'Air-Cooled Hydrogen Fuel Cells',
    description: 'Specifications available in PDF.',
    image: 'placeholder_for_hits_image', // No specific image found
    tags: ['fuel-cells', 'drones'],
     specs: [
      { name: 'Model', value: 'HiTS-5000' },
      { name: 'Application', value: 'Drones' },
      { name: 'Operating Temp.', value: '-40 to 50°C' },
      { name: 'Lifespan', value: '6000h' },
      { name: 'Weight', value: '3800g' },
      { name: 'Peak Power', value: '5432W' },
      { name: 'Start-Up Time', value: '<5s' },
      { name: 'Standard Endurance', value: '3 hours (for drones)' }
    ],
    keyFeatures: [], // No specific key features listed in PDF table
    applications: [
      'Drones'
    ],
     galleryImages: [] // No specific images found
  },
  {
    id: 'hits-10000',
    name: 'HiTS-10000',
    category: 'Air-Cooled Hydrogen Fuel Cells',
    description: 'Specifications available in PDF.',
    image: 'placeholder_for_hits_image', // No specific image found
    tags: ['fuel-cells', 'drones'],
     specs: [
      { name: 'Model', value: 'HiTS-10000' },
      { name: 'Application', value: 'Drones' },
      { name: 'Operating Temp.', value: '-40 to 50°C' },
      { name: 'Lifespan', value: '6000h' },
      { name: 'Weight', value: '8000g' },
      { name: 'Peak Power', value: '11070W' },
      { name: 'Start-Up Time', value: '<5s' },
      { name: 'Standard Endurance', value: '3 hours (for drones)' }
    ],
    keyFeatures: [], // No specific key features listed in PDF table
    applications: [
      'Drones'
    ],
     galleryImages: [] // No specific images found
  }
];
