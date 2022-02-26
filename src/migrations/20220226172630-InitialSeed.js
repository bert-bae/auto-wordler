"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("words", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      word: {
        type: Sequelize.STRING,
      },
      characters: {
        type: Sequelize.INTEGER,
      },
      uniqueVowels: {
        type: Sequelize.INTEGER,
      },
    });

    const records = [
      {
        word: "thing",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "whole",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "being",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "biont",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cause",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "human",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "beast",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "brute",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fauna",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plant",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "flora",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shape",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "space",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "state",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "event",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "group",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "brush",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "going",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rally",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stunt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "touch",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "entry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "leave",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dodge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "break",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "smash",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "upset",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lapse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "error",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fault",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "smear",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stain",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "botch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "boner",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "snafu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fluff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gaffe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spill",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "grant",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "award",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "catch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pinch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "trick",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "magic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "drive",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "throw",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fling",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "heave",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pitch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "curve",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "smoke",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "layup",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "click",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nudge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "press",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shove",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "draft",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pluck",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "raise",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "belch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "blink",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "blush",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "flush",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "vomit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cough",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bound",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vault",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "remit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shoot",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "snipe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "skeet",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "scuff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "crash",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "worst",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "snick",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "blast",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "whiff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "liner",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plunk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "homer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "knock",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "whack",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "whang",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "smack",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spank",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "punch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "clout",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "parry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "grope",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "audit",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "check",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tying",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "flare",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "proof",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "score",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "twist",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shtik",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "feint",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "means",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tooth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "voice",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "wings",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bosom",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spare",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tally",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shift",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "exile",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "close",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "finis",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "conge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "death",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "blood",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spasm",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "retch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "start",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "debut",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scrum",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "broil",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scrub",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "purge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shave",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rinse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "salve",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "souse",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "march",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "amble",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tread",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hitch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tramp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lurch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stalk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "strut",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lunge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "prowl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "crawl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "creep",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "glide",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stage",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "jaunt",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "relay",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "carry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chase",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "climb",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mount",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "swoop",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "swing",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "slide",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "coast",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "flood",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "speed",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mudra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stoop",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "kneel",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "reach",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pivot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "twirl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "whirl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "squat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sweep",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shake",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "waver",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "right",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tweak",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "crush",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "grind",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "surge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "crack",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "burst",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "arson",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "graft",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "blend",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "union",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "split",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "notch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "slash",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "drain",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wound",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scald",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hunch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "usage",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "habit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hijab",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "round",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sunna",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "using",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "abuse",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "tease",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "house",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "hobby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sport",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "track",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bathe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fight",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "troll",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bocce",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bocci",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bowls",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rugby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bosie",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "fives",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hoops",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "jacks",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cards",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "monte",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stops",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "poker",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rummy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "whist",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "samba",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cinch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "carom",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "masse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chess",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "darts",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "halma",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lotto",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bingo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "beano",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "shogi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wager",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "craps",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "jinks",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "revel",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spree",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "binge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "caper",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "flirt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "folly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "prank",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "antic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "feria",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "rodeo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dance",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nauch",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pavan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "skank",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "strip",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lindy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stomp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "conga",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rumba",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tango",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "waltz",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "valse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "polka",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "music",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "carol",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "apery",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "panto",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "furor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "havoc",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "melee",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "haste",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hurry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "icing",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "block",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "swipe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "serve",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "slice",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shank",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "works",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "deeds",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "berth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "place",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chair",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "trade",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "craft",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "labor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sweat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "clean",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "count",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "probe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "study",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "taxis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "enema",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chore",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stint",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stead",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mound",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plate",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "first",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "short",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "third",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "steal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "guard",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dawah",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "blaze",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "waste",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wrong",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "porno",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "drink",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "setup",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lying",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "guile",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "fraud",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cheat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bluff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pride",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "greed",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sloth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wrath",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "anger",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "crime",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bunco",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bunko",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sting",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "theft",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "heist",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "offer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "essay",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "foray",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "share",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nisus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pains",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "trial",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "assay",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ELISA",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "sally",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "peril",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "clasp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "grasp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hands",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "snore",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chomp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shock",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "graze",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "munch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "screw",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nooky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shtup",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cross",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wince",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tears",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "times",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "minus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stare",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "glare",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "watch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "vigil",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sight",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dekko",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "taste",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "smell",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sniff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "snuff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "class",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "drill",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "model",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "yield",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "decal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gouge",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "amnio",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "prick",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "frisk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "quest",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "clash",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stand",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "force",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spoil",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "onset",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "storm",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "blitz",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ELINT",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "psyop",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "recce",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "recco",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "reccy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "salvo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cover",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "jihad",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "jehad",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "order",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hi-fi",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "agape",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Berit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Brith",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Briss",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Seder",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "visit",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "issue",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "claim",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pause",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "delay",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mercy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "siege",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stall",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pogey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "usury",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "field",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "co-op",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ferry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "leash",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "agism",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "refit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stick",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "scrap",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "aggro",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "thump",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pound",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "brawl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "causa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fatwa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "faith",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "boost",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "aegis",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "taunt",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "favor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "court",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "props",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tryst",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "hooky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Alamo",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Boyne",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Crecy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Ipsus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Issus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Leyte",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Meuse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pydna",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Somme",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Makin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Valmy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Ypres",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "adult",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "young",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "whelp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "puppy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "giant",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "crest",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "virus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "phage",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "HSv-1",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "HSV-2",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "parvo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cocci",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "staph",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "strep",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ameba",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "foram",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "algae",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "arame",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wrack",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fucus",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "laver",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Chara",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dulse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "zooid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "loach",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tinca",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tench",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "roach",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gobio",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "guppy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "platy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "molly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fetus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "teras",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spawn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "layer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "salpa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shark",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Lamna",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "manta",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "skate",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nandu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pipit",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "finch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "serin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Loxia",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "junco",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Vidua",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Padda",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pewee",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pewit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pipra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pitta",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mavis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "merle",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ouzel",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "ousel",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "robin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "veery",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mynah",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "minah",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "raven",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Mimus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sitta",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Parus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Irena",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "vireo",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Buteo",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Falco",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "eagle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "harpy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "owlet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Strix",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "siren",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Anura",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "ranid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Acris",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gecko",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "swift",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "anole",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "skink",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "teiid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "agama",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Draco",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "varan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gator",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "snake",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "racer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ptyas",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cobra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mamba",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "krait",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "viper",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "adder",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bitis",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Aspis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chick",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "biddy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "capon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lowan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "maleo",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "argus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "monal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quail",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "squab",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "macaw",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Upupa",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "momot",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Todus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Picus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "drake",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scaup",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "eider",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "goose",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Anser",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "brant",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "brent",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chaja",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bilby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "koala",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stock",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shrew",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Sorex",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chine",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plume",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "alula",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spine",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quill",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "style",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pilus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "armor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scale",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scute",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shell",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "theca",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "polyp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hydra",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "praya",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "coral",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ctene",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "beroe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "borer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fluke",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "leech",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ormer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "conch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "snail",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Helix",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Limax",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "whelk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "physa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cowry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ceras",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "beard",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Venus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ensis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "capiz",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "squid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sepia",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "prawn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "krill",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Mysis",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "britt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Lepas",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wader",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stork",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Ajaia",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "heron",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ardea",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "egret",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "crane",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "crake",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "reeve",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stilt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "larid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Larus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Rissa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "murre",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lunda",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gavia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "diver",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "grebe",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "solan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "booby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "goony",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "whale",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kogia",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Phoca",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "canid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bitch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Canis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pooch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "doggy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "feist",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hound",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cairn",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lhasa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "vizla",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "boxer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "husky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spitz",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "corgi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dingo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dhole",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hyena",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "felid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Felis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kitty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pussy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stray",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tabby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "queen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "manul",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ounce",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "tiger",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "liger",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tigon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ursus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bruin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "civet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fossa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Fossa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "genet",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "talon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chela",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "biped",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "belly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "louse",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Pulex",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tunga",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Musca",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "clegg",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Aedes",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Culex",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "punky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "midge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "drone",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nomia",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Vespa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "emmet",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mirid",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Lygus",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Anasa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Cimex",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "aphid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Aphis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "thrip",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "comma",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Cadra",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Tinea",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Samia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "eggar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "egger",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "larva",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nymph",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "imago",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "coney",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lapin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bunny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Lepus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mouse",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Zapus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dipus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lerot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Cavia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "coypu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "udder",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hyrax",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Equus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "equid",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "horse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "filly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "steed",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bronc",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Omaha",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shire",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "poler",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pacer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pinto",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "burro",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "jenny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hinny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "kiang",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "zebra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rhino",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tapir",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "swine",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "piggy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shoat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hippo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rumen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bovid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stirk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "steer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dogie",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "leppy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tsine",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Welsh",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Angus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Devon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "grade",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bibos",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gayal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bison",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sheep",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "argal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "urial",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "audad",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Capra",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "billy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nanny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "goral",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "serow",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "takin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "addax",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bongo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nyala",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "saiga",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "eland",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kobus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "royal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Alces",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "moose",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "camel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "llama",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "okapi",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "stoat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fitch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "zoril",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lutra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "otter",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "skunk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Meles",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ratel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sable",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pekan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tayra",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "taira",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "snout",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "trunk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "poyou",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tatou",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Manis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "croup",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "flank",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "elbow",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shaft",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Pongo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "orang",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chimp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "patas",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Papio",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Cebus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Aotus",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "lemur",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "potto",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "indri",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Avahi",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Potos",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Nasua",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "coati",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "panda",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Arius",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Gadus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scrod",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Molva",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "torsk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "elver",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "moray",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Alosa",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "allis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sprat",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Salmo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cohoe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "trout",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cisco",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "smelt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Elops",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lotte",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "saury",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "perch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Perca",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "snook",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bream",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cobia",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Selar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Brama",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tetra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bolti",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "grunt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "porgy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Mugil",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "barbu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wahoo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tunny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Sarda",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pogge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Triga",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "brill",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Solea",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "abaya",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "abbey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Elvis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "adobe",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "aglet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "agora",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "forum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plane",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "aisle",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "alarm",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "album",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "alley",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "aloes",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Xanax",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "altar",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Amati",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "upper",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "annex",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "anode",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "foyer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lobby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "flack",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "anvil",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dress",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gizmo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gismo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "apron",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "apsis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scuba",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "arbor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bower",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "arena",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "armet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "array",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "arrow",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ascot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bayer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "atlas",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spray",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "attic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "audio",
        characters: 5,
        uniqueVowels: 4,
      },
      {
        word: "auger",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "robot",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "golem",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "purse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pipes",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "decoy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "baize",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "patch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "banjo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "barge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "glove",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "basic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "basin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "baste",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "batik",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "baton",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bazar",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wagon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "beads",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "beany",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "busby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shako",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pager",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stein",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bench",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "banch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "beret",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "besom",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bevel",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bezel",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bhang",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wheel",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cycle",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bidet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "big_H",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bight",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bijou",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "bilge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "visor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vizor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "birch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "black",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "blade",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "blank",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dummy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "blimp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "blind",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pants",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "torch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "board",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spool",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bogie",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "bogey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bolus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cupel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bones",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "booth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "kiosk",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "boule",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "derby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "brace",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "braid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "brail",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "brake",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "brass",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "groin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "jetty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "briar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "brick",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "broom",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Brown",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "buggy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bugle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bulla",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dozer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sheaf",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spile",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "buret",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "burin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "burqa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "burka",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gunny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "coach",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "BVD's",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "byway",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "caber",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cabin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cable",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cache",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "caddy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cameo",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "canal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "taper",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ganja",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "canoe",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "cargo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "saber",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sabre",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "CD-WO",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cello",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chaff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chain",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chalk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "potty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "charm",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chart",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "teddy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chest",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chime",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "china",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chino",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chock",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wedge",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "choir",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "choke",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "choky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chuck",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "churn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chute",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cigar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "girth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Cipro",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "clack",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "clamp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "claro",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cleat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "clews",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cloak",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "clock",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sabot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "whorl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "helix",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "goods",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "condo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "panel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "truss",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cords",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "corer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quoin",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "trump",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stays",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cosey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cozey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cozie",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "couch",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "coupe",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "cramp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "crank",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "crate",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cream",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "creel",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "crepe",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "crape",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "crock",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "croft",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "crook",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "crown",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cruet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cruse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "crypt",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "cubby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cubeb",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cuddy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "curet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "curio",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "drape",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dacha",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dairy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stump",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "levee",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "davit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "delft",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "denim",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "floss",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "detox",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "deuce",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dewar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dhoti",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nappy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "diary",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dicer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dicky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dildo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "diner",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dinky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "diode",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "disco",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "still",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "point",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ditch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "divan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "diwan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dixie",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "doily",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "doyly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dolly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dowel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "frock",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tails",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "drift",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "drove",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "HAART",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dryer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "drier",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "smock",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "abode",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "phone",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "easel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "eaves",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "edger",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "image",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "duvet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "organ",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "empty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "EPROM",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scarp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ether",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "extra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cloth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fagot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fauld",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "felly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fence",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pilot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fesse",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fiber",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fibre",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fichu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "glass",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "filet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "piece",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "flail",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tweed",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "white",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "flaps",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "flash",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "flask",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "flats",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "float",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "floor",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "level",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "story",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "flume",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "flute",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "folio",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "forge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "forte",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fount",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "frail",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "frame",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "frill",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "frogs",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "front",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Lasix",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fusee",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fuzee",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fusil",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "futon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gable",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gaddi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gauge",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "gauze",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "gavel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gears",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "train",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gelly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Lopid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "genre",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "globe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "glyph",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "links",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gourd",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "grail",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "grand",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "grate",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "grave",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "grill",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "earth",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "grove",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gulag",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "inset",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "helve",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "haick",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cuffs",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hanky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "truck",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "harem",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hatch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "haven",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "oasis",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "hawse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "heart",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hedge",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hinge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hogan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hoist",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lodge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hotel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hovel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hutch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shack",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Advil",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "igloo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lozal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ingot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "inkle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "inlay",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "decor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "irons",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "jabot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "knave",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "clink",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "japan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "jewel",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "jimmy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "jemmy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "joint",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "joist",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "jolly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "jorum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "judas",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pinny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "green",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Kaaba",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Caaba",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "kanzu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kayak",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "kazoo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "token",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "relic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ketch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "khadi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "khaki",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "knife",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plain",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "clone",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "knout",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kraal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "kurta",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kylie",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kiley",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kylix",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cylix",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lager",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ladle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lagan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ligan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lally",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lanai",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lance",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lapel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "laser",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "thong",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lasso",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "riata",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "reata",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "latch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "latex",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lathe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lathi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mower",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "layby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Arava",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "legin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lemon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lense",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lever",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "levis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lidar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "light",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "linac",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "linen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lisle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "local",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lorry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "loupe",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "lower",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Luger",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lungi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "panga",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "manor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "manse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "maser",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "match",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mazer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "store",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "men's",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wares",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "meter",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fixer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shabu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "trash",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "metro",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "middy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mimeo",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Roneo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "miter",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mitre",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mixer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mizen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fosse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "modem",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "moire",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "mould",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Moban",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "moped",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "motel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "motif",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "motor",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mouth",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mufti",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mulch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mules",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mural",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Aleve",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "newel",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "paper",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nicad",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ninon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "niqab",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "guest",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "NNRTI",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "NSAID",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "noose",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "noria",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "ogive",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "novel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nylon",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "oiler",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "opera",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "opium",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "oriel",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Orlon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "orlop",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "scope",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ouija",
        characters: 5,
        uniqueVowels: 4,
      },
      {
        word: "getup",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "privy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "jakes",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ovolo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "thumb",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Ovral",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Serax",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "oxbow",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "oxeye",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "paint",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "panty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "parer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "parka",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Paxil",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "patio",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "patka",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pavis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "peavy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pedal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "thole",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "phial",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ampul",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "photo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "print",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "piano",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "picot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wharf",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pieta",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "toque",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "pipet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pique",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "piste",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "topee",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "piton",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sprag",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pixel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plaza",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pleat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plait",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plumb",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "plush",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pokey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "porch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "grass",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pouch",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "prism",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "prong",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pumps",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stack",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pylon",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pyxis",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "quern",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quilt",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quipu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quirk",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quirt",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "coign",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quoit",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "rophy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "roofy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "radar",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "radio",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "tuner",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "baulk",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shred",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ranch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "range",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ratch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ratan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rayon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "razor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "niche",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "reset",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "recap",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "verso",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ricer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ridge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rifle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rings",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "riser",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rivet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "route",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "X_ray",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Vioxx",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "roost",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rotor",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rouge",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "rowel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ruler",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spoke",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stave",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sheet",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "salon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kotex",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "saree",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "satin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sauna",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scarf",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "scene",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dreck",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "scoop",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "scrim",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "scull",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stamp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "seats",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sedan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "seine",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "serge",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "servo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sewer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shade",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scape",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "waist",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shard",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sherd",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sharp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shawl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shawm",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shear",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shelf",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shirt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shoji",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shook",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shore",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shunt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sieve",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Silex",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "silks",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Zocor",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sitar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "skein",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "skiff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "skirt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "slack",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "slate",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "slick",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sling",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sloop",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "slops",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "snare",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "snips",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "snood",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "socle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "soddy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sonar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "asdic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spade",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spats",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spear",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "specs",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spike",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "splat",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "splay",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Spode",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spoon",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Spork",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spout",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sprig",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sprit",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "squib",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "staff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "steps",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stake",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "steel",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spire",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stele",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stela",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stent",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stair",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stern",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stile",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stole",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stone",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stool",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stoep",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "depot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stoup",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stove",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Strad",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "strap",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "straw",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "twine",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "strop",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "suede",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "suite",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "rooms",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sulfa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sulky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "total",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ha-ha",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sword",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "brand",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tabis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "table",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tabor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tenia",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "tammy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tanka",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tappa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "arras",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tapis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tarot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plaid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tasse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tawse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "T-bar",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "telex",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "telly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tenon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tepee",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "terry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "thill",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tiara",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "timer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "baccy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "toner",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tongs",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tonic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "torus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "totem",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "toupe",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "towel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tower",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Babel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "trace",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rails",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "trail",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "trave",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "trawl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "trews",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Naqua",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "trike",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "prize",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tulle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tunic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tupik",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tupek",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "twill",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "swage",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "valve",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Calan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "verge",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "vibes",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "video",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "villa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "viola",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "virtu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "voile",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "vouge",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "paseo",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "water",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "weave",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "weeds",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stuff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "whisk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "winch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wiper",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "withe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wreck",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Xerox",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "xerox",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "yacht",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fruit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "yo-yo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "trait",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "drama",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cheer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "vigor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "verve",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "oomph",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rigor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "grace",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "humor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "amity",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "color",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "phase",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gloss",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "guise",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "stria",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "speck",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fleck",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "glory",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spiff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nevus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "craze",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "glaze",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "focus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "irony",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ethos",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "eidos",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "unity",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "doubt",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "noise",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "vertu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "truth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "merit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "flair",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "swank",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "eclat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "glitz",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "piety",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nerve",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cheek",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spite",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "honor",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "anomy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spunk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "valor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sooth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "taboo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "trust",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "poise",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "quiet",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "crust",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "breed",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "youth",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "idiom",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "grain",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "glint",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spark",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shine",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gleam",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sheen",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "matte",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tinge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ebony",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ivory",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pearl",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "amber",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "maize",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "ocher",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ochre",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "azure",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "mauve",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "peach",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "brown",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "umber",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "topaz",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "beige",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sepia",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "olive",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "taupe",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "value",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "aroma",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "odour",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scent",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sound",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tenor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "twang",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "swell",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "metre",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spice",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sweet",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "build",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chill",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "brawn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sinew",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "might",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "power",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "moxie",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "brunt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "titer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "titre",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "slope",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "slant",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "asana",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "depth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "large",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "small",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stout",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "limit",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "brink",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "orbit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ambit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gamut",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "width",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "worth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "price",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "worse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "avail",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "asset",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "title",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "reins",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "flesh",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stiff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mummy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hilus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hilum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cauda",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "filum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "inion",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cutis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "derma",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stoma",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "porta",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sinus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lumen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quiff",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "crimp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tress",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "queue",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "minge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "talus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hyoid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ilium",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ramus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "raphe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nasal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pubis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "costa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "teeth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cavum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "molar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "uvula",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "velum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "optic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "arcus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pupil",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pinna",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "incus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gland",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "aorta",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "glans",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "liver",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tummy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "juice",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "grume",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "serum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plasm",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chyle",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lymph",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "semen",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sudor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mucus",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "drool",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sebum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ichor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gleet",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "linin",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "aster",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fovea",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "sperm",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ootid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ovule",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "axone",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "tract",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "vagus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "brain",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plica",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gyrus",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fanny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ovary",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bursa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vulva",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hymen",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gonad",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "penis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "peter",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gorge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bowel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ileum",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "colon",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cecum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "caput",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bonce",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scalp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "skull",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nucha",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "torso",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mamma",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "titty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "navel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pubes",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "loins",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nates",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "thigh",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "manus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hooks",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "digit",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "index",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pinky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "glute",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "femur",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "psoas",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ankle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "facia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wrist",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "teres",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tibia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quick",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "snoot",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "naris",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "celom",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cornu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vomer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sense",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "logic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "knack",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Annwn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "faery",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hades",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "limbo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fancy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dream",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "skill",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lexis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mores",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "world",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "anima",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "snarl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "facer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "limen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stink",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fetor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "savor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "roast",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vogue",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "trend",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "retro",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dowse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "think",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "basis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "guess",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "savvy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "topic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "datum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "input",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bonus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "thorn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "worry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "grief",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "genus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "facet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "badge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ABC's",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "given",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ghost",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spook",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cabal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "401-k",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "salat",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "salah",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "zakat",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "theme",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "topos",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ideal",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "beaut",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "heavy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vista",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "guide",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "ethic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "creed",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "credo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dogma",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bourn",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "major",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "realm",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ology",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "maths",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ANOVA",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "angle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "deism",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "obeah",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Islam",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chaos",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "recto",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "daily",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "email",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "words",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "affix",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "infix",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tense",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "agent",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "alias",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Rabbi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lemma",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Uigur",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Uygur",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Morse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ASCII",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fable",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "prose",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "idyll",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "elegy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "haiku",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "lyric",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "verse",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rhyme",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Iliad",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "canto",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "envoy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "envoi",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "rider",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "codex",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Torah",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bible",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "canon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bible",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Josue",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Hosea",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Jonah",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Micah",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Nahum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Titus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "James",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tobit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Koran",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Quran",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "psalm",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Psalm",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "brief",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "16_PF",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "carte",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plank",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lease",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "proxy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bylaw",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "edict",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ukase",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "libel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Linux",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "macro",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "aside",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "moral",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hokum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fa_la",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hooey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tripe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quote",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "movie",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "flick",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rerun",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sutra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "adieu",
        characters: 5,
        uniqueVowels: 4,
      },
      {
        word: "adios",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "aloha",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hello",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hullo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "howdy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "quota",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "bravo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kudos",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "paean",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "smarm",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "BLitt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "MArch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "MLitt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "AMusD",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ph.D.",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "DPhil",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ArtsD",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "medal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "blame",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scorn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "scoff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sneer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "names",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "alibi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "reply",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "banns",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "posit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "axiom",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "cavil",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "peace",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "laugh",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spoof",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "poser",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rebus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tenet",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "alert",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "caret",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ditto",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "acute",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "breve",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hacek",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tilde",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "roman",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "serif",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "alpha",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gamma",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "delta",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "theta",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kappa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sigma",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "omega",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "aleph",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gimel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "zayin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sadhe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "label",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fifth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sixth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "trill",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "solfa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "segno",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chord",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "triad",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "minim",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "basso",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mezzo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "frown",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "scowl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "smile",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "smirk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Crown",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Arulo",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Optez",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ALGOL",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "COBOL",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "BASIC",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sango",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "koine",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Ioway",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Haida",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kansa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Osage",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Ponca",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ponka",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Mosan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Caddo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Carib",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Aleut",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Mayan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Kiowa",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Hokan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Karok",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Yuman",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kamia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Yanan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Miwok",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Maidu",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Kusan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Turki",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kazak",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Tatar",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Uzbek",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Uzbeg",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Uzbak",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Usbek",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Usbeg",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Yakut",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kalka",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Hakka",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Qiang",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Karen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dafla",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Kadai",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Khuen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Munda",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Khmer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Maori",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Malay",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Czech",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Scots",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Dutch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Norse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Suomi",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Vepse",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Ugric",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Mansi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Vogul",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Enets",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Entsi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Entsy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Irish",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Oscan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Latin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ladin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gypsy",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "Hindi",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Oriya",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Indic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Shina",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Farsi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tajik",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Paxto",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Greek",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Koine",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Attic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Eolic",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Doric",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ionic",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Ubykh",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Irula",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Kotar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tamil",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gondi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pengo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Manda",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Naiki",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Parji",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kurux",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Malto",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hausa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Angas",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Daffo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Warji",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pabir",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sukur",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Musgu",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Mulwi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gidar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Punic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bantu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kamba",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Chaga",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Kongo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Luyia",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Mashi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Mwera",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Nguni",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Swazi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Xhosa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sotho",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Tonga",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Serer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Wolof",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Mande",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dinka",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Masai",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "graph",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spiel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "farce",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "exode",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "revue",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "primo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Shema",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chant",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "octet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "etude",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fugue",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rondo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "intro",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "largo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ditty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dirge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "blues",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "oldie",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "kwela",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bebop",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "poesy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ploce",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "trope",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vowel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "schwa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shout",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "holla",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hollo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "whoop",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "yodel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "snort",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bawdy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "curse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "croak",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "devil",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "groan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "drawl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "prate",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "talks",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "motto",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "maxim",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gnome",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "adage",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "slang",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lingo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "argot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spell",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "query",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "final",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "demur",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gripe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "whine",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rumor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bayat",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "troth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "boast",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vaunt",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "blurb",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "flier",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "flyer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "racon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Oscar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shrug",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "kotow",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Haydn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "motet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "treat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "feast",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wages",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "prang",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shame",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "birth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "moksa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "karma",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "swash",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wring",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bleep",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "blare",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bleat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cheep",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chink",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chirp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "clang",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "clank",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cluck",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "creak",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "growl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "knell",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "miaou",
        characters: 5,
        uniqueVowels: 4,
      },
      {
        word: "miaow",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "neigh",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plonk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "plump",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "quack",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "skirl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "plash",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "strum",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "swish",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "clump",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "clunk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "thrum",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "thunk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tweet",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "whirr",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pulse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "throb",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "eagre",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "aegir",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "eager",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lahar",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spate",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "runup",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "quake",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "seism",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spurt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spirt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ravel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "party",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "joust",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gravy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bunce",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "faint",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "swoon",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ardor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gusto",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "agony",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "odium",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "fever",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chafe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "panic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scare",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dread",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "qualm",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Angst",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mirth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gloat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gloom",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dolor",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "guilt",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ennui",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "blahs",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "venom",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "goody",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "flour",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lunch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "snack",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "adobo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "borsh",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "broth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gumbo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bigos",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "poilu",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "salmi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "viand",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "candy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "carob",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "patty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "toffy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fudge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "taffy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "jello",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lolly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "crumb",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dowdy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "babka",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "torte",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cooky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "donut",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "blini",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bliny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "latke",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "jelly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fryer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "frier",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mince",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "puree",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "offal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "steak",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "boeuf",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "halal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "jerky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "scrag",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gigot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bacon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "marge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "frank",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bread",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "matzo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "limpa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "toast",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wafer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scone",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bialy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bagel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "butty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hoagy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pasta",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "penne",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "atole",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "gruel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "grits",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "kasha",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "eater",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tater",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fries",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "crisp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nacho",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "savoy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chard",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chili",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chile",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "onion",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cress",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "swede",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cling",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "apple",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Prima",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "berry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lansa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "prune",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cocoa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "melon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "icaco",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "grape",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tokay",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ilama",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "papaw",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ackee",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "genip",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mango",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "guava",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lichi",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mamey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "anjou",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "copra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pecan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "grist",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wheat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "paddy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "swill",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "salad",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "aspic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "clove",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cumin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "basil",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "thyme",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "salsa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "curry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "anise",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "sauce",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "aioli",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Bercy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "raita",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gouda",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "quark",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "paste",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "humus",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "honey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sugar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "syrup",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sirup",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "manna",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dough",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bitok",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fondu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kabob",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kebab",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "knish",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pasty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pilaf",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pilau",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "pilaw",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pizza",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sushi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quaff",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hooch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "kvass",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Medoc",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "macon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Rioja",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Soave",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Yquem",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "booze",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vodka",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "julep",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "toddy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "zombi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "decaf",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "latte",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mocha",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cider",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cyder",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "perry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pruno",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kumis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "negus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pepsi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "glogg",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cuppa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "congo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pekoe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hyson",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "brine",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "biome",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "brave",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "timid",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "enemy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "slain",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bunch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chunk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tribe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "folks",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mates",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "brood",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "flock",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "covey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "clade",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "taxon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "biota",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "shoal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "swarm",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cloud",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "locus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Fatah",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Qaeda",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ASALA",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "PDFLP",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "GRAPO",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hamas",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Fuqra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "PAGAD",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Qibla",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Porte",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "maker",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Curia",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Shiah",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sunni",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kokka",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "DARPA",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "FLETC",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Labor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "State",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "laity",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Shang",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Tudor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Reich",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "SHAPE",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "crowd",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "horde",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "telco",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "AFSPC",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "AFISR",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "squad",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "corps",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Ummah",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "guild",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "junto",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "junta",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cadre",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mafia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Mafia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "indie",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "combo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gaudy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "troop",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Eight",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lycee",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fleet",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "caste",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "varna",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sudra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Jirga",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "synod",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Bench",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "A'man",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "beats",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "punks",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gen_X",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "phyle",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ulema",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "ulama",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "FHLMC",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "elite",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "elect",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ninja",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "coven",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "batch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "posse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "copse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "woods",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hudud",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nexus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Usuli",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "woman",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mover",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Jewry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Azeri",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "ASEAN",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "there",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "aerie",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "eyrie",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Nubia",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "heath",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "burgh",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "glade",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "duchy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Earth",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "North",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "South",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "flies",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "haunt",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "midst",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "thick",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sands",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mecca",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nadir",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "parts",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "polls",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "clear",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rhumb",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "roads",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rough",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "'hood",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "weald",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scour",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "veldt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "venue",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "qibla",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Aries",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Twins",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Virgo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Libra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Herat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kabul",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Batna",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Blida",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hippo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sofia",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Burma",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Praia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kandy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Tchad",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Chile",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "China",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gansu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kansu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hebei",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hopei",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Hopeh",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hunan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Wuhan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hsian",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Macao",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Macau",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Congo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Zaire",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Colon",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Tepic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Aruba",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Haiti",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hayti",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Plzen",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Praha",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Brunn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Benin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Arhus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bioko",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Norge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Noreg",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Malmo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Essen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Halle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pfalz",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Quito",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Fijis",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Espoo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ellas",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Chios",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Khios",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Crete",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Kriti",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Athos",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Argos",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lycia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lydia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Nemea",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ilion",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Ilium",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Accho",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Golan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sodom",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sodom",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Haifa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Jaffa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Joppa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Judah",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Judea",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Italy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Capri",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lazio",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Anzio",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Tibur",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Genoa",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Milan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Turin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Padua",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Split",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Banff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Yukon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Perth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Nauru",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Papua",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tyrol",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Tirol",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dhaka",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Dacca",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Alost",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ghent",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Liege",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Namur",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sucre",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Belem",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Natal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Leeds",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Essex",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Islay",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Wales",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Cymru",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Sinai",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Egypt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Aswan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Cairo",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Luxor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "India",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Assam",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Delhi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Salem",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bihar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Nepal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tibet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lassa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Timor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Medan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Rasht",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Resht",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Basra",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Basia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Mosul",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sumer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Assur",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ashur",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Utica",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Japan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Hondo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Nihon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tokyo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Tokio",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Yeddo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Omiya",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Osaka",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kyoto",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Asama",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Amman",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Aqaba",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Akaba",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Zarqa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Kenya",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Paris",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Brest",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Dijon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lille",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lyons",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Nancy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Reims",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Vichy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Anjou",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Breiz",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Corse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gabon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gabun",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ghana",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Accra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Thule",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Korea",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Seoul",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Taegu",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Pusan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Saida",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sidon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Libya",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Vaduz",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Uskub",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Zomba",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sabah",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Malta",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Kulun",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Maroc",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Oujda",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Rabat",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Beira",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Niger",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Abuja",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Lagos",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Zaria",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Palau",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Belau",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Pelew",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Cuzco",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Cusco",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Luzon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Braga",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Porto",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Qatar",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Katar",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Nevis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Samoa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Mecca",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Jidda",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tabuk",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hejaz",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hijaz",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dakar",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Kursk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Gorki",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gorky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Kazan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Minsk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Homel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gomel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pinsk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Tartu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Memel",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Vilna",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Vilno",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Wilno",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kovna",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kovno",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Kyyiv",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Odesa",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Yalta",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Spain",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Cadiz",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Jerez",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Calpe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sudan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Nyala",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Berne",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Basel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Basle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Syria",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tunis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gafsa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Susah",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Adana",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bursa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Brusa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Izmir",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ionia",
        characters: 5,
        uniqueVowels: 4,
      },
      {
        word: "Jinja",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dubai",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Dixie",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Union",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Selma",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sitka",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dover",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Miami",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tampa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Macon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kauai",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Lanai",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Nihau",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Idaho",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Boise",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Nampa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Maine",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Orono",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Flint",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Butte",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bronx",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Fargo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Akron",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tulsa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Texas",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bryan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Plano",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tyler",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Ogden",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Provo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Annam",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hanoi",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Yemen",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Sanaa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Slask",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Negev",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Fuego",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Pasto",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mania",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Light",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "abyss",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "abysm",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Adams",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Adige",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Algol",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Rigil",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Andes",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Angel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "anion",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "arete",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "atoll",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bayou",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "beach",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "belay",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Wagon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "flake",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "boson",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "brook",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "creek",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "butte",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Cachi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ceres",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Cetus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chasm",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "clast",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cliff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "comet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Coosa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cleft",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tilth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Deneb",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "divot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dregs",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ember",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "esker",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "firth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fjord",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fiord",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "froth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Galan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "geode",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gluon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Green",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gulch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gully",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "guyot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hills",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "horst",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Hydra",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Snake",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Indus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "inlet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Isere",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "islet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Abila",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Abyla",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kamet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kasai",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "knoll",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "kopje",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Huron",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ilmen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Onega",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Laudo",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "ledge",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Lethe",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "liman",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "llano",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Logan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Loire",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "lough",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lupus",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "briny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "maria",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "marsh",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Mensa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "meson",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Namoi",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "nidus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Norma",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ocean",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Orion",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Pecos",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plage",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pluto",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "prion",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Purus",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Pyxis",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rapid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Rhine",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Rhein",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Rhone",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Rigel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "river",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Saale",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Saone",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "scurf",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Seine",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Shari",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Chari",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "silva",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sylva",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spall",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spawl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Spica",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spoor",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spume",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "steep",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "swamp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "swath",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Tagus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scree",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tauon",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Tiber",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Titan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Trent",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "selva",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sward",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Urals",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Vesta",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Volga",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "falls",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "White",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Wight",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Chang",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Yazoo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "alien",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Death",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Argus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Circe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Grace",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Harpy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Midas",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "witch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "deity",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Fates",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Arawn",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Boann",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dagda",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Dylan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Epona",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Fomor",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Horus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Thoth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Adapa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Antum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Enuki",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Aruru",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ashir",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dagon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dagan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Enlil",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Girru",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Igigi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Nammu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Nanna",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Nintu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ninib",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Nusku",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Aditi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Asura",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Ahura",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Bhaga",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Durga",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dyaus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gauri",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Indra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Marut",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Mitra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Rudra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sakti",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Shiva",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Surya",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ushas",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Vajra",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Kalki",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Arhat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lohan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hotei",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Maker",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Logos",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Yahwe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Yahve",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Allah",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "angel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fairy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pixie",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dwarf",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fiend",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "demon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Satan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Devil",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ghoul",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kelpy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lamia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "genie",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "jinni",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "eblis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "houri",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "satyr",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Oread",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "naiad",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dryad",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Napea",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Remus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Diana",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Chaos",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Doris",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Night",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Cupid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Janus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hymen",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Minos",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Morta",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Momus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Momos",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Erato",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Aides",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Orcus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tyche",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Cocus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Crius",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Atlas",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Theia",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Aesir",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Vanir",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Baldr",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Bragi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Brage",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Freyr",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Freya",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Frigg",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Hothr",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Hoder",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Jotun",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Mimir",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Njord",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Skuld",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Sigyn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Vidar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Donar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Wotan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Woden",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Wodan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Weird",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Babar",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Jason",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Medea",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Creon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Laius",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Fagin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Faust",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Goofy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Helen",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lover",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "equal",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Aryan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Black",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Negro",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "darky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nigga",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nigra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "honky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Asian",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "cooly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Olmec",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Aztec",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Conoy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Creek",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Piute",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Injun",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sioux",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Kolam",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Cajun",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Amish",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Uniat",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "hymie",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hindu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "swami",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Rasta",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sahib",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Frank",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Kafir",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tutsi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Chewa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Cuban",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Angle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Saxon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "limey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pommy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Fulah",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Fulbe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Inger",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Irani",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Iraqi",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Iraki",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Paddy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sabra",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Roman",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spick",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Omani",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Incan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Saudi",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Swede",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Brits",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Swiss",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Evenk",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Iowan",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Texan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kraut",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Boche",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Jerry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Croat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "abbot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "adept",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "maven",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mavin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "whizz",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "actor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "freak",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "junky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hussy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "adman",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "amigo",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "amora",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "comer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "augur",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "aunty",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "baboo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bahai",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bairn",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "baker",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "baldy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "baron",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mogul",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Baron",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cager",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "begum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "belle",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "donee",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "taker",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bigot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bimbo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "biter",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "blond",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bos'n",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bosun",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bobby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pinko",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hirer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Boxer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sonny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "swain",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bride",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "broad",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "buddy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "crony",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bully",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tough",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rowdy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "yobbo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "butch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "buyer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cadet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plebe",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "calif",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kalif",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hazan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "toter",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "champ",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fella",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "jingo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "child",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "minor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chump",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "patsy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "clerk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "clown",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tutor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "co-ed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Blimp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "titan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "comic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ianfu",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "crazy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "loony",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wight",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "crier",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "felon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cynic",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Cynic",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "daddy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pappa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pater",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wench",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "madam",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ma'am",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dandy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sheik",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "deary",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ducky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "doyen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "deist",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fogey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "donna",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "donor",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "giver",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "toper",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "navvy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "druid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "drunk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Druze",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Druse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dunce",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nanus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "elder",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Emile",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "emeer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ameer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Inuit",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "judge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nance",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pansy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "queer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "poove",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fakir",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "faqir",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Padre",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fatso",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fatty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Fauve",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "filer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sneak",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chief",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Mason",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "friar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "frump",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bloke",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "missy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fille",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gonif",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ganef",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ganof",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "G-man",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gofer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "goner",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "griot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "groom",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "grump",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "churl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Gipsy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "crone",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hajji",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hadji",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hakim",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Haman",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Hasid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hater",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pagan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hewer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hiker",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hippy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hoper",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hubby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "phony",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "idiot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "moron",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "idler",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "imaum",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "scamp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "faker",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pseud",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "asker",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rebel",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Jacob",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Javan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "jawan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "joker",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "jonah",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Judas",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "juror",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kafir",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kiddy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "enate",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "klutz",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lacer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "laird",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lefty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "leper",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lazar",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lifer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "locum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "loner",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scout",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "noble",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "loser",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "luger",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "momma",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mommy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mammy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mater",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "macer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "magus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "malik",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mason",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "emcee",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mayor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "meany",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "medic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mensh",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "metic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "metis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tenno",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "miler",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "padre",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mimer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mimic",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "miner",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "miser",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "saint",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Mogul",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Mulla",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "muser",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mujik",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "myope",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nabob",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "namer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nurse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nawab",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "niece",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "NIMBY",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ninny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nomad",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "numen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wacko",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rower",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ogler",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "owner",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Parsi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pasha",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pacha",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pawer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "payee",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "payer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ponce",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "piper",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plier",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plyer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "prexy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "prior",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "coder",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "prole",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "whore",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "prude",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pudge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pygmy",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "Pigmy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pygmy",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "pigmy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "quint",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rabbi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rajah",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ranee",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "raver",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "raper",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "saver",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rival",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rogue",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Romeo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "roper",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rover",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sadhu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "letch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "schmo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "scion",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scold",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Senor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "helot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shill",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Sudra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sibyl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "silly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Siren",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sissy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "skier",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "slave",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "smith",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "snoop",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "softy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Rebel",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sower",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fungi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sprog",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "squaw",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "solon",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Stoic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stoic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gamin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wooer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "super",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dweeb",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "toady",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sylph",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "tamer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "taxer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cabby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "vexer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tekki",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "thane",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "thief",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tiler",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "T-man",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "towny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "trier",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tutee",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "twerp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "twirp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "uncle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "usher",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "valet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "liege",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vegan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vicar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vixen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "voter",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vower",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "waker",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Wally",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "widow",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wirer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Yahoo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "yenta",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "yokel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "yahoo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Aalto",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Aaron",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Aesop",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Aiken",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Ailey",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Albee",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Alger",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Allen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Armin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Astor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Auden",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Bacon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Banks",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Barth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Basil",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bayes",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Baeda",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Begin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Benet",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Benny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Beria",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Berra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Berry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Bethe",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Bevin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Binet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bizet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Blair",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Blake",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bligh",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Bloch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Bohme",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Boehm",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Boole",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Boone",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Booth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Bosch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Bowie",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Boyle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Brady",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Bragg",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Braun",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bride",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Broca",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bruce",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bruch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Bruno",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Buber",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Budge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Burke",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Burns",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Dubya",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Byron",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Cabot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gaius",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Camus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Capek",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Carew",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Chain",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Capet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tully",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Clark",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Cline",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Clive",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Cohan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Comte",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Cooke",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Corot",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Court",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Crane",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Crick",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Crohn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Curie",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Cyrus",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Gamma",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Damon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dante",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "David",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Davis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Davys",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Dawes",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dayan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Deere",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Defoe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dewey",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Dirac",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dolby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Donne",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dowdy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Drake",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dukas",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dumas",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Durer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Eames",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Edgar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Edwin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Eigen",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Ekman",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Elgar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Greco",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Eliot",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Ernst",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Dr._J",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "Esaki",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Euler",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Evans",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Evers",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Evert",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Falla",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Fermi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Firth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Flory",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Fonda",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Freud",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Frick",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Frost",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Fuchs",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Gable",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gabor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Galen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gamow",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Garbo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lorca",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gates",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gaudi",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Gauss",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Genet",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Gibbs",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Glenn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Gluck",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Godel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gogol",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Golgi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gonne",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gould",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Grant",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Grass",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Grieg",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Grimm",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Guest",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gwynn",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "Gynne",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Haber",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Haley",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Handy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Hanks",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Hardy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Harte",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hasek",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Havel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hayek",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hayes",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hecht",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Hegel",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Heinz",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Henry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Heron",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Herod",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hertz",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Hesse",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Heyse",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Hobbs",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Hoffa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hogan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Holly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Homer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hooke",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Horta",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hoyle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hubel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hurok",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ibert",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ibsen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Isaac",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Jafar",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Jenny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Jesus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Johns",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Jones",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Joule",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Joyce",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kafka",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Keats",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Keble",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Kelly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Kesey",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Khama",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Klein",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Klimt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Kline",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Konoe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Korda",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Krebs",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Kroto",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Krupp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Laban",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Laney",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lange",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lasso",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Laver",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Leary",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Leger",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Lehar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Leigh",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lendl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Lenin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Leo_I",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Leo_X",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lewis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Libby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Li_Po",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lippi",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Liszt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Lloyd",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Locke",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lodge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Loewe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Loewi",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Loren",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lorre",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Louis",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Lowry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Lucas",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lully",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Lulli",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Mahan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Major",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Mamet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Manes",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Manet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Marat",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Marks",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Marsh",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Marti",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Chico",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Harpo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Zeppo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Maxim",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Mayer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "McKim",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Meade",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Meany",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Melba",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Mills",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Milne",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Monet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Monod",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Moody",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Moore",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Moses",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Munch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Munro",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Nanak",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Naomi",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Noemi",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Natta",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Salim",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Nehru",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Reyes",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Nervi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Nerva",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Nixon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Nobel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Noyes",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Oates",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Occam",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ochoa",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Odets",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Orczy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Owens",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ozawa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Paget",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Paige",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Paine",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Parks",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Paton",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pauli",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Peary",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pepys",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Percy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Peron",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Perry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Peter",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Plath",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Plato",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pliny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Pound",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Priam",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Price",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pugin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pusey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Putin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Quine",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Ravel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Riley",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Rilke",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Rodin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Roget",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Rollo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Hrolf",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Sabin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sacco",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sadat",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Sapir",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sarah",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Satie",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Scott",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Segal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Seles",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Serra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Seton",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Shahn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Shawn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Shute",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sills",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Simon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Skeat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Smith",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Smuts",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Snead",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Soddy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Sousa",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Spark",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Speer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Speke",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Spock",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Stael",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Starr",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Stein",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Stern",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Stone",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Stowe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sulla",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sully",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Sweet",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Swift",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Synge",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Szell",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Timur",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Taney",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tange",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tasso",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tatum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Teach",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Terry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Tesla",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tharp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Tobey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tobin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tracy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Truth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Tyson",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Tzara",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Usher",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Varro",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Verdi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Verne",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Vesey",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Vidal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Villa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Vitus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Volta",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Wajda",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Watts",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Waugh",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Wayne",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Weber",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Weill",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Wells",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Welty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Wilde",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Wolfe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Wolff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Woolf",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Worth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Wyatt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Wyeth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Wyler",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Wylie",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Yeats",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Young",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Zweig",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bloom",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "frost",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "foehn",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "decay",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "elves",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sleet",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "virga",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "volva",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Musci",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Bryum",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Mnium",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spore",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gleba",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tepal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Catha",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cycad",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Cycas",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "zamia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dioon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pinus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pinon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Larix",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "larch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Abies",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "cedar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Picea",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Tsuga",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "savin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Thuja",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kauri",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "kaury",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "yacca",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "matai",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Taxus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dicot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ament",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "testa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gemma",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "petal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sepal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "calyx",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lotus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "peony",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "siris",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "saman",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "zaman",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "guama",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Vinca",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "aroid",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "krubi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Calla",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "calla",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Lemna",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Panax",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "knawe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Batis",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "orach",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nopal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scoke",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pusly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "colza",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "draba",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Eruca",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "runch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "poppy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "daisy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Gerea",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "inula",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Layia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lonas",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Madia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tansy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "loasa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vanda",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Tamus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "oxlip",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Glaux",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Avena",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "brome",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "grama",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "kweek",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ragee",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Oryza",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "smilo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "munja",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "durra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "doura",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "sorgo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "durum",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spelt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "emmer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sedge",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chufa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Carex",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Typha",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "luffa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "loofa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Malva",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Alcea",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "kenaf",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kanaf",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bimli",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mahoe",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "purau",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "simal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ceiba",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "kapok",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Durio",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "balsa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cacao",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "arere",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tilia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hakea",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "erica",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "brier",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "salal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Ledum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "galax",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pyxie",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Fagus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "beech",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "acorn",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "roble",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Alnus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "alder",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hazel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lilac",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Carya",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dhawa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dhava",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Grias",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "marri",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Nyssa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Dirca",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Trapa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "canna",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "abaca",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Maria",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Mesua",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "cirio",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ochna",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Viola",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "ramie",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "ramee",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pilea",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Morus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ficus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pipal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pipul",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ulmus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Trema",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "orris",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chive",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "camas",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tulip",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Hosta",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Funka",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tacca",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "agave",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sisal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "yucca",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Linum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "msasa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "senna",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Apios",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Butea",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "palas",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Cicer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sissu",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Dalea",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ceibo",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "sulla",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hovea",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Lotus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lupin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pisum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quira",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "kiaat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kudzu",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "retem",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gorse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "furze",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Vicia",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vetch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Vigna",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "coyol",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "areca",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kitul",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Cocos",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Sabal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Rheum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Rumex",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Xyris",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Naias",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Najas",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Dryas",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "avens",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "toyon",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Malus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "islay",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pyrus",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Rubus",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rowan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Rubia",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "jagua",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "opepe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "elemi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "salai",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "myrrh",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "jiqui",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Melia",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Khaya",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Lovoa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Toona",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Salix",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "osier",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "abele",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "aspen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "aalii",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ginep",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Buxus",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "maple",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "holly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sumac",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "molle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sedum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "orpin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ribes",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "phlox",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cypre",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Ajuga",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "dagga",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "clary",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "marum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "benne",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "benni",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "benny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pichi",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Hevea",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Apium",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Carum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sison",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cutch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "kutch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Todea",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "nardo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ergot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mucor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tuber",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Usnea",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Fungi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "galea",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hypha",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "yeast",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "morel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Verpa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Fomes",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ascus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sorus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "xylem",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shrub",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "liana",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tuber",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stipe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "umbel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bacca",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "drupe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Vitis",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Pinot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Piper",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "betel",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "frond",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bract",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "glume",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "haulm",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "withy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bough",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "haoma",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "acres",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "glebe",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "feoff",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "money",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gross",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lucre",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sales",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "booty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dower",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dowry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tithe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "outgo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "found",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bribe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "costs",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rente",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mulct",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "terms",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rates",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "funds",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hoard",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stash",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "trove",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "clams",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ducat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "penny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "groat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fifty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fiver",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "leger",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "debit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "divvy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "scrip",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "aging",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "flame",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "leach",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lysis",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "moult",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "redox",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "slump",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "vapor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quire",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "Karat",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "carat",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "prime",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "radix",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cu_in",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cu_ft",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "MFLOP",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sabin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sq_in",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sq_ft",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "sq_yd",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "ardeb",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ephah",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quart",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "liter",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "litre",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "farad",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "abamp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "daraf",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "weber",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gauss",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tesla",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "henry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "curie",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "abohm",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ligne",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "verst",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cubit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fermi",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "klick",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "franc",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tical",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "butut",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "butat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dinar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dobra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "conto",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pengo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "haler",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "krona",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "aurar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "eyrir",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "krone",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ngwee",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "leone",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "asper",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sente",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "penni",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "naira",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "khoum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "thebe",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "baiza",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "baisa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "riyal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ruble",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kopek",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lumma",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "manat",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "qepiq",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rubel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kroon",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tetri",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tenge",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tiyin",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "litas",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tyiyn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tanga",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rupee",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "paisa",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sucre",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mongo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "zaire",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "zloty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "grosz",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mm_Hg",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "barye",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "catty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "crith",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "maund",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "picul",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tonne",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "joule",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "therm",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "kW-hr",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "ninth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tenth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "aught",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "zilch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nihil",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "monad",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "monas",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "twain",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "three",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "trine",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sixer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hexad",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "seven",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "eight",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "octad",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "niner",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dozen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "teens",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "XVIII",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "XXIII",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "XXVII",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "forty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sixty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "one_C",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "10000",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "crore",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "heaps",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "piles",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "loads",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rafts",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "slews",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "scads",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cotan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cosec",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ratio",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "north",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "south",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "solid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "uncus",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "conic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "swirl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rhomb",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gnarl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bulge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "droop",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ovoid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shoes",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "amour",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "sleep",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sigeh",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "truce",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "babel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "to-do",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "night",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "umbra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bliss",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ready",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "roots",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bends",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ictus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "folie",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "ataxy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "NIDDM",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tinea",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "tabes",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ebola",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "mumps",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "polio",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "favus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "blain",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ulcer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lupus",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tumor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gumma",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "myoma",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lyssa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mange",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "singe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wheal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bloat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "palsy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "edema",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hives",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "throe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "colic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "smart",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rubor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ozena",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "crick",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wrick",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spots",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "apnea",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sprue",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tizzy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dumps",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mopes",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "appro",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "reign",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "crabs",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "alloy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "taint",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "filth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "grime",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dinge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ileus",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "clime",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "atopy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tonus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "atony",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "varix",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chyme",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dross",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "metal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Botox",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Mylar",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "saran",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "argil",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "alkyl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "allyl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "amino",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "halon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "argon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "boron",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "iodin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "azote",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "radon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "xenon",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "beryl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "borax",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "emery",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fluor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bumph",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "regur",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ricin",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "putty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "agate",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ethyl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "aldol",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "amide",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "mucin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "actin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "opsin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Cox-1",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Cox-2",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "amine",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "auxin",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "kinin",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nacre",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "anime",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "azide",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "shuck",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "codon",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "RNase",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dimer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fumes",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ester",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rheum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "feces",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shite",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "urine",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "K-lor",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "niter",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nitre",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chert",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "flint",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "furan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "kraft",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "twins",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "grout",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "guano",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "attar",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "athar",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ottar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "turps",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "resin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rosin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "copal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "damar",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "algin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "alkyd",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "epoxy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "humin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Invar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Kwell",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "magma",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lipid",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fluid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "loess",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Lysol",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "slime",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "muton",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sarin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "oakum",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "oxide",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "oxime",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "ozone",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "crude",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "resid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "eosin",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "henna",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pyrex",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "renin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "butyl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "salol",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Agene",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hemin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lysin",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "toxin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shale",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "silex",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "slush",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "balas",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "steam",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "soman",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tabun",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "olein",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "urate",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "vinyl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "xylol",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "imide",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hours",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nonce",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "years",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dying",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "1900s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1530s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1920s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1820s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1930s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1830s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1940s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1840s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1950s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1850s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1750s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1960s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1860s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1760s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1970s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1870s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1770s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1980s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1880s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1780s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1990s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1890s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "1790s",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "today",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "D-day",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "V-day",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sunup",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Feb_2",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "May_1",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Pasch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Pesah",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Purim",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "annum",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "month",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "March",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "April",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Tebet",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Tevet",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Nisan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Iyyar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sivan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Siwan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Ellul",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Safar",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Rajab",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Chait",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Asarh",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Sawan",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Aghan",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Pansa",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Magha",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Noruz",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "terce",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nones",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "while",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "jiffy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "trice",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "epoch",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tempo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cease",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "letup",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "musth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shiva",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "eruct",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chuff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "arise",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "awake",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "waken",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rouse",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "relax",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "unlax",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "do_up",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "preen",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "primp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "prink",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dizen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "beget",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "calve",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "abort",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "alter",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "desex",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "unsex",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "exude",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stale",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "egest",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ca-ca",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bleed",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "weary",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gnash",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "anele",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "expel",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "eject",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bring",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sober",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "adapt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "go_by",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "go_up",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "amass",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "renew",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "degas",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "foist",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "blunt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "liven",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "amend",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "debug",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "brisk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "emend",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "addle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "slake",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bedew",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "douse",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "parch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "vouch",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "unite",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "unify",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "merge",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "abate",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ripen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "educe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "smite",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "inure",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "teach",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "erode",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tinct",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "imbue",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "unfit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "widen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "crump",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "erupt",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "blear",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bedim",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shirr",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "saute",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "go_on",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "occur",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "recur",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "begin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "enter",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "drown",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "deice",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "harry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shush",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "immix",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "admix",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "adopt",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "loose",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "be_on",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "react",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "burke",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quell",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "align",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "aline",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "morph",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "erase",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "equip",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "incur",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dizzy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "muddy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "poach",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "exalt",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "deify",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "infer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "learn",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "elide",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "amaze",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "opine",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "solve",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "halve",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "parse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "liken",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "refer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "prove",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rebut",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "abide",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "swear",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "reify",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "prise",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dwell",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dally",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "greet",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "await",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "allow",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "seize",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "exact",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "crave",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plead",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "agree",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "apply",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "deter",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "argue",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "tempt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "segue",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "debar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spurn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "repel",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "unsay",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "annul",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "flout",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "evade",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "elude",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "avoid",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "shirk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bandy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "repay",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "admit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chide",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "orate",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "belie",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "feign",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sully",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "exult",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "amuse",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "extol",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ensky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "decry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bless",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "defer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "thank",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "imply",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "evoke",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "utter",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "speak",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "weigh",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sough",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "blurt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "troat",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "edify",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "write",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "x-ray",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bruit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vroom",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wrawl",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "blate",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chirk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "croon",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "churr",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chirr",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cronk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rearm",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "unarm",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "demob",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "whomp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "outdo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "beset",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "reuse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "exert",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fress",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "slurp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cater",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "enjoy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "forgo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "allay",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "strew",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wrest",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "frizz",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wield",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "knead",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spang",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sleek",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "skive",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "carve",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "elute",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "revet",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "untie",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "retie",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "delve",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "glean",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "do_in",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "resew",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "unzip",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "unbar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "caulk",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "unpin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "slosh",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "do_it",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fetch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shlep",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bowse",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bouse",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "evict",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "unbox",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "laden",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "flump",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "impel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "upend",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "embed",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "imbed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "repot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dirty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "colly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sever",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "braze",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "coapt",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wreak",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "erect",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "adorn",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "roneo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "enact",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "emote",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "abhor",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "yearn",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "adore",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "appal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "unman",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "daunt",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "annoy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "peeve",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chivy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chevy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "abash",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "atone",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "mourn",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "abase",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "whelm",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "elate",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "covet",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "whish",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sheer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sidle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pronk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "scend",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "budge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "slink",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mosey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "skulk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "treck",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "clomp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hover",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scram",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tarry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "go_in",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "avert",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "birle",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scoot",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cower",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "elope",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "evert",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "besot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cense",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "befog",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "swosh",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "endow",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "skimp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "scant",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "allot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spend",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cadge",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mooch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "usurp",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "snarf",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "filch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cozen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "waive",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "rejig",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "reave",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "coact",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quash",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stoke",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "inter",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "enrol",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "indue",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "endue",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lynch",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "marry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "retry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "do_by",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "flunk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stymy",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "misdo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "welsh",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "deign",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "exist",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "go_to",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ensue",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "excel",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "befit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "uncut",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ample",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tight",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "raped",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "handy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "agile",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "inert",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "on[p]",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "added",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gluey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gummy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gooey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "beady",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "plumy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "laced",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "inept",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "taken",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hokey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cowed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "foamy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spumy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sudsy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "roily",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pesky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "harsh",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "vital",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pushy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "angry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "huffy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "irate",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "livid",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wroth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "alive",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "anon.",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "named",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "above",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "tasty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "undue",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sandy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "armed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "burry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spiny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "scaly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dodgy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pawky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "naive",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "cocky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "glued",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stuck",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "moony",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sonic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lucky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "up[p]",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "aware",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "awful",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "scary",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hairy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "brash",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nervy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fresh",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "saucy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sassy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hawky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ferny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "braky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sedgy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hoary",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "comal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "downy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "furry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fuzzy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wooly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "awned",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bonny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dishy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "finer",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "older",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "faced",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "negro",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "adust",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dusky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "swart",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "acned",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mousy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wired",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cased",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "boxed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "edged",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lined",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lotic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "non-U",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gamey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "funky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gutsy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "puffy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "blown",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pursy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "unlit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "murky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mirky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shady",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nitid",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "beamy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "glary",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shiny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lurid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "petty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "up_to",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "boney",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "boned",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "raspy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gruff",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gusty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "blowy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "windy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "basal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cagey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "chary",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "focal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fated",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fluky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fatal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fixed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "keyed",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tuned",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "polar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hired",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "owned",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "perky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sunny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dingy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "drear",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sorry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ruddy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rusty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tawny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sooty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "slaty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "snowy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "vivid",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ashen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "faded",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "washy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "waxen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "jazzy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "showy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "civil",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "grimy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dusty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fecal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nasty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lousy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mucky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lucid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vague",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "foggy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "milky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "muzzy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dazed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "balmy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rainy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "canny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dopey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "goosy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dense",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "robed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "naked",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bared",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "misty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "roomy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "comfy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "homey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "usual",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "leaky",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "newsy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "vocal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "silty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "whiny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sworn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fazed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "piled",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "blase",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "terse",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pithy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wordy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fusty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "false",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "eaten",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "happy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "flaky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "outre",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "kinky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spacy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bushy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "baked",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "burnt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fried",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "venal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "doric",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ionic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hefty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "brusk",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cubic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nosey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "curst",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "blest",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dated",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "staid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "reefy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "amort",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hardy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gushy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tried",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "razed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "saved",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rocky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "vexed",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cushy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "suave",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "wispy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bossy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bowed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wormy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hammy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "stagy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "beery",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tipsy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "boozy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "doped",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "peppy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "zippy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "eared",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "early",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "azoic",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "parve",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wimpy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "chewy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ritzy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "legal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mushy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "moody",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fired",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mired",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "merry",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "canty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bated",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "great",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quits",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "snide",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "jaggy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lumpy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "heady",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spent",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pricy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cheap",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "valid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tacit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "outer",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "inner",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "loyal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "punic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "funny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "eerie",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "other",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "weird",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "natty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "faddy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "passe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mossy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lento",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fussy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "picky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "buxom",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "obese",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "jowly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dumpy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "podgy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pudgy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tubby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gaunt",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lanky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "reedy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "weedy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wizen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "suety",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vaned",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "inapt",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ended",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gammy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rigid",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "curly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "musky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bilgy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fetid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "musty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "niffy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "taped",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "atrip",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "freed",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "treed",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "moldy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cured",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "glace",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dried",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "salty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "matey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pally",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "unfed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mingy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bogus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "no-go",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nifty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "corky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "testy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "techy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "surly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lithe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gawky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "riant",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "horny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tumid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stony",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "woody",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cruel",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "velar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lusty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gassy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "seedy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "godly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "soggy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mixed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lofty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "under",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "peaky",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "spiky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "apish",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bleak",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "atilt",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "prone",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stark",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fiery",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "acold",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "algid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gelid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "nippy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "parky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "frore",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rimed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "droll",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "witty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hasty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "awing",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "proud",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "noted",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "built",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "in[a]",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "stung",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bored",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "prosy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bulgy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "unbid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "juicy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sappy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "known",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "famed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bulky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "jumbo",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hulky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rangy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bitty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "teeny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "weeny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "elfin",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "least",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "micro",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "runty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "holey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "jural",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "licit",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "penal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "loamy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lossy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "axial",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "baggy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "muted",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "liked",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "loved",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hated",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dotty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hexed",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "manly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cissy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mated",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "unwed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "macho",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "grown",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pupal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "meaty",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mined",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "eased",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tinny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ultra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fewer",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "regal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lowly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nosed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "heard",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "yucky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "anile",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "drawn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "agaze",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "banal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tired",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "trite",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "corny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tiled",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "leafy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ivied",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "overt",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "rabid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "agone",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "olden",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "paved",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mazed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pious",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "acerb",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "acrid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "riled",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "vatic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tardy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "spicy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bland",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fined",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fishy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "noisy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "abuzz",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "itchy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "couth",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "crass",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fumed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "oiled",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "dosed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "timed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "seamy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "aloof",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "webby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "broke",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "skint",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "needy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "beefy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "burly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "domed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ovate",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "rural",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "urban",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dicey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "risky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "amuck",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "barmy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "batty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "kooky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "loopy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nutty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wacky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "jaded",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sated",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "shaky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "germy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "giddy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "randy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sexed",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "busty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "curvy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sonsy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shorn",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "shoed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lobed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "xviii",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "xxiii",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "xxvii",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "xxxii",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "xxxiv",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "xxxvi",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "xliii",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "xlvii",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lviii",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lxiii",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lxvii",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lxxii",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lxxiv",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lxxvi",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ilxxx",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lxxxi",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "lxxxv",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "xciii",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "xcvii",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cxxxv",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "clxxv",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "clxxx",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "100th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "101st",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "105th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "110th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "115th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "120th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "125th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "130th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "135th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "140th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "145th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "150th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "155th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "160th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "165th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "170th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "175th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "180th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "190th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "200th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "300th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "400th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "500th",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "unary",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "duple",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sized",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mealy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "smoky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "slimy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "silky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "barky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bumpy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "jolty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hilly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nubby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "warty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rutty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "erose",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sewed",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "soled",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "runny",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "no[a]",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fizzy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "zesty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "typed",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tippy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wonky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "vapid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "askew",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "arced",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "snaky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ruled",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "palmy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "in[p]",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "A-one",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "pukka",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pucka",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ropey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "based",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "aided",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "tangy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "swept",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "so[p]",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gabby",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "talky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "leggy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tamed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "feral",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "manic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tacky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tatty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "campy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "yummy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "sapid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "grapy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "winey",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "jumpy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "filmy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gauzy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "messy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mussy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "kempt",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "toned",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tonal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "toxic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "balky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "mothy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "leery",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tubed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "typic",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "teary",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "weepy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fused",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "bifid",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tined",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "up[a]",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dormy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "risen",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "utile",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "manky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "aired",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "fuggy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "tepid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "waxed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "woozy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gouty",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "boggy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "moist",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "soppy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "humid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "muggy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "loath",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "alary",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "alate",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "inane",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "goofy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "bosky",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "rushy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "oaken",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "pulpy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "woven",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mangy",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ratty",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "xeric",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "mesic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "zonal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "varus",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "amnic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "apian",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "areal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "aural",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "auric",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "avian",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "axile",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "azido",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "diazo",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "baric",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "cecal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ceric",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Chian",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "civic",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "cloze",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dural",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "filar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "genic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "glial",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "humic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lunar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "natal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "naval",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "volar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "peaty",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "pilar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "solar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tidal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "uveal",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "vagal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "Vedic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "algal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ulnar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "gyral",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hemal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hemic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ictal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ictic",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "modal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "octal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "papal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "pubic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "viral",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "renal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fetal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "tubal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "molal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "Shuha",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ovine",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "iliac",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "lobar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "runic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hilar",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ohmic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "hadal",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "yogic",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "marly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "fugal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "myoid",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "soapy",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "boric",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ducal",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "milch",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "oaten",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "posed",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "about",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "or_so",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "alone",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "amiss",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fully",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "badly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "kinda",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "quite",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "never",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ne'er",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "a_bit",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "often",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "oddly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "truly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "again",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "sadly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hence",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "where",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "madly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gayly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "so-so",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "a_lot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "later",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "after",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "twice",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "ahead",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "along",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "alike",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "aloud",
        characters: 5,
        uniqueVowels: 3,
      },
      {
        word: "aback",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "abeam",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "below",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "supra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "apace",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "forth",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "needs",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "newly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "in_on",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "fitly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "gaily",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "amply",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "apart",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "aptly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "et_al",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "dimly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "wryly",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "shyly",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "dryly",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "dully",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "afoot",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "doggo",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "ibid.",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "infra",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "amain",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "abaft",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "coyly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "slyly",
        characters: 5,
        uniqueVowels: 0,
      },
      {
        word: "maybe",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "drily",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "haply",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "hotly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "icily",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "laxly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "molto",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nobly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "nohow",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "on_it",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "to_it",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "wanly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "aloft",
        characters: 5,
        uniqueVowels: 2,
      },
      {
        word: "redly",
        characters: 5,
        uniqueVowels: 1,
      },
      {
        word: "dolce",
        characters: 5,
        uniqueVowels: 2,
      },
    ];

    let bulk = [];
    for (const record of records) {
      if (bulk.length === 200) {
        await queryInterface.bulkInsert("words", bulk);
        bulk = [];
      } else {
        bulk.push(record);
      }
    }
    await queryInterface.bulkInsert("words", bulk);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropAllTables();
  },
};
