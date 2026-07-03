Vue.createApp({
  data() {
    return {
	    emoji: "❓",
        name: "ライバーを選んでください",
        description:""
    };
  },
  methods:{
    showAnimal(animal){
        if(animal === "ken"){
            this.emoji = "⚔️";
            this.name = "剣持刀也";
            this.description =  "16歳の高校2年生。剣道部所属の隠れまじめ系男子。普段は周りと合わせてじゃれているがダメな時はダメという。以前から他の人の配信を見るのが好きで、その憧れから始めた。練習のしすぎで怪我が絶えないので、常に救急セットを所持している。";
        }else if(animal === "office"){
            this.emoji = "🏢";
            this.name = "加賀美ハヤト"
            this.description = "玩具会社、「加賀美インダストリアル」の若き社長。自社玩具のPRのため、自らライバーとしてデビューすることを決めた。";
        }else if (animal === "hosuto") {
            this.emoji = "🥂✨";
            this.name = "不破湊";
            this.description = "歌とゲームが大好きなバーチャルホスト。三度の飯より貴女の笑顔。No.1にしてください。";
      }else if (animal === "taiyou") {
            this.emoji = "🌞";
            this.name = "甲斐田晴";
            this.description = "皇都でも著名な、「魔」の研究者。屋敷で研究に没頭しており、その姿を知る者は少ない。切れ者だが怠け者でもあるため、 興味のないことには関わろうとしない。";
      }
    }
  }
}).mount('#app');