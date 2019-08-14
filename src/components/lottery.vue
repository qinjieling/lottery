<template>
  <div class="lottery">
    <div class="lotterywrap">
      <div class="lotterybox">
        <ul class="chouj">
          <li class="mr" v-for="(item,index) in list" v-if="index!=4" :key="index">
            <img :src="item.url" />
            <div class="tm" v-bind:style="{display:item.displayStyle}">{{index}}</div>
          </li>
          <li v-else>
            <img :src="btn" @click="choujiang" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
var btn = require("../assets/lottery/cj9.png");
var btn1 = require("../assets/lottery/cj9_2.png");
var btn2 = require("../assets/lottery/cj9_3.png");
export default {
  name: "lottery",
  data() {
    return {
      start: 0,
      count: 0,
      speed: 200,
      btn
    };
  },
  props: {
    list: {
      type: Array,
      default: function() {
        return [];
      }
    },
    over: {
      type: Number
    }
  },
  methods: {
    choujiang() {
      console.log(this);
      for (var i = 0; i < 9; i++) {
        this.list[i].displayStyle = "block";
      }
      this.btn = btn1;

      this.count++;
      var stopid = Math.floor(Math.random() * 8);
      console.log(this.start);

      this.list[this.start].displayStyle = "none";

      if (this.start == 2) {
        this.start = 5;
      } else if (this.start == 5) {
        this.start = 8;
      } else if (this.start == 6) {
        this.start = 3;
      } else if (this.start == 3) {
        this.start = 0;
      } else if (this.start == 8 || this.start == 7) {
        this.start--;
      } else if (this.start == 0 || this.start == 1) {
        this.start++;
      }
      if (this.count >= this.over) {
        if (this.start == stopid) {
          this.count = 0;
          this.speed = 200;
          //
          this.btn = btn2;
          return false;
        }
      }
      if (this.count < 8) {
        this.speed -= 20;
      }
      if (this.count > 24) {
        this.speed += 20;
      }
      // if(this.start==8){this.start=0;}
      var that = this;
      setTimeout(function() {
        that.choujiang();
      }, that.speed);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
ul,
li {
  list-style: none;
}
em {
  font-style: normal;
}
body {
  width: 100%;
  height: 100%;
  font-family: "黑体";
  background: #ec5054 url(../assets/lottery/indexheadbg.png) no-repeat;
  background-position: center top;
  background-size: 100% auto;
}
.lotterywrap {
  padding: 50% 36px;
  height: auto;
}
.lotterybox {
  width: 100%;
  padding: 0px 0px 10px;
  height: auto;
}
.lotterybox .choujbg {
  margin: 0px 5px;
  text-align: center;
  margin-top: 14px;
  height: auto;
}
.lotterybox .chouj {
  margin: 0 auto;
  list-style: none;
  display: block;
  padding: 18px;
  overflow: hidden;
  background: url(../assets/lottery/borderbg.png) no-repeat;
  background-size: 100% 100%;
  border-radius: 15px;
}
.lotterybox .chouj li {
  width: 88px;
  float: left;
  list-style: none;
  position: relative;
  height: 60px;
}
.lotterybox .chouj li img {
  display: block;
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
.lotterybox .chouj li:nth-child(1) .tm {
  border-top-left-radius: 25px;
}
.lotterybox .chouj li:nth-child(3) .tm {
  border-top-right-radius: 25px;
}
.lotterybox .chouj li:nth-child(7) .tm {
  border-bottom-left-radius: 25px;
}
.lotterybox .chouj li:nth-child(9) .tm {
  border-bottom-right-radius: 25px;
}
#cjbut {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.mr {
  border-right: 1px solid #ec5054;
}
.mb {
  border-bottom: 1px solid #ec5054;
}
.tm {
  background: #000;
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
