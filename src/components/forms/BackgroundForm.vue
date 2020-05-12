<template>
  <div>
    <label for="bg">Background(PNG,GIF)</label>
    <SELECT id="bg" @change="changeSelect" class="form-control">
      <OPTION v-for="item in items" :key="item.value" :value="item.value">{{ item.name }}</OPTION>
    </SELECT>
  </div>
</template>

<script>
export default {
  name: 'BackgroundForm',
  data () {
    return {
      items: [
        { value: 'y', name: 'transparent' },
        { value: 'n', name: 'non-transparent' }
      ]
    }
  },
  methods: {
    changeSelect: function (e) {
      this.$emit('change-background', e.target.value)
    }
  }
}
</script>
