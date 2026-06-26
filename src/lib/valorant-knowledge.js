export const AGENT_KNOWLEDGE = {
  jett: {
    role: "Duelist",
    core_philosophy: "Jett's job is making space and getting info for teammates, not getting kills. Dash is both an entry tool and an escape — use it to get onto site through a smoke, to close distance on an angle, or to get out when pressure comes. Entry, clear angles, get info — let teammates follow into the space you made.",
    watch: [],
    abilities: {
      cloudburst: {
        mechanics: "Throwable smoke that can be curved midair by holding the activation key and moving the mouse — you don't need to be looking at the target area. Creates a small smoke cloud on landing.",
        usage: "Use to create oneways or smoke off angles without peeking them. Curve it around corners to smoke spots you couldn't reach with a straight throw. Core entry pattern: throw cloudburst, dash into it.",
        key_insight: "You can smoke around corners without exposing yourself. Most players throw it straight — learn to curve it."
      },
      updraft: {
        mechanics: "Short vertical boost. Jump and updraft simultaneously for maximum height. Hold spacebar to glide and control descent — also negates fall damage.",
        usage: "Use to reach elevated positions. Jump and updraft at the exact same moment — timing matters.",
        key_insight: "Exact timing matters — jump and updraft at the same moment, not before or after."
      },
      tailwind: {
        mechanics: "Dash activates on first press (charging phase) then fires on second press or automatically after a short window. If the window expires unused, the charge is wasted. Jump + dash simultaneously extends distance.",
        usage: "Only activate when a fight is confirmed — popping it speculatively before an angle wastes it. On attack use as a primary entry tool: dash into your smoke, onto site, or to close distance. Dash onto site with a clear follow-up plan — get in, do something, stay positioned. On defense, dash onto an early angle only if you have a plan for what comes after; don't dash into multiple enemies unless it's a confirmed 1v1.",
        key_insight: "Dash is both an entry tool and an escape. The mistake isn't using it to get somewhere — it's popping it with no clear purpose and no plan for what happens next."
      },
      bladestorm: {
        mechanics: "Left click throws single knives — fully accurate while moving, running, or airborne. Right click throws all remaining knives in a spread — close range only. Kills with knives replenish the supply. Gliding slows momentum and improves accuracy.",
        usage: "Click knives individually for precision — don't hold left click and spray into a wall. Right click only at close range. Glide to slow momentum while shooting. Save dash during ult — updraft for height, keep dash for repositioning after a kill rather than using it to enter the fight.",
        key_insight: "Knives are also an economy tool — buy a gun for a teammate and use knives yourself on low economy rounds. Knives are accurate even while gliding — glide down to slow momentum and take more precise shots."
      }
    },
    attack: {
      primary_job: "Be the spearhead. Throw cloudburst, dash into it, flick left and right to clear close angles as you come out. Don't stare at your crosshair — glance minimap. Enemies appear on minimap after 0.1 seconds of vision so you don't need to hard stare to spot them.",
      key_insight: "Entry isn't about getting kills — it's about clearing space so teammates don't have to. Your team should be able to flood in behind you without clearing the angles you already covered."
    },
    defense: {
      primary_job: "Fight aggressively for early space and info so teammates can stack elsewhere. Jett can do this because she can always dash out. Take space, get info, call it, fall back.",
      op_usage: "OP is extremely strong on Jett. Keep it moving — different angle every round. Immediately rotate to other site after getting an OP kill, you'll beat the rotation there.",
      key_insight: "The more space you take early on defense, the more your team can stack. One Jett controlling A main can free up four players to stack B."
    },
    weapons: {
      post_pistol_win_defense: "Outlaw. Scoped weapons are Jett's friend because she has a dash escape. Outlaw does 140 body damage per shot — one-shots players with light shields (125 HP total) but requires two body shots to kill players with heavy shields (150 HP total). Flows into bonus rounds well since most enemies won't have heavy shields."
    }
  },
  phoenix: {
    role: "Duelist",
    core_philosophy: "Phoenix is self-sufficient — his kit is designed to keep fights going across an entire round. Flashes let him re-engage, wall creates space and heals, molly denies or flushes. Plan util around winning multiple fights per round, not just one. Think at least two kills ahead.",
    watch: [],
    abilities: {
      curveball: {
        mechanics: "Throwable flash that curves based on which hand you throw from. Fully blinds anyone who sees it detonate. Can be banked off walls.",
        usage: "Fight before flashing — back up, flash, re-engage against anyone trying to trade. Double flash to beat anti-flash players — the second flash re-blinds whoever went anti on the first. High flash over objects is underrated and rarely expected. Vary timing, position, and flash type every round — never flash from the same spot at the same time twice in a row.",
        key_insight: "When you flash someone from the front of a box and circle to the back, most players panic spray or retreat toward the flash — you catch them off guard coming from the other side. Vary your timings dramatically — sometimes wait 20-30 seconds before using your flash on a common angle to completely throw off enemy reads."
      },
      blaze: {
        mechanics: "Moving wall that blocks vision, heals Phoenix while he stands in it, and briefly heals teammates who walk through it. Can break Cypher trips and stop defuses. Stand slightly back from walls when throwing to reduce clipping gaps.",
        usage: "Use to expand space and create combos — not just to heal. Wall through objects for better entry setups. Block an angle AND heal simultaneously rather than dumping wall just for HP. Don't heal while your team is fighting — go with them, secure site, then heal. Using the whole kit just to recover health is almost never worth it.",
        key_insight: "Wall is a moving smoke that heals. Use it to isolate fights, expand space, and enable combos with flash or molly — not just as a heal tool."
      },
      hot_hands: {
        mechanics: "One charge per round. Thrown grenade that lands and burns for several seconds, healing Phoenix who stands in it.",
        usage: "Every throw needs a job: deny a peak, flush enemies out of smokes before pushing, wrap smokes to deny pushes through them, or clear an angle so you can focus elsewhere. Throw it at one angle and look at the other — free info. Don't heal while your team is actively fighting, go with them and heal after the site is secured.",
        key_insight: "With only one molly, ask before throwing: does this deny a peak, flush someone out, or enable a follow-up flash? If the answer is no, hold it."
      },
      run_it_back: {
        mechanics: "6 orbs. Phoenix marks a respawn point, then has a window to fight — if he dies or the window expires he respawns at the mark. Full HP on respawn.",
        usage: "Don't hoard it — 6 orbs is easy to get back. Use it for small things: grabbing a gun in a bad spot, picking up the spike, getting HP back. Spend it if there's a decent chance it wins or swings the round.",
        key_insight: "Phoenix players often save ult too long. It's only 6 orbs — if it can help you win the round, use it."
      }
    },
    general: {
      have_a_plan: "Before each round, know what your util is doing and why. Phoenix's kit is self-sufficient enough that you can formulate a full plan solo. Have a backup plan on defense especially — you can get overwhelmed fast and need to know where to fall back to.",
      multi_kill_thinking: "Plan for at least two kills every round. Don't think about one kill and die — think about the first kill, where you fall back to, what util you use next, and where the second kill comes from. Phoenix's kit is built for this chain of fights. Think at least two kills in advance, then improvise from there.",
      lineup_rotations: "After throwing a lineup or flash from one position, immediately rotate to a different angle. Enemies read where your util comes from and hold that spot — if you're already peeking from somewhere else you get a free kill."
    }
  },
  raze: {
    role: "Duelist",
    core_philosophy: "Raze overloads the enemy team with so many simultaneous threats they can't focus on any single one. Her kit isn't about individual kills — it's about taking space and making entry easier. Think of every ability as a tool to clear angles or force reactions, not just deal damage.",
    watch: [],
    abilities: {
      boombot: {
        mechanics: "Deployed bot that follows walls and detonates on enemy contact for ~80 damage. Can be destroyed. Jump-throw to launch it safely while keeping yourself behind cover.",
        usage: "Two uses: info or damage. Clear angles you don't want to peek manually. Swing alongside it — enemy has to choose between shooting you or the bot, giving you a flash-like window. On defense mid-round when you have no info, jump-throw for free reads without exposing yourself.",
        key_insight: "Boombot isn't just an entry tool. If it tags someone it deals about 80 damage — that's a free swing for the kill on a crippled enemy."
      },
      blast_pack: {
        mechanics: "Two charges of throwable satchels. Detonating one launches Raze. Single satchel for entry; double satchel sends you further but gun isn't out in time without ult. B-hop after satchels expire for extra momentum. Rebind to a mouse side button — Q is slower and less precise.",
        usage: "Single satchel to enter fights — double is only reliable with ult active. Press equip primary in midair to have gun ready on landing. Use S+A or S+D satchel to dodge laterally like a Jett dash. To change direction mid-air, let go of W completely and hold only the directional key you want.",
        key_insight: "Double satchel is only reliable with ult. Without ult, single satchel into a fight — pros like Aspas almost always single satchel. When changing direction, release W entirely and hold only the directional key — that's how high level Raze players control movement precisely."
      },
      paint_shells: {
        mechanics: "Cluster grenade that splits into sub-grenades on contact. High damage in a large area. Not for random kills — for clearing specific angles.",
        usage: "Use to clear an angle so you can focus on the rest of site, not to hunt kills blindly. Satchel on top of the nade so enemies can't escape. Hold the angle after throwing — if someone's there they die, if not it's cleared. Save it until you're committing to entry or certain it gets value, not early in the round speculatively.",
        key_insight: "Nade + satchel on top is a guaranteed kill on anyone in that spot. The nade makes entry easier by handling one angle entirely — you can focus on everything else."
      },
      showstopper: {
        mechanics: "Rocket launcher ult. Press X + satchel simultaneously to animation cancel the ult draw. Shift walk to move silently with ult active.",
        usage: "Primarily for taking space, not kills. Everyone retreats when they see it — walk onto site while they hide and let your team flood behind you. Shift walk with ult active — Raze is normally very loud, so going silent creates uncertainty about where she is. Single satchel if you're unsure where enemies are — more control.",
        key_insight: "You don't have to kill anyone with the rocket for it to be worth it. If the entire enemy team is hiding while you take site, the ult did its job — threat alone is enough."
      }
    }
  },
  cypher: {
    role: "Sentinel",
    core_philosophy: "Cypher controls information. Every piece of his kit is about knowing where enemies are, isolating fights, and making decisions — not just getting kills. The player who understands Cypher's info is always one step ahead.",
    watch: [],
    abilities: {
      cyber_cage: {
        mechanics: "Pre-placed smoke that activates on command. Creates a sphere of vision denial with one-way potential depending on placement angle.",
        usage: "Don't activate the moment you see someone — wait until they're committed and directly underneath, then pop it. Use cages to hide, reposition, and re-peek — not just to block a sightline. Don't burn them all early; save at least one for the actual fight or post-plant. Hide inside the cage, let enemies push past, swing out behind them.",
        key_insight: "Cage is an isolation and repositioning tool, not just a smoke. Overwhelmed in a 3v5? Hide in cage, reposition while enemies push past, pop out behind them."
      },
      trapwire: {
        mechanics: "Stretched between two surfaces. Tethers and reveals enemies who walk through. Low floor-level trips catch enemies pre-aiming chest height. Skye, Fade, and Raze boombot can clear trips — adapt placement against these comps.",
        usage: "Place deep on site where enemies have already committed — not at the entry choke where they can clear it safely before pushing. Vary height round to round; if enemies keep clearing it, change the placement or time it for after their clearing util is spent. Use trips to isolate specific agents — place to make Jett dash over while teammates walk into it.",
        key_insight: "If enemies keep breaking your trips, change height or timing — place after their clearing util has been used, not before. Activate cage, reposition inside it, and wait — they won't expect you to still be there."
      },
      spycam: {
        mechanics: "Placeable camera that Cypher can remotely view. High placements are harder to spot and shoot. Can be retrieved and redeployed. Tagging enemies through the camera marks them briefly.",
        usage: "Camera is a decision-making tool, not a kill tool. Before placing ask: does it see the whole site? Is it hard to pre-fire? Can it be safely reopened mid-round? High cameras last longer — enemies have to break their movement path to shoot them, exposing themselves. Match aggression to setup. In 1v1 use it as a fake flash — place it and swing while enemies look up to shoot it. Pick it up and bring it to retake if enemies go elsewhere.",
        key_insight: "A high camera that lasts all round is worth far more than an aggressive one that gets shot in 10 seconds. Sustained information beats a brief peek."
      }
    },
    defense: {
      primary_job: "Create an information web that tells you exactly where enemies are before they reach site. Don't stand where enemies pre-aim — play off-angles they won't expect. Time your utility so cage and trips are both active when enemies commit.",
      key_insight: "Cypher's kit is passive until enemies activate it. Your job is positioning and setup — let the utility do the work."
    },
    attack: {
      lurk_timing: "Lurk after teammates make contact, not before. If you push too early, enemies are alert and your lurk is wasted. Wait for noise and pressure on the other side, then move — you'll catch rotators off guard. Use an early cam to give vision on their setup, making it look like you're going with your team while actually lurking.",
      post_plant: "Cypher gets stronger after plant. Use your defense setups as post-plant setups. Always put a trip behind your team when lurking to prevent flanks.",
      key_insight: "A Cypher lurk that catches a rotator mid-rotation is one of the most impactful plays in the game. Patience is the skill."
    },
    neural_theft: {
      mechanics: "Ult. Use on an enemy corpse to reveal all living enemies on the map twice.",
      usage: "Very situational. Use in low numbers situations (2v5, 1v3) to find enemies. Use on attack to check if enemies are rotating before committing to a site. Don't hoard it waiting for the perfect moment — if you're outnumbered and need to know where enemies are, use it.",
      key_insight: "Don't overthink it. You'll learn when it's valuable as you play."
    }
  },
  killjoy: {
    role: "Sentinel",
    core_philosophy: "Killjoy dominates defense through setups that force enemies into bad choices. On attack she anchors and excels post-plant. Her value comes from making enemies react to her utility rather than playing freely — every setup should present the enemy with two bad options, not one.",
    watch: [],
    abilities: {
      nanoswarm: {
        mechanics: "Pre-placed grenade that activates on command — invisible until triggered. Deals damage in a small area. Can be hidden against railings and corners to clip through walls, damaging enemies who back off it.",
        usage: "Place deep in setups rather than obvious spots that get cleared by Raze nade, Sova dart, or Yoru clone every round. Give enemies two bad options — die in the molly or take an exposed fight. Throw lineup from one position then immediately rotate to a different angle before popping — enemies hold where mollies come from, so peeking from somewhere else gets a free kill.",
        key_insight: "The alarmbot makes enemies vulnerable and take more damage — its placement is as important as the mollies. Put it deep so enemies must push through molly damage to reach it."
      },
      alarmbot: {
        mechanics: "KJ has only ONE alarmbot per round. Applies a vulnerability debuff to enemies it activates on — increases incoming damage. Can be retrieved and redeployed.",
        usage: "Place deep in setups so enemies must push through mollies to reach it. Doesn't always need a nanoswarm next to it — a well-placed alarmbot that forces a reaction or slows a push is value on its own.",
        key_insight: "Alarmbot placement matters more than always pairing it with a molly. Force a reaction first — the damage combo is secondary."
      },
      turret: {
        mechanics: "Auto-fires at enemies in range. Can be retrieved and redeployed. Shooting the turret takes enemies' attention off you.",
        usage: "On attack use for flank watch — covers the route you're NOT watching so you can focus forward. On defense use for info and distraction while you hold from a different angle. If enemies are shooting the turret, they're not shooting you — use that window to swing.",
        key_insight: "Turret is an information and distraction tool, not a kill tool. The value is the attention it draws away from you."
      }
    },
    defense: {
      setups: "Consider setups that force enemies into two bad choices — die in the molly or take a fight at a disadvantage. Hidden setups that clip through walls catch enemies who think they've dodged. Adapt your setup based on the enemy comp — what gets broken every round needs to change.",
      key_insight: "Don't use the same setup every round at higher ranks. Enemies will read it and play around it."
    },
    attack: {
      post_plant: "Consider replicating your defensive setup after planting. Place turret for flank watch, plant toward default, then set up mollies the same way you would on defense. Enemies retaking run straight into it.",
      lineup_rotations: "Consider throwing your lineup from one position then immediately rotating to a different angle before popping it. Enemies read where mollies come from and hold that spot — if you're already peeking from somewhere else you get a free kill.",
      key_insight: "Most KJ players only think about defense. Attack post-plant setups are just as strong and most enemies don't expect them."
    },
    lockdown: {
      mechanics: "Ult. Large device that detains all enemies caught in range after a wind-up. Has small gaps at the edges.",
      usage: "Combine with mollies to close off escape routes. Throw a molly into the gap to force enemies into only two choices: die in the molly or get detained. This makes retakes nearly free.",
      key_insight: "Ult alone gives enemies options. Ult plus molly removes them."
    },
    general: {
      silent_drop: "Consider placing your turret on the ground and dropping onto it to land silently with no fall damage. Useful for dropping from elevated positions without giving away your location with a sound cue. Pick up the turret after landing."
    }
  },
  deadlock: {
    role: "Sentinel",
    core_philosophy: "Deadlock slows down pushes and secures kills off her stuns — she is NOT a traditional info-gathering sentinel. Her sensors can't lock down areas the way Cypher trips can because enemies can crouch or shift walk past them silently. She's more aggressive than other sentinels and her kit is built around forcing bad situations rather than passive information.",
    watch: [],
    abilities: {
      barrier_mesh: {
        mechanics: "Thrown wall that blocks movement. Expires after 30 seconds. Enemies can break individual segments.",
        usage: "Don't throw at round start with no info — it expires uselessly. Place deep enough that enemies must peek out and expose themselves to break it; if they can break it for free the wall has no value. On attack use to delay defenders and cut off choke points. Save for post-plant to block the path to the spike.",
        key_insight: "The wall's value is forcing enemies to expose themselves to break it. Place it where breaking requires peeking into your line of sight."
      },
      sonic_sensor: {
        mechanics: "Placed sensor that concusses enemies who make noise near it — jumps, drops, planting, defusing. Cannot detect enemies who shift walk past silently.",
        usage: "Place where enemies are forced to make noise — not for passive flank watch, since enemies just shift walk past. On attack place on spike for post-plant. Swing immediately when a sensor activates — the concuss window is short. Use it as an active kill tool over an angle you're holding, not as passive info gathering.",
        key_insight: "Sensors are kill tools, not info tools. Place them where enemies are forced to make noise, then swing immediately on the concuss."
      },
      gravenet: {
        mechanics: "Left click for long range arc, right click for short underhand throw. Slows and roots enemies. Enemies can remove it with a loud audio cue. Pairs with Raze nade for combo damage.",
        usage: "Best to stall rushes and isolate fights — net one group while another is entering. Follow up every net with a swing or ult; a net with no follow-up is just a brief delay. Throw it just as enemies are committing, not speculatively before they push.",
        key_insight: "The net removal sound cue is extremely loud and reliable. When you hear it, you know exactly where the enemy is — that's your window to shoot ult or swing."
      },
      annihilation: {
        mechanics: "Projectile that captures a target in a cocoon — enemy must be extracted or they die. Cocoon has 600 HP and can be broken by enemies grouped near the target. Can bounce off walls.",
        usage: "Core combo: net first, wait for the removal sound cue, then shoot ult at that location — near-guaranteed hit. Don't use ult dry without netting first, it's much harder to land. Avoid using it when enemies are clustered near the target — they'll break the cocoon. Practice wall bounces in custom lobby — the trajectory is unintuitive.",
        key_insight: "Net + ult is the core combo. The net confirms the enemy position and briefly forces them crouched — ult immediately after the removal sound cue."
      }
    },
    defense: {
      primary_job: "Use sensors in areas where enemies are forced to make noise. Use wall and net as delay utility to buy time for teammates to rotate. Be ready to swing and kill off every sensor activation — sensors are useless if you don't follow up.",
      key_insight: "Deadlock on defense is about creating moments where you have perfect information and the enemy is at a disadvantage. Sensor goes off = concussed enemy = free kill if you swing immediately."
    },
    attack: {
      sensors: "Place on spike for post-plant — anyone defusing activates it and you swing off the stun. Place on aggressive angles you're holding so you get a warning and can swing. Don't use for flank watch — enemies will shift walk past.",
      wall: "Throw on choke points to delay retakes. Block off heaven or spawn floods. Save for post-plant to put it on the path to the spike so enemies must break it to defuse.",
      net: "Same as defense — isolate fights, combo with teammate util, or save for post-plant. Net at the tap, listen for removal cue, swing or ult.",
      key_insight: "Deadlock on attack is more aggressive than other sentinels. Think about creating moments of advantage rather than passive setup."
    }
  },
  waylay: {
    role: "Duelist",
    core_philosophy: "Waylay is unlike other dive duelists — half her kit is designed to get you away from fights, not into them. On attack she's aggressive, on defense she plays safe and doesn't fight for early space the way Jett or Raze would. Don't try to be a space-taking duelist on defense with Waylay — she doesn't have the tools for it.",
    watch: [],
    abilities: {
      saturate: {
        mechanics: "Thrown projectile that lands and applies hinder — slows movement, shooting, and reloading. Requires line of sight from landing position, won't hit around walls.",
        usage: "Best with confirmed info on where someone is, not for blind clears. Three situations: preemptively as enemies are about to push, to help your team entry, or on an isolated target. Jiggle or jump spot before swinging into a hindered enemy — hinder is most effective after they've already whiffed their first shot, not before.",
        key_insight: "Saturate has surprising stopping power. If you hear enemies rushing, throw it in their path — they have to take the fight at a disadvantage."
      },
      refract: {
        mechanics: "Signature ability that resets after two kills. Recalls Waylay to her position when she activated it. Allows her to enter smokes and retreat safely.",
        usage: "Use to take aggressive fights then recall out. Walk into smokes with it active — almost no consequences. Core combo: dash onto site, get entry, refract out. Refract is designed to give up space safely, not hold aggressive positions.",
        key_insight: "Refract gets you in and out. Use it to do damage and escape — not to hold a spot you shouldn't be able to hold."
      },
      dash: {
        mechanics: "Purchased ability. Teleports Waylay to a targeted location.",
        usage: "Always dash to a safe landing location. Coordinate with your initiator before committing — tell them where you're dashing, they tell you where their util is going. Dash without initiator coordination is a coin flip.",
        key_insight: "A well-timed flash or drone before your dash dramatically increases success rate."
      },
      twilight_cage: {
        mechanics: "Ult. Deploys a large cage that damages and traps enemies inside. Check minimap to see exact coverage — small gaps on edges are possible.",
        usage: "Not great for executing on attack. Best for aggressive defensive ults. Leave small gaps on the edges intentionally if needed — it will still hit if precise.",
        key_insight: "Most value comes from aggressive defensive ults, not as an execute tool on attack."
      }
    },
    attack: {
      primary_job: "Aggressively peek smokes, dash onto site, use saturate to clear angles or secure kills on known positions. Dash and refract combo to get in and get out safely.",
      key_insight: "Saturate before dashing onto a known position is one of Waylay's strongest plays — hindered enemy, dash in, refract out."
    },
    defense: {
      primary_job: "Play safe. Don't fight for early space the way Jett or Raze would — Waylay only has a dash to reach early angles and a slow that's easy to dodge if enemies aren't already committed. Over-peeking forces you to recall and leaves your team a player down.",
      key_insight: "Fighting for A main or similar early space on defense almost always turns into a coin flip where your team is down numbers because you get forced to recall. Save aggression for when you have the advantage."
    }
  },
  sova: {
    role: "Initiator",
    core_philosophy: "Sova is a pure info and post-plant machine. Frags are a bonus. His value comes from reliable information gathering and unstoppable post-plant utility.",
    watch: [],
    abilities: {
      recon_bolt: {
        mechanics: "Charged dart with up to two bounces. Landing position is determined entirely by aim angle, charge level, and bounces — you cannot adjust it mid-flight. Reveals enemies in range, pings regularly. Enemies can destroy it.",
        usage: "Vary lineups round to round — enemies will pre-aim and destroy a predictable dart. Follow up with team pressure immediately; info is wasted if your team doesn't act. On defense, a well-timed dart against a rush lets your team spam through walls and smokes safely. Even if enemies shoot it, that's info — someone stopped and aimed at it.",
        key_insight: "If enemies shoot the dart, that's still info. Someone had to stop and aim at it — that tells you where they are and what they're doing."
      },
      shock_bolt: {
        mechanics: "Charged electric dart with up to two bounces and three charges. Deals damage and destroys utility without line of sight.",
        usage: "Most reliable and impactful use is post-plant to deny defuse. You don't need complex lineups — know general trajectory based on bounce count and surface type and build from there.",
        key_insight: "You don't need the nastiest lineups to get value. Basic shots at the spike from common positions are enough for most rounds."
      },
      owl_drone: {
        mechanics: "Piloted reconnaissance drone. Drone height is determined by the platform directly below it — navigating it over elevated surfaces increases altitude and vision range. Rotate the drone to clear corners rather than panning left and right — faster and covers more ground.",
        usage: "Navigate over elevated platforms early to gain height and see into heaven areas. Rotate to clear corners rather than looking left and right. Tag enemies with the drone's dart to assist teammates' shots.",
        key_insight: "A drone that gains height by navigating elevated platforms can see into heaven areas and gather far more info than one kept at ground level."
      },
      hunters_fury: {
        mechanics: "Three horizontal shots that pass through walls. Each shot has a windup — switch targets between shots to predict enemy movement. Press X to deactivate early. Sova is completely vulnerable while ulting.",
        usage: "Best used post-plant or paired with a recon dart/drone tag for confirmed positions. Activate behind cover or have a teammate guard you. Jump before winding up shots to adjust vertical angle. Don't hold it for perfect scenarios — post-plant alone justifies using it most rounds.",
        key_insight: "Ult paired with Iso undercut applies hinder and makes shots one-hit kills. Ult paired with Yoru ult reveals and blocks enemy pathing. Know your combos before you need them."
      }
    }
  },
  reyna: {
    role: "Duelist",
    core_philosophy: "Reyna is a self-sufficient, mechanics-first duelist built around taking 1v1 fights and snowballing. If you're not getting kills her kit is useless — you can only use her flash. She has massive solo carry potential but provides almost nothing for the team beyond a flash. Her ult is arguably the worst in the game at high elo.",
    watch: [],
    abilities: {
      leer: {
        mechanics: "Unlimited range. Nearsights anyone who looks at it — not a full blind. Stays active for two seconds if unbroken. Throw close to ground for fast pop at close range; throw high so enemies must flick upward to break it. Can see nearsight indicator over enemies hiding behind boxes.",
        usage: "Don't throw too close — enemies can still see through it at very close range. Use it with initiator util for checkmate situations — Skye flash or Sova dart paired with Reyna flash means enemies have too many things to react to. If enemies shoot the flash, you know exactly where they are. Use it like a smoke to cross open space — as long as it's up, anyone aiming that direction is nearsighted.",
        key_insight: "Her flash stays up for two seconds unbroken. Use it like a smoke to cross open space — as long as it's up, anyone aiming that direction gets nearsighted."
      },
      devour: {
        mechanics: "Heals 50 HP, overheals to 150, lasts 10 seconds then decays. Consumes one soul orb and one ability charge (see Dismiss entry for full charge/orb system). Requires unbroken line of sight to the soul orb — cancels if LoS breaks for 0.5 seconds. Cannot activate from fully behind cover.",
        usage: "Jiggle in and out of cover while healing to stay in LoS and peek for info simultaneously. Key technique: delay the orb grab after a kill — hold the angle, see if someone swings to trade, then grab if safe. Don't grab immediately every time. Don't try to heal from fully behind cover — both abilities require LoS to the soul orb.",
        key_insight: "Delayed orb grab is one of Reyna's most underused techniques. Hold the angle after a kill, see if the trader peeks, then grab the orb if it's safe."
      },
      dismiss: {
        mechanics: "REYNA ABILITY SYSTEM: Reyna gets 1 charge per round free (signature), can buy a second. Charges are shared between Devour and Dismiss. Kills spawn a soul orb — but ONLY if at least one charge remains. Using either ability consumes the orb AND one charge. No charges = no orbs spawn, no abilities for the rest of the round. Max 2 uses per round with the purchased charge. Both abilities require line of sight to the orb — cannot activate from fully behind cover.",
        usage: "Use dismiss to escape after a kill, bait a trade, or get info on a 50/50 angle. Hold the angle after the kill — see if a trader peeks, then grab the orb. Don't dismiss immediately every time. B-hop on landing to make yourself harder to hit. Don't use dismiss to close distance on a live enemy — you come out stationary and fully visible, they just pre-aim your landing spot. Don't burn both charges early; if you spend them in the first two fights, orbs stop spawning for the rest of the round.",
        key_insight: "Dismiss is a bait and switch tool after a kill. Kill first guy, dismiss — second guy swings to trade while your teammate kills them from a different angle. Never used to approach someone already aiming at you."
      }
    },
    attack: {
      entry: "Play front on contact rounds (no utility entry) since you can heal and dismiss. Be second entry when flashing for a teammate — go the opposite side of the first entry to pinch front site, mid site, and back site together.",
      flash_usage: "Use flash on roulette/50/50 angles that are hard to isolate with a gunfight. Combo with Skye flash or Sova dart for checkmate — enemies have to choose between breaking your flash or the other util and get punished either way.",
      bait_and_switch: "Kill first guy, dismiss, second guy tries to trade you — your teammate kills the trader while they're focused on you. This is Reyna's core attack pattern.",
      key_insight: "If you have a movement duelist on your team, be second entry with your flash. Go opposite side of their entry to pinch."
    },
    defense: {
      playstyle: "Reyna is a floater like Jett, not an anchor. Kite — take early fight, back up, take another fight from a different angle, repeat. Stay alive as long as possible until teammates rotate.",
      off_angles: "Abuse off angles. Unlike Jett whose dash is on a timer, Reyna can hold an off angle the entire round because dismiss resets on kill, not on cooldown. Play a spot, get a kill, dismiss out, reposition, repeat.",
      key_insight: "Bait and switch works on defense too. Hold an off angle, kill the first attacker, dismiss — the second attacker swings to trade while your teammate kills them."
    }
  },
  omen: {
    role: "Controller",
    core_philosophy: "Omen is one of the most aggressive controllers in the game, not a passive support. His blind, hollow smokes, and two TPs create massive space for creative plays. If you just want to sit back and smoke, other controllers do that better. After using utility, Omen takes fights and makes space.",
    watch: [],
    abilities: {
      paranoia: {
        mechanics: "Large projectile that nearsights and deafens everyone who sees it. Wide spread — target center of grouped enemies. Slower than before; wait for it to reach enemies before peeking. Nearsight indicator appears above boxes — use to detect hidden enemies.",
        usage: "Call the throw to teammates so they can push off the blind. Don't peek before it actually lands — it's slower now. Aim errors on Paranoia cannot be practiced in deathmatch (abilities disabled) — use custom lobby with bots or conscious focus in actual games.",
        key_insight: "The blind deafens enemies too — combine with aggressive plays while they can't hear your movement."
      },
      shrouded_step: {
        mechanics: "Short TP (signature). Ult also provides a global TP. Both have sound cues.",
        usage: "Use for elevation, timing advantages, flanks, and fast rotations. Avoid predictable TP spots — enemies who know your common locations will pre-aim. Only TP to a spot where you have a read on enemy positions from prior rounds. Use ult TP in 1v1/1v2 situations — TP to an unexpected spot, draw their attention, escape, shoot from behind.",
        key_insight: "TP is most dangerous when it creates a lane enemies weren't expecting to hold. Use it to multiply the angles defenders have to cover."
      },
      dark_cover: {
        mechanics: "Smokes placed via map overview — no lineups or trajectories involved. Practicing Omen smokes means learning positions on the map overview. Smokes have a built-in visual expiry indicator — never count time manually. Hollow smokes allow Omen to see enemies crossing through them.",
        usage: "Time smokes to when teammates are at the choke — too early and they fade before the team arrives, too late and the team hesitates. Smoke the angle hardest for teammates to hold first, not the most obvious one. Learn oneways — they refresh fast enough to use frequently.",
        key_insight: "Hollow smokes give outplay potential — you can see enemies crossing through and be ready on the exit side. Learn to play around your own smoke, not just place it and ignore it."
      }
    },
    aggression_vs_support: {
      be_aggressive: "When enemies are passive — TP to create extra lanes they weren't expecting. When you need to take space that your team doesn't have the utility to take.",
      be_supportive: "When your team is taking site well — hold flash for post-plant instead of using it early. Stay alive to keep smokes recharging for retake.",
      key_insight: "Omen's low win rate in ranked comes from players thinking their only job is to smoke and flash. There's always more you can be doing with your kit."
    },
    stall_potential: {
      summary: "Oneways force enemies to burn utility to push through. When enemies are rushing fast and you can't get main smoked in time, throw a side smoke for teammates to play around instead. During retake, smoke off angles to isolate fights rather than trying to smoke the entire site.",
      key_insight: "A well-placed side smoke during a fast push can buy your team 3-4 seconds — enough time for rotators to arrive."
    },
    smoke_order: {
      principle: "Always smoke the angle that's hardest for your teammates to hold first, not the most obvious one. Elevated angles like heaven are usually more dangerous than main choke points because teammates entering are naturally looking toward the choke, not up.",
      key_insight: "Think about where the first person through the choke is looking — smoke the angle they can't cover while doing that."
    }
  },
  neon: {
    role: "Duelist",
    core_philosophy: "Neon's superpower is speed. Her kit is about creating chaos through movement, making herself harder to hit while closing distance fast. She excels at catching enemies off guard with timings they aren't prepared for.",
    watch: [],
    abilities: {
      fast_lane: {
        mechanics: "Two parallel walls of electricity that block vision and damage enemies who cross them.",
        usage: "Use to cross into position safely, block operators, and create chaos. Jump in and out of your own walls to make yourself unpredictable — enemies don't know which side you'll exit from. Use wall to isolate fights when one enemy isn't affected by util while others are.",
        key_insight: "Your wall gives you two surfaces to play around. Jumping in and out is nearly impossible to track, especially in chaotic team fights."
      },
      relay_bolt: {
        mechanics: "Thrown stun that bounces once off walls. Stuns vertically down long walls as well as horizontally.",
        usage: "Use preemptively when you have a read on enemy position from prior rounds — not reactively in the moment. Core combo: jump spot around a corner, see enemy, stun mid-jump, slide in. There's no time for them to react to the full sequence.",
        key_insight: "The jump spot into stun into slide combo is one of Neon's strongest plays. See them, stun mid-air, slide in — the whole sequence happens before they can respond."
      },
      high_gear: {
        mechanics: "Speed boost with a slide charge. Gun is NOT equipped while running — Neon cannot shoot during high gear movement. All abilities remain usable during high gear.",
        usage: "Use to catch timings enemies aren't expecting, rotate faster, or chase off enemies hit by teammate util. Activate only in safe positions — gun isn't out, and getting swung while in high gear is a free kill for the enemy.",
        key_insight: "High gear's power is timing. Enemies who aren't holding for a fast approach get caught completely off guard."
      },
      overdrive: {
        mechanics: "Ult. High accuracy laser that fires continuously while moving. Three headshots is an instant kill. Inaccurate while jumping.",
        usage: "No rules — use it when it wins the round. Retake, 1vX, or even with an advantage. Never save it. Slide cancel tech: slide one direction, press ult and right-click the opposite direction mid-slide for an instant direction change.",
        key_insight: "Overdrive's strength is moving and shooting simultaneously. Use the slide cancel tech to change direction instantly and make yourself impossible to track."
      }
    },
    movement: {
      slide: {
        mechanics: "Slide is an ability — it is disabled in deathmatch. Must be practiced in custom lobby or real games only.",
        usage: "Slide horizontally, not forward. Forward slide stops you in front of the enemy — easy shot for them. Horizontal slide crosses their screen requiring a large mouse movement to track. Slide from behind cover, not from the open. Starting from deep behind cover makes your model go from crouched to upright — enemies often miss their first shot. Crouch spam during slide further manipulates hitbox.",
        key_insight: "The direction of your slide determines whether you're an easy or hard target. Horizontal = hard to hit. Forward = easy to hit. Default to horizontal whenever possible."
      },
      bhop: {
        mechanics: "Neon gains speed chaining jumps. Run before jumping to build speed. Air strafe with mouse movement in the same direction as your key input.",
        usage: "W then jump, press D and turn right simultaneously. Chain left and right to maintain momentum. Once momentum builds you don't need W — just A and D alternating.",
        key_insight: "B-hopping enables jump spotting — strafe around a corner fast to gather info, stun if you see someone, then slide in. The whole sequence is faster than enemies can react to."
      }
    },
    weapons: {
      recommendation: "Pistol and eco: frenzy or stinger. Super low buy: Bucky. Hard read on enemy position: Judge.",
      key_insight: "Close range weapons complement Neon's playstyle — she's closing distance fast, so weapons that excel at close range are a natural fit."
    }
  },
  viper: {
    role: "Controller",
    core_philosophy: "Viper is one of the best controllers in the game and a must-pick on multiple maps. Her power comes from lurk setups, cutting off sightlines, and cycling her fuel to constantly create pressure. Good Viper players aren't timid — they take fights and make plays. You can't be a timid lurker and expect consistent impact.",
    watch: [],
    abilities: {
      snake_bite: {
        mechanics: "Thrown grenade — cannot be pre-placed in buy phase. Deals damage and applies decay in a small area for 6.5 seconds.",
        usage: "Use to hold plant location, flush enemies out of corners, or stall a defensive push. With only one snake bite, stalling the retake is often more valuable than saving it for post-plant — 6.5 seconds at the retake forces a bad swing or takes free damage. Forces enemies into bad choices: swing into the open or take the damage.",
        key_insight: "Snake bite forces enemies into bad choices — swing into the open or take the damage. Neither is good for them."
      },
      poison_orb: {
        mechanics: "Thrown orb that creates a sphere of toxic gas when raised. Can be raised and lowered at will using fuel. Cannot be picked up once thrown. Learn lineups so it lands precisely — free-balling leaves exploitable gaps.",
        usage: "Place in high-traffic areas where it creates constant pressure. Every time it goes up, enemies must decide: invest util, send a player, or cede the space. Vary whether you're lurking behind it, pushing through it, or using it as a distraction.",
        key_insight: "The orb's value is the questions it creates, not just the smoke. Every raise forces a decision from the enemy."
      },
      toxic_screen: {
        mechanics: "Long wall of toxic gas that blocks vision across multiple sightlines. Raised and lowered with fuel. If enemies molly it, drop it, wait for their util to expire, raise again at full fuel — wastes their utility.",
        usage: "Cycle the wall actively — dropping and re-raising in response to enemy util wastes their resources. Stretch it to cut off defender sightlines on lurks, forcing them to play tight and setting up your move. Alternate between lurking alone and bringing your team through the wall — always lurking solo becomes predictable.",
        key_insight: "The wall forces defenders to react to you rather than read you. They can't safely gather info when sightlines are cut."
      },
      vipers_pit: {
        mechanics: "Ult. Large sphere of thick toxic gas. Creates oneway potential at corner positions — you can see enemy feet while they can't see you. Destroy any drones or dogs immediately to deny vision inside.",
        usage: "One of the strongest post-plant ults in the game. Use corner positions that create oneways — placement is everything. On defense drop it at a choke and stack the other site — enemies hesitate to push thick fog.",
        key_insight: "Even numbers inside Viper's pit almost guarantees a win — enemies are disoriented and you know the layout."
      }
    },
    playstyle: {
      fuel_cycling: "Never sit at 100% fuel. Constantly raise and drop your util throughout the round to create pressure. Cycling keeps enemies guessing and prevents you from wasting fuel capacity.",
      lurking: "Wall cuts off sightlines so defenders can't safely gather info on you, forcing them to either contest or give up space. Alternate between lurking alone and bringing your team through the wall — always lurking solo becomes predictable.",
      aggression: "Take fights. Most low elo Viper players play too far back. You can't have consistent impact playing timid. Take fights off your utility — molly a spot, push, use the orb as cover.",
      key_insight: "Viper's wall adds infinite options to your offense. The same setup can become a lurk, a fake, an execute, or a default. Use this to condition enemies into reacting, then exploit whatever response they give."
    }
  },
  yoru: {
    role: "Duelist",
    core_philosophy: "Yoru is a deception agent. Every piece of his kit is designed to make enemies react to things that aren't real, waste their utility on fakes, and punish them when they least expect it. His value comes from conditioning enemies over multiple rounds then exploiting their patterns.",
    watch: ["eggsterr"],
    abilities: {
      fakeout: {
        mechanics: "Deploys a decoy clone that mimics walking sounds and movement. Enemies react to it as if it were a real player.",
        usage: "Use to bait enemy util — Raze ult, Gecko ult, Cypher trips, KJ alarm bots. Condition enemies over multiple rounds: throw clone in the same spot until they stop shooting it thinking it's always fake, then walk out yourself for the free kill. Random fakes without conditioning rarely work — the clone's value is in the setup, not the throw.",
        key_insight: "Conditioning is the whole game with clone. It takes multiple rounds to set up but once it works it's a completely free kill."
      },
      blindside: {
        mechanics: "Flash that is hidden if thrown from inside a smoke — the smoke obscures the entire travel time. Flash TP combo: throw TP, activate it just before the flash hits the surface so the flash pops as Yoru arrives. Face opposite direction of the flash when TPing — Yoru avoids it while the enemy gets full blinded.",
        usage: "Throw from inside smokes: look straight down and throw — enemies have almost no reaction time. Time the flash TP precisely: activate TP just before flash contacts the surface, not before.",
        key_insight: "The smoke pop flash is one of the most undetectable flashes in the game. The smoke hides the entire travel so enemies have almost no time to react."
      },
      gatecrash: {
        mechanics: "Sends a tether (small moving portal) to a destination — Yoru TPs to wherever the tether is. The tether can be destroyed before use, so place it in low-visibility spots. TERMINOLOGY: The ability is Gatecrash and the deployed object is a tether — there is no 'anchor' in Yoru's kit. You exit facing the direction you were looking when you activated the TP.",
        usage: "Control your exit angle — look where you want to aim before activating. Avoid obvious spots that enemies are already watching; a tether that gets destroyed before use is wasted utility. For Gatecrash technique, watch eggsterr VODs.",
        key_insight: "Tether placement is about finding spots enemies won't casually check. Destroyed before use = wasted utility."
      },
      dimensional_drift: {
        mechanics: "Ult. Makes Yoru invisible and invulnerable, able to move freely and deploy fakeouts/flashes. Sound cues on deactivation give away position.",
        usage: "Fast flank: activate immediately at round start, get past enemy flank utility, pinch from behind. Post-plant stall: flash enemies off spike, throw clones for noise — every noise cue makes them paranoid and hop off. Spawn TP: effective post-plant on large maps — TP behind the retakers while they push site.",
        key_insight: "Ult post-plant stall is extremely powerful — flash, clone, and deactivation sounds force enemies off the spike repeatedly and buy massive time."
      }
    }
  },
  clove: {
    role: "Controller",
    core_philosophy: "Clove is a frontline controller — death is part of their kit, not a setback. They're designed to entry with their team, take risks, and provide smokes even after dying. Don't lurk on Clove — dying far from your team wastes the post-death smoke and ult value.",
    watch: ["haeyoday"],
    abilities: {
      pick_me_up: {
        mechanics: "On kill or assist: brief speed boost and health top-up. One use per round. Window expires if not used quickly.",
        usage: "Use the speed immediately to swing aggressively — catch timings enemies aren't prepared for. Only activate when another fight is imminent. In a 2v2, activate after the first kill — it's your last chance for the round, use it.",
        key_insight: "The speed boost is the real value, not the health. Any swing with it active will be faster than enemies expect — use it to close gaps and catch timings."
      },
      meddle: {
        mechanics: "Thrown ability that briefly reduces enemy HP to near-zero in a small area. Does not kill on its own — requires a follow-up hit to finish them.",
        usage: "Combo with teammate util for near-instant kills: Raze nade, Sova shock dart, or a flash. Throw at spawn barrier at round start to deter aggressive plays. Use at choke points during rushes — one bullet finishes a meddled enemy. Never use it alone without an immediate follow-up swing or combo.",
        key_insight: "Meddle at a choke during a rush plus any damaging util is essentially a free multi-kill."
      },
      ruse: {
        mechanics: "Smokes that fade slightly faster than other controllers. Unique: can deploy smokes around last death location even after dying.",
        usage: "Use post-death smoke to cover spike or provide cover on site for teammates. This is why Clove doesn't lurk — dying far from the team wastes the post-death smoke value entirely.",
        key_insight: "Your team essentially never goes without smokes as Clove. Even after dying, a smoke on the spike or a key angle can win the round."
      },
      not_dead_yet: {
        mechanics: "Ult. On death, Clove respawns with a window to get a kill or damaging assist — fail and they die for good. HP is restored instantly to full on respawn (no ticking). Invulnerability window on respawn allows repositioning.",
        usage: "Coordinate with teammates before using — don't ult alone or you'll get chased down. Reposition toward teammates during the invulnerability window. When ult is available, be the frontline — peek the OP, tank the Raze rocket, entry for your team. Don't bait when you have ult.",
        key_insight: "The threat of respawning is itself valuable — enemies will often push to clean you up, letting your teammates pick up free kills on the aggressor."
      }
    }
  },
  brimstone: {
    role: "Controller",
    core_philosophy: "Brimstone is a post-plant machine and stall specialist. His smokes last longer than any other controller and his Molly steals 8 seconds from the enemy team. His value comes from pre-planning — knowing when and where to use utility to buy time, delay retakes, and win rounds his team shouldn't.",
    watch: [],
    abilities: {
      incendiary: {
        mechanics: "Thrown grenade — cannot be pre-placed. 8 seconds of stall, 62 damage per second. Impossible to defuse through. Combos with Viper orb for extremely fast kills.",
        usage: "Use to delay pushes, flush enemies out of corners, or stall the spike. Stack with orbital strike for double stall. When stuck on site with no lineup and time is low, shoot it straight up — even a blind molly steals enough time to win. Pre-plan your position before the round so lineup spots don't reveal your location predictably. If the team is getting overwhelmed, stay and use molly to stall — don't go for a lineup play when bodies are needed.",
        key_insight: "The molly doesn't need to kill anyone to win the round. 8 seconds of stall at the spike is often enough to run the clock out."
      },
      stim_beacon: {
        mechanics: "AoE speed boost. Buff lasts 4 seconds after leaving the radius.",
        usage: "Use for fast pushes, rotations, 1v1 swings, and entries. Throw at feet for a race-car swing in a 1v1. Place slightly behind the push point so the buff carries teammates through the choke. Can sell fakes — enemies who hear a stim beacon expect a fast push and may over-rotate.",
        key_insight: "The 4-second carry-over is what makes it powerful. Place it behind the push point, not at it."
      },
      sky_smoke: {
        mechanics: "Longest smokes in the game at 19.25 seconds. Three charges — chain all three for 57+ seconds of denial. Deployed via tactical map. Low internal visibility — enemies in the smoke can barely see out.",
        usage: "Position to reach both sites so you can smoke either. Don't burn all three smokes at round start without a reason. Stand near the edge of your own smoke — whoever is on the edge sees enemies first. Use single smokes to fake pushes — enemies who see one smoke and nothing happens may rotate, leaving site open.",
        key_insight: "Brimstone's smokes are delay and denial tools. Use them to deny pushes, hide spike, and force enemies into your fights — not just to block a sightline."
      },
      orbital_strike: {
        mechanics: "500 total damage over 3 seconds at full size. Deals less damage to Brimstone and teammates. Kills anyone in a locked animation — Phoenix ult spawn, Sova drone, revive animation.",
        usage: "Primary use: delay spike defuse, stacked with incendiary for double stall. Clears common held angles on site entry. Don't hoard it — if it wins the round, use it. Center it on the enemy — they can escape if it only clips the edge.",
        key_insight: "Ult + Molly staggered is Brimstone's signature post-plant play. Ult forces enemies off spike, Molly prevents defuse after ult fades — you can be rotating the entire time."
      }
    },
    post_plant: {
      core_skill: "Pre-plan your lineup position before the round starts. Know where you'll plant and where you'll run to set up. Stagger utility — Molly lands, you rotate, ult drops, you move again. Each piece of utility buys time to reach a better position.",
      key_insight: "Brimstone has so much delay that he can rotate to a very far position between utility uses if pre-planned correctly. The best Brimstone players are always two steps ahead — they know exactly where they'll be when each piece of utility lands."
    },
    smoke_order: {
      principle: "Always smoke the most dangerous sightline first — usually elevated angles like heaven that teammates entering site can't cover while looking at the choke. Don't smoke obvious positions every round at the same time.",
      key_insight: "Vary which angles you smoke and when. Enemies who know your smoke pattern will peek between them. Keep them guessing."
    }
  },
  astra: {
    role: "Controller",
    core_philosophy: "The most complex controller in the game but her fundamentals are simple — global utility that can affect any part of the map. Requires pre-planning and communication. Every piece of utility must be placed before you need it.",
    watch: [],
    abilities: {
      nova_pulse: {
        mechanics: "Star placed in astral form that concusses enemies in an area when activated. Can be placed anywhere on the map.",
        usage: "Place preemptively and activate when enemies hit a choke point. Use inside a smoke to slow rushes and create spam openings. Activate off minimap contact — when enemies appear near your star, pop it. Combo with gravity well: concuss first, then pull — stunned enemies can't resist the pull.",
        key_insight: "Concuss before gravity well pull — stunned enemies can't move against the pull direction and get sucked in guaranteed."
      },
      nebula: {
        mechanics: "Second shortest smoke duration in the game. Recalling a star creates a brief fake smoke — the recall animation looks like a smoke forming before it disappears.",
        usage: "Best controller for fake plays — Astra controls utility globally regardless of position. Recalling a star to cross open gaps safely or as a decoy. Pre-position stars at round start based on likely enemy behavior."
      },
      gravity_well: {
        mechanics: "Pulls enemies toward center and applies vulnerable. Enemies can counter by moving in the pull direction or body-blocking. Spike placement near the edge of the radius pulls enemies away from it when they try to defuse.",
        usage: "Combo with damage util — Raze nade, Brimstone molly, orbital strike. Spam accurately during the pull — enemies are vulnerable and can't move freely. Position spike near the edge of the radius on post-plant.",
        key_insight: "Spam accurately during the pull — enemies are vulnerable and can't move freely, making them easy to hit even through smoke."
      },
      cosmic_divide: {
        mechanics: "Ult. Splits the map with a wall that blocks vision, sound, and bullets. Utilities and knives can still pass through.",
        usage: "Use to take large areas of space safely, deny pushes, or fake a site. Ping the location for teammates before activating — a Cosmic Divide no one knows is coming helps no one.",
        key_insight: "The ult is only as good as your team's coordination around it. Ping before activating."
      }
    },
    astral_form: {
      mechanics: "Astra enters an invulnerable but stationary state to place and manage stars. Completely defenseless while in it.",
      usage: "Always seek cover before entering. Get in and out as fast as possible. Practice placing and activating stars quickly to minimize exposure time."
    }
  },
  miks: {
    role: "Controller",
    core_philosophy: "Straightforward controller with limited smoke radius similar to Clove — needs to play mid positions to cover both sites. Smokes don't last long. Lacks the complexity of Viper or Astra but gets the job done with smart positioning.",
    watch: [],
    abilities: {
      stun_heal: {
        mechanics: "AoE that pulses — right click switches between stun and heal mode. Easily broken by one knife. The AoE goes through walls — placing it behind a wall means enemies can't shoot it without exposing themselves.",
        usage: "Place behind smokes or walls to protect it. Heal teammates through walls without exposing yourself."
      },
      boost: {
        mechanics: "Stim beacon effect on a single teammate. Buffs one player at a time unlike Brimstone's AoE beacon.",
        usage: "Use on your duelist at round start or during pushes. Straightforward — don't overthink it."
      },
      smokes: {
        mechanics: "Short duration, small radius compared to other controllers. Miks needs to play mid positions to cover both sites effectively.",
        usage: "Similar positioning requirements to Clove. Maps with large sites like Abyss are harder. Plan positions to reach both sites."
      },
      ult: {
        mechanics: "AoE blast that pushes enemies back and blinds them. Small radius — must be used intentionally.",
        usage: "Check minimap before activating to see exactly what you'll hit. Go into the round with a plan for where to position it. Strongest for site takes, post-plant, and defensive pushes."
      }
    }
  },
  vyse: {
    role: "Sentinel",
    core_philosophy: "Built around isolated duels. Her wall isolates fights, her flash blinds enemies mid-duel, and her vines slow and damage. Every ability is designed to combo together — the more you stack them the more one-sided the fight becomes.",
    watch: [],
    abilities: {
      shear: {
        mechanics: "Wall that isolates one side from the other. Can be jump-peeked to activate early. Place diagonally as a technique — enemies can only jump it from one specific spot, then spam that spot when they try.",
        usage: "Place just outside choke points where jumping requires exposure, not directly in the choke where it's trivially jumped. Use for aggressive ratty 1v1s with a shotgun. On attack: save for post-plant if another sentinel covers flanks. Always combo with vine and flash — wall alone is weaker than wall plus flash plus vine.",
        key_insight: "The wall forces a 1v1 where you also have flash and vine advantage. A blinded, slowed enemy behind your wall is a free kill."
      },
      razor_vine: {
        mechanics: "Placed vine that slows 15% and deals chip damage every few steps. Goes invisible shortly after placing. 10 second duration, two charges. 20m activation range — large enough for most post-plant scenarios.",
        usage: "Pre-place around choke points before fights. Best defensively — combo with wall and flash for maximum value. Don't use aggressively where enemies can see and shoot it before it activates. Standard setup: one vine at the choke you're holding, one combo'd with wall and flash.",
        key_insight: "One vine near the choke you're holding, one combo'd with your wall and flash — that's the standard defensive setup."
      },
      arc_rose: {
        mechanics: "Flash that stays on the ground — invisible until activated or within 10m of an enemy. Gun stays out while using it. 20-second cooldown for use and pickup. Right click to place aggressively through walls. Placing aggressively where enemies spot and shoot it incurs a 45-second cooldown penalty.",
        usage: "Defensive placement is almost always better than aggressive. Flash an enemy through your wall and immediately swing — gun stays out the whole time. Pick it up while rotating to redeploy on the other site. Vary placement round to round — enemies will pre-shoot a predictable spot even if it's invisible.",
        key_insight: "Defensive arc rose is almost always better than aggressive. You have wall for aggressive plays — use the flash to punish enemies who trigger it."
      },
      steel_garden: {
        mechanics: "Ult. Jams primary weapons in an area for 8 seconds — enemies are forced to secondary or melee. Cannot be broken. Faster windup than KJ lockdown, costs one fewer orb.",
        usage: "Strong for site takes, post-plant, and stopping pushes. Don't be afraid to take the defuse instead of using ult — one fewer orb than lockdown means the tradeoff is worth it more often.",
        key_insight: "Don't be afraid to take the defuse instead — the ult costs one fewer orb than lockdown so the tradeoff is worth it more often."
      }
    }
  },
  harbor: {
    role: "Controller",
    core_philosophy: "Frontline controller who uses his wall and smoke together to cover multiple sightlines simultaneously. Wall covers one side, smoke covers the other, ult blinds the site as you enter. Built for pushing with your team.",
    watch: [],
    abilities: {
      cascade: {
        mechanics: "Wave that travels forward, briefly blocks vision, and slows enemies it passes through. NOT a lineup ability — there is no fixed spot to memorize. Direction can be adjusted slightly mid-wave.",
        usage: "Read where enemies are and send it through them proactively — not reactively after they've already committed. Good for taking space, interrupting a push, or covering a crossing. The error to fix is timing and direction, not finding a spot to drill."
      },
      high_tide: {
        mechanics: "Long steerable wall that blocks vision and slows enemies who cross it. Guided by holding left click or thrown straight. Cancel early with right click. NOT a lineup ability — steer it to cover the angles your team needs.",
        usage: "Pair with Cove to cover both sides of a site. Activate before contact pressure, not in response to it — a late wall provides no value regardless of where it lands. The error on a bad High Tide is almost always timing, not placement.",
        key_insight: "The mistake on a late High Tide is timing, not placement. Practice deploying it at the start of an execute in live games."
      },
      cove: {
        mechanics: "Thrown smoke like Omen's — aim and throw, no lineup required. Reinforcing with a second click blocks bullets. 40-second cooldown. Good range across most maps; struggles on very large maps like Pearl or Breeze.",
        usage: "Aim and throw where you need coverage. Use unreinforced to cross; reinforce when you need bullet protection for planting. Stand away from the edge — when it breaks you need reaction time, not be right on the boundary."
      },
      reckoning: {
        mechanics: "Ult. Large AoE that nearsights and stuns enemies in the area. 7 orbs.",
        usage: "Wait for enemies to be fully committed before throwing — too early and they back out, too late and you miss the entry window. Aim for the center of the enemy cluster, not just the first enemy you see. Timing and targeting are separate skills — review rounds where it underperformed to identify which was wrong.",
        key_insight: "Timing: wait for enemies to commit. Targeting: aim for the center of the group. These are separate errors — identify which one went wrong."
      }
    }
  },
  breach: {
    role: "Initiator",
    core_philosophy: "Team-enabler initiator. Every ability goes through walls, making him uniquely powerful in narrow corridors and choke points. His job is to set up teammates for easy kills — stun, flash, aftershock in combination so enemies have no room to react.",
    watch: [],
    abilities: {
      fault_line: {
        mechanics: "Ground stun that goes through walls. Breach has a long equip time after abilities — gun is not immediately available after stunning.",
        usage: "Focus on narrow corridors where enemies have no room to dodge. Let enemies commit first, then stun when they can't back out. Don't peek before the stun lands — wait for it to hit, then peek. Use to catch duelists mid-mobility: stun common Jett dash or Raze satchel spots just as they commit.",
        key_insight: "The stun is most valuable when enemies are already in motion. Let them commit, then stun — they have no way out."
      },
      flashpoint: {
        mechanics: "Aimed at a surface — it fires through the wall to the other side. There is no throw trajectory or arc. Goes through walls — can flash enemies without blinding teammates by finding the right geometry.",
        usage: "Flash farther from yourself when peeking so your gun is out by the time it lands. Flash close to yourself only to disrupt enemy crosshair placement when you're not the one peeking. Combo with Aftershock: hide the flash inside the explosion — enemies focused on the Aftershock won't turn away from the flash.",
        key_insight: "The flash plus Aftershock combo hides the flash inside the explosion. Gets more valuable the higher you climb."
      },
      aftershock: {
        mechanics: "Three-burst explosive through walls with an activation delay. Kills Gecko's Wingman and interrupts plant entirely. Hard to see inside smokes.",
        usage: "Use as bait — enemies often push the activation delay, so place it and hold the angle instead of retreating. Stun plus Aftershock on cornered enemies: aim crosshair farther from the wall so you don't miss when they're forced to exit. Use to deny a spot for a few seconds while your team pushes."
      },
      rolling_thunder: {
        mechanics: "Ult. Large cone flash and stun through walls. Very long equip and use time — completely vulnerable while activating. Mouse movement during the animation can accidentally shift the direction.",
        usage: "Be in cover before activating — never use it while exposed. After ulting, don't chase; flash corners first — enemies crouch in corners and bait the chase. In post-plant 1v1, reposition instead of chasing so by the time the stun wears off you could be anywhere.",
        key_insight: "The ult's best use isn't the kills it gets directly — it's the repositioning advantage it gives you while the enemy is stunned."
      }
    }
  },
  skye: {
    role: "Initiator",
    core_philosophy: "Flash-based initiator who can play aggressively, especially early in rounds. Value comes from surprising enemies with unpredictable flashes and using her dog for info. Support role but capable of taking fights herself.",
    watch: [],
    abilities: {
      guiding_light: {
        mechanics: "Hawk flash that Skye can steer and activate on command. Activating it flashes everyone looking at it. Can be banked off walls.",
        usage: "Wait for footsteps before timing the flash — don't throw early. Smoke plus flash combo: when an enemy smokes a spot, flash into it to blind anyone holding the smoke exit. Ask teammates to jiggle an angle as bait, then flash from a different position and swing for a free kill.",
        key_insight: "If enemies haven't been fooled by your flashes yet, they're unlikely to predict them — play aggressively early and establish the threat before they adapt."
      },
      trailblazer: {
        mechanics: "Piloted dog that concusses enemies on contact.",
        usage: "Use for info and to clear angles you don't want to peek manually on attack."
      },
      regrowth: {
        mechanics: "Channeled heal targeting nearby teammates.",
        usage: "Call out that you have heal so teammates know to back off a fight instead of greedily going for a kill they might not get."
      }
    },
    economy: {
      guidance: "On attack gun rounds take full abilities — heal is a significant advantage. On defense buy ghost and heal to play aggressive. Don't buy Sheriff if you can't afford full abilities and full shield."
    }
  },
  fade: {
    role: "Initiator",
    core_philosophy: "Recon duelist — provides info like an initiator but plays on the frontlines like a duelist. Use utility selfishly on attack, supportively on defense. Her kit is designed for solo climbing because she doesn't rely on teammates to get value from her abilities.",
    watch: [],
    abilities: {
      haunt: {
        mechanics: "Thrown orb that lands and scans enemies in range, periodically pinging their positions. Landing position is determined by where you aim and throw — lineup spots exist for reliably landing on key areas of a site. The throw trajectory itself is irrelevant; only the landing position matters.",
        usage: "Throw at a high angle to cover the bomb site before executing. On defense, throw into smokes to scan enemies executing through them, then spray through smoke or penetrable walls. Call out to teammates before throwing on retakes so everyone pushes together off the scan. Save it until regenerated before initiating an execute.",
        key_insight: "Haunt controls when your team executes — you initiate the countdown. Don't throw it randomly; throw it right when your team is ready to go.",
        lineup_note: "When coaching Haunt placement mistakes, the drill is practicing landing spots — never 'arc' or trajectory practice, which doesn't exist for this ability."
      },
      seize: {
        mechanics: "Thrown cage that latches onto enemies in range and roots them. Tells you if someone is in the area by either latching or disappearing.",
        usage: "Use to clear specific corners without peeking. Save for post-plant to stop enemies from reaching the spike. Don't waste it during defaults — save it for executes or post-plant. On defense use it early at common push spots to catch enemies as they commit.",
        key_insight: "Post-plant Seize is your most powerful ability — it stops enemies from reaching the spike while confirming whether they're on it or not."
      },
      prowler: {
        mechanics: "Piloted beast that chases the nearest enemy and nearsights them on bite. Only nearsights — enemies can still see within 5m. Absorbs bullets while alive.",
        usage: "Follow it onto site during executes — it absorbs bullets until enemies destroy it. Save for executes, not defaults. Don't get too close to a bitten enemy — they can still see you within 5m. If it gets a bite in close quarters, have a teammate molly rather than taking that fight. On defense use it to buy time after getting flashed — it buys seconds to recover and fight back.",
        key_insight: "Prowler plus molly from a teammate on a bitten enemy in close quarters is a nearly guaranteed kill — coordinate the combo before executing."
      },
      nightfall: {
        mechanics: "Ult. Large wave that deafens and applies health decay to enemies caught in it.",
        usage: "Use on retakes — enemies caught in it are completely deaf and losing health. Makes retakes significantly easier. Use it whenever you have it on retake; don't save it."
      }
    },
    defense: {
      playstyle: "Play slightly more supportively than attack — throw haunt for your duelist to make first contact, then join the fight. Coordinate with duelist at round start to take map control together. Use Seize early at common push spots to catch enemies before they establish control."
    }
  },
  sage: {
    role: "Sentinel",
    core_philosophy: "Battle Sage — walls aren't just for blocking paths, they're for creating off angles, boosting to unexpected positions, and repurposing for multiple goals simultaneously. Every wall should serve more than one purpose.",
    watch: ["Grim"],
    abilities: {
      barrier_orb: {
        mechanics: "Large placeable wall. Extended wall technique: walk-jump off a ledge and place as your feet are level with the ledge for an extra segment. Crouch bug jump: jump next to a surface, hold crouch as you rise, release at apex — gets you on top of walls too tall to hop normally.",
        usage: "Always ask: can this wall do two things at once? Standard: block mid, cover a res, delay a push. Advanced: boost yourself to peek over smokes, create gap walls (small angle to peek through), or leave a pocket to hide in. On res walls, place so you can jump on top as it rises — enemies who peek to interrupt get caught off guard by you peeking from above. On eco rounds use walls to create angles that suit cheaper weapons like the Marshal.",
        key_insight: "When using a res wall, jump on top as it rises — enemies peeking to interrupt the res get caught off guard by you above them."
      },
      slow_orb: {
        mechanics: "Thrown orb that creates a slowing field on the ground. Layers with smokes — pushing slowly out of a smoke through a slow orb is usually a losing duel.",
        usage: "Jump peek when throwing — peeking normally with the orb in hand leaves you vulnerable with no gun out. Layer slow orbs into enemy smokes to lock down choke points.",
        key_insight: "Slow orb plus smoke layered together is almost impossible for enemies to play around."
      }
    }
  },
  chamber: {
    role: "Sentinel",
    core_philosophy: "Chamber is a sentinel who plays like a duelist. On defense his job is to take aggressive off angles with his TP as an escape — get a kill and TP out before getting traded. On attack he's best as a lurker. He's an OP specialist first and foremost.",
    watch: [],
    abilities: {
      trademark: {
        mechanics: "Placed trip that reveals and immobilizes enemies who trigger it. Can be bypassed by many abilities — Jett dash, Sage wall, Viper smoke, Yoru TP, and more.",
        usage: "Place behind your team on attack to cover the angle you are NOT watching — that is the entire point. Don't place it to cover an angle you're already holding. On defense use it to watch a second entry point so you can fully commit to your primary angle.",
        key_insight: "Trademark placement should always answer: what angle can I not afford to also watch right now? That's where it goes."
      },
      headhunter: {
        mechanics: "Pocket pistol at 100 credits per bullet. Extremely fast draw speed.",
        usage: "If you miss an OP shot, immediately switch to Headhunter — most enemies wide swing after hearing a miss. Crosshair placement over flicking — let enemies run into your crosshair.",
        key_insight: "Marshal plus Headhunter is usually a better bonus round buy than Outlaw — faster kill time and no slow reload when you miss."
      },
      rendezvous: {
        mechanics: "Two-anchor TP system. Fake TP tech: place TP, run into it, press TP button the instant you touch it — triggers the sound effect without actually teleporting, creating confusion about your position.",
        usage: "On defense take off angles enemies won't expect — get the kill and TP out before getting traded. The TP makes dangerous spots essentially free to play.",
        key_insight: "The TP makes off angles free — you can play spots that would be suicidal without an escape."
      },
      tour_de_force: {
        mechanics: "Ult. Operator with slowing field on kills.",
        usage: "Same crosshair placement principles as the OP — let enemies come to you. Pair with Headhunter for follow-up shots after missing."
      }
    },
    defense: {
      playstyle: "Play aggressively — take space, get picks, TP out. Master off angles. Buy OP as soon as possible."
    },
    attack: {
      playstyle: "Two options: place TP before entering site as an escape option, or lurk on the opposite side of the map while your team applies pressure. Lurking is generally stronger."
    },
    weapons: {
      recommendation: "Prefer Vandal over Phantom — you don't want to dink someone for 148 and have them get healed. Marshall plus Headhunter over Outlaw on bonus rounds."
    }
  },
  tejo: {
    role: "Initiator",
    core_philosophy: "High game-knowledge initiator who dominates through utility placement and timing. Every ability has a delay before exploding — you need to predict enemy positions, not react to them. Best in medium to high elo where you can read patterns and punish repetitive enemies. Not a low elo pick.",
    watch: [],
    abilities: {
      stealth_drone: {
        mechanics: "Piloted drone that reveals and suppresses enemies. Suppressed enemies cannot use abilities for 7 seconds.",
        usage: "On attack prioritize buying over stun when credits are limited. Scout bomb sites before executing; reveal and suppress enemies so they can't use stalling utility. Don't drone after teammates are already entering — you're too late, move in with them. On defense take early info and reveal enemies during executes.",
        key_insight: "Suppressing a sentinel shuts down their utility for 7 seconds — plenty of time to execute. Always destroy revealed sentinel setups before executing."
      },
      guided_salvo: {
        mechanics: "Two rockets that can be aimed independently. Resets after 40 seconds — often usable twice per round.",
        usage: "Use Guided Salvo first, then stun to cover escape routes — not the other way around. Place rockets to corner enemies with only one escape route, then stun that route. Don't use all utility on one enemy when it could set up a full execute. Don't place rockets in your own team's execute path. On defense use from long range to support without taking 50/50 gunfights.",
        key_insight: "When enemies are repetitive on defense, pre-fire Guided Salvo on their known positions before they even reach site — save your stun for follow-up."
      },
      special_delivery: {
        mechanics: "Thrown stun with bounce. Can be bounced around corners to catch enemies holding off angles.",
        usage: "On defense prioritize buying over drone when credits are limited. Use to finish off enemies flushed by rockets, deny early peeks, or combo with Guided Salvo to split enemies. On attack use to clear common positions during executes."
      },
      armageddon: {
        mechanics: "Ult. Bombs fall with a 3-second delay. Always use before Guided Salvo and Special Delivery so everything lands simultaneously.",
        usage: "Cover the largest common areas on site or trap enemies in specific locations. Never flush enemies toward your team — trap them with no escape. Use it when it guarantees winning a round where you're at a numbers or economy disadvantage. Don't save it.",
        key_insight: "Ult from behind the enemy relative to your team's push — enemies get trapped between the bombs and your team with nowhere to go."
      }
    }
  },
  gekko: {
    role: "Initiator",
    core_philosophy: "Gekko is a self-sufficient initiator with recoverable utility. His unique advantage is being able to reuse Dizzy and Thrash, making him more resource-efficient than other initiators. Strategic planning around recovery is the core skill.",
    watch: [],
    abilities: {
      dizzy: {
        mechanics: "Blinds enemies who look at it. Recoverable — can be picked up and reused. Easy to destroy if enemies have awareness.",
        usage: "Before throwing ask: am I flashing for info or for contact? Will it cover common angles? Can I recover it safely? Throw upward from behind cover for off-angle flashes that reach max height and are easy to recover. Pair with another agent's flash simultaneously — Dizzy alone is easy to destroy. Only skip recovery if it would cost you a numbers advantage.",
        key_insight: "Dizzy is most powerful when paired with another agent's flash simultaneously. Enemies have to deal with two flashes at once and can't dodge both."
      },
      wingman: {
        mechanics: "Companion that can plant or defuse the spike. Can clear corners — concusses enemies on detection. Tanks Viper snake bite despite being vulnerable to other damage util. Recoverable.",
        usage: "Never send alone without cover — use smokes while he plants or defuses. Main value is defusing while you hold active angles. Trick: have a teammate half-defuse then release — Wingman continues to the spike creating the illusion you backed off to fight. Swing immediately when he detects someone or wait for the concuss.",
        key_insight: "The half-defuse handoff to Wingman is one of the most deceptive plays in the game — enemies think you disengaged from the defuse but Wingman keeps going."
      },
      mosh_pit: {
        mechanics: "Molly that deals damage slowly then bursts. Not recoverable — Gekko's only one-use-per-round util. Same trajectory as KJ and KAY/O mollies so existing lineups transfer. More damage at center than edges.",
        usage: "Only use with a combo or confirmed position — it's your only non-recoverable util. Combo with grab net, slow orb, concuss, or vulnerable for maximum value. Aim at center of a group or position, not the edge.",
        key_insight: "The slow damage buildup works in your favor — enemies often don't react fast enough and take the full burst."
      },
      thrash: {
        mechanics: "Ult. Recoverable and usable twice per round. Detains enemy on detonation. Press X to end without detonating when recovering. Double-click to detonate instantly at short range. Moves forward automatically — no need to hold W; air strafe with A and D to make it harder to destroy.",
        usage: "First use to clear space and let team plant, recover it, second use for retake or post-plant. Double-click detonation at close range catches enemies trying to juke the normal jump distance.",
        key_insight: "Getting two ult uses per round is Gekko's biggest advantage. Never detonate unless you get value — pressing X recovers it for the second use."
      }
    }
  },
  kayo: {
    role: "Initiator",
    core_philosophy: "KAY/O is a disruptor. His job is to stop enemy pushes mid-execution and set up flash traps for teammates. Two roles: disrupt enemy plans with knife and suppression, and create aggressive or passive flash setups to get teammates kills.",
    watch: [],
    abilities: {
      zero_point: {
        mechanics: "Thrown knife that suppresses enemies and scans for nearby targets. Suppressed enemies can't use abilities. Sticks to surfaces.",
        usage: "Use cross-map lineups to have presence in two parts of the map simultaneously. Throw knife to suppress enemies mid-rush before they fully commit — forces them to scramble or change plans. If knife scans enemies you know where they are and can rotate teammates. If it scans nothing, that's info too.",
        key_insight: "Suppressing a sentinel or key ability user mid-round is often more valuable than the info. KJ lockdown, Cypher camera, Viper wall — all shut off instantly."
      },
      flash_drive: {
        mechanics: "Two modes — the walk backwards throw suspends the flash in the air, creating a pop flash. Standard throw is a faster, more predictable arc.",
        usage: "Communicate to teammates which mode you're running. Aggressive: throw into contested space for teammates to immediately push. Passive: wait for enemies to peek and flash them as they do. Use in-game pings to estimate distance for on-the-fly flashes. Can self-flash off a cross-map knife setup to be aggressive yourself.",
        key_insight: "The walk backwards throw is KAY/O's best pop flash tool — slows and suspends the flash. Learn it for improvised setups when you don't have a lineup memorized."
      },
      frag_ment: {
        mechanics: "Molly that goes through walls and floors. More damage at center than edges.",
        usage: "Best combo: flash first, molly lands simultaneously — the flash pushes enemies into the molly zone. Don't throw it alone without a combo or confirmed position. Aim at center, not the edge of a group or area.",
        key_insight: "Molly + flash combo is KAY/O's highest value play. The flash pushes enemies into what they think is a safe zone, then the molly punishes them for being there."
      },
      null_cmd: {
        mechanics: "Ult. KAY/O suppresses all enemies in range and pulses periodically. KAY/O is completely stationary and vulnerable while pulsing. If downed while pulsing, teammates can res him.",
        usage: "Pop in a safe position — you're a stationary target while it runs. Best used when your team is winning a fight and needs suppression to close it out, or to counter a specific enemy ult before it's used. Don't save it for late round when enemies have already used their ults.",
        key_insight: "Coordinate with your team so someone is always close enough to attempt the res. A revived KAY/O still pulsing is a win condition."
      }
    },
    attack: {
      primary_job: "Follow your duelist. Knife to suppress sentinels or close enemies. Molly to clear corners and reduce angles. Flash to get duelist onto site. Post-plant: use remaining flashes aggressively to counterfight retakers.",
      key_insight: "KAY/O on attack is about removing obstacles for your entry. Suppress the sentinel, clear the corner, flash the duelist in — then be ready to fight yourself."
    }
  },
  iso: {
    role: "Duelist",
    core_philosophy: "Iso is a second entry duelist — like Reyna or Phoenix, his kit is built around winning fights after initial contact has been made, not opening space himself. He needs good mechanics and is a strong solo carry option, but he needs someone else to make first contact so he can trade in with his shield active.",
    watch: [],
    abilities: {
      double_tap: {
        mechanics: "Activating Double Tap immediately gives Iso a shield. When Iso gets a kill, an orb spawns — shooting the orb refreshes the shield (restores it if broken, or just extends the timer if it's still active). The orb is shot, not walked over. Only Iso's own kills spawn orbs.",
        usage: "Activate proactively going into a fight — you get the shield immediately on activation, not after a kill. Use jump spotting to confirm a target before activating. Get the kill, shoot the orb to refresh, push into the next fight still shielded. This is the core loop: activate → fight → kill → shoot orb → fight again. Don't wait for kills before activating — you need the shield for the first fight, not after it.",
        key_insight: "Double Tap is a chain-fighting tool. The shield gets you through first contact; the orb sustains you through second contact. Iso's job is to go second into a fight where someone else already made contact, so his shield is refreshed from the first kill before he even reaches the site."
      },
      undercut: {
        mechanics: "Thrown card that applies vulnerable (increased damage taken) and silences abilities in the area.",
        usage: "Use to deny drone info, cancel Gekko ult, or shut down rushes through choke points. If enemies push through it they die faster — if they stop, you've bought time for teammates to rotate.",
        key_insight: "Most players only think of vulnerable as damage amplification. The silence is equally valuable — throw it on a Sova about to drone to instantly deny all that information."
      },
      contingency: {
        mechanics: "Moving wall that blocks bullets. Travels forward from where it's placed.",
        usage: "Think of it as a moving smoke. Follow it onto site and isolate close angles — clear left and right as the wall moves forward, then look ahead once it passes those angles. On defense, save it for retakes — same principle applies.",
        key_insight: "The wall lets you entry without holding every angle simultaneously. As the wall passes an angle, you no longer need to worry about it — focus forward."
      },
      kill_contract: {
        mechanics: "Ult. Pulls a single enemy into a 1v1 arena. Both players enter with full HP; Iso keeps his Double Tap shield if active. Arena has a central wall — both players spawn on opposite sides.",
        usage: "Time it so your team is ready to push when you ult — if you lose the duel the enemy gets a free teammate. Prioritize targets: OP holders first, Jett with active knives, then sentinels. When ulting an OP holder, hide behind the central wall with shield up — zero risk of losing that duel. Lower ping: hold a sliver on one side of the wall so the enemy can only spawn on one side. Higher ping: hide behind wall, wait for it to drop, strafe immediately when walls fall. Either way, strafe the moment walls drop — dodge their initial flick.",
        key_insight: "Never ult while your team is far back. If you lose the 1v1 the enemy walks out of the arena as a free defender. Ult as a closer when your team is about to push, not as a solo play."
      }
    }
  }
};

