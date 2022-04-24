-- --ENUMS to represent size field in each Monster entry
-- CREATE TYPE sizes AS ENUM ('Small', 'Medium', 'Large', 'Huge');

-- --ENUMS to represent terrain for monster speed in the Speeds table
-- CREATE TYPE terrains AS ENUM ('walk', 'climb', 'burrow', 'swim', 'fly', 'hover');

-- CREATE TABLE types (
--     type_id SERIAL PRIMARY KEY,
--     type_name VARCHAR (20) UNIQUE NOT NULL
-- );

-- CREATE TABLE subtypes (
--     subtype_id SERIAL PRIMARY KEY,
--     subtype_name VARCHAR (20) UNIQUE NOT NULL
-- );

-- CREATE TABLE "groups" (
--     group_id SERIAL PRIMARY KEY,
--     group_name VARCHAR (30) UNIQUE NOT NULL
-- );

-- CREATE TABLE alignments (
--     alignment_id SERIAL PRIMARY KEY,
--     alignment_name VARCHAR (30) UNIQUE NOT NULL
-- );

-- CREATE TABLE "language" (
--     language_id SERIAL PRIMARY KEY,
--     language_name VARCHAR (20) UNIQUE NOT NULL
-- );

-- CREATE TABLE monsters (
--     monster_id SERIAL PRIMARY KEY,
--     name VARCHAR (30) NOT NULL,
--     size SIZES NOT NULL,
--     type INT NOT NULL,
--     FOREIGN KEY (type) REFERENCES types (type_id),
--     subtype INT,
--     FOREIGN KEY (subtype) REFERENCES subtypes (subtype_id),
--     "group" INT NOT NULL,
--     FOREIGN KEY ("group") REFERENCES "groups" (group_id),
--     alignment INT NOT NULL,
--     FOREIGN KEY (alignment) REFERENCES alignments (alignment_id),
--     armor_class INT NOT NULL,
--     armor_desc VARCHAR (30),
--     hit_points INT NOT NULL,
--     hit_dice VARCHAR (10) NOT NULL,
--     strength INT NOT NULL,
--     dexterity INT NOT NULL,
--     constitution INT NOT NULL,
--     intelligence INT NOT NULL,
--     wisdom INT NOT NULL,
--     charisma INT NOT NULL,
--     perception INT NOT NULL,
--     challenge_rating INT NOT NULL,
--     strength_save INT,
--     dexterity_save INT,
--     constitution_save INT,
--     intelligence_save INT,
--     wisdom_save INT,
--     charisma_save INT,
--     legendary_desc VARCHAR (511)
-- );

-- CREATE TABLE speed (
--     monster_id INT NOT NULL,
--     FOREIGN KEY (monster_id) REFERENCES monsters (monster_id),
--     terrain terrains NOT NULL,
--     speed INT NOT NULL
-- );

-- CREATE TABLE senses (
--     monster_id INT NOT NULL,
--     FOREIGN KEY (monster_id) REFERENCES monsters (monster_id),
--     sense VARCHAR (20) NOT NULL
-- );

-- CREATE TABLE languages (
--     monster_id INT NOT NULL,
--     FOREIGN KEY (monster_id) REFERENCES monsters (monster_id),
--     language_id INT NOT NULL,
--     FOREIGN KEY (language_id) REFERENCES "language" (language_id)
-- );

-- --References all damage types to be called by damage_vulnerabilities, damage_resistances, damage_immunities--
-- CREATE TABLE damage_types (
--     damage_id SERIAL PRIMARY KEY,
--     damage_name VARCHAR (20) UNIQUE NOT NULL
-- );

-- CREATE TABLE damage_vulnerabilities (
--     monster_id INT NOT NULL,
--     FOREIGN KEY (monster_id) REFERENCES monsters (monster_id),
--     damage_id INT NOT NULL,
--     FOREIGN KEY (damage_id) REFERENCES damage_types (damage_id)
-- );

