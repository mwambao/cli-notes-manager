import { addNote, listNotes, deleteNote } from "./notes.js";

// Parse CLI arguments: command (add/list/delete) and optional input value
const command = process.argv[2];
const input = process.argv[3];

// Route to the appropriate handler based on the command
switch(command){
    case 'add':
        if (!input) {
            console.log('Please provide a note to add');
            break;
        }
        addNote(input);
        break;
    case 'list':
        console.log(listNotes());
        break;
    case 'delete':
        deleteNote(input);
        break;
    default:
        console.log('Command not recognized');
}