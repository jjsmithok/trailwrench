// TrailWrench AI - Complete Bike Database
// Service intervals based on manufacturer specs and expert recommendations

export interface BikeSpec {
  id: string;
  make: string;
  model: string;
  years: number[];
  category: 'xc' | 'trail' | 'all-mountain' | 'enduro' | 'dh' | 'gravel' | 'e-mtb';
  suspension: {
    fork?: {
      brand: string;
      travelMm: number;
      model?: string;
    };
    rear?: {
      brand: string;
      travelMm: number;
      model?: string;
      type: 'air' | 'coil';
    } | null;
    type?: 'hardtail';
  };
  wheelSize: '26' | '27.5' | '29' | 'mullet' | 'mixed';
  frameMaterial: 'aluminum' | 'carbon' | 'titanium';
  serviceIntervals: ServiceInterval[];
}

export interface ServiceInterval {
  component: string;
  task: string;
  hours: number;
  description: string;
  source: string;
}

export const BIKE_DATABASE: BikeSpec[] = [
  // SPECIALIZED
  {
    id: 'specialized-stumpjumper-15',
    make: 'Specialized',
    model: 'Stumpjumper 15',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 150, model: '36 Float Factory' },
      rear: { brand: 'Fox', travelMm: 145, model: 'DPX2 Factory', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Fork', task: 'Wipe stanchions after every ride', hours: 0, description: 'Clean with damp cloth, mild soapy water', source: 'Fox Official' },
      { component: 'Fork', task: 'Lower leg service', hours: 30, description: 'Clean, inspect bushings, repack with suspension butter', source: 'Fox' },
      { component: 'Rear Shock', task: 'Air sleeve maintenance', hours: 30, description: 'Check air can for oil, service if needed', source: 'Fox' },
      { component: 'Fork', task: 'Full internal service', hours: 100, description: 'Damper overhaul, replace seals', source: 'Fox' },
      { component: 'Drivetrain', task: 'Chain wear check', hours: 15, description: 'Check every 2 weeks, replace at 0.8% stretch', source: 'SRAM' },
      { component: 'Brakes', task: 'Bleed', hours: 50, description: 'When spongy, use mineral oil', source: 'Shimano' }
    ]
  },
  {
    id: 'specialized-epic-8',
    make: 'Specialized',
    model: 'Epic 8',
    years: [2024, 2025],
    category: 'xc',
    suspension: {
      fork: { brand: 'Fox', travelMm: 120, model: '32 Step-Cast' },
      rear: { brand: 'Specialized', travelMm: 120, model: 'Future Shock', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Fork', task: 'Lower leg service', hours: 50, description: 'Clean and repack', source: 'Fox' },
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'Inspect and service', source: 'Specialized' },
      { component: 'Drivetrain', task: 'Chain check', hours: 15, description: 'Replace at 0.8% stretch', source: 'SRAM' }
    ]
  },
  {
    id: 'specialized-chisel',
    make: 'Specialized',
    model: 'Chisel',
    years: [2024, 2025],
    category: 'xc',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 100, model: 'Recon Gold' },
      rear: { brand: 'RockShox', travelMm: 100, type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Fork', task: 'Service', hours: 50, description: 'RockShox service', source: 'RockShox' },
      { component: 'Drivetrain', task: 'Chain check', hours: 15, description: 'Replace at 0.8% stretch', source: 'SRAM' }
    ]
  },
  {
    id: 'specialized-rockhopper',
    make: 'Specialized',
    model: 'Rockhopper',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 100, model: 'JudY' },
      rear: null,
      type: 'hardtail'
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Fork', task: 'Service', hours: 50, description: 'RockShox service', source: 'RockShox' }
    ]
  },
  {
    id: 'specialized-turbo-levo',
    make: 'Specialized',
    model: 'Turbo Levo',
    years: [2024, 2025],
    category: 'e-mtb',
    suspension: {
      fork: { brand: 'Fox', travelMm: 160, model: '36' },
      rear: { brand: 'Fox', travelMm: 150, model: 'DPX2', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Motor', task: 'Check bolts', hours: 20, description: 'Check motor mount bolts', source: 'Specialized' },
      { component: 'Battery', task: 'Inspect', hours: 50, description: 'Check for damage, clean contacts', source: 'Specialized' },
      { component: 'Fork', task: 'Lower leg service', hours: 30, description: 'Service more often due to e-bike weight', source: 'Fox' }
    ]
  },

  // TREK
  {
    id: 'trek-fuel-ex',
    make: 'Trek',
    model: 'Fuel EX',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 140, model: '36 Float' },
      rear: { brand: 'Trek', travelMm: 130, model: 'ABP', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Fork', task: 'Wipe stanchions', hours: 0, description: 'After every ride', source: 'Fox' },
      { component: 'Fork', task: 'Lower leg service', hours: 30, description: 'Clean and repack', source: 'Fox' },
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'Full service', source: 'Trek' }
    ]
  },
  {
    id: 'trek-top-fuel',
    make: 'Trek',
    model: 'Top Fuel',
    years: [2024, 2025],
    category: 'xc',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 120, model: 'Sid' },
      rear: { brand: 'Trek', travelMm: 120, model: 'ABP', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Fork', task: 'Service', hours: 50, description: 'RockShox service', source: 'RockShox' },
      { component: 'Drivetrain', task: 'Chain check', hours: 15, description: 'Every 2 weeks', source: 'SRAM' }
    ]
  },
  {
    id: 'trek-slash',
    make: 'Trek',
    model: 'Slash',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 170, model: 'ZEB' },
      rear: { brand: 'Trek', travelMm: 170, model: 'ABP', type: 'air' }
    },
    wheelSize: 'mullet',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Fork', task: 'Lower leg service', hours: 25, description: 'More frequent due to enduro use', source: 'RockShox' },
      { component: 'Rear Shock', task: 'Service', hours: 40, description: 'Full service', source: 'Trek' },
      { component: 'Pivot', task: 'Check bearings', hours: 50, description: 'Inspect and replace', source: 'Trek' }
    ]
  },
  {
    id: 'trek-marlin',
    make: 'Trek',
    model: 'Marlin',
    years: [2024, 2025],
    category: 'xc',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 100, model: 'JudY' },
      rear: null,
      type: 'hardtail'
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Fork', task: 'Service', hours: 50, description: 'RockShox service', source: 'RockShox' }
    ]
  },

  // SANTA CRUZ
  {
    id: 'santa-cruz-hightower',
    make: 'Santa Cruz',
    model: 'Hightower',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 150, model: 'Lyrik' },
      rear: { brand: 'Santa Cruz', travelMm: 150, model: 'VPP', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'VPP service', source: 'Santa Cruz' },
      { component: 'Pivot', task: 'Check bearings', hours: 50, description: 'Replace when worn', source: 'Santa Cruz' },
      { component: 'Lower Link', task: 'Service', hours: 75, description: 'VPP lower link service', source: 'Santa Cruz' }
    ]
  },
  {
    id: 'santa-cruz-megatower',
    make: 'Santa Cruz',
    model: 'Megatower',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 170, model: 'ZEB' },
      rear: { brand: 'Santa Cruz', travelMm: 165, model: 'VPP', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'VPP more frequent for enduro', source: 'Santa Cruz' },
      { component: 'Pivot', task: 'Check bearings', hours: 40, description: 'High-pivot design needs attention', source: 'Santa Cruz' }
    ]
  },
  {
    id: 'santa-cruz-bronson',
    make: 'Santa Cruz',
    model: 'Bronson',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 150, model: 'Lyrik' },
      rear: { brand: 'Santa Cruz', travelMm: 150, model: 'VPP', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'VPP service', source: 'Santa Cruz' },
      { component: 'Pivot', task: 'Check bearings', hours: 50, description: 'Replace when worn', source: 'Santa Cruz' }
    ]
  },
  {
    id: 'santa-cruz-blur',
    make: 'Santa Cruz',
    model: 'Blur',
    years: [2024, 2025],
    category: 'xc',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 100, model: 'Sid' },
      rear: { brand: 'Santa Cruz', travelMm: 100, model: 'VPP', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'VPP service', source: 'Santa Cruz' }
    ]
  },
  {
    id: 'santa-cruz-chameleon',
    make: 'Santa Cruz',
    model: 'Chameleon',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 130, model: 'Recon' },
      rear: null,
      type: 'hardtail'
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Fork', task: 'Service', hours: 50, description: 'RockShox service', source: 'RockShox' }
    ]
  },

  // YETI
  {
    id: 'yeti-sb165',
    make: 'Yeti',
    model: 'SB165',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 170, model: '38 Float' },
      rear: { brand: 'Yeti', travelMm: 165, model: 'Switch Infinity', type: 'air' }
    },
    wheelSize: 'mullet',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'Switch Infinity service', source: 'Yeti' },
      { component: 'Pivot', task: 'Check bearings', hours: 40, description: 'Switch Infinity pivot bearings', source: 'Yeti' },
      { component: 'Fork', task: 'Lower leg service', hours: 25, description: 'Enduro use = more frequent', source: 'Fox' }
    ]
  },
  {
    id: 'yeti-sb160',
    make: 'Yeti',
    model: 'SB160',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 170, model: '38 Float' },
      rear: { brand: 'Yeti', travelMm: 160, model: 'Switch Infinity', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'Switch Infinity service', source: 'Yeti' },
      { component: 'Pivot', task: 'Check bearings', hours: 40, description: 'Switch Infinity pivot bearings', source: 'Yeti' }
    ]
  },
  {
    id: 'yeti-arc',
    make: 'Yeti',
    model: 'ARC',
    years: [2024, 2025],
    category: 'xc',
    suspension: {
      fork: { brand: 'Fox', travelMm: 130, model: '34 Float' },
      rear: { brand: 'Yeti', travelMm: 130, model: 'Switch Infinity', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'Switch Infinity service', source: 'Yeti' }
    ]
  },

  // PIVOT
  {
    id: 'pivot-firebird',
    make: 'Pivot',
    model: 'Firebird',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 170, model: '38 Float' },
      rear: { brand: 'Pivot', travelMm: 165, model: 'DW-Link', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'DW-Link service', source: 'Pivot' },
      { component: 'Pivot', task: 'Check bearings', hours: 50, description: 'DW-Link bearings', source: 'Pivot' },
      { component: 'Fork', task: 'Lower leg service', hours: 25, description: 'More frequent for enduro', source: 'Fox' }
    ]
  },
  {
    id: 'pivot-switchblade',
    make: 'Pivot',
    model: 'Switchblade',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 160, model: '36 Float' },
      rear: { brand: 'Pivot', travelMm: 142, model: 'DW-Link', type: 'air' }
    },
    wheelSize: 'mullet',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'DW-Link service', source: 'Pivot' },
      { component: 'Pivot', task: 'Check bearings', hours: 50, description: 'DW-Link bearings', source: 'Pivot' }
    ]
  },
  {
    id: 'pivot-trail-429',
    make: 'Pivot',
    model: 'Trail 429',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 120, model: '34 Float' },
      rear: { brand: 'Pivot', travelMm: 120, model: 'DW-Link', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'DW-Link service', source: 'Pivot' },
      { component: 'Pivot', task: 'Check bearings', hours: 50, description: 'DW-Link bearings', source: 'Pivot' }
    ]
  },

  // IBIS
  {
    id: 'ibis-ripmo',
    make: 'Ibis',
    model: 'Ripmo',
    years: [2024, 2025],
    category: 'all-mountain',
    suspension: {
      fork: { brand: 'Fox', travelMm: 160, model: '36 Float' },
      rear: { brand: 'Ibis', travelMm: 146, model: 'DW-Link', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'DW-Link service', source: 'Ibis' },
      { component: 'Pivot', task: 'Check bearings', hours: 50, description: 'DW-Link bearings', source: 'Ibis' }
    ]
  },
  {
    id: 'ibis-ripley',
    make: 'Ibis',
    model: 'Ripley',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 130, model: '34 Float' },
      rear: { brand: 'Ibis', travelMm: 130, model: 'DW-Link', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'DW-Link service', source: 'Ibis' },
      { component: 'Pivot', task: 'Check bearings', hours: 50, description: 'DW-Link bearings', source: 'Ibis' }
    ]
  },
  {
    id: 'ibis-hd6',
    make: 'Ibis',
    model: 'HD6',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 180, model: '38 Float' },
      rear: { brand: 'Ibis', travelMm: 165, model: 'DW-Link', type: 'coil' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Coil service', hours: 50, description: 'Coil shock service', source: 'Ibis' },
      { component: 'Pivot', task: 'Check bearings', hours: 40, description: 'DW-Link more frequent', source: 'Ibis' }
    ]
  },
  {
    id: 'ibis-exie',
    make: 'Ibis',
    model: 'Exie',
    years: [2024, 2025],
    category: 'xc',
    suspension: {
      fork: { brand: 'Fox', travelMm: 100, model: '32 Step-Cast' },
      rear: { brand: 'Ibis', travelMm: 100, model: 'DW-Link', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'DW-Link service', source: 'Ibis' }
    ]
  },

  // GIANT
  {
    id: 'giant-trance',
    make: 'Giant',
    model: 'Trance',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 140, model: '36 Float' },
      rear: { brand: 'Giant', travelMm: 140, model: 'Maestro', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'Maestro service', source: 'Giant' },
      { component: 'Pivot', task: 'Check bearings', hours: 50, description: 'Maestro pivot bearings', source: 'Giant' }
    ]
  },
  {
    id: 'giant-reign',
    make: 'Giant',
    model: 'Reign',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 170, model: '38 Float' },
      rear: { brand: 'Giant', travelMm: 160, model: 'Maestro', type: 'air' }
    },
    wheelSize: 'mullet',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'Maestro service more frequent', source: 'Giant' },
      { component: 'Pivot', task: 'Check bearings', hours: 40, description: 'Maestro pivot bearings', source: 'Giant' }
    ]
  },
  {
    id: 'giant-talon',
    make: 'Giant',
    model: 'Talon',
    years: [2024, 2025],
    category: 'xc',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 100, model: 'Recon' },
      rear: null,
      type: 'hardtail'
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Fork', task: 'Service', hours: 50, description: 'RockShox service', source: 'RockShox' }
    ]
  },

  // ROCKY MOUNTAIN
  {
    id: 'rocky-mountain-altitude',
    make: 'Rocky Mountain',
    model: 'Altitude',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 170, model: '38 Float' },
      rear: { brand: 'Rocky Mountain', travelMm: 160, model: 'LC2R', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'LC2R service', source: 'Rocky Mountain' },
      { component: 'Pivot', task: 'Check bearings', hours: 40, description: 'High pivot needs attention', source: 'Rocky Mountain' }
    ]
  },
  {
    id: 'rocky-mountain-instinct',
    make: 'Rocky Mountain',
    model: 'Instinct',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 150, model: '36 Float' },
      rear: { brand: 'Rocky Mountain', travelMm: 140, model: 'Ride', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'Ride system service', source: 'Rocky Mountain' }
    ]
  },

  // REVEL
  {
    id: 'revel-rascal',
    make: 'Revel',
    model: 'Rascal',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 130, model: '34 Float' },
      rear: { brand: 'Revel', travelMm: 130, model: 'CBF', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'CBF service', source: 'Revel' },
      { component: 'Pivot', task: 'Check bearings', hours: 50, description: 'CBF pivot bearings', source: 'Revel' }
    ]
  },
  {
    id: 'revel-ranger',
    make: 'Revl',
    model: 'Ranger',
    years: [2024, 2025],
    category: 'xc',
    suspension: {
      fork: { brand: 'Fox', travelMm: 120, model: '34 Float' },
      rear: { brand: 'Revel', travelMm: 115, model: 'CBF', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'CBF service', source: 'Revel' }
    ]
  },

  // CANNONDALE
  {
    id: 'cannondale-scalpel',
    make: 'Cannondale',
    model: 'Scalpel',
    years: [2024, 2025],
    category: 'xc',
    suspension: {
      fork: { brand: 'Lefty', travelMm: 120, model: 'Ocho' },
      rear: { brand: 'Cannondale', travelMm: 120, model: 'Flex Pivot', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Fork', task: 'Lefty service', hours: 50, description: 'Lefty-specific service', source: 'Cannondale' },
      { component: 'Flex Pivot', task: 'Check', hours: 50, description: 'Inspect flex area', source: 'Cannondale' }
    ]
  },

  // TRANSITION
  {
    id: 'transition-sentinel',
    make: 'Transition',
    model: 'Sentinel',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 160, model: '36 Float' },
      rear: { brand: 'Transition', travelMm: 150, model: 'GiddyUp', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'GiddyUp service', source: 'Transition' },
      { component: 'Pivot', task: 'Check bearings', hours: 50, description: 'GiddyUp pivot', source: 'Transition' }
    ]
  },
  {
    id: 'transition-spire',
    make: 'Transition',
    model: 'Spire',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 170, model: '38 Float' },
      rear: { brand: 'Transition', travelMm: 160, model: 'GiddyUp', type: 'air' }
    },
    wheelSize: 'mullet',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'More frequent for enduro', source: 'Transition' }
    ]
  },
  {
    id: 'transition-scout',
    make: 'Transition',
    model: 'Scout',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 140, model: '36 Float' },
      rear: { brand: 'Transition', travelMm: 125, model: 'GiddyUp', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'GiddyUp service', source: 'Transition' }
    ]
  },

  // YT
  {
    id: 'yt-jeffsy',
    make: 'YT',
    model: 'Jeffsy',
    years: [2024, 2025],
    category: 'all-mountain',
    suspension: {
      fork: { brand: 'Fox', travelMm: 150, model: '36 Float' },
      rear: { brand: 'Fox', travelMm: 145, model: 'DPX2', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Fork', task: 'Lower leg service', hours: 30, description: 'Standard Fox service', source: 'Fox' },
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'DPX2 service', source: 'Fox' }
    ]
  },
  {
    id: 'yt-decoy',
    make: 'YT',
    model: 'Decoy',
    years: [2024, 2025],
    category: 'e-mtb',
    suspension: {
      fork: { brand: 'Fox', travelMm: 160, model: '36 Float' },
      rear: { brand: 'Fox', travelMm: 150, model: 'DPX2', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Motor', task: 'Check', hours: 20, description: 'Shimano EP8 check', source: 'Shimano' },
      { component: 'Fork', task: 'Lower leg service', hours: 25, description: 'More frequent for e-bike', source: 'Fox' }
    ]
  },

  // CANFIELD
  {
    id: 'canfield-tilt',
    make: 'Canfield',
    model: 'Tilt',
    years: [2024, 2025],
    category: 'all-mountain',
    suspension: {
      fork: { brand: 'Fox', travelMm: 150, model: '36 Float' },
      rear: { brand: 'Canfield', travelMm: 138, model: 'CBF', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'CBF service', source: 'Canfield' }
    ]
  },

  // COMMENCAL
  {
    id: 'commencal-meta-tr',
    make: 'Commencal',
    model: 'Meta TR',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 140, model: '36 Float' },
      rear: { brand: 'Commencal', travelMm: 140, model: 'Meta', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'Meta suspension service', source: 'Commencal' }
    ]
  },
  {
    id: 'commencal-meta-ht',
    make: 'Commencal',
    model: 'Meta HT',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 130, model: 'Recon' },
      rear: null,
      type: 'hardtail'
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Fork', task: 'Service', hours: 50, description: 'RockShox service', source: 'RockShox' }
    ]
  },

  // Canyon
  {
    id: 'canyon-spectral',
    make: 'Canyon',
    model: 'Spectral',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 150, model: '36 Float' },
      rear: { brand: 'Canyon', travelMm: 140, model: 'FPO', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'FPO service', source: 'Canyon' }
    ]
  },
  {
    id: 'canyon-exceed',
    make: 'Canyon',
    model: 'Exceed',
    years: [2024, 2025],
    category: 'xc',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 100, model: 'Sid' },
      rear: null,
      type: 'hardtail'
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Fork', task: 'Service', hours: 50, description: 'RockShox service', source: 'RockShox' }
    ]
  },
  {
    id: 'canyon-torque',
    make: 'Canyon',
    model: 'Torque',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 170, model: '38 Float' },
      rear: { brand: 'Canyon', travelMm: 170, model: 'FPO', type: 'coil' }
    },
    wheelSize: 'mullet',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Coil service', hours: 50, description: 'Coil shock service', source: 'Canyon' }
    ]
  },

  // NORCO
  {
    id: 'norco-optic',
    make: 'Norco',
    model: 'Optic',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 140, model: '36 Float' },
      rear: { brand: 'Norco', travelMm: 125, model: 'A.R.T.', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'A.R.T. service', source: 'Norco' }
    ]
  },
  {
    id: 'norco-fluid',
    make: 'Norco',
    model: 'Fluid',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 130, model: 'Recon' },
      rear: { brand: 'Norco', travelMm: 130, model: 'A.R.T.', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'A.R.T. service', source: 'Norco' }
    ]
  },
  {
    id: 'norco-range',
    make: 'Norco',
    model: 'Range',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 170, model: '38 Float' },
      rear: { brand: 'Norco', travelMm: 170, model: 'A.R.T.', type: 'air' }
    },
    wheelSize: 'mullet',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'More frequent for enduro', source: 'Norco' }
    ]
  },

  // MARIN
  {
    id: 'marin-alpine-trail',
    make: 'Marin',
    model: 'Alpine Trail',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 170, model: '38 Float' },
      rear: { brand: 'Marin', travelMm: 162, model: 'MultiTrac', type: 'air' }
    },
    wheelSize: 'mullet',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'MultiTrac service', source: 'Marin' }
    ]
  },
  {
    id: 'marin-hawk-hill',
    make: 'Marin',
    model: 'Hawk Hill',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 120, model: 'Revelation' },
      rear: { brand: 'Marin', travelMm: 120, model: 'MultiTrac', type: 'air' }
    },
    wheelSize: '27.5',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'MultiTrac service', source: 'Marin' }
    ]
  },

  // FORBIDDEN
  {
    id: 'forbidden-dreadnought',
    make: 'Forbidden',
    model: 'Dreadnought',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 170, model: '38 Float' },
      rear: { brand: 'Forbidden', travelMm: 160, model: 'Trifecta', type: 'air' }
    },
    wheelSize: 'mullet',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'High-pivot service', source: 'Forbidden' },
      { component: 'Idler', task: 'Check', hours: 40, description: 'Check idler pulleys', source: 'Forbidden' }
    ]
  },

  // KNOLLY
  {
    id: 'knolly-chilcotin',
    make: 'Knolly',
    model: 'Chilcotin',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 170, model: '38 Float' },
      rear: { brand: 'Knolly', travelMm: 170, model: 'Fourby4', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'Fourby4 service', source: 'Knolly' }
    ]
  },

  // ATHERTON
  {
    id: 'atherton-s150',
    make: 'Atherton',
    model: 'S.150',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 160, model: '36 Float' },
      rear: { brand: 'Atherton', travelMm: 150, model: 'DW4', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'DW4 service', source: 'Atherton' },
      { component: 'Pivot', task: 'Check bearings', hours: 50, description: 'DW4 pivot', source: 'Atherton' }
    ]
  },
  {
    id: 'atherton-s170',
    make: 'Atherton',
    model: 'S.170',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 180, model: '38 Float' },
      rear: { brand: 'Atherton', travelMm: 170, model: 'DW4', type: 'air' }
    },
    wheelSize: 'mullet',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'DW4 service more frequent', source: 'Atherton' }
    ]
  },

  // ORBEA
  {
    id: 'orbea-occam',
    make: 'Orbea',
    model: 'Occam',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 140, model: '36 Float' },
      rear: { brand: 'Orbea', travelMm: 140, model: 'Main', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'Main suspension service', source: 'Orbea' }
    ]
  },
  {
    id: 'orbea-rallon',
    make: 'Orbea',
    model: 'Rallon',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 160, model: '38 Float' },
      rear: { brand: 'Orbea', travelMm: 160, model: 'Flex', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'Flex stay service', source: 'Orbea' }
    ]
  },
  {
    id: 'orbea-rise',
    make: 'Orbea',
    model: 'Rise',
    years: [2024, 2025],
    category: 'e-mtb',
    suspension: {
      fork: { brand: 'Fox', travelMm: 140, model: '36 Float' },
      rear: { brand: 'Orbea', travelMm: 140, model: 'Flex', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Motor', task: 'Check', hours: 20, description: 'Shimano EP6 check', source: 'Shimano' },
      { component: 'Fork', task: 'Lower leg service', hours: 25, description: 'More frequent for e-bike', source: 'Fox' }
    ]
  },

  // SCOTT
  {
    id: 'scott-gambler',
    make: 'Scott',
    model: 'Gambler',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 180, model: '40 Float' },
      rear: { brand: 'Scott', travelMm: 170, model: 'TwinLoc', type: 'coil' }
    },
    wheelSize: 'mullet',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Coil service', hours: 50, description: 'TwinLoc coil service', source: 'Scott' }
    ]
  },
  {
    id: 'scott-spark',
    make: 'Scott',
    model: 'Spark',
    years: [2024, 2025],
    category: 'xc',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 120, model: 'Sid' },
      rear: { brand: 'Scott', travelMm: 120, model: 'TwinLoc', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'TwinLoc service', source: 'Scott' }
    ]
  },

  // BANSHEE
  {
    id: 'banshee-spitfire',
    make: 'Banshee',
    model: 'Spitfire V2',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 150, model: '36 Float' },
      rear: { brand: 'Banshee', travelMm: 140, model: 'KS2', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'KS2 service', source: 'Banshee' }
    ]
  },

  // WHYTE
  {
    id: 'whyte-t160',
    make: 'Whyte',
    model: 'T-160',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 160, model: 'Lyrik' },
      rear: { brand: 'Whyte', travelMm: 150, model: '4Bar', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: '4Bar linkage service', source: 'Whyte' }
    ]
  },
  {
    id: 'whyte-900',
    make: 'Whyte',
    model: '900',
    years: [2024, 2025],
    category: 'xc',
    suspension: {
      fork: { brand: 'Fox', travelMm: 100, model: '32 Float' },
      rear: null,
      type: 'hardtail'
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: []
  },

  // DEVINCI
  {
    id: 'devinci-troy',
    make: 'Devinci',
    model: 'Troy',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 150, model: '36 Float' },
      rear: { brand: 'Devinci', travelMm: 150, model: 'Split', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'Split pivot service', source: 'Devinci' }
    ]
  },

  // RAAW
  {
    id: 'raaw-jibb',
    make: 'RAAW',
    model: 'Jibb V2',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 150, model: '36 Float' },
      rear: { brand: 'RAAW', travelMm: 141, model: 'MPP', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'MPP service', source: 'RAAW' }
    ]
  },

  // VITUS
  {
    id: 'vitus-sommet',
    make: 'Vitus',
    model: 'Sommet',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 170, model: '38 Float' },
      rear: { brand: 'Vitus', travelMm: 170, model: 'FSS', type: 'air' }
    },
    wheelSize: 'mullet',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'FSS service', source: 'Vitus' }
    ]
  },

  // KONA
  {
    id: 'kona-process-x',
    make: 'Kona',
    model: 'Process X',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 170, model: 'ZEB' },
      rear: { brand: 'Kona', travelMm: 166, model: 'Beefed Up', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'Rear shock service', source: 'Kona' }
    ]
  },
  {
    id: 'kona-lava-dome',
    make: 'Kona',
    model: 'Lava Dome',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 130, model: 'Recon' },
      rear: null,
      type: 'hardtail'
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Fork', task: 'Service', hours: 50, description: 'RockShox service', source: 'RockShox' }
    ]
  },

  // FEZZARI
  {
    id: 'fezzari-tundra-peak',
    make: 'Fezzari',
    model: 'Tundra Peak',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 165, model: '38 Float' },
      rear: { brand: 'Fox', travelMm: 165, model: 'DPX2', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Fork', task: 'Lower leg service', hours: 30, description: 'Fox service', source: 'Fox' },
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'DPX2 service', source: 'Fox' }
    ]
  },

  // POLYGON
  {
    id: 'polygon-xquare',
    make: 'Polygon',
    model: 'Xquare',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 150, model: '36 Float' },
      rear: { brand: 'Polygon', travelMm: 140, model: 'Trekking', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'Rear shock service', source: 'Polygon' }
    ]
  },

  // STATE
  {
    id: 'state-4130-trail',
    make: 'State',
    model: '4130 Trail',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 130, model: 'Psylo Silver' },
      rear: null,
      type: 'hardtail'
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Fork', task: 'Service', hours: 50, description: 'RockShox service', source: 'RockShox' }
    ]
  },

  // WE ARE ONE
  {
    id: 'we-are-one-arrival',
    make: 'We Are One',
    model: 'Arrival',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 160, model: '38 Float' },
      rear: { brand: 'We Are One', travelMm: 160, model: 'Fusion', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'Fusion service', source: 'We Are One' }
    ]
  },

  // FRAMEWORKS
  {
    id: 'frameworks-enduro',
    make: 'Frameworks',
    model: 'Enduro',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 170, model: '38 Float' },
      rear: { brand: 'Frameworks', travelMm: 170, model: 'DW-Link', type: 'air' }
    },
    wheelSize: 'mullet',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'DW-Link service', source: 'Frameworks' },
      { component: 'Pivot', task: 'Check bearings', hours: 40, description: 'DW-Link pivot', source: 'Frameworks' }
    ]
  },

  // LIV (Women-specific)
  {
    id: 'liv-pique',
    make: 'Liv',
    model: 'Pique Advanced',
    years: [2024, 2025],
    category: 'xc',
    suspension: {
      fork: { brand: 'Fox', travelMm: 120, model: '32 Float' },
      rear: { brand: 'Liv', travelMm: 115, model: 'Flex', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'Flex stay service', source: 'Liv' }
    ]
  },
  {
    id: 'liv-intrigue',
    make: 'Liv',
    model: 'Intrigue X',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 140, model: '36 Float' },
      rear: { brand: 'Liv', travelMm: 140, model: 'Maestro', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'Maestro service', source: 'Liv' }
    ]
  },
  {
    id: 'liv-hail',
    make: 'Liv',
    model: 'Hail',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 160, model: '38 Float' },
      rear: { brand: 'Liv', travelMm: 160, model: 'Maestro', type: 'air' }
    },
    wheelSize: 'mullet',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'More frequent for enduro', source: 'Liv' }
    ]
  },

  // MERIDA
  {
    id: 'merida-eone-sixty',
    make: 'Merida',
    model: 'eONE-SIXTY',
    years: [2024, 2025],
    category: 'e-mtb',
    suspension: {
      fork: { brand: 'Fox', travelMm: 160, model: '36 Float' },
      rear: { brand: 'Merida', travelMm: 160, model: 'Flex', type: 'air' }
    },
    wheelSize: 'mullet',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Motor', task: 'Check', hours: 20, description: 'Bosch SX check', source: 'Bosch' },
      { component: 'Fork', task: 'Lower leg service', hours: 25, description: 'More frequent for e-bike', source: 'Fox' }
    ]
  },
  {
    id: 'merida-big-nine',
    make: 'Merida',
    model: 'Big Nine',
    years: [2024, 2025],
    category: 'xc',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 100, model: 'Recon' },
      rear: null,
      type: 'hardtail'
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Fork', task: 'Service', hours: 50, description: 'RockShox service', source: 'RockShox' }
    ]
  },

  // NINER
  {
    id: 'niner-wfo',
    make: 'Niner',
    model: 'WFO',
    years: [2024, 2025],
    category: 'enduro',
    suspension: {
      fork: { brand: 'Fox', travelMm: 170, model: '38 Float' },
      rear: { brand: 'Niner', travelMm: 150, model: 'CVA', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 50, description: 'CVA service', source: 'Niner' }
    ]
  },
  {
    id: 'niner-air-9',
    make: 'Niner',
    model: 'Air 9',
    years: [2024, 2025],
    category: 'xc',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 100, model: 'Sid' },
      rear: null,
      type: 'hardtail'
    },
    wheelSize: '29',
    frameMaterial: 'carbon',
    serviceIntervals: []
  },

  // GT
  {
    id: 'gt-force',
    make: 'GT',
    model: 'Force',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'Fox', travelMm: 130, model: '34 Float' },
      rear: { brand: 'GT', travelMm: 130, model: 'LTS', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'LTS service', source: 'GT' }
    ]
  },
  {
    id: 'gt-avalanche',
    make: 'GT',
    model: 'Avalanche',
    years: [2024, 2025],
    category: 'trail',
    suspension: {
      fork: { brand: 'RockShox', travelMm: 130, model: 'Recon' },
      rear: { brand: 'GT', travelMm: 130, model: 'LTS', type: 'air' }
    },
    wheelSize: '29',
    frameMaterial: 'aluminum',
    serviceIntervals: [
      { component: 'Rear Shock', task: 'Service', hours: 75, description: 'LTS service', source: 'GT' }
    ]
  }
];

// Helper functions
export function getBikeById(id: string): BikeSpec | undefined {
  return BIKE_DATABASE.find(bike => bike.id === id);
}

export function searchBikes(query: string): BikeSpec[] {
  const lowerQuery = query.toLowerCase();
  return BIKE_DATABASE.filter(bike => 
    bike.make.toLowerCase().includes(lowerQuery) ||
    bike.model.toLowerCase().includes(lowerQuery) ||
    bike.id.toLowerCase().includes(lowerQuery)
  );
}

export function getBikesByMake(make: string): BikeSpec[] {
  return BIKE_DATABASE.filter(bike => bike.make === make);
}

export function getAllMakes(): string[] {
  return [...new Set(BIKE_DATABASE.map(bike => bike.make))].sort();
}

export function getServiceTasksForBike(bikeId: string): ServiceInterval[] {
  const bike = getBikeById(bikeId);
  return bike?.serviceIntervals || [];
}
