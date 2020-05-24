<template>
  <div>
    <label>{{ label }}</label>
    <SELECT :id="formid" @change="changeSelect" class="form-control">
      <OPTION v-for="item in items" :key="item.value" :value="item.value" :selected="item.name === selected">{{ item.name }}</OPTION>
    </SELECT>
  </div>
</template>

<script>
export default {
  name: 'MaskAlgForm',
  props: {
    selected: { type: String },
    label: { type: String },
    formid: { type: String }
  },
  data () {
    return {
      items: [
        { value: '', name: '-' },
        { value: 'x', name: 'x' },
        { value: 'x\'', name: 'x\'' },
        { value: 'x2', name: 'x2' },
        { value: 'y', name: 'y' },
        { value: 'y\'', name: 'y\'' },
        { value: 'y2', name: 'y2' },
        { value: 'z', name: 'z' },
        { value: 'z\'', name: 'z\'' },
        { value: 'z2', name: 'z2' }
      ]
    }
  },
  methods: {
    changeSelect: function (e) {
      this.$emit('change-maskalg', e.target.value)
    }
  }
}
</script>
