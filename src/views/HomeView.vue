<template>
  <div>
    <div>
      <van-nav-bar title="邻家小铺" left-arrow @click-left="onClickLeft" />
    </div>
    <hang></hang>
    <item></item>
  </div>
</template>

<script>
import { bannerApi } from "@/request/api";
import hang from '@/components/hang.vue'
import item from '@/components/item.vue'
export default {
  data() {
    return {

    };
  },
  methods: {
    getdata() {
      bannerApi().then(res => {
        console.log(res);
      })
    },
    onClickLeft() {

    }
  },
  computed: {},
  components: { hang, item },
  filters: {},
  watch: {},
  created() { this.getdata() },
  mounted() { },
};
</script>

<style lang="scss" scoped></style>