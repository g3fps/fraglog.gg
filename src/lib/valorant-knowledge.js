export const AGENT_KNOWLEDGE = {
  jett: {
    role: "Duelist",
    core_philosophy: "Jett's job is making space and info for teammates, not kills. Dash is both entry and escape: get onto site through a smoke, close distance on an angle, or escape pressure. Entry, clear angles, get info — teammates follow into the space you made.",
    watch: [],
    abilities: {
      cloudburst: {
        mechanics: "Throwable smoke that can be curved midair by holding the activation key and moving the mouse — you don't need to look at the target area. Small smoke cloud on landing.",
        usage: "Create oneways or smoke off angles without peeking them. Curve it around corners to reach spots a straight throw can't. Core entry: throw cloudburst, dash into it.",
        key_insight: "Curving lets you smoke around corners without exposing yourself — most players only throw it straight."
      },
      updraft: {
        mechanics: "Short vertical boost. Jump and updraft at the exact same moment for max height. Hold spacebar to glide, control descent, and negate fall damage.",
        usage: "Reach elevated positions. Jumping and updrafting simultaneously gives maximum height."
      },
      tailwind: {
        mechanics: "Activates on first press (charging) then fires on second press or automatically after a short window. Unused window wastes the charge. Jump + dash simultaneously extends distance.",
        usage: "Primary entry tool on attack: dash through your smoke, onto site, or to close distance quickly. On defense, works well for aggressive early angles with a quick repositioning plan. Dashing into multiple enemies on defense without a clear advantage is high-risk.",
        key_insight: "Dash is both entry and escape. The mistake is popping it with no purpose and no plan for what happens next."
      },
      bladestorm: {
        mechanics: "Left click throws single knives — fully accurate while moving, running, or airborne. Right click throws all remaining knives in a close-range spread. Knife kills replenish the supply. Gliding slows momentum and improves accuracy.",
        usage: "Left click for precision, right click spreads all remaining at close range. Glide slows momentum, improving accuracy. Holding dash during ult for repositioning after kills keeps you mobile through the ult.",
        key_insight: "Knives are also an economy tool — buy a teammate a gun and use knives yourself on low-buy rounds."
      }
    },
    attack: {
      primary_job: "Be the spearhead. Throw cloudburst, dash into it, flick left and right to clear close angles on exit. Glance the minimap instead of hard-staring — enemies appear after 0.1s of vision.",
      key_insight: "Entry is clearing space so teammates don't have to. Your team should flood in behind you without re-clearing angles you covered."
    },
    defense: {
      primary_job: "Fight aggressively for early space and info so teammates stack elsewhere — Jett can always dash out. Take space, get info, call it, fall back.",
      op_usage: "OP is extremely strong on Jett. Keep it moving — different angle every round. After an OP kill, you can immediately rotate to the other site to beat the rotation.",
      key_insight: "The more early space you take, the more your team can stack. One Jett controlling A main frees four players to stack B."
    },
    weapons: {
      post_pistol_win_defense: "Outlaw. Scoped weapons are Jett's friend because she has a dash escape. Outlaw does 140 body damage per shot — one-shots players with light shields (125 HP total) but requires two body shots to kill players with heavy shields (150 HP total). Flows into bonus rounds well since most enemies won't have heavy shields."
    }
  },
  phoenix: {
    role: "Duelist",
    core_philosophy: "Phoenix is self-sufficient — his kit keeps fights going across a whole round. Flashes let him re-engage, wall creates space and heals, molly denies or flushes. Plan util to win multiple fights per round; think at least two kills ahead.",
    watch: [],
    abilities: {
      curveball: {
        mechanics: "Throwable flash that curves based on which hand you throw from. Fully blinds anyone who sees it detonate. Can be banked off walls.",
        usage: "Back-up-and-flash-re-engage works well against traders. Double flashing re-blinds players who turned on the first. High flash over objects is rarely expected. Mixing timing, position, and flash type makes patterns harder to read.",
        key_insight: "Flash from the front of a box and circle to the back — most players panic spray or retreat toward the flash, so you catch them from the other side. Occasionally wait 20-30s before flashing a common angle to break enemy reads."
      },
      blaze: {
        mechanics: "Moving wall that blocks vision, heals Phoenix standing in it, and briefly damages teammates who walk through. Breaks Cypher trips and stops defuses. Stand slightly back when throwing to reduce clipping gaps.",
        usage: "Expands space and enables combos in addition to healing. Walling through objects reaches spots a straight throw can't. Blocking an angle and healing simultaneously is a common use. Healing mid-fight burns the charge — clearing site first is often higher value.",
        key_insight: "Wall is a moving smoke that heals — use it to isolate fights, expand space, and combo with flash or molly."
      },
      hot_hands: {
        mechanics: "One charge per round. Thrown grenade that lands and burns for several seconds, healing Phoenix standing in it.",
        usage: "Denies peeks, flushes enemies from smokes, wraps smokes to stop pushes, clears angles, or heals. Throwing at one angle while watching another gets free info. Healing mid-fight burns the only charge — between fights or after site is often higher value.",
        key_insight: "One molly — asking what it does before throwing avoids spending it for no effect."
      },
      run_it_back: {
        mechanics: "6 orbs. Marks a respawn point, then a window to fight — die or time out and respawn at the mark at full HP.",
        usage: "Spend it freely — 6 orbs comes back fast. Use it for small things: grabbing a gun in a bad spot, the spike, HP. Use it whenever it has a decent chance to win or swing the round.",
        key_insight: "Phoenix players save ult too long. It's only 6 orbs — if it can win the round, use it."
      }
    },
    general: {
      have_a_plan: "Each round, know what your util is doing and why — Phoenix's kit lets you plan solo. Have a defensive backup plan especially; you can get overwhelmed fast and need a fallback.",
      multi_kill_thinking: "Plan for two kills every round: the first kill, where you fall back, what util comes next, and where the second kill comes from. The kit is built for this chain — plan two ahead, then improvise.",
      lineup_rotations: "After a lineup or flash from one position, immediately rotate to a different angle. Enemies hold where your util comes from — peeking from elsewhere gets a free kill."
    }
  },
  raze: {
    role: "Duelist",
    core_philosophy: "Raze overloads the enemy with so many simultaneous threats they can't focus on any one. Her kit is about taking space and making entry easier, not individual kills. Every ability is a tool to clear angles or force reactions.",
    watch: [],
    abilities: {
      boombot: {
        mechanics: "Deployed bot that follows walls and detonates on enemy contact for ~80 damage. Can be destroyed. Jump-throw to launch it while staying behind cover.",
        usage: "Two uses: info or damage. Clear angles you don't want to peek. Swing alongside it — the enemy must choose you or the bot, a flash-like window. On defense with no info, jump-throw for free reads without exposing yourself.",
        key_insight: "If it tags someone it deals ~80 damage — a free swing for the kill on a crippled enemy."
      },
      blast_pack: {
        mechanics: "Two throwable satchels. Detonating launches Raze. Double satchel sends you further but your gun isn't out in time without ult. B-hop after they expire for extra momentum. Rebind to a mouse side button — Q is slower.",
        usage: "Single satchel to enter; double only reliable with ult. Equip primary midair to have your gun ready on landing. S+A or S+D satchel dodges laterally like a Jett dash. To change direction mid-air, release W entirely and hold only the directional key.",
        key_insight: "Pros like Aspas almost always single satchel. Releasing W and holding only the directional key is how high-level Razes control air movement precisely."
      },
      paint_shells: {
        mechanics: "Cluster grenade that splits into sub-grenades on contact. High damage over a large area.",
        usage: "Clear an angle so you can focus on the rest of site. Satchel on top of the nade so enemies can't escape. Hold the angle after throwing — anyone there dies, otherwise it's cleared. Save it for entry commitment or a certain-value spot, not early speculation.",
        key_insight: "Nade + satchel on top is a guaranteed kill in that spot and hands you one angle entirely, freeing you to focus everywhere else."
      },
      showstopper: {
        mechanics: "Rocket launcher ult. Press X + satchel simultaneously to animation-cancel the draw. Shift walk to move silently with ult active.",
        usage: "Primarily for taking space. Everyone retreats on sight — walk onto site while they hide and let your team flood in. Shift walk to go silent (Raze is normally loud), creating uncertainty about your position. Single satchel for more control when unsure where enemies are.",
        key_insight: "You don't need a kill for the rocket to be worth it — if the enemy team hides while you take site, the threat alone did its job."
      }
    }
  },
  cypher: {
    role: "Sentinel",
    core_philosophy: "Cypher controls information. Every piece of his kit is about knowing where enemies are, isolating fights, and making decisions — not just kills. Whoever reads Cypher's info best is a step ahead.",
    watch: [],
    abilities: {
      cyber_cage: {
        mechanics: "Pre-placed smoke that activates on command. Sphere of vision denial with one-way potential depending on placement angle. Makes an audible noise when enemies walk through it.",
        usage: "Wait until enemies are committed and directly underneath before popping — not the instant you see someone. Use cages to hide, reposition, and re-peek. Save at least one for the fight or post-plant. Hide inside, let enemies push past, swing out behind them.",
        key_insight: "Cage is an isolation and repositioning tool. Overwhelmed in a 3v5? Hide in it, reposition as enemies push past, pop out behind them."
      },
      trapwire: {
        mechanics: "Stretched between two surfaces. Tethers and reveals enemies who walk through. Low floor-level trips catch enemies pre-aiming chest height. Skye, Fade, and Raze boombot can clear trips — adapt placement against these comps.",
        usage: "Trips work anywhere on the map for passive info — off-site flanks, mid, chokes, not just on-site kills. Timing after enemy clearing util is spent extends their life. Can be used to isolate agents — Jett dashes over while teammates walk in.",
        key_insight: "If enemies keep breaking trips, place after their clearing util is used, not before."
      },
      spycam: {
        mechanics: "Placeable camera Cypher views remotely. High placements are harder to spot and shoot. Retrievable. Tagging enemies through it marks them briefly.",
        usage: "A decision-making tool. Before placing: does it see the whole site? Hard to pre-fire? Reopenable mid-round? High cams last longer — enemies expose themselves breaking their path to shoot them. In a 1v1 use it as a fake flash: place it and swing while they look up. Pick it up for retake if enemies go elsewhere.",
        key_insight: "A high cam that lasts all round beats an aggressive one shot in 10 seconds — sustained info beats a brief peek."
      }
    },
    defense: {
      primary_job: "Build an info web that locates enemies before they reach site. Play off-angles enemies won't pre-aim. Time util so cage and trips are both active when enemies commit.",
      key_insight: "Cypher's kit is passive until enemies activate it — your job is positioning and setup, then let the utility work."
    },
    attack: {
      lurk_timing: "Lurk after teammates make contact, not before — pushing early means enemies are alert. Wait for noise and pressure on the other side, then move to catch rotators. An early cam gives vision on their setup and sells that you're going with your team.",
      post_plant: "Cypher is stronger after plant — reuse your defense setups as post-plant setups. Always put a trip behind your team when lurking to stop flanks.",
      key_insight: "A lurk that catches a rotator mid-rotation is among the most impactful plays in the game. Patience is the skill."
    },
    neural_theft: {
      mechanics: "Ult. Use on an enemy corpse to reveal all living enemies on the map twice.",
      usage: "Situational. Use when outnumbered (2v5, 1v3) to find enemies, or on attack to check rotations before committing. If you're outnumbered and need to know where enemies are, use it — don't wait for the perfect moment.",
      key_insight: "You'll learn when it's valuable as you play."
    }
  },
  killjoy: {
    role: "Sentinel",
    core_philosophy: "Killjoy dominates defense through setups that force enemies into bad choices; on attack she anchors and excels post-plant. Every setup should present two bad options, not one — making enemies react to her utility rather than play freely.",
    watch: [],
    abilities: {
      nanoswarm: {
        mechanics: "Pre-placed grenade that activates on command — invisible until triggered. Damage in a small area. Hide against railings and corners to clip through walls.",
        usage: "Deep placement avoids obvious spots cleared by Raze nades, Sova darts, or Yoru clones. Strong when it creates two bad options — die in the molly or take an exposed fight. Enemies often hold where the lineup came from, so popping from a different position can get a free kill.",
        key_insight: "Pair with alarmbot placed deep so enemies must push through molly damage to reach it."
      },
      alarmbot: {
        mechanics: "ONE per round. Applies Vulnerable (increased damage) to enemies it activates on. Retrievable.",
        usage: "Place deep so enemies push through mollies to reach it. Doesn't always need a nanoswarm beside it — one that forces a reaction or slows a push is value alone.",
        key_insight: "Force a reaction first; the damage combo is secondary."
      },
      turret: {
        mechanics: "Auto-fires at enemies in range. Retrievable. Shooting it pulls enemy attention off you.",
        usage: "On attack, flank watch — covers the route you're NOT watching so you focus forward. On defense, info and distraction while you hold a different angle. If enemies shoot the turret, swing in that window.",
        key_insight: "An info and distraction tool — the value is the attention it draws away from you."
      }
    },
    defense: {
      setups: "Force enemies into two bad choices — die in the molly or fight at a disadvantage. Hidden setups that clip through walls catch enemies who think they dodged. Adapt to the enemy comp; what gets broken every round must change.",
      key_insight: "At higher ranks, enemies read and play around predictable setups — adapting keeps the advantage."
    },
    attack: {
      post_plant: "Replicate your defensive setup after planting: turret for flank watch, plant toward default, then mollies as on defense. Retakers run straight into it.",
      lineup_rotations: "Throw the lineup from one position, then rotate to a different angle before popping. Enemies hold where mollies come from — peeking elsewhere gets a free kill.",
      key_insight: "Attack post-plant setups are as strong as defense and most enemies don't expect them."
    },
    lockdown: {
      mechanics: "Ult. Large device that detains all enemies in its circular range after a wind-up. Enemies can shoot it to destroy it before the wind-up completes.",
      usage: "Molly into the edge gap forces a choice: die in the molly or get detained. Makes retakes nearly free.",
    },
    general: {
      silent_drop: "Place the turret on the ground and drop onto it to land silently with no fall damage off elevated positions. Pick it up after."
    }
  },
  deadlock: {
    role: "Sentinel",
    core_philosophy: "Deadlock slows pushes and secures kills off her stuns — not a traditional info sentinel. Her sensors can't lock down areas like Cypher trips because enemies crouch or shift walk past silently. More aggressive than other sentinels; her kit forces bad situations rather than gathers passive info.",
    watch: [],
    abilities: {
      barrier_mesh: {
        mechanics: "Thrown wall that blocks movement. Expires after 30 seconds. Enemies break individual segments.",
        usage: "Placed deep enough that breaking it forces enemies to peek and expose themselves. Cuts chokes and delays defenders on attack. Strong post-plant on the path to the spike. The 30s timer limits speculative early placement — thrown without info it risks expiring before getting value.",
        key_insight: "Place it where breaking requires peeking into your line of sight."
      },
      sonic_sensor: {
        mechanics: "Concusses enemies who make noise near it — jumps, drops, planting, defusing. Can't detect enemies who shift walk past silently.",
        usage: "Place where enemies are forced to make noise, over an angle you're holding. On attack, place on spike for post-plant. Swing immediately on activation — the concuss window is short.",
        key_insight: "A kill tool, not an info tool — place where enemies must make noise, then swing on the concuss."
      },
      gravenet: {
        mechanics: "Left click long-range arc, right click short underhand throw. Slows and roots. Removable with a loud audio cue. Pairs with Raze nade for combo damage.",
        usage: "Stalls rushes and isolates fights — net one group while another enters. A net without a follow-up swing or ult loses much of its value since the window is short. Waiting for enemies to commit before throwing lands it more reliably than speculation.",
        key_insight: "The removal cue is loud and reliable — when you hear it you know exactly where the enemy is, your window to ult or swing."
      },
      annihilation: {
        mechanics: "Captures a target in a 600 HP cocoon — they die unless extracted. Enemies grouped near the target can break it. Bounces off walls.",
        usage: "Core combo: net first, wait for the removal cue, then shoot ult at that location for a near-guaranteed hit. Avoid using it with enemies clustered near the target — they break the cocoon. Practice wall bounces in custom lobby; the trajectory is unintuitive.",
        key_insight: "Net + ult is the core combo — the net confirms position and forces them crouched. Ult right after the removal cue."
      }
    },
    defense: {
      primary_job: "Sensors where enemies must make noise. Wall and net as delay to buy rotation time. Swing and kill off every sensor activation — sensors are useless without follow-up.",
      key_insight: "Sensor goes off = concussed enemy = free kill if you swing immediately."
    },
    attack: {
      sensors: "On spike for post-plant — defusers activate it, you swing off the stun. On aggressive angles you hold for a warning to swing.",
      wall: "On chokes to delay retakes, blocking heaven or spawn floods. Save for post-plant on the path to the spike so enemies must break it to defuse.",
      net: "Isolate fights, combo with teammate util, or save for post-plant. Net at the tap, listen for the removal cue, swing or ult.",
      key_insight: "More aggressive than other sentinels — create moments of advantage rather than passive setup."
    }
  },
  waylay: {
    role: "Duelist",
    core_philosophy: "Waylay is unlike other dive duelists — half her kit is built to get you away from fights, not into them. Aggressive on attack; on defense she plays safe and doesn't fight for early space like Jett or Raze, since she only has a dash and an easily-dodged slow.",
    watch: [],
    abilities: {
      saturate: {
        mechanics: "Purchased (C). Thrown projectile that lands and applies Hinder — slows movement speed, fire rate, reload speed, recoil recovery, and jump height. Requires line of sight from landing position.",
        usage: "Works best on confirmed positions but viable preemptively as enemies push, to help team entry, or on an isolated target. Hinder slows everything — swinging after they've whiffed their first shot makes the fight more one-sided.",
        key_insight: "Surprising stopping power — throw it in the path of a rush to force the fight at a disadvantage."
      },
      light_speed: {
        mechanics: "Signature (Q), free. Two forward dashes. FIRE = two dashes; ALT FIRE = one dash. Only the FIRST dash can go upward — the second is horizontal/downward only. No fall damage after using. Also called 'dash' colloquially.",
        usage: "Enters site aggressively, reaches vertical angles, or escapes pressure. First dash can go upward for height or entry; second is horizontal only. No fall damage lets you dash off ledges freely. Coordinating with a flash or drone before dashing raises success rate significantly.",
        key_insight: "A flash or drone before the dash dramatically raises success — dashing without prep is a coin flip."
      },
      refract: {
        mechanics: "Basic (E). Instantly places a beacon at your current position. Reactivate to phase back to the beacon as invulnerable light. Resets after 2 kills. Players often call this 'phase shift' or 'recalling.'",
        usage: "Beacon position is everything — a beacon in a bad spot phases you into a worse position. Core combo: activate from cover, push aggressively, take the fight, phase back. Activating mid-fight after taking damage often phases back to a still-exposed position.",
        key_insight: "The beacon position determines everything. A bad beacon spot means Refract doesn't save you — you phase into something worse."
      },
      convergent_paths: {
        mechanics: "Ult (X), 8 points. Creates an afterimage that projects a beam, then Waylay gains a speed boost and the beam expands outward, applying Hinder to all enemies hit.",
        usage: "Use offensively to close space and Hinder enemies you're pushing into, or defensively to slow a site push. Combine with Light Speed to dash into the Hindered group.",
        key_insight: "The speed boost is as important as the Hinder — use it to close ground on enemies who are already slowed."
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
    core_philosophy: "Sova is a pure info and post-plant machine — frags are a bonus. His value is reliable info gathering and unstoppable post-plant utility.",
    watch: [],
    abilities: {
      recon_bolt: {
        mechanics: "Charged dart with up to two bounces. Landing is set by aim angle, charge, and bounces — no mid-flight adjustment. Reveals enemies in range, pings regularly. Destructible. Signature — regenerates after 50 seconds.",
        usage: "Enemies learn and destroy predictable dart spots — mixing lineups reduces that risk. Info is wasted if no one acts — calling out and pushing off the scan gets the value. On defense, a well-timed dart against a rush lets the team spam safely through walls and smokes.",
        key_insight: "If enemies shoot the dart, that's still info — someone stopped and aimed, telling you where they are."
      },
      shock_bolt: {
        mechanics: "Charged electric dart, up to two bounces, three charges. Deals damage and destroys utility without line of sight.",
        usage: "Most impactful post-plant to deny defuse. No complex lineups needed — learn general trajectory from bounce count and surface type.",
        key_insight: "Basic shots at the spike from common positions are enough for most rounds."
      },
      owl_drone: {
        mechanics: "Piloted recon drone. Height is set by the platform below it — navigating over elevated surfaces increases altitude and vision. Rotate to clear corners rather than panning, which is faster.",
        usage: "Navigate over elevated platforms early to gain height and see into heaven. Rotate to clear corners. Tag enemies with the dart to assist teammates' shots.",
        key_insight: "Gaining height off elevated platforms sees into heaven and gathers far more than a ground-level drone."
      },
      hunters_fury: {
        mechanics: "Three horizontal shots that pass through walls - each shot does 80 damage. Each shot has a windup — switch targets between shots to predict enemy movement. Press X to deactivate early. Sova is completely vulnerable while ulting.",
        usage: "Best used post-plant or paired with a recon dart/drone tag for confirmed positions. Activate behind cover or have a teammate guard you. Jump before winding up shots to adjust vertical angle. Don't hold it for perfect scenarios — post-plant alone justifies using it most rounds.",
        key_insight: "Ult paired with Iso Undercut makes shots one-hit kills — Undercut applies Vulnerable (double damage taken). You can break enemy Killjoy ults with a return Sova ult. Ult paired with Yoru ult reveals and blocks enemy pathing. Know your combos before you need them."
      }
    }
  },
  reyna: {
    role: "Duelist",
    core_philosophy: "Reyna is a self-sufficient, mechanics-first duelist built around 1v1 fights and snowballing. Without kills her kit does nothing but the flash. Massive solo carry potential, almost nothing for the team beyond a flash. Her ult is arguably the worst in the game at high elo.",
    watch: [],
    abilities: {
      leer: {
        mechanics: "Unlimited range. Nearsights anyone who looks at it — not a full blind. Active for two seconds if unbroken. Throw low for a fast close-range pop; throw high so enemies must flick up to break it. Nearsight indicator shows over enemies behind boxes.",
        usage: "Pair with initiator util for checkmates — a Skye flash or Sova dart plus your nearsight gives enemies too much to react to. If enemies shoot it, you know where they are. Use it like a smoke to cross open space: anyone aiming that direction stays nearsighted.",
        key_insight: "Two seconds unbroken — cross open space behind it like a smoke."
      },
      devour: {
        mechanics: "Heals 50 HP, overheals to 150, overheal decays after 10 seconds. Consumes one soul orb and one charge (see Dismiss for the charge/orb system). Needs unbroken line of sight to the orb — cancels if LoS breaks for 0.5s. Can't activate from fully behind cover.",
        usage: "Jiggle in and out of cover while healing to stay in LoS and peek for info at once. Key technique: delay the orb grab after a kill — hold the angle, see if someone swings to trade, grab if safe.",
        key_insight: "Delayed orb grab is underused — hold the angle after a kill, see if the trader peeks, then grab if safe."
      },
      dismiss: {
        mechanics: "REYNA ABILITY SYSTEM: 1 free charge per round (signature), can buy a second. Charges are shared between Devour and Dismiss. Kills spawn a soul orb ONLY if at least one charge remains. Using either ability consumes the orb AND a charge. No charges = no orbs, no abilities the rest of the round. Both require line of sight to the orb.",
        usage: "Primarily an escape: get off an angle after a kill, bait a trader, or disengage a bad duel. Hold the angle after a kill, see if a trader peeks, then dismiss. B-hop on landing to be harder to hit. You come out of Dismiss stationary and fully visible, so it can't close distance on a live enemy — it's escape, not aggression. Don't burn both charges in the first two fights or orbs stop spawning.",
        key_insight: "Kill the first guy, dismiss away — the second swings to trade and your teammate kills them. Pushing toward enemies with it is almost always wrong."
      }
    },
    attack: {
      entry: "Play front on contact rounds (no-util entry) since you can heal and dismiss. Be second entry when flashing for a teammate — opposite side of the first entry to pinch front, mid, and back site together.",
      flash_usage: "Flash roulette/50-50 angles hard to isolate with a gunfight. Combo with Skye flash or Sova dart for a checkmate — enemies get punished whichever util they break.",
      bait_and_switch: "Kill first guy, dismiss, the second swings to trade — your teammate kills the trader while they're focused on you. Reyna's core attack pattern.",
      key_insight: "With a movement duelist on your team, be second entry with your flash, opposite their entry to pinch."
    },
    defense: {
      playstyle: "A floater like Jett, not an anchor. Kite — take an early fight, back up, take another from a different angle, repeat. Stay alive until teammates rotate.",
      off_angles: "Abuse off-angles. Dismiss resets on kill, not cooldown, so unlike Jett's timed dash you can hold an off-angle all round: play a spot, get a kill, dismiss out, reposition, repeat.",
      key_insight: "Bait and switch works on defense too — kill the first attacker off an off-angle, dismiss, your teammate trades the one who swings."
    }
  },
  omen: {
    role: "Controller",
    core_philosophy: "Omen is one of the most aggressive controllers in the game, not a passive support. His blind, hollow smokes, and two TPs create space for creative plays. After using utility, Omen takes fights and makes space — if you only want to sit back and smoke, other controllers do it better.",
    watch: [],
    abilities: {
      paranoia: {
        mechanics: "Large projectile that nearsights and deafens everyone who sees it. Wide spread — target center of grouped enemies. Slow; wait for it to reach enemies before peeking. Nearsight indicator appears above boxes to detect hidden enemies.",
        usage: "Teammates pushing off the blind maximizes value — calling the throw helps coordination. The projectile is slow; peeking too early means fighting before the blind lands.",
        key_insight: "The blind deafens too — push aggressively while enemies can't hear your movement."
      },
      shrouded_step: {
        mechanics: "Shrouded Step (E) is a SHORT-RANGE teleport — roughly 10-15 meters max, NOT global. Both it and From the Shadows (ult) produce a visible cast animation and sound cue enemies can react to.",
        usage: "Shrouded Step works for micro-repositioning — elevation changes, reaching an unexpected height, slipping around a corner without crossing open space. Short range only; it can't cross a site or rotate. Enemies tracking common TP spots pre-aim them. From the Shadows (ult) is the global TP — strong in 1v1/1v2 to appear in an unexpected spot and create confusion.",
        key_insight: "Shrouded Step repositions short-range; From the Shadows is the global map TP. Always specify which when coaching — completely different ranges."
      },
      dark_cover: {
        mechanics: "Smokes placed via map overview — no lineups. Practicing them means learning map-overview positions. Built-in visual expiry indicator — never count time manually. Hollow smokes let Omen see enemies crossing through.",
        usage: "Timed well, smokes land as teammates hit the choke — too early and they fade, too late and momentum stalls. Smoking the angle hardest for teammates to hold (often elevated) removes the biggest threat first. Oneways refresh fast enough to use frequently.",
        key_insight: "Hollow smokes give outplay potential — watch enemies cross through and be ready on the exit side."
      }
    },
    aggression_vs_support: {
      be_aggressive: "When enemies are passive, TP to create lanes they didn't expect. When your team lacks the util to take space, take it yourself.",
      be_supportive: "When your team is taking site well, hold flash for post-plant and stay alive to keep smokes recharging for retake.",
      key_insight: "Omen's low ranked win rate comes from players thinking their only job is to smoke and flash — there's always more to do with the kit."
    },
    stall_potential: {
      summary: "Oneways force enemies to burn util to push through. Against a fast rush you can't smoke main in time, throw a site smoke for teammates to play around. On retake, smoke off angles to isolate fights rather than the whole site.",
      key_insight: "A side smoke during a fast push buys 3-4 seconds — enough for rotators to arrive."
    },
    smoke_order: {
      principle: "Smoke the angle hardest for teammates to hold first, not the obvious one. Elevated angles like heaven are usually more dangerous than the choke, since entering teammates naturally look at the choke, not up.",
      key_insight: "Smoke the angle the first person through the choke can't cover while looking at the choke."
    }
  },
  neon: {
    role: "Duelist",
    core_philosophy: "Neon's superpower is speed. Her kit creates chaos through movement — harder to hit while closing distance fast, catching enemies off guard with timings they aren't prepared for.",
    watch: [],
    abilities: {
      fast_lane: {
        mechanics: "Two parallel walls of electricity that block vision and damage enemies who cross them.",
        usage: "Cross into position safely, block operators, create chaos. Jump in and out of your own walls so enemies don't know which side you'll exit. Use it to isolate a fight when only some enemies are affected by util.",
        key_insight: "Two surfaces to play around — jumping in and out is nearly impossible to track in a chaotic team fight."
      },
      relay_bolt: {
        mechanics: "Thrown stun that bounces once off walls. Stuns vertically down long walls as well as horizontally.",
        usage: "Strong preemptively off a read from prior rounds. Core combo: jump spot around a corner, see enemy, stun mid-jump, slide in — no time for them to react.",
        key_insight: "Jump spot → stun → slide is one of Neon's strongest plays — the whole sequence happens before they respond."
      },
      high_gear: {
        mechanics: "Speed boost with a slide charge. Gun is NOT equipped while running — can't shoot during high gear. All abilities stay usable.",
        usage: "Catches unexpected timings, rotates faster, or chases enemies hit by teammate util. Gun isn't out during high gear — getting swung while it's active gives the enemy a free kill.",
        key_insight: "The power is timing — enemies not holding for a fast approach get caught off guard."
      },
      overdrive: {
        mechanics: "Ult. High-accuracy laser that fires continuously while moving. Three headshots is an instant kill. Inaccurate while jumping.",
        usage: "Use it whenever it wins the round — retake, 1vX, even with an advantage. Slide cancel tech: slide one direction, press ult and right-click the opposite mid-slide for an instant direction change.",
        key_insight: "Strength is moving and shooting at once — slide cancel to change direction instantly and be impossible to track."
      }
    },
    movement: {
      slide: {
        mechanics: "An ability — disabled in deathmatch. Practice in custom lobby or real games.",
        usage: "Slide horizontally, not forward — forward stops you in front of the enemy as an easy shot, horizontal crosses their screen and is hard to track. Slide from deep behind cover so your model rises crouched-to-upright, making enemies miss the first shot. Crouch spam during the slide further manipulates the hitbox.",
        key_insight: "Horizontal = hard to hit, forward = easy. Default horizontal."
      },
    },
    weapons: {
      recommendation: "Pistol and eco: Frenzy or Stinger. Super low buy: Bucky. Hard read on enemy position: Judge.",
      key_insight: "Close-range weapons fit Neon — she closes distance fast."
    }
  },
  viper: {
    role: "Controller",
    core_philosophy: "Viper is one of the best controllers in the game and a must-pick on multiple maps. Her power is lurk setups, cutting sightlines, and cycling fuel to constantly create pressure. Good Vipers take fights and make plays — a timid lurker has no consistent impact.",
    watch: [],
    abilities: {
      snake_bite: {
        mechanics: "Thrown grenade — can't be pre-placed in buy phase. Damage and decay in a small area for 6.5 seconds.",
        usage: "Hold a plant, flush enemies from corners, or stall a push. With only one, stalling the retake often beats saving for post-plant — 6.5s at the retake forces a bad swing or free damage.",
        key_insight: "Forces a bad choice — swing into the open or take the damage."
      },
      poison_orb: {
        mechanics: "Thrown orb that creates a toxic gas sphere when raised. Raise and lower at will with fuel. Can't be picked up once thrown. Learn lineups so it lands precisely.",
        usage: "Strong in high-traffic areas for constant pressure. Every raise forces enemies to invest util, send a player, or cede space. Lurking behind it, pushing through it, and using it as a distraction are all viable.",
        key_insight: "The value is the questions it creates — every raise forces a decision."
      },
      toxic_screen: {
        mechanics: "Long wall of toxic gas blocking multiple sightlines. Raised and lowered with fuel. If mollied, drop it, wait for their util to expire, raise again at full fuel to waste it.",
        usage: "Cycle the wall — dropping and re-raising against enemy util wastes their resources. Stretch it to cut defender sightlines on lurks, forcing them tight. Alternate lurking alone and bringing your team through it.",
        key_insight: "Defenders can't safely gather info when sightlines are cut — they react to you instead of reading you."
      },
      vipers_pit: {
        mechanics: "Ult. Large sphere of thick toxic gas. Oneway potential at corner positions — you see enemy feet while they can't see you. Destroy drones or dogs immediately to deny vision inside.",
        usage: "One of the strongest post-plant ults. Corner positions create oneways — placement determines whether enemies can see into it. On defense, dropping it at a choke forces enemies to push blind or cede the space.",
        key_insight: "Even numbers inside the pit almost guarantees a win — enemies are disoriented and you know the layout."
      }
    },
    playstyle: {
      fuel_cycling: "Raising and dropping util creates constant pressure and keeps enemies guessing. Sitting at 100% fuel means the util isn't doing anything.",
      lurking: "The wall cuts sightlines so defenders can't safely read you, forcing them to contest or give space. Alternate lurking alone and bringing your team through it.",
      aggression: "Take fights off your util — molly a spot, push, use the orb as cover. Most low-elo Vipers play too far back and have no impact.",
      key_insight: "The wall makes one setup a lurk, fake, execute, or default — condition enemies to react, then exploit their response."
    }
  },
  yoru: {
    role: "Duelist",
    core_philosophy: "Yoru is a deception agent. His kit makes enemies react to things that aren't real, waste util on fakes, and get punished when they least expect it. Value comes from conditioning enemies over multiple rounds, then exploiting their patterns.",
    watch: ["eggsterr"],
    abilities: {
      fakeout: {
        mechanics: "Decoy clone that mimics walking sounds and movement. Shooting it blinds everyone in line of sight — not just the shooter.",
        usage: "Bait enemy util — Raze ult, Gekko ult, Cypher trips, KJ alarmbots. Condition over rounds: throw the clone in the same spot until they stop shooting it, then walk out yourself for the free kill.",
        key_insight: "Conditioning is the whole game with clone — multiple rounds to set up, a completely free kill once it works."
      },
      blindside: {
        mechanics: "Flash hidden if thrown from inside a smoke — the smoke obscures its entire travel. Flash TP combo: throw TP, activate it just before the flash hits a surface so it pops as Yoru arrives. Face away from the flash when TPing so Yoru avoids it and the enemy gets full-blinded.",
        usage: "From inside smokes, look straight down and throw — almost no reaction time. Time the flash TP precisely: activate just before the flash contacts the surface.",
        key_insight: "The smoke-pop flash is one of the most undetectable in the game — the smoke hides the whole travel."
      },
      gatecrash: {
        mechanics: "Sends a tether (small moving portal); Yoru TPs to it. The tether is destructible before use, so place it in low-visibility spots. TERMINOLOGY: the ability is Gatecrash, the object is a tether — no 'anchor' in Yoru's kit. You exit facing where you were looking when you activated.",
        usage: "Control your exit angle — look where you want to aim before activating. Place where enemies won't casually check. Watch eggsterr VODs for Gatecrash technique.",
        key_insight: "A tether destroyed before use is wasted utility — placement is finding the spots enemies skip."
      },
      dimensional_drift: {
        mechanics: "Ult. Yoru goes invisible and invulnerable, moving freely and placing a Gatecrash TP. Only the TP can be deployed during ult — no fakeouts or flashes. Deactivation sound cues give away position.",
        usage: "Fast flank: activate at round start, slip past flank util, pinch from behind. TP placement during ult lets you emerge at an unexpected angle. Spawn TP: on large maps, TP behind retakers as they push.",
        key_insight: "Deactivation sound is the tell — repositioning before deactivating makes the sound misleading."
      }
    }
  },
  clove: {
    role: "Controller",
    core_philosophy: "Clove is a frontline controller — death is part of their kit, not a setback. Designed to entry with the team, take risks, and provide smokes even after dying. Don't lurk: dying far from the team wastes the post-death smoke and ult value. POST-DEATH: Clove can ONLY use Ruse (smokes) after dying. Meddle and Pick-Me-Up are NOT available post-death — never suggest otherwise.",
    watch: ["haeyoday"],
    abilities: {
      pick_me_up: {
        mechanics: "On kill or damaging assist: brief speed boost and health top-up. One use per round. Window expires if not used quickly.",
        usage: "Speed is the real value — swinging while it's active is faster than enemies expect. In a 2v2, waiting until after the first kill before activating means it carries into the second fight.",
        key_insight: "The speed is the real value — any swing with it active is faster than enemies expect."
      },
      meddle: {
        mechanics: "Thrown ability that decays 90 HP from enemies in a small area. Doesn't kill alone — needs a follow-up hit.",
        usage: "Combo with teammate util for near-instant kills: Raze nade, Sova shock dart, or a flash. Throw at the spawn barrier to deter aggressive plays. At a choke during a rush, one bullet finishes a meddled enemy.",
        key_insight: "Meddle at a choke during a rush plus any damaging util is essentially a free multi-kill."
      },
      ruse: {
        mechanics: "Smokes last 13.5 seconds on a 40s recharge cooldown per charge. Can deploy around the last death location after dying, but only one charge is available post-death and it lasts only 6 seconds.",
        usage: "Use post-death smoke to cover spike or shield teammates on site. This is why Clove doesn't lurk — dying far from the team wastes it.",
        key_insight: "Your team essentially never goes without smokes — even after dying, a smoke on spike or a key angle can win the round."
      },
      not_dead_yet: {
        mechanics: "Ult. On death, Clove respawns with a window to get a kill or damaging assist — fail and they die for good. Respawns at full HP with a brief invulnerability window for repositioning.",
        usage: "Ulting without teammates nearby risks getting chased down in the respawn window. Repositioning toward teammates during the invulnerability window sets up the best follow-through. With ult available, taking risks like peeking an OP or tanking a rocket becomes much lower cost.",
        key_insight: "The respawn threat itself has value — enemies push to clean you up, letting teammates trade the aggressor."
      }
    }
  },
  brimstone: {
    role: "Controller",
    core_philosophy: "Brimstone is a post-plant machine and stall specialist. His smokes last longer than any controller's and his Molly steals 8 seconds from the enemy. Value comes from pre-planning when and where to use util to buy time, delay retakes, and win rounds his team shouldn't.",
    watch: [],
    abilities: {
      incendiary: {
        mechanics: "Thrown grenade — can't be pre-placed. 8 seconds of stall, 62 damage/sec, impossible to defuse through. Combos with Viper orb for extremely fast kills.",
        usage: "Delays pushes, flushes corners, or stalls the spike. Stacked with orbital strike the stall is doubled. Shooting it straight up with no lineup and low time still buys enough on the clock to win. Lineup positions can reveal you to enemies — pre-planning avoids the exposure.",
        key_insight: "It doesn't need a kill — 8 seconds of stall at the spike often runs the clock out."
      },
      stim_beacon: {
        mechanics: "AoE speed boost. Buff lasts 4 seconds after leaving the radius.",
        usage: "Fast pushes, rotations, 1v1 swings, entries. At your feet for a race-car 1v1 swing. Place slightly behind the push point so the buff carries teammates through the choke. Can sell fakes — enemies hearing it expect a fast push and over-rotate.",
        key_insight: "The 4-second carry-over is the power — place it behind the push point, not at it."
      },
      sky_smoke: {
        mechanics: "Longest smokes in the game at 19.25 seconds. Three charges — chain all three for 57+ seconds of denial. Deployed via tactical map. Enemies inside can barely see out.",
        usage: "Works best from positions that can cover both sites. Standing near the edge of your own smoke sees enemies before they clear it. A single smoke with no follow-through can sell a fake — enemies who see it may rotate before realizing nothing's happening.",
        key_insight: "Delay and denial tools — deny pushes, hide spike, force enemies into your fights, not just block a sightline."
      },
      orbital_strike: {
        mechanics: "500 damage over 3 seconds at full size. Less damage to Brimstone and teammates. Kills anyone in a locked animation — Phoenix ult spawn, Sova drone, revive.",
        usage: "Primary: delay defuse, stacked with incendiary for double stall. Clears common held angles on entry. Center it on the enemy — clipping the edge lets them escape. Use it whenever it wins the round.",
        key_insight: "Ult + Molly staggered is Brimstone's signature post-plant: ult forces them off spike, molly denies defuse after it fades — rotate the whole time."
      }
    },
    post_plant: {
      core_skill: "Pre-plan your lineup position before the round. Know where you'll plant and where you'll set up. Stagger util — molly lands, you rotate, ult drops, you move again. Each piece buys time to reach a better position.",
      key_insight: "With so much delay, a pre-planned Brimstone rotates very far between util uses — the best are always two steps ahead, knowing exactly where they'll be when each piece lands."
    },
    smoke_order: {
      principle: "Smoke the most dangerous sightline first — usually elevated angles like heaven that entering teammates can't cover while looking at the choke. Vary which positions you smoke and when.",
      key_insight: "Enemies who learn your smoke pattern peek between them — keep them guessing."
    }
  },
  astra: {
    role: "Controller",
    core_philosophy: "The most complex controller in the game, but the fundamentals are simple — global utility affecting any part of the map. Requires pre-planning and comms; every piece must be placed before you need it.",
    watch: [],
    abilities: {
      nova_pulse: {
        mechanics: "Star placed in astral form that concusses an area when activated. Placeable anywhere on the map.",
        usage: "Placed preemptively, activated when enemies hit a choke or appear on minimap. Inside a smoke it slows rushes and creates spam openings. Concussing before a gravity well pull stops enemies from resisting it — a common combo.",
        key_insight: "Concuss before the pull — stunned enemies can't resist it and get sucked in."
      },
      nebula: {
        mechanics: "Second shortest smoke duration in the game. Recalling a star creates a brief fake smoke — the recall animation looks like one forming.",
        usage: "Best controller for fakes — Astra controls util globally regardless of position. Recall a star to cross open gaps or as a decoy. Pre-position stars at round start on likely enemy behavior."
      },
      gravity_well: {
        mechanics: "Pulls enemies to center and applies Vulnerable. Countered by moving with the pull or body-blocking. Spike near the radius edge pulls defusers away from it.",
        usage: "Combo with damage util — Raze nade, Brimstone molly, orbital strike. Spam accurately during the pull. Place spike near the radius edge on post-plant.",
        key_insight: "During the pull enemies are Vulnerable and can't move freely — easy to hit even through smoke."
      },
      cosmic_divide: {
        mechanics: "Ult. Splits the map with a wall blocking vision, sound, and bullets. Util and knives still pass through.",
        usage: "Take large space safely, deny pushes, or fake a site. Ping the location before activating.",
        key_insight: "Only as good as your team's coordination — ping before activating."
      }
    },
    astral_form: {
      mechanics: "Invulnerable but stationary and defenseless while placing and managing stars.",
      usage: "Seek cover before entering, get in and out fast. Practice placing and activating stars quickly to minimize exposure."
    }
  },
  miks: {
    role: "Controller",
    core_philosophy: "Straightforward controller with a limited smoke radius like Clove — plays mid to cover both sites. Smokes are short. Lacks Viper or Astra's complexity but gets the job done with smart positioning.",
    watch: [],
    abilities: {
      stun_heal: {
        mechanics: "Pulsing AoE — right click switches between stun and heal. Broken by one knife. Goes through walls, so placing it behind a wall forces enemies to expose themselves to shoot it.",
        usage: "Place behind smokes or walls to protect it and heal teammates through walls without exposing yourself."
      },
      boost: {
        mechanics: "Stim beacon on a single teammate, unlike Brimstone's AoE.",
        usage: "Use on your duelist at round start or during pushes."
      },
      smokes: {
        mechanics: "Short duration, small radius. Miks plays mid to cover both sites.",
        usage: "Positioning like Clove. Large-site maps like Abyss are harder. Plan positions to reach both sites."
      },
      ult: {
        mechanics: "AoE blast that pushes enemies back and blinds them. Small radius.",
        usage: "Check the minimap before activating to see what you'll hit. Plan its position before the round. Strongest for site takes, post-plant, and defensive pushes."
      }
    }
  },
  vyse: {
    role: "Sentinel",
    core_philosophy: "Built around isolated duels. Her wall isolates fights, her flash blinds mid-duel, her vines slow and damage. Every ability combos — the more you stack, the more one-sided the fight.",
    watch: [],
    abilities: {
      shear: {
        mechanics: "Wall that isolates one side from the other. Jump-peekable to activate early. Place diagonally so enemies can only jump it from one spot — then spam that spot.",
        usage: "Place just outside chokes where jumping requires exposure, not in the choke where it's trivially jumped. Good for aggressive ratty 1v1s with a shotgun. On attack, save for post-plant if another sentinel covers flanks. Always combo with vine and flash.",
        key_insight: "A blinded, slowed enemy behind your wall is a free 1v1."
      },
      razor_vine: {
        mechanics: "Placed vine, slows 15% and chips every few steps. Goes invisible shortly after placing. 10s duration, two charges, 20m activation range.",
        usage: "Pre-place around chokes before fights. Best defensively, combo'd with wall and flash. Standard setup: one vine at the choke you're holding, one combo'd with wall and flash.",
        key_insight: "Avoid placing it where enemies see and shoot it before it activates."
      },
      arc_rose: {
        mechanics: "Ground flash — invisible until activated or within 10m of an enemy. Gun stays out. 20s cooldown for use and pickup. Right click places it aggressively through walls; if spotted and shot there, a 45s cooldown penalty.",
        usage: "Defensive placement is almost always better. Flash an enemy through your wall and immediately swing — gun's out the whole time. Pick it up while rotating to redeploy. Vary placement; enemies pre-shoot a predictable invisible spot.",
        key_insight: "Wall handles aggression — use the flash to punish enemies who trigger it."
      },
      steel_garden: {
        mechanics: "Ult. Jams primary weapons in an area for 8 seconds — enemies forced to secondary or melee. Unbreakable. Faster windup than KJ lockdown and one fewer orb.",
        usage: "Strong for site takes, post-plant, and stopping pushes. Often take the defuse instead of using ult — at one fewer orb than lockdown, the tradeoff is worth it more often.",
        key_insight: "At one fewer orb than lockdown, taking the defuse over the ult is often the better trade."
      }
    }
  },
  harbor: {
    role: "Controller",
    core_philosophy: "Frontline controller who pairs wall and smoke to cover multiple sightlines at once — wall one side, smoke the other, ult to blind the site as you enter. Built for pushing with your team.",
    watch: [],
    abilities: {
      cascade: {
        mechanics: "Wave that travels forward, briefly blocks vision, and slows enemies it passes. NOT a lineup ability — no fixed spot. Direction adjusts slightly mid-wave.",
        usage: "Read where enemies are and send it through them proactively. Good for taking space, interrupting a push, or covering a crossing. The error to fix is timing and direction, not a spot to drill."
      },
      high_tide: {
        mechanics: "Long steerable wall that blocks vision and slows crossers. Guide by holding left click or throw straight; cancel early with right click. NOT a lineup ability — steer it to cover what your team needs.",
        usage: "Pair with Cove to cover both sides of a site. Activate before contact pressure — a late wall provides no value wherever it lands.",
        key_insight: "The mistake on a late High Tide is timing, not placement. Practice deploying it at the start of an execute."
      },
      cove: {
        mechanics: "Thrown smoke like Omen's — aim and throw, no lineup. A second click reinforces it to block bullets. 40s cooldown. Struggles on very large maps like Pearl or Breeze.",
        usage: "Throw where you need coverage. Unreinforced to cross; reinforce for bullet protection while planting. Stand back from the edge for reaction time when it breaks."
      },
      reckoning: {
        mechanics: "Ult. Large AoE that nearsights and stuns enemies in the area. 7 orbs.",
        usage: "Wait for enemies to fully commit — too early they back out, too late you miss the window. Aim for the center of the cluster. Review underperforming rounds to tell whether timing or targeting was wrong.",
        key_insight: "Timing (wait for commit) and targeting (center of the group) are separate errors — identify which one went wrong."
      }
    }
  },
  breach: {
    role: "Initiator",
    core_philosophy: "Team-enabler initiator. Every ability goes through walls, making him powerful in narrow corridors and chokes. His job is setting up teammates — stun, flash, aftershock in combination so enemies have no room to react.",
    watch: [],
    abilities: {
      fault_line: {
        mechanics: "Ground stun through walls that concusses enemies. Long equip time after abilities — your gun isn't ready right after stunning.",
        usage: "Focus narrow corridors where enemies can't dodge. Let them commit, then stun when they can't back out, then peek once it lands. Catch duelists mid-mobility — stun common Jett dash or Raze satchel spots as they commit.",
        key_insight: "Most valuable on enemies already in motion — let them commit, then stun, no way out."
      },
      flashpoint: {
        mechanics: "Aimed at a surface; fires through the wall to the other side, no arc. Right geometry flashes enemies without blinding teammates. Signature — regenerates after 50 seconds.",
        usage: "When peeking, flash farther from yourself so your gun is out as it lands. Flash close only to disrupt enemy crosshair placement when a teammate peeks. Combo with Aftershock — hide the flash inside the explosion."
      },
      aftershock: {
        mechanics: "Three-burst explosive through walls with an activation delay. Kills Gekko's Wingman, interrupts plant. Hard to see inside smokes.",
        usage: "Use as bait — enemies push the delay, so place it and hold the angle. Stun + Aftershock on cornered enemies: aim farther from the wall so you don't miss as they're forced out. Deny a spot for a few seconds while your team pushes."
      },
      rolling_thunder: {
        mechanics: "Ult. Large cone flash and stun through walls. Very long equip/use time — completely vulnerable while activating. Mouse movement during the animation can shift the direction.",
        usage: "Be in cover before activating. After ulting, flash corners first instead of chasing — enemies crouch in corners to bait the chase. In a post-plant 1v1, reposition so you could be anywhere when the stun wears off.",
        key_insight: "The best use is the repositioning advantage while the enemy is stunned, not the direct kills."
      }
    }
  },
  skye: {
    role: "Initiator",
    core_philosophy: "Flash-based initiator who plays aggressively, especially early. Value comes from unpredictable flashes and using her dog for info. A support who can also take fights herself.",
    watch: [],
    abilities: {
      guiding_light: {
        mechanics: "Hawk flash Skye steers and activates on command, flashing everyone looking at it. Can be banked off walls. Signature — regenerates after 50 seconds.",
        usage: "Footsteps before timing the flash give a window to land it as enemies push. Smoke + flash: when an enemy smokes a spot, flashing into it blinds whoever holds the exit. Jiggle bait + flash from a different position is a strong coordinated setup.",
        key_insight: "Enemies who haven't been fooled by your flashes yet can't predict them — play aggressively early and establish the threat before they adapt."
      },
      trailblazer: {
        mechanics: "Piloted dog that concusses enemies on contact.",
        usage: "Info and clearing angles you don't want to peek manually on attack."
      },
      regrowth: {
        mechanics: "Channeled heal on nearby teammates.",
        usage: "Call out that you have heal so teammates back off a fight instead of forcing a kill they might not get."
      }
    },
    economy: {
      guidance: "Full abilities on attack gun rounds carry a real heal advantage. Ghost + heal on defense supports aggressive play. Sheriff costs enough to cut into abilities and armor budget — worth checking what gets cut."
    }
  },
  fade: {
    role: "Initiator",
    core_philosophy: "Recon duelist — provides info like an initiator but plays the frontlines like a duelist. Util selfishly on attack, supportively on defense. Built for solo climbing since she doesn't rely on teammates for value.",
    watch: [],
    abilities: {
      haunt: {
        mechanics: "Thrown orb that lands and scans enemies in range, periodically pinging positions. Only the landing position matters. Lineup spots exist for key areas. Signature — regenerates after 50 seconds.",
        usage: "High angles cover the bomb site before executing and are harder to destroy. On defense, throwing into smokes scans executers for wallbang opportunities. Calling out before throwing on retakes lets teammates time their push off the scan. Waiting for regen before an execute means going in with info.",
        key_insight: "Haunt starts your team's execute countdown — throw it when the team is ready, not randomly.",
        lineup_note: "When coaching Haunt placement, the drill is practicing landing spots — never 'arc' or trajectory, which doesn't exist for this ability."
      },
      seize: {
        mechanics: "Thrown ability that latches onto and roots enemies in range, pulling them to the center and decaying hp. Latching or disappearing tells you if someone's there.",
        usage: "Clears specific corners without peeking. Post-plant Seize stops enemies reaching the spike and confirms if they're on it. On defense, catching enemies at common push spots as they commit is a strong timing.",
        key_insight: "Post-plant Seize is your strongest ability — it stops enemies reaching the spike and confirms whether they're on it."
      },
      prowler: {
        mechanics: "Piloted beast that chases the nearest enemy and nearsights on bite — they still see within 5m. Absorbs bullets while alive.",
        usage: "Tanks bullets during executes and nearsights on contact. Bitten enemies still see within 5m — staying further out or having a teammate molly at close range avoids the risk. On defense it buys seconds to recover after being flashed.",
        key_insight: "Prowler + teammate molly on a bitten enemy in close quarters is a near-guaranteed kill — coordinate it before executing."
      },
      nightfall: {
        mechanics: "Ult. Large wave that deafens and applies health decay to enemies caught in it.",
        usage: "Enemies caught are deaf and losing health — retakes become much easier. Holding it carries low upside; the ult comes back quickly and most rounds have at least one valid use."
      }
    },
    defense: {
      playstyle: "Slightly more supportive than attack — throw haunt for your duelist's first contact, then join. Coordinate with the duelist at round start to take map control together. Seize early at common push spots to catch enemies before they establish control."
    }
  },
  sage: {
    role: "Sentinel",
    core_philosophy: "walls create off-angles, boost to unexpected positions, and serve multiple goals at once, not just block paths. Every wall should do more than one thing.",
    watch: ["Grim"],
    abilities: {
      barrier_orb: {
        mechanics: "Large placeable wall. Extended wall: walk-jump off a ledge and place as your feet level with it for an extra segment. Crouch bug jump: jump next to a surface, hold crouch rising, release at apex to reach walls too tall to hop.",
        usage: "The strongest walls do two things — block mid and cover a res, delay a push and create a boost, make a gap wall and a hidden pocket. On res walls, jumping on top as it rises lets you catch interrupters from above. Eco rounds favor placements that suit cheaper weapons like the Marshal.",
        key_insight: "On a res wall, jump on top as it rises — enemies peeking to stop the res get caught off guard by you above them."
      },
      slow_orb: {
        mechanics: "Thrown orb that creates a ground slowing field. Layers with smokes — pushing slowly out of a smoke through a slow orb is usually a losing duel.",
        usage: "Gun isn't out when throwing — jump peeking while throwing avoids exposing yourself without a weapon. Layered into enemy smokes, it locks down chokes.",
        key_insight: "Slow orb layered into a smoke is almost impossible for enemies to play around."
      }
    }
  },
  chamber: {
    role: "Sentinel",
    core_philosophy: "A sentinel who plays like a duelist, and an OP specialist first. On defense he takes aggressive off-angles with his TP as an escape — kill and TP out before getting traded. On attack he's best as a lurker.",
    watch: [],
    abilities: {
      trademark: {
        mechanics: "Placed trip that reveals and immobilizes whoever triggers it. Bypassed by many abilities — Jett dash, Sage wall, Viper smoke, Yoru TP, more.",
        usage: "On attack, place behind your team to cover the angle you're NOT watching. On defense, watch a second entry so you can fully commit to your primary angle.",
        key_insight: "Placement answers: what angle can I not afford to also watch right now? That's where it goes."
      },
      headhunter: {
        mechanics: "Pocket pistol at 100 credits per bullet. Extremely fast draw speed.",
        usage: "Switching after an OP miss catches enemies who wide swing on the sound. Crosshair placement over flicking — letting enemies run into the shot lands more consistently than a fast flick.",
      },
      rendezvous: {
        mechanics: "Single anchor TP. Fake TP tech: run into the TP and press the button the instant you touch it — triggers the sound without teleporting, confusing enemies about your position.",
        usage: "TP makes normally-suicidal off-angles viable — play the angle, get the kill, TP out before the trade.",
        key_insight: "The TP makes off-angles free — play spots that would be suicidal without an escape."
      },
      tour_de_force: {
        mechanics: "Ult. Operator with a slowing field on kills.",
        usage: "Same crosshair placement as the OP — let enemies come to you. Pair with Headhunter for follow-ups after a miss."
      }
    },
    defense: {
      playstyle: "Works best aggressively — take space, get picks, TP out. Off-angles are free to hold with a TP escape. OP is the strongest gun in his kit."
    },
    attack: {
      playstyle: "Either place a TP before entering site as an escape, or lurk the opposite side while your team applies pressure. Lurking is generally stronger."
    },
    weapons: {
      recommendation: "Chamber is built around the OP — the TP gives a safe escape after a shot, Headhunter covers misses, and Tour de Force is a second OP. OP is worth considering every full-buy round. Prefer Vandal over Phantom on rifle rounds — you don't want to dink for 148 and have them healed. Outlaw is strong on bonus/anti-eco rounds."
    }
  },
  tejo: {
    role: "Initiator",
    core_philosophy: "High game-knowledge initiator who dominates through util placement and timing. Every ability has a delay before exploding, so you predict enemy positions rather than react. Best in mid-to-high elo where you can read patterns and punish repetitive enemies — not a low-elo pick.",
    watch: [],
    abilities: {
      stealth_drone: {
        mechanics: "Piloted drone that reveals and suppresses enemies. Suppressed enemies can't use abilities for 7 seconds.",
        usage: "On attack, prioritize buying it over stun on limited credits. Scout sites before executing; suppress enemies so they can't use stalling util. Drone before teammates enter, not after. On defense, take early info and reveal enemies during executes.",
        key_insight: "Suppressing a sentinel shuts off their util for 7 seconds — plenty to execute. Destroy revealed sentinel setups before executing."
      },
      guided_salvo: {
        mechanics: "Two rockets that can be aimed independently. Resets after 40 seconds — often usable twice per round.",
        usage: "Strong standalone — clears angles, forces defenders off the bomb, denies positions, or punishes known defensive spots without needing to pair with Special Delivery. When pairing: firing rockets first then stun covers escape routes — rockets corner enemies and stun seals the exit. On defense, long-range use supports without requiring 50/50 gunfights.",
        key_insight: "When enemies are repetitive on defense, pre-fire Guided Salvo on their known positions before they even reach site. Rockets are strong alone — don't hold them waiting for a perfect stun combo."
      },
      special_delivery: {
        mechanics: "Thrown stun with bounce — bank it around corners to catch enemies holding off-angles.",
        usage: "On defense, prioritize buying it over drone on limited credits. Finish enemies flushed by rockets, deny early peeks, or combo with Guided Salvo to split enemies. On attack, clear common positions during executes."
      },
      armageddon: {
        mechanics: "Ult. Bombs fall with a 3-second delay. Use before Guided Salvo and Special Delivery so everything lands together.",
        usage: "Covers largest common areas or traps enemies in specific spots. Trapping with no escape tends to be stronger than flushing enemies toward your team. Strong for securing rounds when at a numbers or economy disadvantage.",
        key_insight: "Ult from behind the enemy relative to your push — they're trapped between the bombs and your team."
      }
    }
  },
  gekko: {
    role: "Initiator",
    core_philosophy: "Self-sufficient initiator with recoverable utility. Reusing Dizzy and Thrash makes him more resource-efficient than other initiators — planning around recovery is the core skill.",
    watch: [],
    abilities: {
      dizzy: {
        mechanics: "Blinds enemies who look at it. Recoverable. Easy to destroy if enemies are aware — but a shot Dizzy gives away their position by sound.",
        usage: "Sending Dizzy without confirmed info is valid — enemies shoot it and reveal themselves, or nothing happens, which is also info. The failure isn't sending it speculatively, it's not acting on the reaction. Throwing upward from cover gives max-height off-angle flashes that are easy to recover. Skipping recovery to stay in the fight costs a charge but can be worth it.",
        key_insight: "A shot Dizzy isn't wasted — the shot's sound and direction locate the enemy. Coach acting on that, not avoiding util without pre-confirmation."
      },
      wingman: {
        mechanics: "Companion that plants or defuses, concusses enemies on detection, and tanks Viper snake bite. Recoverable.",
        usage: "Sending without cover is high-risk — enemies focus him instead of you. Main value is defusing while holding angles. Trick: a teammate half-defuses then releases, Wingman finishes, selling that you backed off to fight. Swing on detection or wait for the concuss.",
        key_insight: "The half-defuse handoff is one of the most deceptive plays in the game — enemies think you left the defuse but Wingman keeps going."
      },
      mosh_pit: {
        mechanics: "Molly that damages slowly then bursts. Not recoverable — Gekko's only one-use util. Same trajectory as KJ and KAY/O mollies, so lineups transfer. More damage at center.",
        usage: "The only non-recoverable util — combos with nets, slow orbs, concusses, or Vulnerable get the most from the slow build-up. Aiming center deals more damage than the edge.",
        key_insight: "The slow buildup works for you — enemies often don't react in time and take the full burst."
      },
      thrash: {
        mechanics: "Ult. Recoverable, usable twice per round. Detains on detonation. Press X to recover without detonating. Double-click to detonate instantly at short range. Moves forward automatically; air strafe with A and D to dodge destruction.",
        usage: "First use to clear space for the plant, recover it, second for retake or post-plant. Double-click detonation at close range catches enemies juking the normal jump distance.",
        key_insight: "Two ult uses per round is Gekko's biggest advantage — press X to recover for the second use unless detonating gets value."
      }
    }
  },
  kayo: {
    role: "Initiator",
    core_philosophy: "A disruptor — stops enemy pushes mid-execution and sets up flash traps. Two roles: disrupt plans with knife and suppression, and create aggressive or passive flash setups for teammate kills.",
    watch: [],
    abilities: {
      zero_point: {
        mechanics: "Thrown knife that suppresses enemies and scans for nearby targets. Suppressed enemies can't use abilities. Sticks to surfaces. Signature — regenerates after 50 seconds.",
        usage: "Cross-map lineups give presence in two areas at once. Suppress enemies mid-rush before they commit to force a scramble. A scan locates them to rotate teammates; no scan is info too.",
        key_insight: "Suppressing a key ability user mid-round often beats the info — KJ lockdown, Cypher camera, Viper wall all shut off instantly."
      },
      flash_drive: {
        mechanics: "Left click is a normal throw; right click is a pop flash. Two charges.",
        usage: "Aggressive: into contested space for an immediate push. Passive: wait for enemies to peek and flash them. Self-flash off a cross-map knife to be aggressive yourself."
      },
      frag_ment: {
        mechanics: "Molly through walls and floors. More damage at center.",
        usage: "Best combo: flash first, molly landing simultaneously — the flash pushes enemies into the zone. Aim center, not the edge.",
        key_insight: "Molly + flash is KAY/O's highest-value play — the flash drives enemies into a 'safe' spot the molly punishes."
      },
      null_cmd: {
        mechanics: "Ult. Suppresses all enemies in range, pulsing periodically. KAY/O is stationary and vulnerable while pulsing; teammates can res him if he's downed during it.",
        usage: "Pop in a safe position — you're a stationary target while it runs. Best when your team is winning a fight and needs suppression to close, or to counter an enemy ult before it's used.",
        key_insight: "Keep a teammate close enough to res — a revived, still-pulsing KAY/O is a win condition."
      }
    },
    attack: {
      primary_job: "Follow your duelist: knife to suppress sentinels or close enemies, molly to clear corners, flash to get the duelist onto site. Post-plant, use remaining flashes aggressively against retakers.",
      key_insight: "Remove obstacles for the entry — suppress the sentinel, clear the corner, flash the duelist in, then be ready to fight yourself."
    }
  },
  iso: {
    role: "Duelist",
    core_philosophy: "A second-entry duelist like Reyna or Phoenix — built to win fights after first contact, not open space himself. Strong solo-carry option with good mechanics, but he needs someone else to make first contact so he can trade in with his shield active.",
    watch: [],
    abilities: {
      double_tap: {
        mechanics: "Activating Double Tap immediately gives Iso a shield. His own kills or damaging assists spawn an orb — shooting it (not walking over it) refreshes the shield: restores it if broken, or extends the timer if active.",
        usage: "Shield is immediate on activation, not on kill — activating before the fight means arriving shielded. Jump spotting to confirm a target before activating avoids wasting the duration. Core loop: activate → fight → kill → shoot orb → fight again, staying shielded into the next fight.",
        key_insight: "A chain-fighting tool — the shield carries you through first contact, the orb sustains you through second. Going second into a fight means your shield is already refreshed from the first kill before you reach site."
      },
      undercut: {
        mechanics: "Thrown card that applies Vulnerable (increased damage taken) and silences abilities in the area.",
        usage: "Deny drone info, cancel Gekko ult, or shut down rushes through chokes. Push through it and enemies die faster; stop and you've bought rotation time.",
        key_insight: "The silence is as valuable as the damage amp — throw it on a Sova about to drone to instantly deny the info."
      },
      contingency: {
        mechanics: "Moving wall that blocks bullets, traveling forward from where it's placed.",
        usage: "Works like a moving smoke — the wall blocks bullets while it advances. Clearing left and right as it moves lets you look forward once those angles are covered. On defense, strong for retakes where the wall cuts off defender positions.",
        key_insight: "As the wall passes an angle you can stop worrying about it — entry without holding everything at once."
      },
      kill_contract: {
        mechanics: "Ult. Pulls one enemy into a 1v1 arena, both at full HP (Iso keeps an active Double Tap shield). A central wall separates the two spawn sides.",
        usage: "Strong when the team is about to push — a lost duel hands the enemy a free defender. High-value targets: OP holders, Jett with active knives, sentinels. Vs an OP holder, hiding behind the central wall with shield up is a near-free duel. ",
        key_insight: "Never ult with your team far back — a lost 1v1 frees the enemy as a defender. It's a closer for when your team is about to push, not a solo play."
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
  aim_training: {
    always_recommend_trainers: "For any aim-related question or note, recommending an aim trainer (KovaaK's or Aimlabs) is always good advice. They're the standard tool for building raw aim, flicking, tracking, and consistency.",
    the_range: "The in-game Practice Range is a legitimate, valuable tool — especially for warming up before games, which directly improves aim consistency, and for building mechanical consistency and crosshair placement habits. Do NOT dismiss it as 'only stationary targets' or imply it's a worse choice than deathmatch. Range, deathmatch, and aim trainers each serve a purpose: Range/trainers for warmup and isolated mechanics, deathmatch for live angles and decision-making. Recommend them together, not one at the expense of another.",
    strafe_tracking: "When a player loses gunfights to strafing or counter-strafing opponents, recommend strafe tracking scenarios on KovaaK's or Aimlabs. This is an aim skill — tracking a target that changes direction — not just a movement or pre-aim problem. Pre-aim gets your crosshair to the right starting position; strafe tracking is the follow-through when the enemy moves. Both matter."
  },
  game_sense: {
    movement_coaching: {
      summary: "Movement in Valorant is complex and has many facets. When a player says they 'lose gunfights due to movement' or mentions bad movement, do NOT default to 'you're probably shooting while moving.' That is rarely the actual cause. More common root causes: bad peeking mechanics (incorrect strafe timing, not stopping fully before shooting), being static between shots (not moving enough between bursts, making them an easy target), predictable peek angles (same entry every time), overpeeking (peeking too far past cover), poor pre-aim (crosshair not pre-positioned at head height on the expected angle), or not using movement to create deception. When a player specifically mentions losing to strafes or counter-strafes, it is BOTH a movement and an aim issue — pre-aim gets your crosshair to the right starting position, but tracking the strafe itself is a separate skill that requires aim training. Strafe tracking can be trained on KovaaK's or Aimlabs with strafing scenarios. Do not frame it as purely a crosshair placement problem and do not dismiss the tracking component. When the player's notes mention movement vaguely without specifics, recommend the movement resource from the RESOURCE LIBRARY rather than guessing which facet is the problem.",
    },
    initiator_util_info: {
      summary: "Util does not require confirmed enemy positions before deployment — there are countless valid reasons to use util without pre-confirmation. Never coach 'you should have known where they were before sending util.' Common valid uses include: timed execute pressure (blind a common defensive spot as your duelist pushes through — whoever is there gets a free kill, no info needed); clearing common angles proactively (stun a choke, molly a default defensive spot, based on game knowledge not live info); speculative info-gathering (Sova dart, Dizzy, Prowlers sent to discover if enemies are there — enemy reactions are the value); execute plans (smokes placed for the site the team is hitting); and many more. Instead of questioning why util was sent, identify what specifically went wrong: wrong timing, wrong location, failure to act on what the util revealed, or util spent on a genuinely low-probability spot when better options existed. Enemy reactions to util (shooting it, moving away, destroying it) are themselves valuable — they reveal position and create pressure.",
    },
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
      question_mark_positioning: "Take space across the map with little util, then shift away leaving only the impression of control — forcing enemies to spend util or bodies reclaiming space you've already abandoned.",
      discipline: "Good players can take a 50/50 and win but play patiently to force a worse fight for the enemy later. The discipline to NOT swing when you could is what stops you throwing rounds you should win."
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
      summary: "Swing when the enemy isn't looking at you — on spaces where they have to clear multiple angles while moving. Works in solo queue, not team-dependent.",
      key_insight: "Peeking on timing is underused — study where enemies look away from your angle to clear something else, and swing in that window."
    },
    conditioning: {
      summary: "Make the enemy accustomed to a pattern over multiple rounds, then exploit their adaptation.",
      play_variety: "Variety keeps you unpredictable, but there is NO rule against repeating a play, even back-to-back. If a play works, running it again is often correct, and repeating it to set up a later break (conditioning) is a real tool. Don't tell players to never repeat or always cycle.",
      key_insight: "Conditioning only works if you follow through — don't condition something you never plan to abuse."
    },
    economy: {
      team: "Never save on pistol. Win pistol → force next round (Outlaw strong). Lose pistol → save, maybe force one Outlaw. Always force together or save together — split economy kills rounds.",
      hero_rifling: "Buy Vandal/Phantom on a team eco and don't take first contact — let enemies shoot your teammates, then trade to make their deaths count. Damages enemy economy while your team barely spends."
    },
    utility: {
      flash_hoarding: "Unused utility at round end is wasted. A flash that creates value now beats one held for a clutch that may never come — 'save your flash in case' teaches bad habits.",
      key_insight: "Learn agent util by watching a pro on that agent and understanding why they do everything — no theory replaces watching TenZ for Jett or mw1 for Viper."
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
      summary: "Check tab before making calls. If an enemy is one orb from ult, don't give them the orb. If a teammate has held ult for 3 rounds, build a plan around it.",
      when_to_ult: "Ult to secure rounds you could lose or flip rounds you should lose, but not unwinnable ones. Holding ult throws free value away every round you sit on it.",
      ult_tracking: "Track enemy ults — some telegraph site hits (KJ ult on Haven ~80% A; Phoenix at 5/6 points means his team is fighting for orb control). Read the pattern and prep a counter."
    },
    movement: {
      peeking: {
        summary: "Most players wide-swing everything, exposing themselves to too many angles and making crosshair placement harder. Learn when to use each type.",
        types: {
          wide_swing: "High risk — multiple angles at once. Only with strong info on one angle you need to get off fast.",
          jiggle: "Low commitment — bait shots and read whether someone's holding without fully exposing yourself.",
          tight_peek: "Slice a small piece at a time. Easier flick, less exposure. Default to this."
        },
        key_insight: "No one-size-fits-all peek — the mistake is using the same one every time."
      },
      angle_advantage: {
        summary: "Stay further from walls — peeking or getting peeked from further back gives you an extra fraction of a second to react and line up.",
        key_insight: "Valorant is a game of milliseconds; giving up angle advantage is a free edge to the enemy every fight."
      },
      strafe_battles: {
        summary: "Most players either micro step or stand still — both are wrong.",
        mistakes: [
          "Micro stepping — barely moves you on their screen, so they barely aim. Hard for you, easy for them.",
          "Standing still to flick — a static target with all the time in the world.",
          "Panic spraying and crouching — only works with Phantom."
        ],
        fix: "Take longer strafes — half a second more to line up the shot lands far more consistently than rushed micro steps."
      },
      unwinnable_fights: {
        summary: "When peeked unexpectedly, move to dodge their first bullet, line up while moving, then shoot — don't stand still and flick.",
        key_insight: "Movement is a defensive tool too — it dodges their first shot AND buys you time to aim."
      },
      position_for_movement: {
        summary: "Before taking a position, ask: can I move if I get caught?",
        key_insight: "Tight corners and ledges trap you into hitting your first shot or dying — give yourself room to move."
      },
      after_shooting: {
        summary: "Hit or miss, move instantly — never stand still after firing.",
        key_insight: "Standing still after a shot is one of the most common ways to lose a fight you should win."
      },
      rank_gaps: {
        diamond_to_radiant: "Movement is one of the biggest mechanical separators between Diamond and Radiant. Radiant players do not simply stand still and rely on aim — their movement mechanics are significantly more advanced. The gap shows up in: (1) Counter-strafe timing — Radiant players stop and shoot faster and more precisely, giving them a smaller window where they're exposed; (2) Strafe baiting — they use shoulder peeks, short jiggle baits, and directional fakes to bait enemy shots before committing; (3) Movement variety — Radiant players are far less predictable in their footwork, making it harder to pre-aim or pre-fire them; (4) Offensive movement — closing distance or creating angles using movement as an active weapon, not just reacting. 'Stillness' in Valorant refers to the moment of stopping to shoot with accuracy, not passive play — Radiant players move more and are harder to read, they just stop at the right moment. Telling a Diamond player that Radiant players win through stillness and positioning is wrong and harmful advice."
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
      key_insight: "0.1 seconds of vision puts an enemy on the minimap — a glance gets the info, no hard staring needed."
    },
    map_control: {
      summary: "Map control is vision — yours, teammates', and your utility's. More control = more info = better decisions.",
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

// RESOURCES — keyword → video guides. The coach recommends these when a player's notes or question
// matches the topic. Each category name is the keyword the coach uses to match topics.
// Add entries as objects: { title, url, creator, description }
export const RESOURCES = {
  // Mechanics: crosshair placement, pre-aiming corners
  preaim: [
    {
      title: "How to Pre-Aim the RIGHT way",
      url: "https://www.youtube.com/watch?v=tUqEKlUeytE",
      creator: "Dopai",
      description: "In-depth breakdown of crosshair placement fundamentals"
    }
  ],
  // Mechanics: movement, counter-strafing, strafe shooting, footwork
  movement: [
    {
      title: "i am begging you to train your movement (here's how.)",
      url: "https://www.youtube.com/watch?v=8lgwinmOFMI",
      creator: "korey",
      description: "In-depth movement breakdown with drills — counter-strafing, strafe shooting, footwork"
    }
  ],
  // Mechanics: raw aim, flicking, tracking, aim training
  aim: [],
  // Mechanics: recoil control, spray patterns, burst firing
  recoil: [],
  // Mechanics: peeking — jiggle, wide, shoulder, tight
  peeking: [],
  // Gamesense: reading the round, decision-making, macro
  gamesense: [],
  // Gamesense: economy — when to buy, save, force
  economy: [],
  // Gamesense: map control, taking neutral space, info gathering
  map_control: [],
  // Gamesense: positioning — site anchoring, off-angles, crossfire setups
  positioning: [],
  // Mental: consistency under pressure, tilt, focus
  mental: [],
  // Agent guides (add per-agent entries as needed)
  cypher_utility: [
    {
      title: "The COMPLETE Cypher Guide",
      url: "https://www.youtube.com/watch?v=YjsZlMQDraM",
      creator: "ItsFlameBTW",
      description: "Camera placement, cage lineups, and trap wire setups across all maps"
    }
  ],
  jett_movement: [],
  viper_setups: [],
  sova_lineups: [],
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