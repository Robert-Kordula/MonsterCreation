export default function TempFilters() {
  return {
    "about": {
      size: {
        inputType: "drop-downs",
        values: ["Small", "Medium", "Large", "Huge"],
      },
      type: {
        inputType: "drop-downs",
        values: ["celestial", "dragon", "aberration", "undead", "fey"],
      },
      subtype: {
        inputType: "drop-downs",
        values: ["celestial", "dragon", "aberration", "undead", "fey"],
      },
      group: {
        inputType: "drop-downs",
        values: ["N/A", "Elementals", "Sphinxes", "Animated Objects"],
      },
      alignment: {
        inputType: "drop-downs",
        values: [
          "lawful good",
          "neutral good",
          "chaotic good",
          "lawful neutral",
          "unaligned",
          "chaotic neutral",
          "lawful evil",
          "neutral evil",
          "chaotic evil",
        ],
      },
      languages: {
        inputType: "multi-drop-down",
        values: ["Common", "Gnoll", "Sylvan", "Draconic", "understands all but can't speak"],
      },
      challengeRating: {
        inputType: "integer",
      },
    },
    "stats": {
      armorClass: {
        inputType: "integer",
      },
      armorDescription: {
        inputType: "string",
      },
      hitPoints: {
        inputType: "integer",
      },
      hitDice: {
        inputType: "string",
      },
      strength: {
        inputType: "range",
        min: 0,
        max: 100,
      },
      dexterity: {
        inputType: "range",
        min: 0,
        max: 100,
      },
      constitution: {
        inputType: "range",
        min: 0,
        max: 100,
      },
      intelligence: {
        inputType: "range",
        min: 0,
        max: 100,
      },
      wisdom: {
        inputType: "range",
        min: 0,
        max: 100,
      },
      charisma: {
        inputType: "range",
        min: 0,
        max: 100,
      },
      perception: {
        inputType: "range",
        min: 0,
        max: 100,
      },
      senses: {
        inputType: "string",
      },
    },
    "speeds": {
      walk: {
        inputType: "integer",
      },
      climb: {
        inputType: "integer",
      },
      burrow: {
        inputType: "integer",
      },
      swim: {
        inputType: "integer",
      },
      fly: {
        inputType: "integer",
      },
    },
    "saves and resistances": {
      strengthSave: {
        inputType: "range",
        min: 0,
        max: 100,
      },
      dexteritySave: {
        inputType: "range",
        min: 0,
        max: 100,
      },
      constitutionSave: {
        inputType: "range",
        min: 0,
        max: 100,
      },
      intelligenceSave: {
        inputType: "range",
        min: 0,
        max: 100,
      },
      wisdomSave: {
        inputType: "range",
        min: 0,
        max: 100,
      },
      charismaSave: {
        inputType: "range",
        min: 0,
        max: 100,
      },
      damageVulnerabilites: {
        inputType: "drop-downs",
        values: ["radiant", "cold", "fire", "bludgeoning"],
      },
      damageResistances: {
        inputType: "drop-downs",
        values: ["radiant", "cold", "fire", "bludgeoning"],
      },
      damageImmunities: {
        inputType: "drop-downs",
        values: ["radiant", "cold", "fire", "bludgeoning"],
      },
      conditionImmunities: {
        inputType: "drop-downs",
        values: ["paralyzed", "unconscious", "charmed", "poisoned"],
      },
    },
    "actions and spells": {
      skills: {
        value: 'list',
        list: {
            value: 'object',
            object: 'string'
        }
      },
      actions: {
        inputType: 'table',
        table: [
            {
                header: 'name',
                value: 'string',
                required: true
            },
            {
                header: 'desc',
                value: 'string',
                required: true
            },
            {
                header: 'attack_bonus',
                value: 'integer'
            },
            {
                header: 'damage_dice',
                value: 'string'
            },
            {
                header: 'damage_bonus',
                value: 'integer'
            }
        ]
      },
      reactions: {
        inputType: 'table',
        table: [
            {
                header: 'name',
                value: 'string',
                required: true
            },
            {
                header: 'desc',
                value: 'string',
                required: true
            }
        ]
      },
      legendary_desc: {
        inputType: 'list'
      },
      legendary_actions: {
        inputType: 'table',
        table: [
            {
                header: 'name',
                value: 'string',
                required: true
            },
            {
                header: 'desc',
                value: 'string',
                required: true
            }
        ]
      },
      special_abilities: {
        inputType: 'table',
        table: [
            {
                header: 'name',
                value: 'string',
                required: true
            },
            {
                header: 'desc',
                value: 'string',
                required: true
            }
        ]
      },
      spell_list: {
        value: 'list',
        list: {
            value: 'string'
        }
      }
    },
    "notes": {
      notes: {
        inputType: "multi-line"
      } 
    }
  };
}