export const MAP_KNOWLEDGE = {
  ascent: {
    sides: "Slightly defender-sided.",
    notes: "Market is the building connecting mid to B site. Swinging market from mid means you're taking a position that holds the B main walkout — you're not pushing into B site, you're covering the connector that attackers use coming from B main.",
    callouts: {
      "A main": "Narrow attacker entry lane to A site",
      "A lobby": "Attacker staging area before A main",
      "gelato": "Corner area near A lobby",
      "A orb": "Orb location on A side",
      "A cubby": "Cubby near A site entry",
      "A site": "Open bomb site with multiple boxes",
      "generator": "Large box on A site, common defender anchor",
      "ardiis": "Position on A site near door",
      "door": "Door area on A site",
      "tree": "Open area connecting A site and mid",
      "hell": "Lower area on A site",
      "heaven": "Elevated position above A site",
      "heaven hall": "Hallway leading to heaven",
      "jump up": "Boost/jump spot onto A site",
      "window": "Key position overlooking A site",
      "garden": "Area near window and A site",
      "dice": "Box on A site",
      "site pillar": "Pillar on A site",
      "wine": "Flank position on A site",
      "A link": "Connector between A site and mid",
      "B main": "Primary attacker entry to B site",
      "B orb": "Orb location on B side",
      "B cubby": "Cubby near B main",
      "B lobby": "Attacker staging area before B main",
      "B lane": "Lane on B side",
      "B site": "More closed than A, with box structures",
      "double": "Double box on B site",
      "triple": "Triple box on B site",
      "dragon": "Wallbang spot on B site",
      "boathouse": "Back site B position",
      "switch": "Room with the door mechanic on B site",
      "B stairs": "Stairs on B site",
      "market": "Building in mid connecting mid to B site — key defender hold covering B main walkout",
      "door plat": "Platform near market door",
      "logs": "Position near market",
      "mid / bottom mid": "Central area connecting both sites",
      "top mid": "Upper mid area",
      "pizza": "Corner near mid, common lurk spot",
      "catwalk": "Elevated walkway connecting attacker side to B link",
      "fountain": "Fountain area in mid",
      "bench": "Bench position in mid",
      "mid cubby": "Cubby in mid",
      "tiles": "Mid connector area",
      "subroza": "Position in mid",
      "CT": "Defender spawn"
    }
  },
  bind: {
    sides: "Slightly attacker-sided.",
    callouts: {
      "T": "Attacker spawn",
      "CT": "Defender spawn",
      "A site": "Bomb site A",
      "truck": "Large box on A site, common cover and plant position",
      "default": "Default plant area on A site",
      "triple / tetris": "Box stack on A site",
      "bench": "Elevated position on A site",
      "u-hall / lamps": "Corridor leading into A site",
      "pillar": "Pillar near A site entry",
      "pipes": "Defender-side area connecting backsite A to CT",
      "heaven": "Elevated position overlooking A site",
      "barrel": "Cubby on backsite A",
      "ninja": "Tight corner on A site, common hiding spot",
      "showers": "Enclosed corridor connecting T spawn to A site, critical chokepoint",
      "lobby": "Area near showers and A site approach",
      "stairs": "Stairs near A side",
      "arches": "Area connecting A side to cave",
      "a tp": "Teleporter from A short to B short",
      "cubby": "Cubby in A short",
      "short": "Short connector on A side",
      "cave": "Connector between A and B side",
      "B site": "Bomb site B",
      "tube": "Enclosed area on B site",
      "elbow": "Corner area near B site entry",
      "b pocket / cubby": "Pocket position on B site",
      "backhall": "Corridor behind B site connecting to CT",
      "hookah": "Enclosed room and window area connecting to B site, key chokepoint",
      "b short": "Mid area on B side",
      "fountain": "Area near B long approach",
      "long": "Long approach on B side",
      "roof": "Elevated position near B site",
      "garden": "Area connecting B long to B site",
      "b tp": "Teleporter connecting B side to A short"
    }
  },
  split: {
    sides: "Defender-sided.",
    callouts: {
      "T spawn": "Attacker spawn",
      "CT spawn": "Defender spawn",
      "A site": "Bomb site A",
      "A pillar": "Pillar on A site",
      "map": "Box on A site",
      "slant": "Backsite A position",
      "elbow": "Corner on A site near screens",
      "A back": "Backsite A area",
      "screens": "Area connecting A site to CT",
      "A heaven / A tower": "Elevated position above A site",
      "A rafters / catwalk": "Elevated catwalk on A site",
      "A hell": "Lower area beneath A site",
      "flowers": "Position under A catwalk",
      "A short": "Short connector to A site",
      "A ramps": "Ramps leading up to A site, key attacker chokepoint",
      "A main": "Primary attacker entry to A site",
      "A lobby": "Attacker staging area near A main",
      "sewer": "Underground connector between A and B side",
      "vents": "Vent system connecting mid to B site",
      "ropes": "Rope area in mid",
      "top mid": "Upper mid area",
      "bot mid": "Lower mid area",
      "orange": "Area in mid",
      "mail": "Mid area near B side",
      "B site": "Bomb site B",
      "B pillar": "Pillar on B site",
      "B back": "Backsite B position",
      "t3xture": "Tight corner on B site, common hiding spot",
      "spammable": "Spammable wall on B site",
      "default": "Default plant area on B site",
      "new box": "Box on B site",
      "B rafters / catwalk": "Elevated catwalk on B site",
      "B tower": "Elevated position above B site",
      "B hell": "Lower area beneath B site",
      "B stairs": "Stairs leading from CT spawn to B tower",
      "B main": "Primary attacker entry to B site, includes garage, pizza and moto areas",
      "ramen": "Connects B lobby to mid",
      "back pillar": "Pillar near B backsite"
    }
  },
  haven: {
    sides: "Slightly attacker-sided.",
    callouts: {
      "T spawn": "Attacker spawn",
      "CT": "Defender spawn",
      "A site": "Bomb site A",
      "A box": "Box on A site",
      "heaven": "Elevated position above A site",
      "hell": "Lower area beneath A site",
      "heaven stairs": "Stairs leading up to heaven",
      "A link": "Connector between B site and A site",
      "sewer": "Alternate route from A lobby into A site",
      "lobby": "Area connecting CT to A sewer and A long",
      "A long": "Long attacker approach to A site",
      "B site": "Bomb site B",
      "generator / gen": "Large box on B site",
      "B backsite": "Back area of B site",
      "gong": "Area near B site",
      "garage": "Central area connecting mid, garage window, and C site",
      "garage window": "Window connecting garage to C link",
      "B ramp": "Ramp leading to B site",
      "grass / mid": "Central open area of the map",
      "window": "Window position in grass area",
      "C site": "Bomb site C",
      "C box": "Box on C site",
      "logs": "Position near C site",
      "plat": "Elevated platform on C site",
      "C long": "Long attacker approach to C site",
      "C lobby": "Area including dragon and dragon arch near C long",
      "C link": "Connector accessible from B site, C site, and garage window",
      "cubby": "Cubby on C long"
    }
  },
  pearl: {
    sides: "Balanced.",
    callouts: {
      "T spawn": "Attacker spawn",
      "CT spawn": "Defender spawn",
      "A site": "Bomb site A",
      "church": "Position on A site",
      "A dugout / pit": "Dugout area on A site",
      "A flowers": "Connects A site to CT",
      "A secret": "Alternate route connecting A site to CT",
      "A main": "Primary attacker entry to A site",
      "A lobby": "Attacker staging area before A main",
      "A art / A link": "Connector between A site and mid",
      "mid top": "Upper mid area",
      "mid": "Central area of the map",
      "mid doors": "Connects mid to B street",
      "mid connector / Y": "Connector below mid linking to sewers and B street",
      "sewers": "Connects CT spawn to mid connector",
      "B site": "Bomb site B",
      "B screen": "Screen position on B site",
      "B hall": "Hall area on B site",
      "B tower / heaven": "Elevated position on B site",
      "B lobby": "Attacker staging area including shops and club",
      "B main": "Primary attacker entry to B site",
      "street / B link": "Connector between mid and B site"
    }
  },
  lotus: {
    sides: "Attacker-sided.",
    callouts: {
      "T spawn": "Attacker spawn",
      "CT spawn": "Defender spawn",
      "A site": "Bomb site A",
      "A hut": "Hut position on A site",
      "A stairs": "Stairs on A site",
      "A heaven": "Elevated position above A site",
      "A drop": "Alternate exit from A heaven onto A site",
      "A tree": "Area connecting A door to A site",
      "A door": "Entry connecting to A tree",
      "A rubble": "Rubble area near A main",
      "A root": "Position near A main",
      "A main": "Primary attacker entry to A site",
      "A lobby": "Attacker staging area before A main",
      "breakable / broken": "Connector between A site and B site, name depends on whether door is intact or destroyed",
      "B site": "Bomb site B",
      "B heaven": "Elevated position above B site",
      "B main": "Primary attacker entry to B site",
      "B pillars": "Pillars near B main entry",
      "C waterfall": "Waterfall area connecting B site to C site",
      "C link": "Connector between C site and mid",
      "C site": "Bomb site C",
      "C bend / elbow": "Corner position on C site",
      "C main": "Primary attacker entry to C site",
      "C door": "Connects B main to C mound",
      "C mound": "Mound position near C main",
      "C lobby": "Attacker staging area before C main"
    }
  },
  breeze: {
    sides: "Attacker-sided.",
    callouts: {
      "T spawn": "Attacker spawn",
      "CT spawn": "Defender spawn",
      "A site": "Bomb site A",
      "A pyramids": "Pyramid structures on A site",
      "strap / cleavage": "Position between the two pyramids on A site",
      "A cubby": "Cubby on A site",
      "yellow / orange": "Colored box on backsite A",
      "A bridge": "Bridge connecting CT to A site",
      "tunnel": "Connector from CT to A site",
      "A lobby": "Attacker staging area before A site",
      "B site": "Bomb site B",
      "bend / elbow": "Back area of B site",
      "ladder": "Close left when exiting B main as attacker, close right on defense",
      "pocket": "Close right when exiting B main as attacker, close left on defense",
      "B tunnel": "Connects top mid to B site",
      "B elbow": "Connects B main to top mid",
      "B main": "Primary attacker entry to B site",
      "B window": "Behind B main looking into B site",
      "half wall": "Half wall on B site",
      "mid top": "Upper mid area",
      "mid bottom": "Lower mid area",
      "mid nest": "Elevated nest position in mid",
      "double doors": "Connects mid to A site",
      "mid pillar": "Pillar in mid",
      "mid cannon": "Connects B main and B window to B lobby and mid bottom",
      "mcdonalds": "Defender entry to B site from CT"
    }
  },
  fracture: {
    sides: "Attacker-sided.",
    callouts: {
      "T spawn": "Attacker spawn",
      "CT spawn": "Defender spawn",
      "A site": "Bomb site A",
      "A main": "Primary attacker entry to A site, includes A hall",
      "A drop": "Drop onto A site, connects to A dish",
      "A dish": "Connects to A drop",
      "A door": "Connects to sands and A main",
      "sands": "Connects A door to A site and A main",
      "A heaven": "Elevated position on A site",
      "CT": "Connects to A site via A link and to B site via B generator and B canteen",
      "B site": "Bomb site B",
      "B main": "Primary attacker entry to B site",
      "B heaven": "Elevated position above B site, connects to B arcade",
      "B generator": "Connects B site to CT",
      "B canteen": "Connects B site to CT",
      "B arcade": "Alternate entry to B site connecting to B heaven and B site",
      "B bench": "Area behind B arcade",
      "B underpass": "Route between B main and B arcade passing under generator and canteen",
      "B lobby": "Attacker staging area before B main"
    }
  },
  icebox: {
    sides: "Defender-sided.",
    callouts: {
      "T spawn": "Attacker spawn",
      "CT": "Defender spawn",
      "A site": "Bomb site A",
      "rafters / heaven": "Elevated position above A site",
      "hell": "Lower area beneath A site",
      "screens": "Area near A site entry",
      "gen": "Box on A site",
      "410": "Box on A site with '410' written on it",
      "maze": "Area near A site",
      "pipes": "Pipes area near A site",
      "stairs": "Stairs connecting CT to A site",
      "nest": "Elevated position on the attacker side of A site",
      "gate / prison": "Position near A site",
      "belt": "Belt area on A side",
      "boiler": "Boiler area connecting mid to A site",
      "B site": "Bomb site B",
      "snowpile": "Snowpile position on B site",
      "bridge": "Bridge on B site",
      "danger": "Position on B site",
      "default": "Default plant area on B site",
      "yellow": "Yellow container on B site",
      "green": "Green container on B site",
      "cubby / B main": "Primary attacker entry to B site",
      "orange": "Orange area on B site",
      "blue": "Blue area connecting mid to B site",
      "tube": "Tube connector in mid",
      "garage": "Garage area near T spawn connecting to mid",
      "hut": "Hut position near CT",
      "kitchen": "Kitchen area near CT",
      "halls": "Halls connecting CT area to B site",
      "snowman": "Snowman position on B side"
    }
  },
  abyss: {
    sides: "Balanced.",
    callouts: {
      "T spawn": "Attacker spawn",
      "CT spawn": "Defender spawn",
      "A site": "Bomb site A",
      "A tower / heaven": "Elevated position above A site",
      "A bridge": "Bridge on A side",
      "A vent": "Connects mid catwalk to A heaven",
      "A link": "Connector from CT to A site",
      "A secret": "Route from CT to A side",
      "A main": "Primary attacker entry to A site",
      "A lobby": "Attacker staging area before A main",
      "B site": "Bomb site B",
      "B tower / heaven": "Elevated position above B site",
      "B link": "Connector from CT to B site",
      "B danger": "Spot on B main where you can jump over onto B site",
      "B nest": "Nest position on B side",
      "B main": "Primary attacker entry to B site",
      "B lobby": "Attacker staging area before B main",
      "mid top": "Upper mid area",
      "mid library": "Library area in mid",
      "mid catwalk": "Catwalk in mid",
      "mid bend": "Bend area in mid",
      "mid bottom": "Lower mid area"
    }
  },
  sunset: {
    sides: "Balanced.",
    callouts: {
      "T spawn": "Attacker spawn",
      "CT spawn": "Defender spawn",
      "A site": "Bomb site A",
      "default": "Default plant area on A site",
      "slant / gen": "Position on A site",
      "elbow": "Corner position on A side",
      "A link / top short": "Connector from CT to A site",
      "alley": "CT side alley near A link",
      "A short": "Short connector to A site",
      "A lobby": "Attacker staging area near A main",
      "A main": "Primary attacker entry to A site",
      "B site": "Bomb site B",
      "backsite": "Back area of B site",
      "glass": "Glass position on B site",
      "palm": "Palm position on B site",
      "headshot / jump-up": "Jump-up position on B site",
      "cubby / pocket": "Cubby position on B site",
      "TenZ": "Box in market area",
      "market": "Market area connecting B site to mid",
      "door": "Door in market area",
      "B link": "Connector from CT to B site",
      "boba": "CT side position near B link",
      "B main": "Primary attacker entry to B site",
      "B lobby": "Attacker staging area before B main",
      "top mid": "Upper mid area",
      "bottom mid": "Lower mid area",
      "ledge": "Ledge position in mid",
      "pillar / grave": "Pillar position in mid",
      "tiles": "Tiles area connecting mid to A lobby"
    }
  },
  corrode: {
    sides: "Balanced.",
    callouts: {
      "T spawn": "Attacker spawn",
      "CT": "Defender spawn",
      "A site": "Bomb site A",
      "front site": "Front area of A site",
      "backsite": "Back area of A site",
      "elbow": "Corner position on A side",
      "close box": "Box close to A site entry",
      "close corner": "Corner near A site entry",
      "A link": "Connector from mid to A site",
      "A main": "Primary attacker entry to A site",
      "A lobby": "Attacker staging area before A main",
      "B site": "Bomb site B",
      "heaven": "Elevated position above B site",
      "hell": "Lower area beneath B site",
      "B elbow": "Corner position on B side",
      "right box": "Box on B site",
      "close left": "Close left position on B site",
      "B link": "Connector from mid to B site",
      "B main": "Primary attacker entry to B site",
      "B lobby": "Attacker staging area before B main",
      "china": "Area near B main",
      "top mid": "Upper mid area",
      "bot mid": "Lower mid area",
      "window": "Window position in mid",
      "stairs": "Stairs connecting mid areas"
    }
  }
};

