
// Function to copy ingredients from ul to clipboard
  const copy = () => {
    // access each li using the class name
    let list = document.getElementsByClassName('list-item')
    // init empty array to collect the value of each li
    let listArr = []
    // loop through the list of li's collected and push value into empty array
    for (let i = 0; i<list.length; i++) {
      listArr.push(list[i].innerHTML)
    }
    // create a text area and set value to the listArr
    let textarea = document.createElement('textarea')
    textarea.value = listArr
    // append text area to body in order for it to be able to be selected.
    document.body.appendChild(textarea)
    textarea.select()
    // use command copy to copy the value stored in the text area.
    document.execCommand('copy')
    // remove text area from body 
    document.body.removeChild(textarea)
  }
