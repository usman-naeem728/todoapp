var tolist = document.getElementById("tolist")
let id = 0;
function add() {
    id++;
    console.log(id)

    var inp = document.getElementById("todo")
    var li = document.createElement('li')
    li.setAttribute("id", id)
    var input = document.createElement('input')
    // var litext = document.createTextNode(inp.value)
    input.setAttribute("value", inp.value);
    input.setAttribute('disabled', 'disabled')
    li.appendChild(input);

    let unplist = document.getElementsByTagName('li').length


    var del = document.createElement('button')
    var delText = document.createTextNode("DELETE")
    del.setAttribute("onclick", "dele()")
    del.setAttribute("class", 'close')
    del.appendChild(delText)

    var edit = document.createElement('button')
    var editText = document.createTextNode('EDIT')
    edit.setAttribute("onclick", 'edit(' + id + ')')
    edit.setAttribute("class", 'edit')
    edit.appendChild(editText)

    var done = document.createElement('button')
    done.style.display = "none"
    var doneText = document.createTextNode('DONE')
    done.setAttribute("onclick", 'done('+id+')')
    done.setAttribute("class", 'done')
    done.setAttribute("id", 'done')
    done.appendChild(doneText)

    var a = li.appendChild(del)
    var b = li.appendChild(edit)
    var d = li.appendChild(done)
    var c = tolist.appendChild(li)

    if (inp.value === '') {
        alert("You must write something!");
    } else {
        document.getElementById("tolist").appendChild(li);
    }



    // let maindiv = document.getElementById('maindiv')
    // maindiv.style.background = "rgb(207, 207, 207)";
    // maindiv.style.display = 'flex';
    // maindiv.style.justifyContent = 'space-between';
    // maindiv.style.width = 100 + "%";
    // maindiv.style.marginTop = 20 + "px";

    // let inputdiv = document.createElement('div');
    // inputdiv.setAttribute("class", 'todoinput');

    // let input1 = document.createElement('input');
    // input1.setAttribute("type", 'text');
    // input1.setAttribute("value", inp.value);
    // input1.setAttribute('disabled','disabled')
    // input1.setAttribute("id",'myinput')
    // inputdiv.appendChild(input1);


    // let buttons = document.createElement('div');
    // buttons.setAttribute("class", 'buttons');

    // let btn1 = document.createElement('button');
    // let btn2 = document.createElement('button');
    // let btn1textnode = document.createTextNode(`<i class="fa fa-pencil"></i>`)
    // let btn2textnode = document.createTextNode(`<i class="fa fa-trash"></i>`)
    // btn1.setAttribute("onclick", 'edit()')
    // btn2.setAttribute("onclick", 'delet()')
    // btn1.appendChild(btn1textnode);
    // btn2.appendChild(btn2textnode);
    // buttons.appendChild(btn1);
    // buttons.appendChild(btn2);

    // maindiv.appendChild(inputdiv);
    // maindiv.appendChild(buttons);

    // }


    inp.value = ""
}

function dele() {
    var delText = event.target.parentNode
    delText.remove()
}
function deleteall() {
    tolist.innerHTML = ""
}
function edit(num) {
    /////////getting that li which user click////////////
    let li = document.getElementById(num)
    let inp = li.children[0]
    console.log(li.children[3])
    inp.removeAttribute('disabled')
    inp.focus()
    inp.style.outline = "1px solid black"
    inp.setAttribute("class", 'highlightcolor')

    ////////////display done button over edit button//////////  
    let done = li.children[3]
    done.style.display = "block"
   

}
function done(num) {

    let li = document.getElementById(num)
    let inp = li.children[0]
    let value = event.target.parentNode.firstChild.value;
    // let inp = event.target.parentNode.firstChild;
    event.target.parentNode.firstChild.nodeValue = value
    let done = li.children[3]
    done.style.display = "none"
    inp.setAttribute('disabled', 'disabled')
    inp.removeAttribute('class')
    inp.style.outline = "none"


}
