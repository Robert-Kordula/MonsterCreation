import "./App.css";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from "@mui/material";


function AttributeFields() {

    let attributeList = ["name", "img_main", "size", "type", "subtype", "group", "alignment", "armor_class", "armor_desc", "hit_points", "hit_dice", "speed", "strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma", "strength_save", "dexterity_save", "constitution_save", "intelligence_save", "wisdom_save", "charisma_save", "perception", "skills", "damage_vulnerabilities", "damage_resistances", "damage_immunities", "condition_immunities", "senses", "languages", "challenge_rating", "actions", "reactions", "legendary_desc", "special_abilities", "spell_list", "document__slug", "document__title", "document__license_url"];

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell id="header-title"></TableCell>
                            <TableCell id="slug">Slug</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {attributeList.map((attribute) => (
                            <Attribute name={attribute} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

function Attribute(params) {
    return (
        <TableRow>
            <TableCell>{params.name}</TableCell>
            <TableCell><TextField id={params.name}>N/A</TextField></TableCell>
        </TableRow>
    )
}

export default AttributeFields;