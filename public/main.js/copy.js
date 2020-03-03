

  const copy = () => {

    let list = document.getElementsByClassName('list-item')
    let listArr = []
    for (let i = 0; i<list.length; i++) {
      listArr.push(list[i].innerHTML)
    }

    let textarea = document.createElement('textarea')
    textarea.value = listArr
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  }
