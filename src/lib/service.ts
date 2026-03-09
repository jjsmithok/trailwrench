export interface ServiceTask {
  id: string;
  title: string;
  description: string;
  voiceGuidance: string;
  completed: boolean;
}

export interface ServiceModule {
  id: string;
  name: string;
  icon: string;
  tasks: ServiceTask[];
}

// TrailWrench AI - 50-Hour MTB Maintenance
// Based on official manufacturer recommendations from Fox, RockShox, SRAM, Park Tool, and expert mechanics
// Specific specs for 2024 Santa Cruz Tallboy: Fox 36 Float GRIP2 fork, Fox DPX2 rear shock

export const SERVICE_MODULES: ServiceModule[] = [
  {
    id: 'drivetrain',
    name: 'Drivetrain',
    icon: '⚙️',
    tasks: [
      {
        id: 'post-ride-chain-wipe',
        title: 'Wipe Chain After Every Ride',
        description: 'Expert tip: Keep a rag in your jersey pocket. Wipe chain after EVERY ride, especially in mud. A quick wipe extends chain life dramatically. Real mechanics do this without thinking. Source: GMBN, experienced riders.',
        voiceGuidance: 'Keep a rag in your jersey pocket. Wipe your chain after every single ride, especially in mud. This one habit will extend your chain life dramatically. Real mechanics do this automatically.',
        completed: false
      },
      {
        id: 'chain-wear',
        title: 'Check Chain Wear (Every 2 Weeks)',
        description: 'Use a chain checker tool. SRAM recommends replacing at 0.8% stretch. Check every 2 weeks if you ride frequently. A worn chain destroys cassettes fast - $15 chain vs $150 cassette. Source: SRAM, Park Tool.',
        voiceGuidance: 'Check your chain wear every two weeks with a chain checker. Replace at 0.8 percent stretch. A worn chain will destroy your cassette fast. Fifteen dollars for a chain versus 150 for a cassette - it is worth checking.',
        completed: false
      },
      {
        id: 'deep-clean',
        title: 'Deep Clean Drivetrain (Weekly)',
        description: 'Expert tip: Use a drivetrain brush and bike-specific degreaser. Clean cassette teeth individually with a brush. Don\'t forget the chainring bolts - gunk builds up there. Rinse thoroughly.',
        voiceGuidance: 'Do a deep clean of your drivetrain every week. Use a drivetrain brush and bike specific degreaser. Clean each cassette tooth individually. Do not forget the chainring bolts where gunk builds up.',
        completed: false
      },
      {
        id: 'chain-lube',
        title: 'Lubricate Chain Properly',
        description: 'Expert tip: Apply lube to INSIDE of chain (rollers), not outside. Let it sit 5-10 min then wipe EXTERIOR thoroughly. Too much lube collects dirt. Wet conditions = wet lube, dry/dusty = dry lube.',
        voiceGuidance: 'Apply lubricant to the inside of the chain, on the rollers, not the outside. Let it sit for 5 to 10 minutes, then wipe the outside thoroughly. Too much lube collects dirt. Use wet lube in wet conditions, dry lube in dusty conditions.',
        completed: false
      },
      {
        id: 'cassette-check',
        title: 'Inspect Cassette',
        description: 'Check cassette teeth for hook wear, shark-fin shape, or bent cogs. If teeth are worn or cause skipping under load, replace. Expert tip: If your chain skips, check cassette first - often the culprit.',
        voiceGuidance: 'Inspect your cassette teeth for hook wear or shark fin shape. If worn or causing skip, replace. Expert tip: if your chain skips, check the cassette first. It is often the culprit, not the chain.',
        completed: false
      },
      {
        id: 'chainring-check',
        title: 'Check Chainrings',
        description: 'Expert tip: Big ring shows wear first on 1x setups. Look for hooked teeth. Replace chainrings if worn - worn chainrings make your new chain skip and wear fast. Check both big and small rings.',
        voiceGuidance: 'Check your chainrings, especially the big ring on one by setups. Look for hooked teeth. Worn chainrings will make a new chain skip and wear out fast. Check both the big and small rings.',
        completed: false
      },
      {
        id: 'cable-check',
        title: 'Inspect Cables & Housing',
        description: 'Check shift and brake cables for fraying near bends. Expert tip: Replace cables proactively BEFORE they snap - a snapped cable on a techy descent is a bad day. Check housing for kinks.',
        voiceGuidance: 'Inspect your cables for fraying, especially near bends. Replace cables proactively before they snap. A snapped cable on a technical descent is a bad day. Check housing for kinks too.',
        completed: false
      }
    ]
  },
  {
    id: 'brakes',
    name: 'Brakes',
    icon: '🛑',
    tasks: [
      {
        id: 'lever-feel',
        title: 'Test Lever Feel (Every Ride)',
        description: 'Expert tip: Do this before every ride. Squeeze levers hard - they should be firm and not touch the grip. Spongy = air in system or worn pads. Firm = good. Quick test takes 5 seconds.',
        voiceGuidance: 'Test your brake lever feel before every ride. Squeeze hard - they should feel firm and not touch the grip. Spongy means air in the system or worn pads. This quick test takes 5 seconds.',
        completed: false
      },
      {
        id: 'pad-thickness',
        title: 'Check Brake Pad Thickness',
        description: 'Remove wheels and inspect pads. Expert tip: If you hear squealing, check pads first - often just contaminated. Replace if less than 2mm material. Check both front and rear. Source: Shimano.',
        voiceGuidance: 'Remove your wheels and check the pad thickness. If you hear squealing, check the pads first - they might just be contaminated. Replace if less than 2 millimeters of material remains.',
        completed: false
      },
      {
        id: 'rotor-inspect',
        title: 'Inspect Rotors',
        description: 'Expert tip: Look for bluing (overheating) or deep grooves. Grooved rotors chatter and vibrate. Replace if warped (causes pulse) or less than 1.5mm thick. Don\'t cheap out on rotors - safety item.',
        voiceGuidance: 'Look at your rotors for bluing from overheating or deep grooves. Grooved rotors cause vibration and chatter. Replace if warped or less than 1.5 millimeters thick. Do not cheap out on rotors - it is a safety item.',
        completed: false
      },
      {
        id: 'contaminants',
        title: 'Check for Contamination',
        description: 'Expert tip: If brakes squeal or feel weak, pads might be contaminated. Common causes: oil, chain lube, degreaser, even sweaty hands. Clean with isopropyl alcohol or replace pads.',
        voiceGuidance: 'If your brakes squeal or feel weak, the pads might be contaminated. Common causes are oil, chain lube, degreaser, or even sweaty hands. Clean with isopropyl alcohol or just replace the pads.',
        completed: false
      },
      {
        id: 'bleed-brakes',
        title: 'Bleed Hydraulic Brakes (Yearly)',
        description: 'Expert tip: Bleed when spongy, not on a schedule. Use correct fluid (Shimano mineral oil, SRAM DOT). Avoid DOT on painted parts - it strips paint. Consider pro bleed yearly. Source: Shimano, mechanics.',
        voiceGuidance: 'Bleed your brakes when they feel spongy, not on a strict schedule. Use the correct fluid - Shimano mineral oil or SRAM DOT. Keep DOT away from painted parts - it strips paint.',
        completed: false
      },
      {
        id: 'mount-bolts',
        title: 'Check Brake Mount Bolts',
        description: 'Expert tip: Use thread locker on brake mount bolts. Check torque (6-8Nm). Loose bolts cause brake fade, rotor rub, and stress on the whole system. Quick check prevents headaches.',
        voiceGuidance: 'Use thread locker on your brake mount bolts. Check they are torqued to 6 to 8 newton meters. Loose bolts cause brake fade and rotor rub. This quick check prevents bigger problems.',
        completed: false
      }
    ]
  },
  {
    id: 'suspension',
    name: 'Suspension',
    icon: '🔩',
    tasks: [
      {
        id: 'post-ride-clean-fork',
        title: 'Clean Fox 36 Stanchions After EVERY Ride',
        description: 'Fox Official: Wipe stanchions with a damp cloth after every ride. Your 2024 Tallboy has a Fox 36 Float GRIP2 - use mild soapy water, rinse with light spray, wipe dry. Never use solvents or degreasers on the upper tubes. Source: tech.ridefox.com',
        voiceGuidance: 'Wipe your Fox 36 stanchions with a damp cloth after every single ride. Use mild soapy water and wipe dry. Never use solvents or degreasers on the upper tubes. This one habit prevents seal damage and keeps your fork smooth.',
        completed: false
      },
      {
        id: 'sag-check-fork',
        title: 'Set Fork Sag - Fox 36 (130mm Travel)',
        description: 'Fox Official: Set sag with your riding gear on. For your 2024 Tallboy with 130mm Fox 36: Target 20-25% sag (26-32mm). Use a Fox high-pressure pump. Re-check monthly - air pressure leaks 1-2 psi per month. Write your settings: typical rider 140-160 psi depending on weight. Source: Fox, tech.ridefox.com',
        voiceGuidance: 'Set your fork sag with all your riding gear on. For your 130 millimeter Fox 36, target 20 to 25 percent, which is 26 to 32 millimeters. Use a Fox high pressure pump. Re-check monthly because air pressure leaks slowly. Typical rider runs 140 to 160 psi depending on weight.',
        completed: false
      },
      {
        id: 'sag-check-shock',
        title: 'Set Rear Shock Sag - Fox DPX2 (127mm Travel)',
        description: 'Fox Official: Your Tallboy uses a Fox DPX2 Factory with 190x45mm eyelet. Target 25-30% sag (32-38mm). Set pressure with shock pump. Your Tallboy is designed around this shock - don\'t exceed recommended travel. Source: Fox, Santa Cruz spec sheet',
        voiceGuidance: 'Set your rear shock sag at 25 to 30 percent, which is 32 to 38 millimeters. Use a shock pump. Your Tallboy is designed specifically around the DPX2, so stick to the recommended settings and do not exceed the 127 millimeters of travel.',
        completed: false
      },
      {
        id: 'fox-36-lowers',
        title: 'Fox 36 Lower Leg Service (Every 30-50 Hours)',
        description: 'Fox Official: Service lowers every 30-50 hours. For your Fox 36 GRIP2: Remove lowers, inspect bushings for play, clean, repack with Fox suspension butter. Source: tech.ridefox.com. This DIY saves $100+ vs shop.',
        voiceGuidance: 'Service your fork lowers every 30 to 50 hours. For your Fox 36 GRIP2, remove the lowers, check the bushings for play, clean them, and repack with Fox suspension butter. This DIY service saves over 100 dollars compared to a shop.',
        completed: false
      },
      {
        id: 'foam-ring-inspection',
        title: 'Inspect Foam Rings',
        description: 'Fox Official: Pull back wiper seals and check foam rings. If hardened or torn, replace. Worn foam rings cause stiction and let dirt in, damaging the fork. Clean and inspect every service interval. Source: Fox Seals & Foam Rings guide.',
        voiceGuidance: 'Pull back the wiper seals and check the foam rings. If they are hardened or torn, replace them. Worn foam rings cause stiction and let dirt in, which damages your fork. Check them every service interval.',
        completed: false
      },
      {
        id: 'dpx2-air-sleeve',
        title: 'Fox DPX2 Air Sleeve Maintenance',
        description: 'Fox Official: For DPX2, perform air sleeve maintenance every 30 hours. Check for oil buildup on the air can - if present, air side needs service. Use Fox Gold Bond or similar. Source: Fox rear shock service intervals.',
        voiceGuidance: 'For your Fox DPX2, perform air sleeve maintenance every 30 hours. Check for oil buildup on the air can. If oil is present, the air side needs service. Use Fox Gold Bond or similar lubricant.',
        completed: false
      },
      {
        id: 'torque-check-fork',
        title: 'Check Fork & Shock Mounting Bolts',
        description: 'Check: Fox 36 axle pinch bolts (18-19Nm), brake caliper bolts, stem faceplate (5-6Nm), shock mount bolts. Use thread locker. Vibration loosens things. Your fork uses Kabolt axle - check torque. Source: Fox torque specs.',
        voiceGuidance: 'Check your fork and shock mounting bolts. The Fox 36 axle pinch bolts need 18 to 19 newton meters. Use thread locker because vibration loosens things over time. Check the Kabolt axle torque as well.',
        completed: false
      },
      {
        id: 'full-service-fork',
        title: 'Full Fork Service (100+ Hours)',
        description: 'At 100+ hours, Fox 36 needs internal damper service. This requires special tools (SSS tool, fresh oil). Most riders go to a pro. Budget $150-250 for Fox-certified service. Source: Fox service intervals.',
        voiceGuidance: 'At over 100 hours, your Fox 36 needs internal damper service. This requires special tools and fresh oil. Most riders go to a professional. Budget 150 to 250 dollars for Fox certified service.',
        completed: false
      }
    ]
  },
  {
    id: 'dropper',
    name: 'Dropper Post',
    icon: '🪑',
    tasks: [
      {
        id: 'dropper-test',
        title: 'Test Dropper Action (Every Ride)',
        description: 'Expert tip: Actuate your dropper a few times at the start of every ride. Feel for hesitation, binding, or slow return. Catching issues early prevents being stuck with saddle down on a climb.',
        voiceGuidance: 'Actuate your dropper a few times at the start of every ride. Feel for any hesitation, binding, or slow return. Catching issues early prevents being stuck with your saddle down on a climb.',
        completed: false
      },
      {
        id: 'dropper-wobble',
        title: 'Check for Play',
        description: 'Expert tip: Sit on bike and try to move saddle side-to-side. Any movement means worn internal bushings or loose clamp. Don\'t ride with wobble - it wears parts faster and affects saddle position.',
        voiceGuidance: 'Sit on your bike and try to move the saddle side to side. Any movement means worn bushings or a loose clamp. Do not ride with wobble - it wears parts faster.',
        completed: false
      },
      {
        id: 'dropper-lubricate',
        title: 'Clean & Grease (Every 50-100 Hours)',
        description: 'OneUp recommends every 50-100hrs. Expert tip: Use waterproof grease (Slickoleum, Slick Honey), NOT chain lube. Apply around the seal where it enters the post. Replaces: OneUp V3 lasts 120hrs before full rebuild.',
        voiceGuidance: 'Clean and grease every 50 to 100 hours. Use waterproof grease, not chain lube. Apply around the seal where it enters the post. OneUp V3 posts last 120 hours before a full rebuild.',
        completed: false
      },
      {
        id: 'remote-check',
        title: 'Check Remote Lever',
        description: 'Expert tip: Ensure remote lever is secure and doesn\'t wiggle on handlebar. Check cable tension - too tight = hard to actuate, too loose = slow return. Lubricate pivot points on thumb-actuated remotes.',
        voiceGuidance: 'Make sure your remote lever is secure and does not wiggle on the handlebar. Check cable tension - too tight makes it hard to actuate, too loose makes it return slowly.',
        completed: false
      },
      {
        id: 'cable-routing',
        title: 'Inspect Cable Routing',
        description: 'Expert tip: Check for sharp bends that increase friction. Internal routing can collect water - look for corrosion at frame entry points. Ensure housing is secured with clips.',
        voiceGuidance: 'Check for sharp bends that increase friction. Internal routing can collect water - look for corrosion at frame entry points. Make sure housing is secured with clips.',
        completed: false
      }
    ]
  },
  {
    id: 'wheels',
    name: 'Wheels & Tires',
    icon: '🍩',
    tasks: [
      {
        id: 'wheel-true',
        title: 'True Wheels',
        description: 'Expert tip: Minor true is easy with a spoke wrench. Major true (more than 2mm) = go to a shop or you risk cracking rim. Radial true (up/down) matters more than lateral. Source: Park Tool.',
        voiceGuidance: 'Minor truing is easy with a spoke wrench. More than 2 millimeters out, go to a shop or risk cracking the rim. Fix the up and down movement first - that matters more.',
        completed: false
      },
      {
        id: 'spoke-tension',
        title: 'Check Spoke Tension',
        description: 'Expert tip: Pluck spokes - they should sound similar. If some are noticeably looser, tighten. Even tension = stronger wheel. Professional wheel builders check with a tensiometer.',
        voiceGuidance: 'Pluck your spokes like guitar strings. They should all sound similar. If some are noticeably looser, tighten them. Even tension makes a stronger wheel.',
        completed: false
      },
      {
        id: 'hub-bearing',
        title: 'Check Hub Bearings',
        description: 'Expert tip: Rock wheel side-to-side to check for play. Spin and listen for roughness. Worn bearings feel gritty. Replace in pairs. Check freehub engagement while you are at it.',
        voiceGuidance: 'Rock your wheel side to side to check for play. Spin it and listen for roughness. Worn bearings feel gritty. Replace them in pairs and check the freehub engagement.',
        completed: false
      },
      {
        id: 'tire-inspect',
        title: 'Inspect Tires (Every Ride)',
        description: 'Expert tip: Do a quick visual check before every ride. Look for cuts, bulges, or worn tread. Sidewall damage is more dangerous than tread wear - cords can be exposed.',
        voiceGuidance: 'Do a quick visual check of your tires before every ride. Look for cuts, bulges, or worn tread. Sidewall damage is more dangerous than tread wear - the cords can be exposed.',
        completed: false
      },
      {
        id: 'tire-pressure',
        title: 'Check Tire Pressure (Every Ride)',
        description: 'Expert tip: Check with gauge before every ride. Trail riding 26-28psi front, 28-30psi rear (2.5 tires). Lower for more traction, higher for less rolling resistance. Temperature changes pressure.',
        voiceGuidance: 'Check your tire pressure with a gauge before every ride. For trail riding with 2.5 inch tires, try 26 to 28 psi front and 28 to 30 psi rear. Lower for more traction, higher for less rolling resistance.',
        completed: false
      },
      {
        id: 'tubeless-check',
        title: 'Check Sealant (Every 2-6 Months)',
        description: 'Expert tip: Shake tire - if sealant is thick or chunky, replace. Old sealant doesn\'t seal. Add 2-3oz per tire. Check rim tape condition too - tape failure is common tubeless issue.',
        voiceGuidance: 'Shake your tire - if the sealant is thick or chunky, replace it. Old sealant does not seal. Add 2 to 3 ounces per tire. Also check your rim tape condition.',
        completed: false
      },
      {
        id: 'tire-rotation',
        title: 'Rotate Tires',
        description: 'Expert tip: Swap front to back for even wear. Front wears faster from braking, rear from power. On directional tires, swap front to rear on same side. Extends tire life significantly.',
        voiceGuidance: 'Swap your front tire to the back for even wear. The front wears faster from braking, the rear from power. On directional tires, swap front to rear on the same side.',
        completed: false
      }
    ]
  },
  {
    id: 'cockpit',
    name: 'Cockpit',
    icon: '🎮',
    tasks: [
      {
        id: 'torque-check',
        title: 'Torque All Bolts',
        description: 'Expert tip: Use a torque wrench. Key specs: stem faceplate 5-6Nm, handlebar clamp 5Nm, seatpost 5-8Nm, crank arms 35-55Nm. Over-torquing strips aluminum. Under-torquing causes loosening.',
        voiceGuidance: 'Use a torque wrench. Key specs: stem faceplate 5 to 6 newton meters, handlebar clamp 5, seatpost 5 to 8, crank arms 35 to 55. Over torquing strips aluminum, under torquing causes loosening.',
        completed: false
      },
      {
        id: 'stem-faceplate',
        title: 'Check Stem Faceplate',
        description: 'Expert tip: Tighten in a cross pattern for even pressure. Uneven torque = handlebar rotation = potential crash. Use torque wrench. Check faceplate bolts every few weeks.',
        voiceGuidance: 'Tighten your stem faceplate in a cross pattern for even pressure. Uneven torque causes handlebar rotation which can cause a crash. Use a torque wrench and check these bolts every few weeks.',
        completed: false
      },
      {
        id: 'bar-tape',
        title: 'Check or Replace Bar Tape',
        description: 'Expert tip: If you run gloves, you know when tape is worn - grip feels different. Replace worn tape before it causes blisters. Fresh tape is cheap insurance. Consider lock-on grips for durability.',
        voiceGuidance: 'If you run gloves, you know when your tape is worn - the grip feels different. Replace worn tape before it causes blisters. Fresh tape is cheap insurance.',
        completed: false
      },
      {
        id: 'grip-check',
        title: 'Check Grips',
        description: 'Expert tip: Lock-on grips: check bolt tightness monthly. Worn grips slide and cause blisters. Worn grip texture reduces control. If your hands slip in wet conditions, grips are done.',
        voiceGuidance: 'For lock-on grips, check the bolt tightness every month. Worn grips slide and cause blisters. Worn texture reduces control. If your hands slip, the grips are done.',
        completed: false
      },
      {
        id: 'headset-check',
        title: 'Check Headset',
        description: 'Expert tip: Grab fork, rock bike - any play = loose headset. Spin front wheel, lift front - roughness = worn bearings. Adjust preload or replace bearings. Worn headsets destroy frame and fork.',
        voiceGuidance: 'Grab the fork and rock the bike. Any play means a loose headset. Spin the front wheel and lift the front end - roughness means worn bearings. Fix this before it destroys your frame.',
        completed: false
      },
      {
        id: 'stem-angle',
        title: 'Check Stem Position',
        description: 'Expert tip: Stem position affects handling more than most realize. Higher/shorter = more agile, lower/longer = more stable at speed. Experiment to find your preference. Mark position with tape if changing.',
        voiceGuidance: 'Your stem position affects handling more than you might think. Higher and shorter makes the bike more agile. Lower and longer makes it more stable at speed. Experiment to find what works for you.',
        completed: false
      }
    ]
  },
  {
    id: 'safety',
    name: 'Safety Sweep',
    icon: '✅',
    tasks: [
      {
        id: 'frame-inspect',
        title: 'Inspect Frame for Cracks',
        description: 'Expert tip: Use bright light, check head tube area, seat cluster, downtube, chainstays. Carbon: tap with fingernail - dull sound = damage. Aluminum: look for cracks, especially around welds. STOP if cracked.',
        voiceGuidance: 'Use a bright light and check the head tube area, seat cluster, downtube, and chainstays. On carbon, tap with your fingernail - a dull sound means damage. On aluminum, look for cracks.',
        completed: false
      },
      {
        id: 'crank-bolts',
        title: 'Check Crank Arms',
        description: 'Expert tip: Check bolt torque (35-55Nm). Look for cracks around pedal threads and arm-spindle interface. Cranks can fail catastrophically. If creaky, check bolt tightness first - often just needs torque.',
        voiceGuidance: 'Check your crank bolt torque, 35 to 55 newton meters. Look for cracks around the pedal threads and where the arm meets the spindle. If your cranks creak, check bolt tightness first.',
        completed: false
      },
      {
        id: 'pedal-threads',
        title: 'Check Pedal Threads',
        description: 'Expert tip: Inspect pedal threads each time you install pedals. Apply grease to threads. Cross-threaded pedals permanently damage cranks. If threads are stripped, pedals will never be secure.',
        voiceGuidance: 'Inspect your pedal threads every time you install pedals. Apply grease to the threads. Cross-threaded pedals permanently damage your cranks.',
        completed: false
      },
      {
        id: 'axle-check',
        title: 'Check Thru-Axles',
        description: 'Expert tip: Ensure axle is fully seated - you should hear a click. Check lever operates smoothly. If lever is loose or hard to close, check thread condition. Don\'t over-tighten - can strip threads.',
        voiceGuidance: 'Make sure your axle is fully seated - you should hear a click. Check the lever operates smoothly. If loose or hard to close, check the threads. Do not over-tighten.',
        completed: false
      },
      {
        id: 'derailleur-hanger',
        title: 'Check Derailleur Hanger',
        description: 'Expert tip: A bent hanger causes 90% of shifting problems. Check with alignment tool. If bent, replace - do NOT bend back. Hangers are cheap, reindexing time isn\'t. Keep a spare hanger.',
        voiceGuidance: 'A bent hanger causes 90 percent of shifting problems. Check with an alignment tool. If bent, replace it - do not try to bend it back. Hangers are cheap, keep a spare.',
        completed: false
      },
      {
        id: 'chainstay-protection',
        title: 'Check Chainstay Protection',
        description: 'Expert tip: If tape is coming loose or worn through, replace. Chain slap damages paint and can cause rust. Use proper chainstay protector, not electrical tape.',
        voiceGuidance: 'If your chainstay protector tape is coming loose or worn through, replace it. Chain slap damages paint and can cause rust. Use proper protector tape.',
        completed: false
      },
      {
        id: 'quick-releases',
        title: 'Check All Quick Releases / Thru-Axles',
        description: 'Expert tip: Before every ride, give wheels a quick tug to ensure seated. Check that thru-axles are tight with proper lever position. A loose wheel in ride = crash.',
        voiceGuidance: 'Before every ride, give your wheels a quick tug to make sure they are seated. Check that thru-axles are tight with the lever in the proper position. A loose wheel means a crash.',
        completed: false
      }
    ]
  }
];