-- CREATE TABLE damage_resistances (
--     monster_id INT NOT NULL,
--     FOREIGN KEY (monster_id) REFERENCES monsters (monster_id),
--     damage_id INT NOT NULL,
--     FOREIGN KEY (damage_id) REFERENCES damage_types (damage_id)
-- );

-- CREATE TABLE damage_immunities (
--     monster_id INT NOT NULL,
--     FOREIGN KEY (monster_id) REFERENCES monsters (monster_id),
--     damage_id INT NOT NULL,
--     FOREIGN KEY (damage_id) REFERENCES damage_types (damage_id)
-- );

-- CREATE TABLE conditions (
--     condition_id SERIAL PRIMARY KEY,
--     condition_name VARCHAR (20) UNIQUE NOT NULL
-- );

-- CREATE TABLE condition_immunities (
--     monster_id INT NOT NULL,
--     FOREIGN KEY (monster_id) REFERENCES monsters (monster_id),
--     condition_id INT NOT NULL,
--     FOREIGN KEY (condition_id) REFERENCES conditions (condition_id)
-- );

-- CREATE TABLE reaction (
--     reaction_id SERIAL PRIMARY KEY,
--     reaction_name VARCHAR(30) NOT NULL,
--     reaction_description VARCHAR (1023) NOT NULL
-- );

-- CREATE TABLE reactions (
--     monster_id INT NOT NULL,
--     FOREIGN KEY (monster_id) REFERENCES monsters (monster_id),
--     reaction_id INT NOT NULL,
--     FOREIGN KEY (reaction_id) REFERENCES reaction (reaction_id)
-- );

-- CREATE TABLE legendary_action (
--     legendary_id SERIAL PRIMARY KEY,
--     legendary_name VARCHAR(30) NOT NULL,
--     legendary_description VARCHAR (1023) NOT NULL
-- );

-- CREATE TABLE legendary_actions (
--     monster_id INT NOT NULL,
--     FOREIGN KEY (monster_id) REFERENCES monsters (monster_id),
--     legendary_id INT NOT NULL,
--     FOREIGN KEY (legendary_id) REFERENCES legendary_action (legendary_id)
-- );

-- CREATE TABLE abilities (
--     abilities_id SERIAL PRIMARY KEY,
--     abilities_name VARCHAR (30) NOT NULL,
--     "desc" VARCHAR (1023) NOT NULL
-- );

-- CREATE TABLE special_abilities (
--     monster_id INT NOT NULL,
--     FOREIGN KEY (monster_id) REFERENCES monsters (monster_id),
--     abilities_id INT NOT NULL,
--     FOREIGN KEY (abilities_id) REFERENCES abilities (abilities_id)
-- );

-- CREATE TABLE "action" (
--     action_id SERIAL PRIMARY KEY,
--     action_name VARCHAR(30) NOT NULL,
--     action_description VARCHAR (1023) NOT NULL,
--     attack_bonus INT,
--     damage_dice VARCHAR (10),
--     damage_bonus INT
-- );

-- CREATE TABLE actions (
--     monster_id INT NOT NULL,
--     FOREIGN KEY (monster_id) REFERENCES monsters (monster_id),
--     action_id INT NOT NULL,
--     FOREIGN KEY (action_id) REFERENCES "action" (action_id)
-- );

-- CREATE TABLE skill (
--     skill_id SERIAL PRIMARY KEY,
--     skill_name VARCHAR (10) NOT NULL
-- );

-- CREATE TABLE skills (
--     monster_id INT NOT NULL,
--     FOREIGN KEY (monster_id) REFERENCES monsters (monster_id),
--     skill_id INT NOT NULL,
--     FOREIGN KEY (skill_id) REFERENCES skill (skill_id),
--     "value" INT NOT NULL 
-- );

-- CREATE TABLE spell_list (
--     monster_id INT NOT NULL,
--     FOREIGN KEY (monster_id) REFERENCES monsters (monster_id),
--     spell_url VARCHAR (100) NOT NULL
-- );