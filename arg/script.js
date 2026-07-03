Vue.createApp({
    data(){
        return{
            message:"こんにちは"
        };
    },
    methods: {
//   greet(name) {
//     alert(`こんにちは、${name}さん`);
//     }
    // showUser(name,age){
    //     alert(`${name}さんは${age}歳です`)
    // }   

    showMessage(text){
        alert(text);
    }
}
}).mount('#app');