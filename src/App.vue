<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
import router from "./Router";
import Red from "./Components/Red.vue";
import Yellow from "./Components/Yellow.vue";
import Green from "./Components/Green.vue";
import styles from "./Components/styles.vue";
export default {
  name: "app",
  data() {
    return {
      paths: ["/red", "/yellow", "/green"],
      prevRoute: null,
      redTime: 10000,
      yellowTime: 3000,
      greenTime: 15000,
      timer: null
    };
  },
  components: {
    Red,
    Yellow,
    Green
  },

  methods: {
    changeColor() {
      let i = this.paths.indexOf(this.$route.path);
      if (i == 1 && this.prevRoute === "/green") {
        i = i - 2;
      }
      if (i == 2) {
        i--;
      } else i++;
      this.$router.replace(this.paths[i]);
    },
    setTimer() {
      if (this.$route.path === "/red") {
        this.timer = this.redTime;
      }
      if (this.$route.path === "/yellow") {
        this.timer = this.yellowTime;
      }
      if (this.$route.path === "/green") {
        this.timer = this.greenTime;
      }
      setTimeout(this.changeColor, this.timer);
    }
  },
  watch: {
    $route(to, from) {
      this.prevRoute = from.path;
      this.setTimer();
    }
  },
  mounted() {
    this.setTimer();
  }
};
</script>