export const GENERAL_KNOWLEDGE = {
  terminology: {
    swinging_a_smoke: "Peeking out of a smoke — either your own or the enemy's. The player steps out from the edge of the smoke to take a fight, using the smoke as cover to obscure their position before the peek.",
  },
  game_sense: {
    positioning: {
      summary: "Positioning is about putting question marks in the enemy's head — making them uncertain where you are and forcing them to use util or bodies to find out.",
      role_objectives: {
        duelist_attack: "Make space, push lines back, create gaps for teammates. Drag crosshairs and live as long as possible. You are NOT there to get kills first — you're there to open space.",
        initiator_attack: "Second contact. Support your duelist with util, follow up to keep space and get trades.",
        controller_sentinel_attack: "If not lurking, be last contact. Close out rounds, deny post-plant floods. If lurking, be a nuisance — take space, force reactions, don't commit.",
        duelist_defense: "Get early picks, deny neutral space. If you give up first pick, consider the round gone.",
        initiator_defense: "Support duelist on early fights. After first contact, fall back and use util to stall pushes.",
        controller_defense: "Play in position. Smoke both sides on equal buys.",
        sentinel_defense: "Anchor. If they're not pushing your site, stay near it to hear pivots. If they push, get one and live or get two and die — trust your gut."
      },
      question_mark_positioning: "Take space across the map simultaneously with little util, then shift away and leave only the impression of control. Forces enemies to spend util or bodies reclaiming space that's already been abandoned.",
      discipline: "High level players know they can take a 50/50 and win, but instead play patiently and force a worse fight later. Having the discipline to NOT swing when you could is what stops you from throwing rounds you should win."
    },
    attack_structure: {
      not_exhaustive: "These are the common, foundational structures — NOT a fixed rulebook. Any distribution of the 5 players is possible and teams improvise constantly; the labels are just descriptive conventions. The only hard requirements: the bodies total 5, and the label matches what's actually being sent (don't call a 3-man hit 'fast'). Don't present these as the only legal options.",
      hit_types: "The distribution of the 5 players defines the play. FAST HIT / RUSH = 4-5 players committing through ONE entry together to overwhelm the site before defenders set up or rotate (at most 1 true lurker). SPLIT = the same site hit from TWO directions whose timing converges, e.g. 3 through A main + 2 through mid into A — the mid players are part of the hit, not lurkers. INFO SETUP (e.g. 3-1-1) = group 3 in one area while 1 and 1 spread to mid / other sites to read where the defense is weak, then commit off that read — slower and more passive (less favored in ranked but a real structure, not the same as a split). DEFAULT / SLOW = spread out (roughly 1-1-1-1-1) to take neutral space and info, then commit.",
      fast_hit_needs_bodies: "A play you call 'fast' or a 'rush' must send AT LEAST 4 to that one entry. If only 3 go to the site, it is NOT a fast hit — it's a split or a slower hit, and it should be labeled as such.",
      lurkers_vs_split_prongs: "A true LURKER plays the opposite side of the map for flank/info and does NOT converge on the site — usually at most 1. Players who peel off the main entry but still attack the SAME site from another angle (e.g. 2 going mid-to-A) are a SPLIT PRONG, not lurkers. You CAN run more than one player off the main entry — it just turns a fast single-entry rush into a split or a slower hit, which is a legitimate choice.",
      bodies_must_add_up: "Players always total 5 and the split of bodies must match the label. Don't call something 'Fast A' while sending only 3 to A — either send 4-5 (fast) or call it the split / slow hit it actually is.",
      key_insight: "Match the name to the manpower. Fast = 4-5 one entry with ≤1 true lurker; Split = e.g. 3+2 converging on one site; Slow/default = spread for info then commit. The common scripting mistake is labeling a 3-man hit 'fast'."
    },
    timing: {
      summary: "Swing when the enemy isn't looking at you — specifically on spaces where they have to clear multiple angles while moving. Works in solo queue, not team-dependent.",
      key_insight: "Peeking on timing is one of the most underused tools in ranked. Study where enemies have to look away from your angle to clear something else, and swing in that window."
    },
    conditioning: {
      summary: "Make the enemy accustomed to a pattern over multiple rounds, then exploit their adaptation.",
      play_variety: "Varying plays keeps you unpredictable, but there is NO rule against repeating a play — including back-to-back. If a play is working, running it again is often the correct choice, and deliberately repeating to set up a later break (conditioning) is a real tool. Don't tell players they must never repeat a play or always cycle.",
      key_insight: "Conditioning only works if you follow through on the exploit. Don't condition something you never plan to abuse."
    },
    economy: {
      team: "Never save on pistol. Win pistol -> force next round (outlaw strong). Lose pistol -> save, maybe force one outlaw. Always force together or save together — split economy kills rounds.",
      hero_rifling: "Buy vandal/phantom on team eco round — don't take first contact. Let enemies shoot your teammates, be there to trade and make their deaths count. Damages enemy economy while your team barely spends."
    },
    utility: {
      flash_hoarding: "Unused utility at round end is wasted utility. Never advise saving flashes for hypothetical future scenarios — a flash that creates value now is better than a flash held for a clutch that may never come. 'Save your flash in case' is harmful advice that teaches bad habits.",
      key_insight: "Agent utility is best learned by watching a pro play that specific agent and consciously understanding why they do everything. No amount of theory replaces watching TenZ for Jett or mw1 for Viper. Look up the pro who plays your agent best and study their decisions."
    },
    agent_comp_reads: {
      summary: "Read the enemy comp on loading screen and identify what they're missing.",
      examples: [
        "No smokes -> abuse long angles and snipers",
        "No initiator -> play corners freely",
        "No pop flashes or drones -> play off angles all game",
        "No dive agents -> sit on site with smoke down, spam freely when reloading",
        "No flank trips (Viper/Sage) -> threaten flanks often to condition them"
      ],
      key_insight: "Eco rounds are for high-risk creative plays. You're probably losing anyway — try something unpredictable. Creativity makes you impossible to read."
    },
    ultimate_economy: {
      summary: "Check tab before making calls. If enemy is one orb from ult, don't give them the orb. If your teammate has had ult for 3 rounds, build a plan around it.",
      when_to_ult: "Ult to secure rounds you could lose or to flip rounds you should lose. Don't ult unwinnable rounds. Don't hold ult — you're throwing free value away every round you sit on it.",
      ult_tracking: "Track enemy ults every round. Certain ults telegraph site hits — if KJ has ult on Haven, there's an 80% chance they go A. If Phoenix is at 5/6 ult points, his team is fighting for orb control. Read these patterns and prepare counter plays."
    },
    movement: {
      peeking: {
        summary: "Most players default to wide swinging everything. Wide swinging exposes you to too many angles and makes crosshair placement harder. Learn when to use each type.",
        types: {
          wide_swing: "High risk — exposes you to multiple angles at once. Only use when you have strong info on one specific angle and need to get off it fast.",
          jiggle: "Low commitment — gather info without fully exposing yourself. Use to bait shots and get info on whether someone is holding.",
          tight_peek: "Slice a small piece of the angle at a time. Easier flick, less exposure to multiple enemies. Default to this more often."
        },
        key_insight: "There's no one-size-fits-all peek. The mistake is using the same peek every time — learn the scenarios for each."
      },
      angle_advantage: {
        summary: "Stay further from walls. When you peek or get peeked from further back, you have an extra fraction of a second to react and line up your shot.",
        key_insight: "Valorant is a game of milliseconds. Consistently giving your opponent angle advantage is consistently giving them a free edge in every fight."
      },
      strafe_battles: {
        summary: "Most players either micro step or stand still — both are wrong.",
        mistakes: [
          "Micro stepping — barely moves you on the enemy screen, so they barely need to aim. You're making it hard for yourself while making it easy for them.",
          "Standing still to flick — you're a static target, they have all the time in the world.",
          "Panic spraying and crouching — only works with Phantom, not recommended otherwise."
        ],
        fix: "Take longer strafes. Give yourself half a second more to line up the shot. You'll hit it far more consistently than rushing micro steps."
      },
      unwinnable_fights: {
        summary: "When someone peeks you unexpectedly, don't stand still and try to flick. Move to dodge their first bullet, line up your shot while moving, then take it.",
        key_insight: "Standing still = easy target. Movement = dodge their first shot AND gives you time to aim. Use movement as a defensive tool, not just an offensive one."
      },
      position_for_movement: {
        summary: "Before taking a position, ask: does this allow me to move if I get caught?",
        key_insight: "Tight corners and ledges trap you. If you get into a fight from a position that limits your movement, you have to hit your first shot or you die. Give yourself room to move."
      },
      after_shooting: {
        summary: "Whether you hit the shot or miss — move instantly. Never stand still after firing.",
        key_insight: "Standing still after a shot is one of the most common ways to die in a fight you should have won. Miss or hit, move immediately and reset."
      }
    },
    minimap: {
      summary: "The minimap is one of the most powerful tools in the game. Most players ignore it entirely.",
      when_to_use: [
        "Round start — check teammate positions, identify gaps to fill",
        "Kill feed pops — see who died and what gaps open up",
        "While rotating or flanking — are teammates committing? Is it safe?",
        "While jiggling an angle — you're not in an immediate fight, glance the map",
        "Waiting behind cover or in smoke — read teammate vision cones for crossfire timing"
      ],
      key_reads: [
        "Sentinel + smoke spotted together = likely five man push, push flank or fast rotate",
        "Only sentinel on minimap = probably a lurk, real hit is elsewhere",
        "Enemy spotted on C then appears on A = they rotated, likely hitting A"
      ],
      key_insight: "Even if you spot an enemy for only 0.1 seconds, they appear on the minimap. You don't need to hard stare at angles — a glance is enough to get the info onto the map."
    },
    map_control: {
      summary: "Map control is vision — yours, your teammates', and what your utility provides. More control = more info = better decisions.",
      zones: {
        opening_zone: "Contested immediately when spawn barriers drop. How you play these determines map control over everything else.",
        intermediate_zone: "Neutral space between opening zones and site. The fight for this space is where rounds are decided.",
        final_zone: "The bomb site itself — front site, mid site, back site."
      },
      why_it_matters: "Map control on attack lets you avoid flanks when a push fails. Map control on defense lets you avoid getting pinched. Without it you're reacting blind."
    },
    round_phases: {
      phase_0: "Planning. Attackers decide: split push, four-one, fake, or execute. Predict defender setup and what util will give you trouble.",
      phase_1: "Fight for opening zones, run defaults to gather info. Goal is info first, baiting util second, picks third — not the other way around.",
      phase_2: "Make decisions from what you learned. Identify weak side vs strong side. Someone needs to make the call — if no one does you run out of time."
    },
    defaults: {
      purpose: "Get info first. Bait out important enemy util. Force defenders to burn smokes, drones, flashes early so they don't have them on site.",
      attacker_setups: {
        "2-1-2": "Safest. Most info, best against aggressive plays.",
        "1-3-1": "Split push toward any site.",
        "1-0-4": "Fake or cancel — apply pressure one side while actually hitting the other."
      },
      common_mistakes: [
        "Dying alone going for picks — you lose your util and your space",
        "Getting spread across the map in phase 2 and never grouping up to actually hit a site",
        "Treating defaults as a pick-hunting exercise instead of an info-gathering one"
      ]
    },
    defender_setups: {
      push_zone: "High risk, high reward. Good counter to stack executes. Push out, get info by elimination, take space.",
      hold_zone: "2-1-2 is safest. Covers all chokes, most info, best against aggressive plays.",
      yield_zone: "Play on site. Goal: kill one and play retake, or just stay alive long enough for teammates to rotate. Either is fine — dying early for zero value is not.",
      conditioning_on_defense: "If you never fight opening zones, attackers use zero util to take space. Make them burn flashes, drones, and dashes early by being unpredictable with your peeks. This makes retakes dramatically easier."
    },
    round_summary_categorization: {
      execute_speed: "Treat any execute as fast unless the notes explicitly say otherwise (slow walk, contact, timed, etc.). 'All 5 A' with no speed note = fast A.",
      mid_positioning: "Bottom mid, top mid, market, and swinging market smoke are all sub-categories of 'starts mid' — group them together as one 'Mid' category by default. If the player explicitly asks to split them out, follow their instruction instead.",
      rotations: "Swinging market smoke is not a rotation — it is holding/swinging an angle from mid. Group it under 'starts mid' positioning. A rotation means moving from one site to another.",
      grouping_rule: "Default to the broadest accurate category. Only create a sub-category if the notes explicitly provide detail that makes the broader label inaccurate.",
      save_rounds: "Save rounds still have normal attack plays and executes — they just happen with weaker guns. Categorize save rounds the same as any other round (fast B, fast A, etc.) and simply note that the team was saving. Do not treat a save as its own play category. Teams often play faster or take riskier plays on save rounds to compensate for weaker guns — this is intentional and normal, not a mistake."
    },
    micro_positioning: {
      executes: "Pinch sites from multiple angles simultaneously. Time your entries so pressure comes from two directions at once — not one by one.",
      retakes: "Come from multiple angles at the same time. Ideal retake uses market, CT, and B main simultaneously so enemies can't hold all three.",
      timing: "Never push out alone before teammates are ready. A split push only works when both sides move at the same time — otherwise you're just feeding."
    },
  }
};

