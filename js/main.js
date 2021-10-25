const app = Vue.createApp({    
    data() {
        return {
            title: "Contador App - Vue",
            count: 0
        };
    },
    methods:{
        modCount(instruction = "add"){
            if(instruction == 'dis') this.count -= 1;
            else this.count += 1;
        },
        addCount(){
            this.count += 1;
        },
        reStart(){
            this.count = 0;
        }
    }
});


console.log(app.data)