Vue.createApp({
  data() {
    return {
	    emoji: "❓",
        name: "動物を選んでください",
        description:""
    };
  },
  methods:{
    showAnimal(animal){
        if(animal === "dog"){
            this.emoji = "🐕";
            this.name = "犬";
            this.description =  "人と暮らすことが多く、とても身近な動物です。";
        }else if(animal === "cat"){
            this.emoji = "🐈";
            this.name = "猫";
            this.description = "高い場所に登ったり、のんびり過ごしたりする動物です。";
        }else if (animal === "rabbit") {
            this.emoji = "🐇";
            this.name = "うさぎ";
            this.description = "長い耳とぴょんぴょん跳ねる姿が特徴です。";
      }
    }
  }
}).mount('#app');