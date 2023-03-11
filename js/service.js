const list = document.querySelector('.list'),
    items = document.querySelectorAll('.block_item')
    listItems = document.querySelectorAll('.list_item')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target

        if(target.classList.contains('list_item')){

        listItems.forEach(listItem => listItem.classList.remove('active') )
        target.classList.add('active')
    }

        switch (targetId) {
            case 'all':
                getItems('block_item')
                break
            case 'interior':
                getItems(targetId)
                break
            case 'architecture':
                getItems(targetId)
                break
            case 'planning':
                getItems(targetId)
                break
        }
    })

}
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}