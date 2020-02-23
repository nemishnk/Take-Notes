const file = require('fs')
var empty = require('is-empty');

const create = function () {
    file.writeFileSync('notes.json', '[]')
    console.log("New file created, since there is no notes to add/view/edit/delete")
}

const add = function (title, body) {
    try {
        var Jsoncontent = readallnotes()
        var noteid = getnoteid(Jsoncontent)
        Jsoncontent.push({
            noteid: noteid + 1,
            title: title,
            body: body
        })

        saveNote(Jsoncontent)

        //use chalk and give a success message

    } catch (error) {
        create();
    }
}

const readallnotes = function () {
    filecontentbuffer = file.readFileSync('notes.json');
    filecontent = filecontentbuffer.toString();
    Jsoncontent = JSON.parse(filecontent);
    return Jsoncontent
}

const getnoteid = function (Arrayofobjects) {
    if (!empty(Jsoncontent)) {
        var count = Arrayofobjects.length;
        return Arrayofobjects[count - 1].noteid
    }
    else {
        return 0
    }


}

const saveNote = function (array) {
    var stringarray = JSON.stringify(array)
    file.writeFileSync('notes.json', stringarray)


}

const read = function (id) {
    const notes = readallnotes()
    const remainingnotes = notes.filter(function (note) {
        return note.noteid == id
    })
return remainingnotes
}

const erase = function (id) {
    const notes = readallnotes()
    const remainingnotes = notes.filter(function (note) {
        return note.noteid != id
    })
    saveNote(remainingnotes)
}

const edit = function (id, title, body) {
    const notes = readallnotes()
    const updatednotes = notes.filter(function (note) {
        if (note.noteid === id) {
            note.title = title
            note.body = body
        }
        return true
    })
    saveNote(updatednotes)
}

module.exports = {
    readnote: read,
    deletenote: erase,
    editnote: edit,
    addnote: add

}