<template>
  <div>
    <label for="fmt">Image Format</label>
    <SELECT id="fmt" @change="changeSelect" class="form-control">
      <OPTION v-for="item in items" v-bind:key="item">{{ item }}</OPTION>
    </SELECT>
  </div>
</template>

<script>
export default {
  name: 'FormatForm',
  data () {
    return {
      items: ['png', 'jpg', 'gif']
    }
  },
  methods: {
    changeSelect: function (e) {
      this.$emit('change-format', e.target.value)
    }
  }
}
</script>
