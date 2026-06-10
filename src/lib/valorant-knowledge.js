export const AGENT_KNOWLEDGE = {
  jett: {
    role: "Duelist",
    core_philosophy: "Jett's job is making space and getting info for teammates, not getting kills. Dash is both an entry tool and an escape — use it to get onto site through a smoke, to close distance on an angle, or to get out when pressure comes. Entry, clear angles, get info — let teammates follow into the space you made.",
    watch: [],
    abilities: {
      cloudburst: {
        correct_usage: "Curve it midair by holding the key and moving your mouse — you don't need to be looking at the target area. Use it to create oneways or smoke angles without peeking them. Core entry pattern: throw cloudburst, dash into it.",
        key_insight: "You can smoke around corners without exposing yourself. Most players throw it straight — learn to curve it."
      },
      updraft: {
        correct_usage: "Jump and updraft simultaneously for extra height. Hold spacebar to glide — use this to reach spots and avoid fall damage.",
        key_insight: "Exact timing matters — jump and updraft at the same moment, not before or after."
      },
      tailwind: {
        correct_usage: "Only pop when you know you're about to engage. It has a use window — if unused it expires. Jump + dash simultaneously for extra distance. On attack, dash is a primary entry tool — dash into your own smoke, dash onto site, dash to close distance on an angle. On defense, you can still dash onto an early angle but have a plan for where you're dashing and what comes after.",
        common_mistakes: [
          "Popping dash before peeking angles on defense when no fight is guaranteed",
          "Dashing onto site with no follow-up — get in, do something, then get out or stay positioned",
          "Dash updrafting into multiple enemies — only do this in confirmed 1v1s"
        ],
        key_insight: "Dash is both an entry tool and an escape. The mistake isn't using it to get somewhere — it's popping it with no clear purpose and no plan for what happens next."
      },
      bladestorm: {
        correct_usage: "Fully accurate while moving, running, or in air on left click. Click knives individually for precision — don't hold left click and spray. Right click is close range only due to spread. Glide while shooting to slow momentum and improve accuracy. Save dash while using knives — updraft for height, keep dash for repositioning after a kill.",
        common_mistakes: [
          "Holding left click and wasting all knives on a wall",
          "Right clicking from medium or long range",
          "Dash updrafting into a fight when you could just updraft and keep dash for after"
        ],
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
        correct_usage: "Fight before flashing so you can back up, flash, and re-engage against anyone trying to trade. Double flash to beat anti-flash players — second flash re-blinds the one who went anti-flash. High flash over objects is underrated and rarely expected. Vary timing and location every round.",
        common_mistakes: [
          "Only flashing from the same predictable zones at the same predictable timings",
          "Always using the standard straight flash — mix in reverse flash, bank flash, jump flash, delayed peak",
          "Dying to flashed enemies — if this happens often, double flash or vary your peek timing"
        ],
        key_insight: "When you flash someone from the front of a box and circle to the back, most players will panic spray or retreat toward the flash — you catch them completely off guard coming from the other side. Vary your timings dramatically — sometimes wait 20-30 seconds before using your flash on a common angle to completely throw off enemy timing reads."
      },
      blaze: {
        correct_usage: "Use it to expand space and create combos, not just block a single lane. Wall through objects for better entry setups. Use it to help teammates escape. Can break Cypher trips, stop defuses, and block enemy util. Stand slightly back from walls when throwing to reduce clipping gaps.",
        common_mistakes: [
          "Walling only at the most obvious lane instead of using it to take more space",
          "Using wall just to heal when it could be doing two things at once — block an angle AND heal",
          "Healing with wall while your team is fighting — go with them, heal after the site is taken",
          "Dumping entire kit just to heal — almost never worth it"
        ],
        key_insight: "Wall is a moving smoke that heals. Use it to isolate fights, expand space, and enable combos with flash or molly — not just as a heal tool. With the buff you only need to tap it briefly to get the full heal, so you can block an angle with it and heal simultaneously."
      },
      hot_hands: {
        correct_usage: "Only have one now — use it with purpose. Deny a peak while you look at another angle. Flush enemies out of smokes before pushing. Wrap smokes to deny pushes through them. Use it to clear an angle so you can focus elsewhere. Molly off enemy peaks — throw it at one angle and look at the other.",
        common_mistakes: [
          "Throwing molly randomly at site with no specific goal",
          "Not thinking about what the molly accomplishes before throwing it",
          "Healing while your team is fighting — go out with them, secure site, then heal"
        ],
        key_insight: "With only one molly, every throw needs a job. Ask: does this deny a peak, flush someone out, or enable a follow-up flash? If not, hold it. Would you find more value using it to prevent taking a lot of damage from a peek versus just healing a small amount?"
      },
      run_it_back: {
        correct_usage: "Don't hoard it — 6 orbs is easy to get back. Use it for small things too: grabbing a gun in a bad spot, picking up the spike, getting a bit of health back. Spend it if there's a decent chance it wins or swings the round.",
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
        correct_usage: "Two uses: info or damage. Clear angles you don't want to peek manually. Swing with it — enemy has to choose between shooting you or the bot, giving you a flash-like window to get the kill. Mid-round use it for info on defense — jump-throw to keep yourself safe while getting the read.",
        key_insight: "Boombot isn't just an entry tool. Mid-round on defense when you don't know where enemies are, it's free info without exposing yourself. If it tags someone it deals about 80 damage and then you can swing for the kill."
      },
      blast_pack: {
        correct_usage: "Rebind satchel to a mouse side button — pressing Q is slower, less precise, and you'll accidentally satchel teammates. Single satchel for entry, not double — double sends you too far and your gun isn't out in time. Press equip primary in midair to have gun ready on landing. Use S+A or S+D and satchel to dodge out of danger like a Jett dash. To change direction mid-satchel, release W and hold the directional key you want to go. B-hop after satchels expire for extra momentum.",
        common_mistakes: [
          "Double satcheling on entry without ult — you go too far and can't get your gun out in time",
          "Satcheling with Q instead of a mouse button — slower and less control",
          "Satcheling in a straight line every time — learn to curve with directional keys"
        ],
        key_insight: "Double satchel is only reliable with ult active. Without ult, single satchel into a fight — pros like Aspas and Jing almost always single satchel. When changing direction, let go of W completely and hold only the directional key you want — this is how high level Raze players control their movement precisely."
      },
      paint_shells: {
        correct_usage: "Not for kills — for space. Use it to clear an angle so you can focus on the rest of site. Satchel on top of the nade so enemies can't escape it. Hold for the run-out after throwing — if someone's there they die, if not the angle is cleared. Save it until you're committing to entry or certain it gets value.",
        common_mistakes: [
          "Throwing nade randomly looking for kills instead of using it to clear a specific angle",
          "Using it too early before committing to a site"
        ],
        key_insight: "Nade + satchel on top of it is a guaranteed kill on anyone in that spot. Use it to deal with angles you know are occupied. The nade is what makes the entry so much easier — you can focus on the rest of site instead of the angle you just cleared."
      },
      showstopper: {
        correct_usage: "Primarily for taking space, not kills. Everyone runs when they see it — walk onto site while they hide behind cover. Press X + satchel simultaneously to animation cancel the ult draw. Shift walk with ult active — Raze is loud normally so going silent creates fear about where she is. Single satchel with ult if you're not sure where enemies are — more control, slower but safer.",
        key_insight: "You don't have to kill anyone with the rocket for it to be worth it. If the entire enemy team is hiding behind cover while you take site, the ult did its job. Even just threatening the ult forces enemies to reposition, which opens up kills for your teammates."
      }
    }
  },
  cypher: {
    role: "Sentinel",
    core_philosophy: "Cypher controls information. Every piece of his kit is about knowing where enemies are, isolating fights, and making decisions — not just getting kills. The player who understands Cypher's info is always one step ahead.",
    watch: [],
    abilities: {
      cyber_cage: {
        correct_usage: "Don't activate immediately when you see someone — wait until they're directly underneath or in the center of where the cage will land, then activate. One-way cages turn fights into 1v1s in your favor. Use cages to hide, reposition, and re-peek — not just to block vision. Don't activate too early if enemies haven't committed — you waste utility and have no cover when they do push.",
        common_mistakes: [
          "Activating cage the moment you see someone — they're not committed yet and can just back off",
          "Using cage only as a smoke instead of for repositioning and hiding",
          "Wasting all cages early so you have nothing for the actual fight or post-plant"
        ],
        key_insight: "Cage is a tool for isolating fights and repositioning, not just blocking a line of sight. Hide inside it, let enemies push past, swing out. If you feel overwhelmed in a 3v5 you can hide in your cage, reposition, relocate, pop out and get kills."
      },
      trapwire: {
        correct_usage: "Place where enemies can't clear whilst they're moving. Low trips at floor level catch enemies who pre-aim chest height — completely throws their crosshair off. Place after enemies commit — deep on site, not at the choke. Don't put them in obvious common spots. Adapt based on enemy comp — Skye, Fade, and Raze boombot can clear low trips. Use trips to isolate specific agents, like placing to make Jett dash over while teammates walk into it.",
        common_mistakes: [
          "Placing trips in obvious spots that get cleared by utility every round",
          "Placing at entry instead of further back where enemies have already committed",
          "Not adapting placement when the enemy keeps clearing it"
        ],
        key_insight: "If enemies keep breaking your trips, change the height or timing — place the trip after their clearing utility has already been used. You can also activate your cage, reposition inside it, and wait for them to push — they won't expect you to still be there."
      },
      spycam: {
        correct_usage: "Camera is a decision-making tool, not a kill tool. Checklist before placing: does it see the entirety of site clearly? Is it hard to pre-fire or pre-aim? Is it safe to reopen mid-round? High cameras last longer — enemies have to break their movement path to shoot them, making them vulnerable. Match aggression level to your setup — passive cam = passive trips, aggressive cam = aggressive setup. Can be used as a fake flash in 1v1s — place it and swing while enemies look up to break it. Pick up camera and bring it to retake if enemies go elsewhere.",
        common_mistakes: [
          "Placing camera at obvious low positions that get shot immediately",
          "Using camera to hunt kills instead of to make decisions",
          "Leaving camera on a site no one is hitting instead of picking it up and using it elsewhere"
        ],
        key_insight: "A high camera that lasts all round is worth far more than an aggressive camera that gets shot in 10 seconds. The goal is sustained information — a second set of eyes that watches site all round long. If the enemy team has a camera that's hard to shoot they'll leave your cam up, giving you vision for the entire round."
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
      correct_usage: "Very situational. Use in low numbers situations (2v5, 1v3) to find enemies. Use on attack to check if enemies are rotating before committing to a site. Don't overthink it — you'll learn when it's valuable as you play.",
      key_insight: "Don't hoard it waiting for the perfect moment. If you're outnumbered and need to know where enemies are, use it."
    }
  },
  killjoy: {
    role: "Sentinel",
    core_philosophy: "Killjoy dominates defense through setups that force enemies into bad choices. On attack she anchors and excels post-plant. Her value comes from making enemies react to her utility rather than playing freely — every setup should present the enemy with two bad options, not one.",
    watch: [],
    abilities: {
      nanoswarm: {
        correct_usage: "Consider hiding mollies against railings and corners so they clip through walls — enemies backing off the molly still take damage. On attack, consider early round mollies to chip damage enemies, push them into uncomfortable positions, or free up your duelist to focus on fewer angles. Hold one side after throwing to catch enemies backing off. Lineup rotations: throw lineup from one position then immediately rotate to a different angle before popping — enemies read where mollies come from and hold that spot, so peeking from somewhere else gets a free kill.",
        common_mistakes: [
          "Placing mollies in obvious spots that get cleared by Raze nade, Sova dart, or Yoru clone every round",
          "Placing alarm bot too close to the entrance — enemies can break it without taking molly damage",
          "Not thinking about what two options you're giving the enemy — every setup should have a catch"
        ],
        key_insight: "The alarm bot makes enemies vulnerable and take more damage. Its placement is as important as the mollies themselves — put it deep so enemies must push through mollies to reach it."
      },
      alarmbot: {
        correct_usage: "KJ has only ONE alarmbot per round. Place it deep in setups so enemies must push through mollies to reach it. The vulnerability debuff it applies increases incoming damage — pairing it with a molly is strong, but the alarmbot does not always need a nanoswarm next to it. It can be used independently for info, to slow a push, or to punish enemies who overcommit.",
        key_insight: "Alarmbot placement matters more than always pairing it with a molly. A well-placed alarmbot that forces a reaction is value on its own."
      },
      turret: {
        correct_usage: "Use for flank watch on attack — place it covering the flank route while you take site with your team. On defense use it for information and to distract enemies while you hold from a different angle.",
        key_insight: "Turret is an information and distraction tool. If enemies are shooting it, they're not shooting you — use that window to swing and get a free kill."
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
      correct_usage: "Combine with mollies to close off escape routes. Ult leaves small gaps — throw a molly into the gap to force enemies into only two choices: die in the molly or get detained. This makes retakes nearly free.",
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
        correct_usage: "Don't throw it off rip with no info — it'll expire after 30 seconds and be wasted. Place it deep enough that enemies have to peek out and expose themselves to break it. If they can break it for free without punishment, the wall has no value. On attack use it to delay retakes and cut off choke points. Save it for post-plant to block the path to the spike.",
        common_mistakes: [
          "Throwing wall at round start with no info — it just expires uselessly",
          "Placing wall where enemies can break it without being punished",
          "Using it too early on attack before the site is taken"
        ],
        key_insight: "The wall's value comes from forcing enemies to expose themselves to break it. Place it where breaking requires peeking into your line of sight."
      },
      sonic_sensor: {
        correct_usage: "Place in areas where enemies are forced to make noise — jumps, drops, planting, defusing. Don't use for passive flank watch — enemies will shift walk past silently. On attack, place on spike for post-plant. Use aggressively — place to cover angles you're actively swinging off, not to gather passive info.",
        common_mistakes: [
          "Using sensors to watch flank on attack — enemies just shift walk past",
          "Relying on sensors for information the way you would Cypher trips — they can be bypassed silently",
          "Not swinging off the sensor stun fast enough to get the kill"
        ],
        key_insight: "Sensors are kill tools, not info tools. Place them where enemies are forced to make noise, then be ready to immediately swing and kill the concussed player."
      },
      gravenet: {
        correct_usage: "Best used to stall rushes and isolate fights — net one group while another is entering, force them to fight separately. Strongest when paired with ult: throw net, listen for the loud sound cue of enemies removing it, then shoot ult at that location for a near-guaranteed hit. Also pairs well with Raze nade for combo damage. Left click for long range, right click for short underhand throw.",
        common_mistakes: [
          "Not following up the net with a swing or ult — a net with no follow-up is just a delay",
          "Missing the timing on net — throw it just as enemies are committing, not before"
        ],
        key_insight: "The net removal sound cue is extremely loud and reliable. When you hear it, you know exactly where the enemy is — that's your window to shoot ult or swing."
      },
      annihilation: {
        correct_usage: "Can bounce off walls — use this to hit positions you normally couldn't reach. Practice bouncing in customs to get comfortable with trajectories. Best used with grabnet to guarantee the hit — net first, wait for removal sound cue, then shoot ult at that location. Cocoon has 600 HP and can be broken by enemies so don't use it when enemies are grouped near the target.",
        common_mistakes: [
          "Using ult dry without netting first — much harder to hit and easier for enemies to avoid",
          "Using it when enemies are clustered near the target — they'll break the cocoon",
          "Not practicing the wall bounces — the trajectory is unintuitive"
        ],
        key_insight: "Net + ult is the core combo. The net guarantees you know where the enemy is and they're briefly forced crouched — ult immediately after the removal sound cue for a nearly guaranteed kill."
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
        correct_usage: "Slows projectile that applies hinder — slows movement, shooting, and reloading. Requires line of sight from landing position, won't hit around walls. Best when you know where someone is, not for blind clears. Three uses: preemptively when enemies are about to entry, to help team entry, or on isolated targets. Jiggle or jump spot before swinging into a hindered enemy — hinder is most effective after they've already whiffed their first shot.",
        common_mistakes: [
          "Using it blindly to clear angles when you have no idea where enemies are — it's far stronger with confirmed info",
          "Swinging immediately without jiggling first — hinder is best after they whiff"
        ],
        key_insight: "Saturate has surprising stopping power. If you hear enemies rushing, throw it at the ground in their path — they have no choice but to take the fight at a disadvantage."
      },
      refract: {
        correct_usage: "Signature ability, resets after two kills. Lets you take aggressive fights then recall quickly. Allows you to walk into smokes with almost no consequences. Main combo tool — dash onto site and use refract to escape safely after getting the entry.",
        key_insight: "Refract is designed to give up space safely, not take it. Use it to get in, do damage, and get out — not to hold aggressive positions."
      },
      dash: {
        correct_usage: "Always dash to a safe location. Coordinate with your initiator — tell them where you're dashing to, they tell you where their util is going. Line them up before committing.",
        key_insight: "Dash without initiator coordination is gambling. A well-timed flash or drone before your dash dramatically increases success rate."
      },
      twilight_cage: {
        correct_usage: "Not great for executing. Best used for aggressive ults on defense. Check minimap to see how far it covers — you can leave small gaps on the edges and it will still hit if you're precise.",
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
        correct_usage: "One of the best info tools in the game. Even if enemies shoot it, that's info — someone is holding that area. Use unexpected lineups so enemies have less time to react, letting your team flood while crosshairs are displaced. On defense, a well-timed dart against a rush lets your team safely spam through walls and smokes while enemies are distracted. Don't use the same lineup every round — enemies will counter it. CRITICAL MECHANIC: Where the bolt lands is determined entirely by the lineup (aim angle + charge level + bounces) — you cannot 'adjust your arc' on the fly. If coverage is wrong, the fix is learning a better lineup, not thinking about trajectory while firing.",
        common_mistakes: [
          "Repeating the same dart lineup every round — enemies will pre-aim and destroy it",
          "Not following up the dart with pressure — info is wasted if your team doesn't act on it",
          "Firing without a learned lineup and hoping for good coverage — bolt placement is precise and must be practiced"
        ],
        key_insight: "If enemies shoot the dart, that's still info. Someone had to stop and aim at it — that tells you where they are and what they're doing."
      },
      shock_bolt: {
        correct_usage: "Deals damage and destroys utility without line of sight. Up to two bounces and three charges. You don't need complex lineups — understand general trajectory based on bounce count and surface type. Strongest for post-plant to deny defuse.",
        common_mistakes: [
          "Ignoring shock dart entirely because lineups feel complex — even basic shots add value",
          "Not using it for post-plant — this is where shock dart is most reliable and impactful"
        ],
        key_insight: "You don't need the nastiest lineups to get value. Know the general trajectory for common angles and practice from there."
      },
      owl_drone: {
        correct_usage: "Two key mechanics to maximize value: (1) Drone height is determined by the platform directly below it — navigate it over elevated platforms to increase altitude and vision range. (2) Rotate the drone instead of looking left and right when clearing corners — saves time on duration and covers more ground.",
        common_mistakes: [
          "Keeping the drone low by flying it over flat ground — use elevated surfaces to gain height",
          "Looking left and right to clear corners — rotate instead to save time"
        ],
        key_insight: "A drone that gains height by navigating elevated platforms can see into heaven areas and gather far more info than one kept at ground level."
      },
      hunters_fury: {
        correct_usage: "Best for post-plant or paired with recon dart or drone tag for confirmed positions. Each shot has a windup — predict enemy movement when switching targets. Jump before winding up shots to adjust the angle. Can counter KJ lockdown. Activate behind cover or have a teammate guard you — Sova is completely vulnerable while ulting. Can deactivate by pressing X if pushed.",
        common_mistakes: [
          "Activating ult in the open with no cover — you're a sitting duck while ulting",
          "Not pairing with recon dart or drone tag — blind ult shots are much harder to land",
          "Holding ult for perfect scenarios — post-plant alone justifies using it most rounds"
        ],
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
        correct_usage: "Unlimited range — anyone who looks at it gets nearsighted, not fully blind. If thrown too close enemies can still see you. Stays up two seconds if unbroken — can be used like a smoke to cross. Two modes: throw close to the ground for fast pop on close range fights, throw high so enemies have to flick upward to break it. If enemies shoot the flash you know exactly where they are. You can see the nearsight indicator over enemies hiding behind boxes. Combine with initiator util for checkmate situations — Skye flash or Sova dart paired with Reyna flash means enemies have too many things to react to simultaneously.",
        common_mistakes: [
          "Throwing flash too close — enemies can still see through it at very close range",
          "Using flash alone without teammate util — at high elo it gets broken instantly",
          "Not reading the info the flash gives — if they shoot it you know their position"
        ],
        key_insight: "Her flash stays up for two seconds unbroken. Use it like a smoke to cross open space — as long as it's up, anyone aiming that direction gets blinded."
      },
      devour: {
        correct_usage: "Heals 50 HP, overheals to 150, lasts 10 seconds then decays. CRITICAL MECHANIC: Both Devour and Dismiss require unbroken line of sight to the soul orb to activate — you cannot use either ability while fully behind cover. Devour cancels if you lose LoS to the orb for 0.5 seconds. This means healing requires staying exposed or at most partially behind cover. Jiggle in and out of cover while healing to peek for info while staying in LoS. Key technique: delay the orb grab — hold the angle to see if someone peeks to trade, then grab. If two orbs are available, heal first then dismiss.",
        common_mistakes: [
          "Grabbing orb immediately every time — delay it to hold the angle and see if someone swings to trade",
          "Trying to heal or dismiss from fully behind cover — both abilities require LoS to the soul orb",
          "Healing in the open standing still — jiggle while healing to stay active"
        ],
        key_insight: "Delayed orb grab is one of Reyna's most underused techniques. Hold the angle after a kill, see if the trader peeks, then grab the orb if it's safe."
      },
      dismiss: {
        correct_usage: "CRITICAL MECHANIC: Dismiss, like Devour, requires line of sight to the soul orb to activate — you cannot dismiss from fully behind cover. Use dismiss like a human drone on 50/50 angles — deal damage to get an assist credit, dismiss through the angle to get info, escape safely. Combine heal then dismiss when two orbs are available. Jiggle peek between heals and dismisses for extra info instead of just standing there.",
        common_mistakes: [
          "Dismissing too fast after every kill without gathering extra info first",
          "Attempting to dismiss from behind cover — requires LoS to the orb",
          "Standing still after coming out of dismiss — b-hop to make yourself harder to hit"
        ],
        key_insight: "Dismiss is a bait and switch tool. Kill first guy, dismiss — second guy swings to trade you while your teammate kills them from a different angle."
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
        correct_usage: "Large AoE, lasts a long time, deafens enemies and they can't turn away from it. Now slower than before — wait for it to actually reach enemies before peeking. You can see the nearsight indicator above boxes to detect hidden enemies. For aim placement: target the center of grouped enemies — Paranoia is a wide projectile so central targeting maximizes hits. Aim errors on Paranoia cannot be practiced in deathmatch (abilities disabled) — use custom lobby with bots or conscious focus in actual games.",
        common_mistakes: [
          "Peeking before the blind has actually reached and blinded the enemy — it's slower now, be patient",
          "Not reading the nearsight indicator above boxes to gather info",
          "Not calling the throw to teammates so they can push off the blind"
        ],
        key_insight: "The blind deafens enemies too — combine with aggressive plays while they can't hear your movement."
      },
      shrouded_step: {
        correct_usage: "Use for elevation, timing advantages after site is taken, flanks, and fast rotations. Use ult TP creatively in 1v1 or 1v2 situations — TP to a weird spot to draw attention, escape, and shoot from behind.",
        common_mistakes: [
          "TPs that are predictable — enemies expect common TP spots and pre-aim them",
          "Using ult TP without confidence or info — only TP to locations where you have a read on enemy positioning from previous rounds"
        ],
        key_insight: "TP is most dangerous when it creates a new lane enemies weren't expecting to hold. Use it to multiply the angles defenders have to cover."
      },
      dark_cover: {
        correct_usage: "CRITICAL: Omen smokes are placed interactively using a map overview — there are NO lineups for Omen smokes. Practicing Omen smokes means learning positions on the map overview, not angles or trajectories. Smoke timing must match when teammates are at the choke point — too early or too late kills their confidence to push. Smoke the angle that's hardest for teammates to hold first. Learn oneways — they refresh fast enough to use frequently. Can place smokes slightly faster while running in the direction of the smoke. NOTE: Smokes already have a built-in visual indicator when they are about to expire — never suggest timing smokes by counting or any manual method.",
        common_mistakes: [
          "Smoking too early — smokes fade before the team hits site",
          "Smoking too late — team hesitates and loses momentum",
          "Always smoking the same obvious choke point instead of learning oneways"
        ],
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
        correct_usage: "Use to cross into position safely, block operators, and create chaos. Jump in and out of your own walls to make yourself unpredictable — enemies don't know which side you'll exit from. Use wall to isolate fights when one enemy isn't affected by util while others are.",
        key_insight: "Your wall gives you two surfaces to play around. Jumping in and out of it is nearly impossible to track, especially in chaotic team fights."
      },
      relay_bolt: {
        correct_usage: "Use preemptively when you know where someone is from previous rounds, not reactively. Main use is safer entry. Bounces once off walls, stuns vertically down walls. Jump spot around a corner, see enemy, stun mid-jump, slide in — there's no time for them to react.",
        common_mistakes: [
          "Using stun reactively in the moment — it's a preemptive ability, use it when you already have a read",
          "Forgetting it stuns vertically — useful for lineups down long walls"
        ],
        key_insight: "The jump spot into stun into slide combo is one of Neon's strongest plays. See them, stun mid-air, slide in — the whole sequence happens before they can respond."
      },
      high_gear: {
        correct_usage: "Use to catch timings enemies aren't expecting, rotate faster, and run off enemies already affected by teammate util. All abilities usable during high gear. Gun is NOT out while running — don't activate near angles where you can get swung immediately.",
        common_mistakes: [
          "Activating high gear in unsafe positions where you can get swung — you have no gun out",
          "Not using it to catch timings — the speed advantage is most valuable when enemies aren't ready"
        ],
        key_insight: "High gear's power is timing. Enemies who aren't holding for a fast approach get caught completely off guard."
      },
      overdrive: {
        correct_usage: "No rules — use it when it wins you the round. Retake, 1vX, or even with an advantage. Never save it. Aim for the head — three headshots is an insta-kill. Inaccurate while jumping so avoid that if possible. Slide cancel with ult: slide one direction, press ult and right-click the opposite direction mid-slide for an instant direction change.",
        key_insight: "Overdrive's strength is moving and shooting simultaneously. Use the slide cancel tech to change direction instantly and make yourself impossible to track."
      }
    },
    movement: {
      slide: {
        correct_usage: "Slide horizontally not forward. Forward slide stops you in front of the enemy — easy shot for them. Horizontal slide crosses their screen, requiring a large mouse movement to track. Slide from behind cover, not from the open. Starting a slide from deep behind cover makes your model go from crouched to upright — enemies often miss their first shot. Crouch spam during slide further manipulates hitbox.",
        key_insight: "The direction of your slide determines whether you're an easy or hard target. Horizontal = hard to hit. Forward = easy to hit. Default to horizontal whenever possible.",
        drill_note: "Slide is an ability — it is disabled in deathmatch. Never suggest deathmatch for slide practice. Slide mechanics must be practiced in custom lobby or real games only."
      },
      bhop: {
        correct_usage: "Run before jumping to build speed. Air strafe with mouse movement in the same direction as your key input — W then jump, press D and turn right simultaneously. Chain left and right to maintain momentum. Once momentum builds you don't need W — just A and D alternating.",
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
        correct_usage: "Thrown grenade — cannot be pre-placed. It is thrown during the round, not deployed in buy phase. Stalls enemies at key positions. Use to hold plant location, flush enemies out of corners, or stall the retake. With only one snake bite, it's often better to use it to stall the retake than save it for post-plant diffuse stall — 6.5 seconds of stall on the retake is often more valuable than waiting for the diffuse.",
        common_mistakes: [
          "Not using it to flush enemies out of corners — it forces a swing or a death, either works for you"
        ],
        key_insight: "Snake bite forces enemies into bad choices — swing into the open or take the damage. Neither is good for them."
      },
      poison_orb: {
        correct_usage: "Every time it goes up it creates questions — are you behind it, pushing through it, using it as a distraction? Forces enemies to invest utility or a player to deal with it. Place in high-traffic areas. Learn lineups so it lands exactly where you need it every time — free-balling placement leaves gaps enemies can abuse. Cannot be picked up once thrown.",
        common_mistakes: [
          "Throwing orb without a lineup — it lands inconsistently and enemies learn to exploit the gaps",
          "Placing it in low-traffic areas where it creates no pressure"
        ],
        key_insight: "The orb's value is the questions it creates, not just the smoke. Every time you raise it, enemies have to make a decision about it."
      },
      toxic_screen: {
        correct_usage: "Blocks vision across multiple sightlines simultaneously — this is why she's a must-pick on certain maps. Can raise and drop at will. If enemies molly your wall, drop it, wait for their util to expire, raise it again with full fuel. Lurk potential: stretch wall to cut off defender sightlines, forcing them to play close and setting up your lurk. Wall enables multiple options off the same setup — lurk, fake, execute, or default.",
        common_mistakes: [
          "Not cycling the wall — dropping it when enemies molly and raising it again wastes their utility",
          "Always lurking alone through the wall — bring your team sometimes to keep it unpredictable"
        ],
        key_insight: "The wall's value is making defenders play on your terms. They can't safely gather info when sightlines are cut, so they're forced to react to you rather than read you."
      },
      vipers_pit: {
        correct_usage: "One of the strongest ults in the game for post-plant. Creates a oneway in the right corner positions — you can see enemy feet while they can't see you. On defense, drop it at a choke point and stack the other site — enemies hesitate to push through thick fog. Destroy any drones or dogs immediately so enemies can't get vision inside.",
        common_mistakes: [
          "Not using the corner positions that create oneways — placement matters enormously",
          "Letting drones get vision inside the pit — destroy them immediately"
        ],
        key_insight: "Even numbers inside Viper's pit almost guarantees a win — enemies are disoriented and you know the layout. Down in numbers it can still pull off comebacks."
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
        correct_usage: "Use to bait utility — Raze ult, Gecko ult, Cypher trips, KJ alarm bots. Condition enemies over multiple rounds: throw clone in the same spot every round until they stop shooting it thinking it's always a fake, then walk out yourself for the free kill. Random fake clones without conditioning almost never work.",
        common_mistakes: [
          "Going for fake clones without conditioning — enemies will just shoot you",
          "Not paying attention to what utility the enemy has that a clone can bait"
        ],
        key_insight: "Conditioning is the whole game with clone. It takes multiple rounds to set up but once it works it's a completely free kill."
      },
      blindside: {
        correct_usage: "Pop flash from inside smokes: look straight down and throw — the smoke hides the entire travel time making it nearly impossible to dodge. Flash TP combo: throw TP, activate it just before the flash hits the surface so the flash pops as you arrive. Face opposite direction of the flash when TPing so you avoid it while the enemy gets full blinded.",
        common_mistakes: [
          "Throwing flash from outside the smoke — enemies can see the travel and dodge it",
          "Not timing the flash TP correctly — activate TP just before flash contacts the surface"
        ],
        key_insight: "The smoke pop flash is one of the most undetectable flashes in the game. The smoke hides the entire travel so enemies have almost no time to react."
      },
      gatecrash: {
        correct_usage: "Gatecrash sends a tether (a small moving portal) to a destination — Yoru can then teleport to wherever the tether is. The tether can be destroyed by enemies before use, so place it in low-visibility spots. You exit the TP facing the direction you were looking when you activated it — use this to control your exit angle and pre-aim where enemies will be. TERMINOLOGY: The ability is Gatecrash and the deployed object is a tether — there is no 'anchor' in Yoru's kit. For Gatecrash mistakes, recommend watching eggsterr VODs.",
        common_mistakes: [
          "Not controlling exit angle — look where you want to aim before activating",
          "Sending the tether to obvious spots enemies are already watching — it will be destroyed before use"
        ],
        key_insight: "Tether placement is about finding spots enemies won't casually check. A tether that gets destroyed before use is wasted utility."
      },
      dimensional_drift: {
        correct_usage: "Fast flank: activate immediately at round start, take fastest path past enemy flank utility, come up behind to pinch the enemy team. Post-plant stall: flash enemies off spike repeatedly, throw clone to create noise — every noise cue makes them paranoid and hop off. Spawn TP: most effective post-plant on large spawn maps — enemies are retaking site while you TP behind them.",
        common_mistakes: [
          "Not flanking fast enough — get past flank utility before they reset",
          "Post-plant: not using every noise source available — clone, TP sounds, all of it keeps them off the spike"
        ],
        key_insight: "Ult post-plant stall is extremely powerful — flash, clone, unalt sounds all force enemies off the spike repeatedly and buy massive time."
      }
    }
  },
  clove: {
    role: "Controller",
    core_philosophy: "Clove is a frontline controller — death is part of their kit, not a setback. They're designed to entry with their team, take risks, and provide smokes even after dying. Don't lurk on Clove — dying far from your team wastes the post-death smoke and ult value.",
    watch: ["haeyoday"],
    abilities: {
      pick_me_up: {
        correct_usage: "On kill or assist, get a speed boost and health top-up. Use the speed immediately to swing aggressively — catch timings enemies aren't prepared for. Don't use it after every kill — only when another fight is imminent. One use per round, so in a 2v2 if you get a kill, use it then since it's your last chance.",
        common_mistakes: [
          "Using pick me up after a kill when no fight is coming — the window expires wasted",
          "Not using it in a 2v2 situation after the first kill — it's your last chance for the round"
        ],
        key_insight: "The speed boost is the real value, not the health. Any swing you take with it active will be faster than enemies expect — use it to close gaps and catch timings."
      },
      meddle: {
        correct_usage: "Combo with teammate util for near-instant kills at choke points — Raze nade, Sova shock dart, or a flash. Throw at spawn barrier at round start to deter aggressive plays. Use at choke points during rushes — meddle puts enemies on near-zero HP so one bullet finishes them.",
        common_mistakes: [
          "Using meddle alone without a follow-up — it needs a combo or an immediate swing to get value",
          "Throwing it randomly instead of at confirmed choke points"
        ],
        key_insight: "Meddle at a choke point during a rush combined with any damaging util is essentially a free multi-kill."
      },
      ruse: {
        correct_usage: "Standard smokes but fade slightly faster than other controllers. Unique: can deploy smokes around last death location even after dying. Use post-death smoke to cover spike during retake or provide cover on site. This is why you don't lurk — dying far from your team wastes this value entirely.",
        key_insight: "Your team essentially never goes without smokes as Clove. Even after you die, dropping a smoke on the spike or a key angle can win the round."
      },
      not_dead_yet: {
        correct_usage: "Respawn with a window to get a kill or damaging assist — fail and you die again. HP is restored instantly to full on respawn — there is no ticking or regen period. Coordinate with teammates — don't ult alone or you'll just get run down. Use the invulnerability period during rez to reposition toward teammates. When ult is up, you're the frontline — peek the OP, tank the Raze rocket, entry for your team.",
        common_mistakes: [
          "Ulting alone far from teammates — you'll just get chased down and die again",
          "Baiting with ult available — if ult is up you should be the one taking the risk, not your teammates"
        ],
        key_insight: "The threat of respawning alone is valuable — enemies will often push to clean you up, letting your teammates pick up free kills on the aggressor."
      }
    }
  },
  brimstone: {
    role: "Controller",
    core_philosophy: "Brimstone is a post-plant machine and stall specialist. His smokes last longer than any other controller and his Molly steals 8 seconds from the enemy team. His value comes from pre-planning — knowing when and where to use utility to buy time, delay retakes, and win rounds his team shouldn't.",
    watch: [],
    abilities: {
      incendiary: {
        correct_usage: "8 seconds of stall, 62 damage per second — impossible to defuse through. Use to delay retakes, flush enemies out of corners, or stall the spike. Stack with orbital strike for maximum delay. If stuck on site with no lineup and time is low, shoot it straight up — even a blind Molly can steal enough time to win the round. Combo with Viper orb for extremely fast kills.",
        common_mistakes: [
          "Going for a lineup play when the team is getting overwhelmed — stay and use Molly to stall the retake",
          "Using Molly when enemies are double flanking — play with your team instead",
          "Not pre-planning position — diversify where you stand to set up lineups so your location isn't predictable"
        ],
        key_insight: "The Molly doesn't need to kill anyone to win the round. 8 seconds of stall at the spike is often enough to run the clock out on the enemy team."
      },
      stim_beacon: {
        correct_usage: "Speed boost for fast pushes, rotations, entries, and 1v1 swings. Throw at feet for a race-car swing in a 1v1. Use for fast site entries on both attack and retake. Throw for teammates like Neon or Jett to amplify their already fast entries. Can be used to sell fakes — enemies who hear a stim beacon expect a fast push and may over-rotate.",
        key_insight: "The speed buff lasts 4 seconds after leaving the radius — place it slightly behind the push point so the buff carries teammates through the choke."
      },
      sky_smoke: {
        correct_usage: "Longest smokes in the game at 19.25 seconds — chain all three for 57+ seconds of denial. Position yourself to reach both sites so you can smoke either side. Use to counter OPs every round. Sit in your own smokes with a shotgun — Brimstone smokes have low visibility and enemies rarely expect it. Whoever is on the edge of a Brimstone smoke sees the enemy first — don't stand dead center. Use single smokes to fake or fake-fake — enemies who see one smoke and nothing happens may rotate, leaving site open.",
        common_mistakes: [
          "Wasting all three smokes at round start unnecessarily",
          "Not being in position to smoke both sites — Brimstone often plays rotator between sites",
          "Standing dead center of your own smoke instead of near the edge"
        ],
        key_insight: "Brimstone's smokes are delay and denial tools, not just vision blockers. Use them to deny retakes, hide spike, and force enemies into your fights."
      },
      orbital_strike: {
        correct_usage: "500 total damage, 3 seconds at full size. Primary use: delay spike diffuse. Stack with Molly for double stall. Clears commonly held angles on site entry. Kills anyone in locked animations — Phoenix ult spawn, Sova drone, player getting revived. Use to deny vision in desperate situations — it's just utility, use it if it wins the round. Deals less damage to yourself and teammates so you can run through it for surprise plays.",
        common_mistakes: [
          "Hoarding ult for the perfect moment — if it wins the round, use it",
          "Not centering the ult on the enemy — they can escape if it clips them on the edge"
        ],
        key_insight: "Orbital strike + Molly staggered together is Brimstone's signature play. Use ult to force enemies off spike, then drop Molly to prevent defuse after ult fades — you can be rotating to a better position the entire time."
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
        correct_usage: "Place a star preemptively and activate when enemies hit a choke point. Use inside a smoke to slow rushes and create spam openings. Activate off teammate contact — when the enemy appears on the minimap near your star, pop it. Use to clear corners safely. Combo with gravity well: concuss first, then pull — stunned enemies can't resist the gravity well.",
        key_insight: "Concuss before gravity well pull — stunned enemies can't move against the pull direction and get sucked in guaranteed."
      },
      nebula: {
        correct_usage: "Second shortest smoke duration in the game. Recalling a star creates a brief fake smoke — use to cross open gaps safely or as a decoy. Best controller for fake plays because she controls utility globally regardless of her position. Pre-position stars at round start based on what the enemy is likely to do."
      },
      gravity_well: {
        correct_usage: "Pulls enemies in and applies vulnerable. Combo with damage util — Raze nade, Brim Molly, orbital strike. Post-plant: place spike near the edge of the radius so enemies get pulled away when tapping.",
        common_mistakes: [
          "Being complacent about the body block counter — enemies can negate the pull by moving in the pull direction or having a teammate body block",
          "Not positioning the spike near the edge of the radius — enemies at center can resist the pull"
        ],
        key_insight: "Spam accurately during the pull — enemies are vulnerable and can't move freely, making them easy to hit even through a smoke."
      },
      cosmic_divide: {
        correct_usage: "Splits the map, denies vision and sound, absorbs bullets. Utilities and knives can still pass through. Use to take large areas of space safely, deny retakes, or fake a site. Ping the location for teammates before activating so everyone is on the same page.",
        key_insight: "The ult is only as good as your team's coordination around it. Ping before activating — a Cosmic Divide your team doesn't know is coming helps no one."
      }
    },
    astral_form: {
      correct_usage: "Always seek cover when entering it — completely defenseless. The faster you can hop in and out the better. Practice placing and activating stars quickly so you're not exposed for long."
    }
  },
  miks: {
    role: "Controller",
    core_philosophy: "Straightforward controller with limited smoke radius similar to Clove — needs to play mid positions to cover both sites. Smokes don't last long. Lacks the complexity of Viper or Astra but gets the job done with smart positioning.",
    watch: [],
    abilities: {
      stun_heal: {
        correct_usage: "AoE that pulses — right click to switch between stun and heal mode. Easily broken by one knife. Place it behind a smoke so enemies can't see and shoot it without giving up their position. Key mechanic: the AoE goes through walls — place it anywhere and enemies can't shoot it at all. Can heal teammates through walls too without ever exposing yourself."
      },
      boost: {
        correct_usage: "Stim beacon effect on a single teammate. Use on your duelist at round start or during retakes. Only buffs one player at a time unlike Brimstone's beacon — straightforward, don't overthink it."
      },
      smokes: {
        correct_usage: "Short duration, small radius — need to play mid positions to cover both sites. Worse than Brimstone smokes. Maps like Abyss are harder. Similar to Clove in terms of positioning requirements."
      },
      ult: {
        correct_usage: "AoE blast that pushes enemies back and blinds them. Small radius — use intentionally. Check minimap before activating to see exactly what you'll hit. Strongest for retakes, post-plant, and site takes. Go into the round with a plan for where to position it."
      }
    }
  },
  vyse: {
    role: "Sentinel",
    core_philosophy: "Built around isolated duels. Her wall isolates fights, her flash blinds enemies mid-duel, and her vines slow and damage. Every ability is designed to combo together — the more you stack them the more one-sided the fight becomes.",
    watch: [],
    abilities: {
      shear: {
        correct_usage: "Isolates a single enemy while stopping the rest of their team. Can be jump peeked to activate early — don't place it in obvious choke points where enemies can safely jump it. Place it just outside choke points where jumping it requires exposure. Use for aggressive ratty plays — set up an unexpected 1v1 angle with a shotgun. On attack: cheap flank watch or powerful post-plant tool — usually worth saving for post-plant if you have another sentinel covering flanks. Bad wall technique: place diagonally so enemies can only jump it from one specific spot, then spam that spot when you know they'll try it.",
        common_mistakes: [
          "Placing wall directly in the choke point where it's easy to jump",
          "Not combining it with other abilities — wall alone is weaker than wall plus flash plus vine"
        ],
        key_insight: "The wall's value is forcing a 1v1 where you also have flash and vine advantage. A blinded, slowed enemy behind your wall is a free kill."
      },
      razor_vine: {
        correct_usage: "Sage slow meets KJ nade — slows 15% and deals chip damage every few steps. Goes invisible shortly after placing. 10 second duration, two charges, cheap. Pre-place around choke points like KJ mollies. Best used defensively — combo with wall and flash for maximum value. Large range makes it great for post-plant. Aggressive use is weaker — can be shot before activation.",
        common_mistakes: [
          "Expecting vine to kill enemies on its own — it's a combo tool, not a primary damage ability",
          "Using it aggressively where enemies can see and shoot it before it activates"
        ],
        key_insight: "One vine near the choke you're holding, one combo'd with your wall and flash — that's the standard defensive setup."
      },
      arc_rose: {
        correct_usage: "Two modes — right click to place aggressively through walls. Invisible until activated or within 10m. Unique: gun stays out while using it — flash an enemy through your wall and immediately swing. 20 second cooldown for both use and pickup. Pick it up while rotating to reuse it on the other site. If cooldown is already over when you pick it up, you can replace it instantly.",
        common_mistakes: [
          "Placing it aggressively through walls where enemies spot and shoot it — 45 second cooldown penalty",
          "Putting it in the same spot every round — enemies will pre-shoot it even invisible",
          "Placing it too low — enemies within 10m detect it, so place high and in the back of sites"
        ],
        key_insight: "Defensive arc rose is almost always better than aggressive. You have wall for aggressive plays — use the flash to punish enemies who trigger it."
      },
      steel_garden: {
        correct_usage: "Jams primary weapons for 8 seconds — enemies forced to use secondary or melee. Can't be broken. Better than lockdown in some ways: faster windup means less counterplay, can be used aggressively since it's not a breakable object, costs one less orb. Strong for site takes, retakes, and stopping pushes.",
        key_insight: "Don't be afraid to take the defuse instead of using ult — it costs one less orb than lockdown so the tradeoff is worth it more often."
      }
    }
  },
  harbor: {
    role: "Controller",
    core_philosophy: "Frontline controller who uses his wall and smoke together to cover multiple sightlines simultaneously. Wall covers one side, smoke covers the other, ult blinds the site as you enter. Built for pushing with your team.",
    watch: [],
    abilities: {
      cascade: {
        correct_usage: "Wave that travels forward, briefly blocks vision, and slows enemies it passes through. NOT a lineup ability — you fire it and can adjust its direction slightly, but the goal is reading where enemies are and sending it through them, not hitting a memorized spot. Good for taking space, interrupting a push, or covering a crossing. The execution error to fix is timing and direction, not a specific placement to memorize.",
        common_mistakes: [
          "Treating cascade like a Viper wall lineup — there is no fixed spot to drill, it's a read-and-react ability",
          "Activating it reactively after enemies are already committed — cascade needs to be sent proactively before the push, not in response to it"
        ]
      },
      high_tide: {
        correct_usage: "Long steerable wall that blocks vision and slows enemies who cross it. Guided by holding left click, or thrown straight. Cancel early with right click. NOT a lineup ability — it's an adaptive wall you steer to cover the angles your team needs. The goal is understanding which sightlines to block for a given execute, not hitting a fixed spot. Pair with Cove to cover both sides of a site. Activate before contact pressure, not in response to it.",
        common_mistakes: [
          "Treating High Tide like a Viper wall lineup — you steer it based on the situation, there is no fixed placement to memorize in a custom lobby",
          "Activating reactively after enemies are already pushing — a wall deployed too late provides no value regardless of where it lands"
        ],
        key_insight: "The mistake on a late High Tide is timing, not placement. Practice deploying it at the start of an execute in live games, not drilling a fixed spot."
      },
      cove: {
        correct_usage: "Functions like Omen's smoke — you aim and throw it where you need coverage. No lineup required. Reinforcing it with a second click blocks bullets, making it useful for crossing or planting. 40 second cooldown. Good range, covers most of the map except very large maps like Pearl or Breeze. Use unreinforced to cross, reinforce when you need bullet protection.",
        common_mistakes: [
          "Treating Cove like a Viper orb that needs a specific lineup spot — it is a targeted throw like Omen's smoke, just aim at where you want it",
          "Standing too close to cove — when it breaks you have no reaction time, treat its edge as a temporary boundary and give yourself retreat distance"
        ]
      },
      reckoning: {
        correct_usage: "Large AoE that nearsights and stuns — throw it onto site and follow the wave in, enemies are blinded as you arrive. 7 orbs. Wait for enemies to be fully committed to site before throwing — hitting the center of the cluster gets more value than clipping the edge. Timing is as important as targeting: too early and enemies back out, too late and you miss the entry window.",
        common_mistakes: [
          "Using Reckoning before enemies are fully committed to site — you get fewer targets and wasted charges",
          "Clipping the edge of the enemy cluster instead of centering it — aim for the densest group, not just the first enemy you see"
        ],
        key_insight: "Reckoning timing and targeting are separate skills. Timing: wait for enemies to commit. Targeting: aim for the center of the group. Review rounds where it underperformed to identify which error it was."
      }
    }
  },
  breach: {
    role: "Initiator",
    core_philosophy: "Team-enabler initiator. Every ability goes through walls, making him uniquely powerful in narrow corridors and choke points. His job is to set up teammates for easy kills — stun, flash, aftershock in combination so enemies have no room to react.",
    watch: [],
    abilities: {
      fault_line: {
        correct_usage: "Focus on narrow corridors where enemies have no room to dodge — B halls on Bind, A main on Haven, C long on Haven. Use to catch duelists mid-mobility — stun common Jett dash or Raze satchel spots right as they commit. Let enemies commit first, then stun when they have no escape. Don't peek before the stun lands — Breach has a long equip time after abilities, so peek too early and you have no gun out.",
        common_mistakes: [
          "Peeking immediately after stunning before the stun lands — you'll have no gun out",
          "Not waiting for enemies to fully commit before stunning — stun them when they can't back out"
        ],
        key_insight: "The stun is most valuable when enemies are already in motion. Let them commit to a push or dash, then stun — they have no way out."
      },
      flashpoint: {
        correct_usage: "Aimed at a surface, not thrown — you point at a wall or floor and it flashes through to the other side. There is no arc, no throw trajectory, no toss — it fires where you aim. Goes through walls — find spots where you flash the enemy but not your teammate. Flash farther away from yourself when peeking so you have time to get your gun out by the time it lands. Flash close to yourself to disrupt crosshair placement when not peeking yourself. Combo with Aftershock — hide the flash inside the Aftershock animation so enemies can't see it to turn away.",
        common_mistakes: [
          "Flashing too close to yourself when intending to peek — long equip time means no gun out before enemy recovers",
          "Not using geometry to flash enemies without blinding teammates"
        ],
        key_insight: "The flash plus Aftershock combo hides the flash inside the explosion — enemies focused on the Aftershock won't turn the flash. Gets more valuable the higher you climb."
      },
      aftershock: {
        correct_usage: "Clears corners, pushes enemies off plant or defuse, kills Gecko's Wingman and interrupts the plant entirely. Use as bait — enemies like to push the Aftershock's activation delay, so place it and hold the angle instead of retreating. Stun plus Aftershock combo on cornered enemies: place crosshair farther from the wall so you don't miss when they're forced out. Surprisingly hard to see inside a smoke — can get random kills. Use to deny a spot for a few seconds while your team pushes.",
        common_mistakes: [
          "Retreating when you should be holding the angle — enemies will push into it and catch you off guard",
          "Placing crosshair too close to the wall when using stun plus Aftershock combo — you'll miss when they're forced to exit"
        ]
      },
      rolling_thunder: {
        correct_usage: "Flashes and stuns in a large cone through walls. Long equip and use time — be in cover before activating, don't use it exposed on site. After ulting don't just chase — flash corners first, enemies love to crouch in corners and bait the chase. Mouse movement during the ult animation can change its direction — be careful not to accidentally shift it off your intended target. In a 1v1 post-plant after ulting, don't always chase — reposition instead so by the time the stun wears off you could be anywhere.",
        common_mistakes: [
          "Chasing the ulted enemy into a corner without flashing first — easy to get killed by a crouching enemy",
          "Activating ult while exposed — long use time makes you very vulnerable"
        ],
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
        correct_usage: "Don't flash too early — wait for footsteps to time it correctly. Smoke plus flash combo: when an enemy smokes a spot, flash into it to blind anyone holding the smoke exit. Ask teammates to jiggle an angle as bait — enemies focus on the jiggle, you flash and swing from a different position for a free kill. If playing defense inside a controller smoke, get in fast and listen for footsteps before flashing.",
        key_insight: "If enemies haven't been fooled by your flashes yet there's a low chance they'll predict them — play aggressively early and establish the threat before they adapt."
      },
      trailblazer: {
        correct_usage: "Use for info on attack to take space. Essential for clearing angles you don't want to peek manually."
      },
      regrowth: {
        correct_usage: "Always call out that you have heal so teammates know to back off instead of greedily going for a kill they might not get."
      }
    },
    economy: {
      correct_usage: "On attack gun round take full abilities — heal is a big advantage. On defense buy ghost and heal to play aggressive. Don't buy Sheriff if you can't afford full abilities and full shield."
    }
  },
  fade: {
    role: "Initiator",
    core_philosophy: "Recon duelist — provides info like an initiator but plays on the frontlines like a duelist. Use utility selfishly on attack, supportively on defense. Her kit is designed for solo climbing because she doesn't rely on teammates to get value from her abilities.",
    watch: [],
    abilities: {
      haunt: {
        correct_usage: "Use to scan enemies before executing — throw at a high angle that covers the bomb site. On defense, throw into smokes to scan enemies executing through them, then spray through the smoke or penetrable walls. On retake, call out to teammates before throwing so everyone pushes together off the scan. Save it until it's regenerated before initiating an execute.",
        key_insight: "Haunt controls when your team executes — you're the one who initiates the countdown. Don't throw it randomly, throw it right before your team is ready to go.",
        lineup_note: "Haunt has lineup spots (specific throw positions to reliably land on key areas of a site), but the arc of the throw is irrelevant — only the landing position matters. When coaching Haunt placement mistakes, the drill is practicing landing spots, never arc practice."
      },
      seize: {
        correct_usage: "Use to clear specific corners — it tells you if someone is there by latching onto them or disappearing. Save for post-plant to stop enemies from pushing you off the spike. Don't waste it during default — save it for executes or post-plant. On defense use it early at common push spots to catch enemies committing.",
        key_insight: "In post-plant Seize is your most powerful ability — it stops enemies from pushing while giving you info on whether they're on the spike or not."
      },
      prowler: {
        correct_usage: "Think of it as a Captain America shield — follow behind it onto site, it absorbs bullets until enemies destroy it. Use during executes not defaults. Prowler only nearsights enemies, doesn't fully blind — enemies can still see within 5m. If a Prowler gets a bite in close quarters, have a teammate throw a molly rather than taking the close range fight. On defense use it to buy time if you get flashed or concussed — Prowler buys time to get unblinded and fight back.",
        common_mistakes: [
          "Using Prowler during default instead of saving it for executes",
          "Getting too close to a Prowler-bitten enemy — they can still see you within 5m and see dust from your weapon fire"
        ],
        key_insight: "Prowler plus molly from a teammate on a bitten enemy in close quarters is a nearly guaranteed kill — coordinate this combo before executing."
      },
      nightfall: {
        correct_usage: "Use on retakes — enemies caught in it are completely deaf and their health decays. Makes retakes significantly easier. Use it whenever you have it on retake, don't save it."
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
        correct_usage: "Always ask: can this wall do two things at once? Standard uses — block mid, cover a res, delay a push. Advanced uses — boost yourself to peek over smokes, create gap walls for surprise kills, leave a pocket to hide in. Extended wall technique: walk-jump off a ledge and place the wall as your feet are level with the ledge for an extra segment. Crouch bug jump: jump next to a surface, hold crouch as you rise, release at the apex — lets you get on top of walls that are too tall to hop onto normally. Gap walls: place at an angle leaving a small gap to peek through — element of surprise, not a go-to but a good mixup. On eco rounds use walls to create unexpected angles that suit cheaper weapons like the Marshal.",
        common_mistakes: [
          "Using walls that only serve one purpose",
          "Not repurposing a standard wall for an extra tactical advantage",
          "Placing wall too close to a smoke when boosting — you lose angle advantage"
        ],
        key_insight: "When using a res wall, place it so you can jump on top as it rises — enemies who peek to interrupt the res get caught off guard by you peeking from above."
      },
      slow_orb: {
        correct_usage: "Jump peek when throwing slow orbs — peeking normally with the orb in hand makes you vulnerable with no way to shoot back. Layer slow orbs into enemy smokes to dissuade pushes — slowly pushing out of a smoke is usually a losing duel.",
        key_insight: "Slow orb plus smoke layered together makes it almost impossible for enemies to play around the smoke. Use this combo to lock down choke points during retakes."
      }
    }
  },
  chamber: {
    role: "Sentinel",
    core_philosophy: "Chamber is a sentinel who plays like a duelist. On defense his job is to take aggressive off angles with his TP as an escape — get a kill and TP out before getting traded. On attack he's best as a lurker. He's an OP specialist first and foremost.",
    watch: [],
    abilities: {
      trademark: {
        correct_usage: "Flank watch on attack — place it behind your team to cover an angle you are NOT watching. This is the entire point: Trademark frees you to focus forward by covering your back. It does not need to cover an angle you're already holding — that wastes the ability. On defense, use it to watch a flank or second entry point so you can fully commit to your primary angle without splitting attention. Can be bypassed by many abilities — Jett dash, Sage wall, Viper smoke, Yoru TP, and more.",
        key_insight: "Trademark placement should always answer: what angle can I not afford to also watch right now? That's where it goes. Placing it to cover an angle you're already holding is redundant."
      },
      headhunter: {
        correct_usage: "Pocket Guardian at 100 credits per bullet. Pulls out extremely fast — if you miss an OP shot, immediately switch to Headhunter and aim for head height. Most enemies wide swing after hearing an OP miss so be ready for it. Crosshair placement over flicking — let enemies run into your crosshair rather than going for insane flicks.",
        key_insight: "Marshall plus Headhunter is a better bonus round buy than Outlaw in most cases — faster kill time and no slow reload when you miss."
      },
      rendezvous: {
        correct_usage: "Your bread and butter. On defense use it to take off angles enemies won't expect — get a kill and TP out before getting traded. Fake TP tech: place your TP, run into it, but press the TP button the instant you touch it — triggers the sound effect as if you teleported, creates confusion about your position.",
        key_insight: "The TP makes off angles essentially free — you can play spots that would normally be suicidal because you always have an escape."
      },
      tour_de_force: {
        correct_usage: "Operator on steroids. Same crosshair placement principles apply — let enemies come to you rather than flicking. Pair with Headhunter for follow-up shots after missing."
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
        correct_usage: "On attack: primary ability — prioritize buying over stun when credits are limited. Use to scout bomb sites before executing, reveal and suppress enemies so they can't use stalling utility. Don't drone after teammates are already entering site — you're too late, move in with them instead. On defense: take early info, reveal enemies during executes, essential for retakes.",
        key_insight: "Suppressing a sentinel mid-round shuts down their utility for 7 seconds — plenty of time to execute. Always destroy revealed sentinel setups before executing."
      },
      guided_salvo: {
        correct_usage: "Resets after 40 seconds — you can often get two uses per round. Use to flush enemies out of positions into exposed areas, destroy sentinel setups, pressure enemies backwards so teammates stay alive. Place rockets to corner enemies with only one escape route, then stun that route. On defense use from long range to support teammates without taking 50/50 gunfights. Use Guided Salvo first then stun to cover escape routes — not the other way around.",
        common_mistakes: [
          "Using all utility to kill one enemy when it could set up a full execute",
          "Placing rockets in your own team's execute path",
          "Not resetting after 40 seconds to get a second use during the execute"
        ],
        key_insight: "When enemies are repetitive on defense, pre-fire Guided Salvo on their known positions before they even reach site — save your stun for follow-up."
      },
      special_delivery: {
        correct_usage: "On defense prioritize buying over drone when credits are limited. Use to finish off enemies flushed by rockets, deny early peeks in main areas, combo with Guided Salvo to split enemies and take free kills. Bounce stun around corners — useful for catching enemies holding off angles. On attack use to clear common positions during executes."
      },
      armageddon: {
        correct_usage: "3 second delay before bombs fall — always use before Guided Salvo and Special Delivery so everything lands simultaneously. Cover largest common areas on site or kill enemies stuck in specific locations. Never flush enemies toward your team — trap them on site with no escape. Use it when it guarantees winning a round where you're at a numbers or economy disadvantage. Don't save it.",
        key_insight: "Ult from behind the enemy relative to your team's push — enemies get trapped between the ult and your team with nowhere to go."
      }
    }
  },
  gekko: {
    role: "Initiator",
    core_philosophy: "Gekko is a self-sufficient initiator with recoverable utility. His unique advantage is being able to reuse Dizzy and Thrash, making him more resource-efficient than other initiators. Strategic planning around recovery is the core skill.",
    watch: [],
    abilities: {
      dizzy: {
        correct_usage: "Before throwing ask: am I flashing for info or contact? Will it cover common angles? Can teammates follow up? Can I recover it safely? Pair with another agent's flash simultaneously — Dizzy alone is easy to destroy with awareness. Throw upward from behind cover for off-angle flashes that reach max height and are easy to recover. Only skip recovery if it would cost a numbers advantage.",
        common_mistakes: [
          "Throwing Dizzy without thinking about recovery — losing it wastes your biggest advantage",
          "Using Dizzy alone without pairing with another flash — enemies with awareness can destroy it before getting blinded"
        ],
        key_insight: "Dizzy is most powerful when paired with another agent's flash simultaneously. Enemies have to deal with two flashes at once and can't dodge both."
      },
      wingman: {
        correct_usage: "Never send alone without cover — use smokes to cover him while planting or defusing. Main value is defusing while you hold active angles. Trick: have a teammate half-defuse then release — Wingman continues to the spike creating the illusion you backed off to fight. Can clear corners — swing immediately when he detects someone or wait for the concuss. Tanks Viper snake bite despite being vulnerable to other damage util.",
        common_mistakes: [
          "Sending Wingman to site alone without any cover — he'll just die",
          "Not using Wingman to defuse while holding angles — this is his best use"
        ],
        key_insight: "The half-defuse handoff to Wingman is one of the most deceptive plays in the game — enemies think you disengaged from the defuse but Wingman keeps going."
      },
      mosh_pit: {
        correct_usage: "Damage builds slowly then bursts — catches enemies off guard especially at center. Only Gekko util that can't be recovered — use wisely each round. Same trajectory as KJ and KAY/O mollies so existing lineups transfer. Combo with grab net, slow orb, concuss, or vulnerable for maximum value. Closer enemies are to center the more damage they take.",
        common_mistakes: [
          "Wasting Mosh Pit without a combo or confirmed position — it's your only non-recoverable util",
          "Throwing it at the edge of an area instead of center — damage is highest at center"
        ],
        key_insight: "The slow damage buildup actually works in your favor — enemies often don't react fast enough and take the full burst."
      },
      thrash: {
        correct_usage: "7 orbs, usable twice per round. First use to clear space and let team plant, recover it, second use for retake or post-plant. Air strafe with A and D while controlling Thrash to make it harder to destroy — it moves forward automatically so you don't need to hold W. Double-click to detonate instantly at short range to catch enemies trying to dodge. Press X to end Thrash without detonating when recovering.",
        common_mistakes: [
          "Detonating Thrash when trying to recover it — press X to cancel safely",
          "Holding W while controlling Thrash — it moves forward on its own, use A and D to strafe instead"
        ],
        key_insight: "Double-click detonation at close range catches enemies trying to juke the normal jump distance. Use it when you can see them and need to detain immediately."
      }
    }
  },
  kayo: {
    role: "Initiator",
    core_philosophy: "KAY/O is a disruptor. His job is to stop enemy pushes mid-execution and set up flash traps for teammates. Two roles: disrupt enemy plans with knife and suppression, and create aggressive or passive flash setups to get teammates kills.",
    watch: [],
    abilities: {
      zero_point: {
        correct_usage: "Use cross-map lineups to have presence in two parts of the map simultaneously. Throw knife to suppress enemies mid-rush before they fully commit — forces them to scramble or change plans. If knife scans enemies you know where they are and can rotate teammates. If it scans nothing, you have info the action is elsewhere.",
        common_mistakes: [
          "Only using knife close range — cross-map lineups give you presence in two places at once",
          "Not acting on the knife scan — the info is useless if teammates don't rotate or you don't follow up"
        ],
        key_insight: "Suppressing a sentinel or key ability user mid-round is often more valuable than the info. KJ lockdown, Cypher camera, Viper wall — all shut off instantly."
      },
      flash_drive: {
        correct_usage: "Two modes — communicate to teammates which you're running. Aggressive flash: throw into a contested space for teammates to immediately push. Passive flash: wait for enemies to peek and flash them as they do. Walk backwards throw suspends flash in air — useful for improvised setups when you don't have a memorized lineup. Use in-game pings to estimate distance for on-the-fly flashes. Can self-flash off cross-map knife setup to be aggressive yourself.",
        common_mistakes: [
          "Not communicating aggressive vs passive — teammates need to know whether to push or hold",
          "Only using memorized lineups — learn distances so you can flash from anywhere on the fly"
        ],
        key_insight: "KAY/O has the best pop flashes in the game. The walk backwards throw slows and suspends the flash — use it when you need an improvised setup and don't have a lineup memorized."
      },
      frag_ment: {
        correct_usage: "Goes through walls and floors. More damage at center than edges. Use to clear corners and push enemies into flash zones. Best combo: flash first, molly lands simultaneously — flash pushes enemies into the molly zone for free damage or kills.",
        common_mistakes: [
          "Throwing molly alone without a flash combo — the real value is forcing enemies into it with a flash",
          "Aiming at the outer edge of a group instead of center — damage drops off significantly"
        ],
        key_insight: "Molly + flash combo is KAY/O's highest value play. The flash pushes enemies into what they think is a safe zone, then the molly punishes them for being there."
      },
      null_cmd: {
        correct_usage: "Pop it in a safe position — you're completely vulnerable while pulsing. Best used when your team is winning a fight and needs the suppression to close it out, or to stop an enemy ult from being used in a key moment.",
        common_mistakes: [
          "Activating in the open — you're a stationary target while pulsing",
          "Saving it for late round when enemies have already used their ults — use it when it counters something specific"
        ],
        key_insight: "If teammates are nearby when you go down in NULL/cmd, they can res you. Coordinate with your team so someone is always close enough to attempt the res."
      }
    },
    attack: {
      primary_job: "Follow your duelist. Knife to suppress sentinels or close enemies. Molly to clear corners and reduce angles. Flash to get duelist onto site. Post-plant: use remaining flashes aggressively to counterfight retakers.",
      key_insight: "KAY/O on attack is about removing obstacles for your entry. Suppress the sentinel, clear the corner, flash the duelist in — then be ready to fight yourself."
    }
  },
  iso: {
    role: "Duelist",
    core_philosophy: "Iso is a mechanics-first agent. If you're not getting kills you're not finding value — unlike initiators or controllers, Iso's entire kit is built around winning gunfights. You need good movement, crosshair placement, and raw aim to play him properly. He's one of the best solo carry agents in the game if your mechanics are there.",
    watch: [],
    abilities: {
      double_tap: {
        correct_usage: "Treat exactly like Jett dash — only pop when you know you're about to fight someone. Use jump spotting to confirm a target before popping. Shield turns 50/50 fights into 70/30 fights by absorbing the first burst and giving you more time to shoot back.",
        common_mistakes: [
          "Popping shield speculatively on an angle without confirming anyone is there",
          "Wasting it early in the round before a site hit",
          "Letting it expire unused — it's gone forever once it runs out"
        ],
        key_insight: "Shield is the most important part of Iso's kit. Without it you're just a regular duelist with a wall and vulnerable. If you pop it and it expires without a fight, you've given away your biggest advantage for the round."
      },
      undercut: {
        correct_usage: "Silences abilities in addition to making targets take more damage. Use to deny drone info, cancel Gecko ult, or shut down rushes through choke points. If enemies push through it they die faster — if they stop, you've bought time for teammates to rotate.",
        key_insight: "Most players only think of vulnerable as damage amplification. The silence is equally valuable — use it to shut down info-gathering utility before it gets value. For example, throw it on a Sova who's about to drone to instantly deny all that information."
      },
      contingency: {
        correct_usage: "Think of it as a moving smoke that blocks bullets. Follow it onto site and use it to isolate close angles — clear left and right as the wall moves forward, then look ahead once it passes those angles. On defense, save it for retakes — same principle applies.",
        key_insight: "The wall lets you entry without having to hold every angle simultaneously. Clear in stages as it moves. As the wall passes an angle, you no longer need to worry about it — focus forward."
      },
      kill_contract: {
        correct_usage: "Time it so your team is ready to explode out when you ult — if you lose the duel your team needs to be close enough to trade. Prioritize targets: OP holders first, Jet with active knives, then sentinels to clear setups. When ulting an OP holder, hide behind the wall with shield up — zero risk of losing that duel.",
        ult_mechanics: {
          hold_angle: "Lower ping players: hold a sliver on left or right side of the wall so the enemy can only spawn on one side. Easier to win if you know exactly where they'll be.",
          hide_behind_wall: "Higher ping players: hide behind wall, wait for it to drop, then strafe immediately when walls fall. Keeps shield intact — enemy can't shorty or classic it off before the duel starts.",
          universal: "Strafe the moment walls drop regardless of approach. You dodge their initial flick and make yourself a harder target before the fight even starts."
        },
        common_mistakes: [
          "Ulting while team is far back — if you lose the duel the enemy gets a free defender",
          "Ulting random targets instead of high-value ones",
          "Standing still when walls drop instead of immediately strafing"
        ]
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
    timing: {
      summary: "Swing when the enemy isn't looking at you — specifically on spaces where they have to clear multiple angles while moving. Works in solo queue, not team-dependent.",
      key_insight: "Peeking on timing is one of the most underused tools in ranked. Study where enemies have to look away from your angle to clear something else, and swing in that window."
    },
    conditioning: {
      summary: "Make the enemy accustomed to a pattern over multiple rounds, then exploit their adaptation.",
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
    win_pistol: "Buy round 2. Expect a tough round 3 — enemy saved round 2 after losing pistol and will full buy round 3.",
    lose_pistol: "Save round 2. Buy round 3 with stacked credits.",
    lose_pistol_and_round_2: "Still buy round 3 — you have banked enough from two save rounds.",
    loss_bonus: "Lose round 1 = +500 next round. Loss bonus stacks up to +900 per round on consecutive losses. Win a round = loss bonus resets.",
    bonus_round: "Win a round with pistols = bonus round next. Should almost always full buy on bonus unless saving for a specific reason."
  },
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