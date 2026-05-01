import fs from 'fs';

const filePath = "myList.txt"

// Appends a note to the file
export const addNote = (note) => {
    fs.appendFileSync(filePath, note + '\n')
};

// Reads and returns all notes from the file
export const listNotes = () => {
    return fs.readFileSync(filePath, 'utf8')
};

// Removes a specific note by filtering it out and rewriting the file
export const deleteNote = (note) => {
    const notes = fs.readFileSync(filePath, 'utf8').split('\n');
    const newNotes = notes.filter((el) => el !== note)
    fs.writeFileSync(filePath, newNotes.join('\n'))
};