export const RESOURCES = {
  preaim: [
    {
      title: "How to Pre-Aim the RIGHT way",
      url: "https://www.youtube.com/watch?v=tUqEKlUeytE",
      creator: "Dopai",
      description: "In-depth breakdown of crosshair placement fundamentals"
    }
  ],
  movement: [
    {
      title: "i am begging you to train your movement (here's how.)",
      url: "https://www.youtube.com/watch?v=8lgwinmOFMI",
      creator: "korey",
      description: "In depth breakdown of movement with drills - best for higher ranks but good for all players to understand"
    }
  ],
  cypher_utility: [
    {
      title: "The COMPLETE Cypher Guide",
      url: "https://www.youtube.com/watch?v=YjsZlMQDraM",
      creator: "ItsFlameBTW",
      description: "Comprehensive Cypher guide covering camera placement, cage lineups, and trap wire setups across all maps"
    }
  ]
};

export const ECONOMY_KNOWLEDGE = {
  match_structure: {
    summary: "First team to 13 rounds wins. Up to 24 rounds in regulation, split into two halves of 12; teams swap attack/defense after round 12. A 12-12 tie goes to overtime.",
    pistol_rounds: "ONLY round 1 and round 13 are pistol rounds — the first round of each half. Round 12 is the LAST round of the FIRST half, not a pistol. Round 24 (if reached) is the last round of the second half. Never label round 12 a pistol round.",
    after_pistol: "Round 2 and round 14 are the rounds right after a pistol — bonus/anti-eco or save depending on the pistol result, but they are NOT pistols themselves."
  },
  armor: {
    light_shield: "25 shield, costs 400. Buy when you can't afford heavy shield.",
    heavy_shield: "50 shield, costs 1000. Standard full buy armor."
  },
  buy_types: {
    full_buy: "Rifle + heavy shield + full util. Requires ~3900+ credits minimum (Vandal/Phantom = 2900, heavy shield = 1000).",
    half_buy_force: "Buying with less than full buy credits. Usually spectre + light shield, or sheriff + armor. Done when team needs bodies on a round they can't afford to lose.",
    save: "Full save — pistol only or buy nothing. Goal is to bank credits for next round."
  },
  round_flow: {
    win_pistol: "After winning the pistol, round 2 is a BONUS round — buy with leftover + win bonus (typically an SMG like the Spectre, or an Outlaw, + light shield), NOT a full rifle buy (you can't afford one yet). Don't spread out and 'default' after a pistol WIN: playing spread invites isolated 1v1s where an enemy on a save can win a free rifle off you. Play together and take map control as a group so every fight is traded.",
    win_pistol_win_round_2: "Won rounds 1 AND 2: do NOT full buy round 3. Ride the bonus — players who SURVIVED keep their guns, and only the players who DIED light buy (cheap SMG + light shield) so the whole team can comfortably full buy round 4. Over-buying round 3 when already ahead risks an economy dip if you lose it.",
    win_pistol_lose_round_2: "Won round 1 but lost round 2: the default is to SAVE, not force. Throwing a partial buy into the enemy's full buy is usually -EV — save to bank credits and come back with a proper full buy the following round. Don't be the lone forcer when the team is saving.",
    lose_pistol: "Save round 2, or run a default light buy. Defaulting and playing for info is fine here precisely because you're not risking expensive guns. Buy round 3 with stacked credits.",
    lose_pistol_and_round_2: "Still buy round 3 — two save rounds bank enough for a full buy.",
    carry_over: "Weapons carry between rounds — a player who survives keeps their gun into the next round, so the team rarely needs everyone to re-buy. When ahead, survivors hold their guns and only the players who died spend; this is how you 'ride' a winning economy.",
    round_3_is_never_anti_eco: "Round 3's buy is fully determined by rounds 1-2 and is never a clean 'anti-eco': won both -> ride the bonus (survivors keep guns, deaths light buy, full buy round 4); lost both -> your first full buy; won 1 / lost 1 -> usually a SAVE (especially if you won the pistol then lost the bonus) or a light force. Do not script round 3 as an anti-eco.",
    loss_bonus: "Lose a round = +1900 the next round, stacking to +2400 then +2900 on consecutive losses. Winning a round resets the loss bonus back to +1900.",
    bonus_round: "A bonus round is the round right after winning a pistol or eco: you have leftover credits + win bonus but usually NOT full-buy money. Buy SMGs/Outlaw + light shield ('bonus buy'); don't drain credits forcing a full buy on a bonus."
  },
  playbook_caveat: "You CANNOT pre-assign a fixed economy state (eco / anti-eco / save / bonus / full buy) to a specific round NUMBER in an attack playbook. After round 1, every round's buy depends on who won the previous rounds — only rounds 1 and 13 are guaranteed pistols. Write a round-by-round playbook as CONDITIONAL plays keyed to the buy state ('on a full buy do X', 'on a force/eco do Y'), not as fixed labels like 'R3 anti-eco' or 'R10 eco'.",
  when_to_force: [
    "Match point against you — economy does not matter",
    "You have enough for a meaningful weapon but not a full buy — spectre or sheriff can win rounds",
    "Team has already committed to forcing — do not be the one player saving while team buys"
  ],
  when_to_save: [
    "Team is split — if 3 players save and 2 force, the 2 forcing are just feeding weapons to the enemy",
    "You lost a buy round with heavy spend and cannot afford a meaningful weapon next round"
  ],
  eco_rounds: {
    summary: "Full save opponents will likely have pistols and sheriffs only.",
    rules: [
      "Do not overcommit expensive util on eco rounds",
      "Winning an eco round with rifles is expected — losing one is an economy disaster",
      "Anti-eco rounds are not throw rounds — play them seriously"
    ]
  }
};

export function getAgentContext(agentId) {
  return AGENT_KNOWLEDGE[agentId?.toLowerCase()] || null;
}

export function getMapContext(mapId) {
  return MAP_KNOWLEDGE[mapId?.toLowerCase()] || null;
}

export function getResources() {
  return RESOURCES;
}

export function getGeneralKnowledge() {
  return GENERAL_KNOWLEDGE;
}