const notesobject = require('./notes.js')
const yargs = require('yargs')

yargs.command(
    {
        command: 'add',
        describe: 'used to add a note',
        builder: {
            noteid: {
                describe: 'Each Note will have a unique Number',
                type: 'number'
            },
            title: {
                describe: 'Title for the note',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Body for the note',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            notesobject.addnote(argv.title, argv.body)
        }
    }
)

yargs.command({
    command: 'edit',
    describe: 'used to edit a note basedon thegiven id',
    builder: {

        noteid: {
            describe: 'Each Note will have a unique Number',
            demandOption:true,
            type: 'number'
        },
        title: {
            describe: 'Title for the note',
            demandOption:true,
            type: 'string'
        },
        body: {
            describe: 'Body for the note',
            demandOption:true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notesobject.editnote(argv.noteid,argv.title,argv.body)
    }
})

yargs.command({
    command: 'read',
    describe: 'used to read a note',
    builder: {
        noteid: {
            describe: 'Each Note will have a unique Number',
            type: 'number'
        }
    },
    handler: function (argv) {
        const notes = notesobject.readnote(argv.noteid)
        console.log(notes)

    }
})

yargs.command({
    command: 'delete',
    describe: 'delete a note',
    builder: {
        noteid: {
            describe: 'Each Note will have a unique Number',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        notesobject.deletenote(argv.noteid)
    }
})

yargs.parse()