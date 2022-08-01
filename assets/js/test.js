const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const app = (()=>{
    const cars = ['BMW']
    const root = $('#root')
    const input = $('#input')
    const submit = $('#submit')

    return {
        add(car) {
            cars.push(car)
            console.log(cars)
        },
        delete(index) {
            cars.splice(index,1)
        },
        render () {
            const html = cars.map((car,index)=>`<li>${car}
            <span class='delete' data-index = "${index}">&times</span></li>`).join('')
            root.innerHTML = html
        },
        handleDelete(e){
            const deleteBtn = e.target.closest('.delete')
            if(deleteBtn) {
                const index = deleteBtn.dataset.index
                this.delete(index)
                this.render()
            }
        },
        init(){ 
            console.log(submit)
            console.log(input.value)
            const _this = this
            submit.onclick = function(){
                const car= input.value
                _this.add(car)
                _this.render()
            }
            root.onclick = this.handleDelete.bind(this)
            this.render()
        }
    }
})()

app.init()