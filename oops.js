class Page 
{
    constructor(text)
    {
        this.text = text;
    }

    print()
    {
        console.log(this.text);
    }
}

class NoteBook{
    constructor()
    {
        this.pages=[];
    }

    addPage(text)
    {
        var page = new Page(text)
        this.pages.push(page)
    }

    print()
    {
        for(let page of this.pages)
        {
            page.print()
        }
    }
}

var mathNotes = new NoteBook()
var scienceNoted = new NoteBook()

mathNotes.addPage('Science was good but coding is love')
scienceNoted.addPage('this is science')

mathNotes.print()

scienceNoted.print()