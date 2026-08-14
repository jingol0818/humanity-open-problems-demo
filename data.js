window.HOP_DATA = {
  themes: [
    { id: "universe", label: "Universe" },
    { id: "life", label: "Life" },
    { id: "mind", label: "Mind" },
    { id: "mathematics", label: "Mathematics" },
    { id: "computing", label: "Computing" },
    { id: "human-past", label: "Human Past" }
  ],

  problems: [
    {
      id: "dark-matter",
      theme: "universe",
      domain: "Physics · Astronomy",
      title: "What is dark matter?",
      shortTitle: "Dark Matter",
      status: "OPEN",
      problemClass: "Search · Experimental · Plural-resolution",
      summary: "We can measure its gravitational effects across the universe, but we still don't know what dark matter is physically made of.",
      hook: "We can see its gravity everywhere. We still don't know what it is.",
      why: "Dark matter shapes galaxies and the large-scale structure of the universe. Identifying it could reveal physics beyond the particles we already know.",
      metrics: { frontiers: 6, questions: 18, recent: 3, disputed: 2 },
      known: [
        "Multiple independent observations require an additional gravitating component beyond ordinary luminous matter.",
        "Dark matter does not interact strongly with light in the way ordinary matter does.",
        "No proposed particle or physical candidate has been confirmed as the identity of dark matter."
      ],
      unknown: [
        "What particle, field, compact object, or combination actually makes up dark matter?",
        "How strongly does it interact with ordinary matter beyond gravity?",
        "Is dark matter one component or several?"
      ],
      frontiers: [
        { id: "dm-direct", title: "Direct detection", question: "Does galactic dark matter scatter off ordinary matter?", status: "ACTIVE", last: "2d" },
        { id: "dm-axion", title: "Axions & ultralight candidates", question: "Could extremely light particles make up dark matter?", status: "ACTIVE", last: "12d" },
        { id: "dm-collider", title: "Collider & dark-sector searches", question: "Can hidden-sector particles be produced in high-energy collisions?", status: "ACTIVE", last: "21d" },
        { id: "dm-indirect", title: "Indirect detection", question: "Do cosmic signals contain products of dark-matter interactions?", status: "ACTIVE", last: "31d" },
        { id: "dm-structure", title: "Cosmic structure", question: "What do galaxies and gravitational lensing reveal about dark-matter properties?", status: "ACTIVE", last: "42d" },
        { id: "dm-alt", title: "Alternative explanations", question: "Which observations truly require new matter rather than modified gravity?", status: "ACTIVE", last: "65d" }
      ],
      milestones: [
        { year: "1930s", text: "Missing-mass evidence emerges from galaxy clusters." },
        { year: "1970s", text: "Galaxy rotation measurements strengthen the case for unseen mass." },
        { year: "1990s–", text: "Cosmology and gravitational lensing provide independent constraints." },
        { year: "Today", text: "Multiple experiments keep narrowing candidate models without a confirmed identity." }
      ],
      explain: {
        simple: "Imagine seeing leaves move in the wind while the air itself is invisible. Astronomers see galaxies move as if extra matter is present. We call that missing component dark matter, but we still do not know what it physically is.",
        highschool: "Gravity lets us infer mass even when that mass emits no light. Galaxy rotation, gravitational lensing, cosmic structure and other measurements all point to extra gravitating matter. Experiments now test many possible identities, from new particles to compact objects.",
        undergraduate: "Dark matter is inferred from converging gravitational and cosmological evidence. The research frontier spans direct detection, collider production, indirect signatures, ultralight candidates and astrophysical structure. A null experiment can still be progress when it excludes a defined region of parameter space.",
        specialist: "The page treats dark matter as a plural-resolution search problem: candidate models, parameter constraints and observational properties move independently. Progress is encoded as verified exclusions, new search channels and reproduced observational constraints rather than a scalar completion score."
      }
    },

    {
      id: "origin-of-life",
      theme: "life",
      domain: "Biology · Chemistry · Geoscience",
      title: "How did life begin?",
      shortTitle: "Origin of Life",
      status: "OPEN",
      problemClass: "Experimental · Historical reconstruction · Plural-resolution",
      summary: "We know life emerged from non-living chemistry, but the path from simple molecules to an evolving system remains unresolved.",
      hook: "At some point, chemistry became evolution. We still don't know how.",
      why: "Understanding life's origin would reveal how heredity, metabolism and compartments can emerge from chemistry — and help us judge where else life might arise.",
      metrics: { frontiers: 8, questions: 24, recent: 4, disputed: 4 },
      known: [
        "Many building blocks of life can form without biology under some laboratory or extraterrestrial conditions.",
        "RNA-like chemistry, peptides and membrane-like compartments can each show life-like behaviors in controlled systems.",
        "No single experimentally demonstrated pathway is established as the actual historical route taken on early Earth."
      ],
      unknown: [
        "How did information-bearing polymers first replicate well enough for evolution?",
        "How were replication, metabolism and compartments coupled into one evolvable system?",
        "Which early-Earth environments and chemical cycles were actually involved?"
      ],
      frontiers: [
        { id: "ool-building", title: "Prebiotic building blocks", question: "Where did life's molecular ingredients come from?", status: "ACTIVE", last: "8d" },
        { id: "ool-rna", title: "RNA & heredity", question: "How could information-bearing polymers form and replicate without enzymes?", status: "ACTIVE", last: "14d" },
        { id: "ool-peptides", title: "Peptides before biology", question: "Could early peptides assist replication or catalysis?", status: "ACTIVE", last: "25d" },
        { id: "ool-energy", title: "Energy & primitive metabolism", question: "What reaction networks could sustain prebiotic chemistry?", status: "ACTIVE", last: "33d" },
        { id: "ool-protocells", title: "Protocells", question: "How did membranes or other compartments grow, divide and retain information?", status: "ACTIVE", last: "18d" },
        { id: "ool-coupling", title: "Coupling the subsystems", question: "How did heredity, metabolism and compartments become one unit?", status: "ACTIVE", last: "39d" },
        { id: "ool-env", title: "Environmental setting", question: "Which geological environments supplied compatible chemical cycles?", status: "ACTIVE", last: "51d" },
        { id: "ool-transition", title: "Transition to evolution", question: "What minimal system could undergo sustained Darwinian evolution?", status: "ACTIVE", last: "61d" }
      ],
      milestones: [
        { year: "1950s", text: "Classic prebiotic-chemistry experiments show organic molecules can form abiotically." },
        { year: "1980s–", text: "Catalytic RNA strengthens the plausibility of an RNA-centered early stage." },
        { year: "2000s–", text: "Systems chemistry increasingly tests compatible pathways rather than isolated molecules." },
        { year: "Today", text: "Research tries to connect chemistry, geology, compartments and evolution into integrated scenarios." }
      ],
      explain: {
        simple: "Life probably did not appear in one jump. Researchers are trying to reconstruct many smaller transitions: making useful molecules, storing information, building compartments, using energy and finally evolving.",
        highschool: "Origin-of-life research asks how non-living chemistry could become a system capable of heredity and natural selection. Different experiments test pieces of that path, but showing a reaction is possible in a lab does not prove it happened that way on early Earth.",
        undergraduate: "The field combines prebiotic chemistry, geochemistry, RNA catalysis, protocell physics and evolutionary theory. The key product challenge is to track demonstrated mechanisms separately from claims about historical occurrence and to test whether proposed steps are mutually compatible.",
        specialist: "This is modeled as a plural-resolution historical reconstruction problem. Mechanism-level evidence can be highly reproducible while the historical inference remains weak. The graph therefore preserves chemical demonstration, geochemical plausibility and cross-step compatibility as distinct evidence dimensions."
      }
    },

    {
      id: "technosignatures",
      theme: "universe",
      domain: "Astronomy · SETI",
      title: "Is there detectable extraterrestrial technology?",
      shortTitle: "Technosignatures",
      status: "OPEN",
      problemClass: "Search · Detection",
      summary: "No extraterrestrial technology has been confirmed, but each well-defined search can tell us where and how deeply humanity has already looked.",
      hook: "We haven't found alien technology. But we have barely searched the possibility space.",
      why: "A verified technosignature would transform our understanding of life and intelligence in the universe. Even null searches can reduce uncertainty when their sensitivity and coverage are known.",
      metrics: { frontiers: 7, questions: 16, recent: 4, disputed: 3 },
      known: [
        "No signal has been independently confirmed as extraterrestrial technology.",
        "Modern searches examine radio, optical, infrared and other possible technological signatures.",
        "Searches cover only defined portions of a vast space of targets, frequencies, signal types and sensitivities."
      ],
      unknown: [
        "Does any detectable technological civilization exist within our observational reach?",
        "Which technosignatures would be most persistent and discoverable?",
        "How much of the plausible search space has humanity actually examined?"
      ],
      frontiers: [
        { id: "seti-radio", title: "Narrowband radio", question: "Are artificial-looking radio transmitters detectable around target stars or objects?", status: "ACTIVE", last: "4d" },
        { id: "seti-optical", title: "Optical & infrared", question: "Are pulsed lasers or other artificial optical signals present?", status: "ACTIVE", last: "16d" },
        { id: "seti-waste", title: "Waste heat & megastructure anomalies", question: "Do unusual infrared signatures have technological explanations?", status: "ACTIVE", last: "44d" },
        { id: "seti-atmos", title: "Planetary technology", question: "Could industry or artificial illumination be detected on exoplanets?", status: "ACTIVE", last: "55d" },
        { id: "seti-artifact", title: "Solar-system & interstellar artifacts", question: "Do unusual visitors or local objects show artificial signatures?", status: "ACTIVE", last: "9d" },
        { id: "seti-candidate", title: "Candidate verification", question: "Can anomalous signals survive interference and natural-explanation checks?", status: "ACTIVE", last: "6d" },
        { id: "seti-coverage", title: "Search-space coverage", question: "Where have we looked, to what sensitivity, and what remains unexplored?", status: "ACTIVE", last: "2d" }
      ],
      milestones: [
        { year: "1960", text: "One of the first modern radio SETI searches targets nearby stars." },
        { year: "1990s–", text: "Digital instrumentation expands bandwidth and candidate filtering." },
        { year: "2010s–", text: "Large targeted and commensal surveys increase data volume dramatically." },
        { year: "Today", text: "Search coverage and verification protocols are becoming explicit research assets." }
      ],
      explain: {
        simple: "SETI is not just waiting for a message. It searches for signals or patterns that technology might create. When a careful search finds nothing, it still tells us that a particular kind of transmitter was not present above a certain strength in that search.",
        highschool: "Technosignature searches look for radio signals, lasers, unusual heat or other signs of technology. A strange signal is not automatically alien: researchers first eliminate satellites, human interference, instruments and natural astrophysics.",
        undergraduate: "The problem is best treated as a search-coverage graph. Every survey has targets, frequency or wavelength coverage, sensitivity, duration, detection pipeline and candidate-rejection rules. Null results become cumulative knowledge when these dimensions are preserved.",
        specialist: "The canonical object is not a binary 'aliens yes/no' claim but a versioned search-space record and candidate-provenance chain. Confirmation requires independent localization/follow-up plus rigorous exclusion of RFI, instrumentation and natural astrophysical explanations."
      }
    },

    {
      id: "collatz",
      theme: "mathematics",
      domain: "Mathematics",
      title: "Does every Collatz sequence eventually reach 1?",
      shortTitle: "Collatz Conjecture",
      status: "OPEN",
      problemClass: "Proof · Computation",
      summary: "The rule is simple enough for a child to try, yet no proof shows that every positive starting number must eventually reach 1.",
      hook: "A rule you can learn in ten seconds has resisted proof for decades.",
      why: "Collatz is a striking example of how very simple deterministic rules can produce behavior that is extraordinarily hard to understand in general.",
      metrics: { frontiers: 4, questions: 9, recent: 3, disputed: 5 },
      known: [
        "Huge finite ranges have been checked computationally without finding a counterexample.",
        "Strong partial theorems describe the behavior of almost all starting values in specific mathematical senses.",
        "Finite verification does not prove the statement for infinitely many positive integers."
      ],
      unknown: [
        "Does every positive integer eventually reach 1?",
        "Could a non-trivial positive cycle exist?",
        "Could an orbit grow forever without entering the known cycle?"
      ],
      frontiers: [
        { id: "col-compute", title: "Computational verification", question: "How far can the conjecture be certified by computation?", status: "ACTIVE", last: "11d" },
        { id: "col-almost", title: "Almost-all results", question: "What can be proved for almost every starting value?", status: "ACTIVE", last: "41d" },
        { id: "col-cycle", title: "Cycle constraints", question: "How strongly can hypothetical non-trivial cycles be constrained?", status: "ACTIVE", last: "67d" },
        { id: "col-structure", title: "Structural methods", question: "What symbolic or probabilistic structure can explain typical trajectories?", status: "ACTIVE", last: "35d" }
      ],
      milestones: [
        { year: "1930s", text: "The iteration problem becomes widely associated with Lothar Collatz." },
        { year: "Computing era", text: "Verified ranges grow dramatically with better algorithms and hardware." },
        { year: "2022", text: "A major almost-all result establishes strong typical-orbit behavior without proving the full conjecture." },
        { year: "Today", text: "Proof, bounded verification and algorithmic progress remain distinct frontiers." }
      ],
      explain: {
        simple: "Pick a number. If it is even, divide by two. If it is odd, multiply by three and add one. Repeat. Every number tested eventually falls to 1 — but testing even enormous numbers cannot prove the rule for all numbers forever.",
        highschool: "The hard part is the word 'every'. A computer can verify trillions or vastly more cases, but there are infinitely many integers. A proof needs an argument that covers all of them at once, or a single counterexample would disprove the conjecture.",
        undergraduate: "The platform separates bounded computational verification, partial theorems, cycle constraints and claimed proofs. These are different epistemic objects: extending a verified range is real progress but does not establish the infinite statement.",
        specialist: "Collatz is a useful verifier-rich test case. Deterministic work units, formalization of known lemmas and dependency audits are tractable Knowledge Infrastructure tasks, while novel proof claims remain a high-friction Frontier Research track."
      }
    },

    {
      id: "consciousness",
      theme: "mind",
      domain: "Neuroscience · Philosophy",
      title: "How does brain activity support conscious experience?",
      shortTitle: "Consciousness",
      status: "OPEN",
      problemClass: "Theory competition · Foundational boundary",
      summary: "Competing theories make different predictions about how conscious experience is represented in the brain — and some of those predictions can be tested directly.",
      hook: "We are conscious every waking moment. We still disagree about how the brain makes that possible.",
      why: "A better theory of consciousness could reshape neuroscience, clinical assessment of unresponsive patients and our understanding of the relationship between brain activity and experience.",
      metrics: { frontiers: 7, questions: 20, recent: 3, disputed: 8 },
      known: [
        "Conscious perception is associated with reproducible patterns of neural activity, but correlation alone does not settle a theory.",
        "Major theories make at least some experimentally discriminable predictions.",
        "Recent adversarial tests have challenged important predictions of more than one leading theory rather than producing a simple winner."
      ],
      unknown: [
        "Which neural mechanisms are necessary and sufficient for specific conscious contents?",
        "Which signals reflect consciousness itself rather than report, attention or task demands?",
        "Whether foundational questions about subjective experience have a shared empirical resolution criterion."
      ],
      frontiers: [
        { id: "con-content", title: "Neural contents", question: "Which neural activity reliably represents conscious content?", status: "ACTIVE", last: "15d" },
        { id: "con-gnwt", title: "Global workspace", question: "Are global broadcast and ignition-like dynamics necessary?", status: "ACTIVE", last: "26d" },
        { id: "con-iit", title: "Integrated information", question: "Do posterior integrated structures match the theory's tested predictions?", status: "ACTIVE", last: "26d" },
        { id: "con-other", title: "Other theory families", question: "Which alternative mechanistic theories best survive direct tests?", status: "ACTIVE", last: "38d" },
        { id: "con-confound", title: "Measurement & report confounds", question: "Which neural signals belong to experience rather than reporting it?", status: "ACTIVE", last: "43d" },
        { id: "con-clinical", title: "Covert consciousness", question: "How can consciousness be detected in patients unable to report?", status: "ACTIVE", last: "19d" },
        { id: "con-hard", title: "Why subjective experience?", question: "Can there be a shared terminal empirical test for the explanatory gap?", status: "FOUNDATIONAL", last: "—" }
      ],
      milestones: [
        { year: "1990s–", text: "Neural correlates of consciousness become a major experimental program." },
        { year: "2000s–", text: "Multiple competing mechanistic theories make increasingly specific predictions." },
        { year: "2020s", text: "Adversarial collaborations preregister contrasting predictions for direct tests." },
        { year: "Today", text: "The field increasingly separates empirical theory competition from foundational philosophical debate." }
      ],
      explain: {
        simple: "Scientists can measure the brain while people see, hear and feel things, but different theories disagree about which activity actually makes an experience conscious. Some of those disagreements can be tested in experiments.",
        highschool: "A good consciousness experiment needs competing theories to predict different observable outcomes. If an experiment challenges a prediction, that does not automatically disprove every version of the theory — it narrows which claims remain plausible.",
        undergraduate: "The empirical page tracks operationalized predictions, preregistered tests, neural measurements and theory revisions. The philosophical Hard Problem is separated because it lacks a widely shared terminal experimental verifier.",
        specialist: "The graph treats theory labels as versioned claim sets rather than immutable teams. Challenge Protocols attach pre-agreed divergent predictions, sensitivity criteria, datasets and interpretation history to specific experiments."
      }
    }
  ],

  events: [
    {
      id: "dm-constraint-01",
      problemId: "dark-matter",
      frontierId: "dm-direct",
      type: "NEW CONSTRAINT",
      knowledge: "verified",
      date: "2 days ago",
      title: "A direct-detection search narrowed another region of candidate space.",
      summary: "The experiment found no confirmed dark-matter signal in the tested region, but its defined sensitivity excludes more combinations of candidate mass and interaction strength.",
      changed: "A specific part of the candidate parameter space is now less viable under the tested model and assumptions.",
      notMeaning: "Dark matter itself was not detected, and the broader question of its identity remains open.",
      scope: "Direct-detection candidate models within the experiment's stated sensitivity and analysis assumptions.",
      trust: "Experiment/collaboration result with an explicit search range, background model and statistical limit.",
      source: "Primary experiment publication / collaboration result"
    },
    {
      id: "ool-mechanism-01",
      problemId: "origin-of-life",
      frontierId: "ool-rna",
      type: "NEW MECHANISM",
      knowledge: "verified",
      date: "8 days ago",
      title: "A laboratory pathway made an RNA-formation bottleneck more chemically plausible.",
      summary: "A controlled experiment showed that a prebiotically relevant chemical interaction can strongly promote an RNA-related polymerization step under the tested conditions.",
      changed: "One proposed step toward information-bearing polymers has a stronger experimentally demonstrated mechanism.",
      notMeaning: "The result does not show that this exact pathway occurred on early Earth or that the origin of life has been recreated.",
      scope: "Laboratory prebiotic chemistry under the paper's defined starting materials and environmental conditions.",
      trust: "Peer-reviewed experimental result; historical interpretation remains a separate inference.",
      source: "Peer-reviewed primary research"
    },
    {
      id: "seti-search-01",
      problemId: "technosignatures",
      frontierId: "seti-coverage",
      type: "SEARCH COMPLETED",
      knowledge: "verified",
      date: "4 days ago",
      title: "A targeted radio search found no confirmed technosignature — and expanded known search coverage.",
      summary: "Millions of initial signal hits were filtered through interference checks. None survived as extraterrestrial technology, while the observations placed defined limits on transmitters in the searched band and target context.",
      changed: "Humanity has now examined another measurable slice of technosignature search space to a known sensitivity.",
      notMeaning: "The null result does not mean extraterrestrial technology does not exist elsewhere or outside the searched signal models.",
      scope: "Specified target, observing window, radio-frequency range, sensitivity and narrowband signal model.",
      trust: "Instrumental observations with explicit candidate filtering and interference rejection.",
      source: "Observatory / SETI research result"
    },
    {
      id: "collatz-range-01",
      problemId: "collatz",
      frontierId: "col-compute",
      type: "COMPUTATIONAL RANGE EXTENDED",
      knowledge: "verified",
      date: "11 days ago",
      title: "The conjecture remains consistent across a larger rigorously checked finite range.",
      summary: "A computational method verified that every starting value in the reported finite interval reaches the known 4→2→1 cycle.",
      changed: "The bounded region known to contain no counterexample has expanded.",
      notMeaning: "Checking any finite range cannot prove a statement about all positive integers.",
      scope: "Finite computational interval only, under the published implementation and verification method.",
      trust: "Deterministic computation that can be independently reproduced on bounded work units.",
      source: "Peer-reviewed computational mathematics result"
    },
    {
      id: "con-theory-01",
      problemId: "consciousness",
      frontierId: "con-gnwt",
      type: "THEORY CHALLENGED",
      knowledge: "verified",
      date: "3 weeks ago",
      title: "A preregistered adversarial experiment challenged key predictions of leading consciousness theories.",
      summary: "Researchers tested contrasting predictions from major theories using multiple brain-measurement methods. Some predictions were supported while important predictions from both sides were challenged.",
      changed: "Specific theory implementations now have less support for some preregistered predictions, narrowing the empirical theory space.",
      notMeaning: "The experiment did not identify a single final winner and did not solve the philosophical question of why subjective experience exists.",
      scope: "The specific preregistered predictions, paradigms and biological implementations tested in the experiment.",
      trust: "Multi-site adversarial collaboration with preregistered predictions and open research materials.",
      source: "Peer-reviewed multi-center research"
    },
    {
      id: "collatz-claim-01",
      problemId: "collatz",
      frontierId: "col-structure",
      type: "NEW PROOF CLAIM",
      knowledge: "activity",
      date: "Today",
      title: "A new manuscript claims a proof of the Collatz conjecture.",
      summary: "The manuscript has entered review tracking. No verified resolution has been established.",
      changed: "Nothing in the canonical knowledge graph yet. This is a research activity event pending review.",
      notMeaning: "A posted manuscript or confident title does not change the conjecture's OPEN status.",
      scope: "Unverified mathematical claim.",
      trust: "Under review; no platform verification completed.",
      source: "Unverified manuscript"
    },
    {
      id: "seti-candidate-01",
      problemId: "technosignatures",
      frontierId: "seti-candidate",
      type: "CANDIDATE UNDER REVIEW",
      knowledge: "activity",
      date: "Today",
      title: "An unusual signal candidate is being checked against human-made interference.",
      summary: "The candidate passed an initial automated filter but has not passed independent localization, repeat observation or interference checks.",
      changed: "No trusted knowledge state has changed yet.",
      notMeaning: "An anomaly score is not evidence of extraterrestrial intelligence by itself.",
      scope: "Single candidate in an early screening stage.",
      trust: "Research activity only; independent verification pending.",
      source: "Candidate-review queue"
    }
  ]
};
