

class View {
    constructor(model) {
        this.model = model;
        this.countSubject = new Event();
        this.init();
    }

    init() {
        this.table = this.selector('.table');

        window.addEventListener('load', this.renderTable.bind(this));
        window.addEventListener('click', this.renderTable.bind(this));
        window.addEventListener('click', this.editTable.bind(this))
        this.model.countSubject.on(() => this.refreshTable());

        this.refreshTable()

        return this;
    }

    // Edit table
    editTable() {
        let that = this;
        
        if (localStorage.getItem('table')) {
            document.querySelector('.table').addEventListener('click', (e) => {
                if (!e.target.dataset.set) {
                    if (e.target.nodeName == 'TD' || e.target.nodeName == 'TR') {
                        let row = e.target.dataset.row
                        let column = e.target.dataset.column

                        let table = JSON.parse(localStorage.getItem('table'))
                        let input = document.createElement('input')
                        let text = e.target.textContent;

                        input.type = 'text'
                        input.value = text;
                        input.autofocus = 'autofocus'

                        e.target.dataset.set = true;
                        e.target.textContent = ''

                        e.target.appendChild(input)

                        input.addEventListener('keyup', function(e) {
                            if (e.code === 'Enter') {
                                table[row][column] = input.value
                                that.countSubject.fire();
                                localStorage.setItem('table', JSON.stringify(table))
                                that.countSubject.fire()
                            }
                        })

                        localStorage.setItem('table', JSON.stringify(table))
                    }
                }
            })

        }
    }

    // render new Table
    renderTable() {

        if(!localStorage.getItem('table')) {
            let w = prompt("Введите ширину таблицы(в ячейках): ", '')
            let h = prompt("Введите высоту таблицы(в ячейках): ", '')

            localStorage.setItem('table', JSON.stringify(renderArrayOfTable(w, h)))

        }
    }

    // render table from this.model.table
    refreshTable() {
        this.model.getTable()

        let table = document.createElement('table')

        this.table.innerHTML = ''

        for (let w = 0; w < this.model.table.length; w++) {
            let tr = document.createElement('tr');
            for (let h = 0; h < this.model.table[w].length; h++) {
                let td = document.createElement('td');
                td.dataset.row = w;
                td.dataset.column = h;
                td.textContent = this.model.table[w][h]
                tr.appendChild(td)
            }
            table.appendChild(tr)
        }

        this.table.appendChild(table)
    }

    // method for search a element in DOM
    selector(selector, tobj) {
        let that = document || tobj

        return that.querySelector(selector)
    }
}
