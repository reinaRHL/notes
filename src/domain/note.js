'use strict';

const _ = require('lodash');

class Note {
    constructor(note) {
        this._note = note;
    }

    get id() {
        return this._note.id;
    }

    expose() {
        return _.pick(this._note, [
            'id',
            'subject',
            'body',
            'updatedAt',
        ]);
    }

    update(note) {
        let newNote = {};
        newNote.body = note.body;
        return this._note.update(newNote);
    }

    delete() {
        return this._note.destroy();
    }
}

module.exports = Note;
