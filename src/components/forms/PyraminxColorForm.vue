<template>
  <div>
    <label for="fmt">{{ label }}</label>
    <SELECT :id="formid" @change="changeSelect" class="form-control">
      <OPTION v-for="item in items" :key="item.value" :value="item.value" :selected="item.name === selected">{{ item.name }}</OPTION>
    </SELECT>
  </div>
</template>

<script>
export default {
  name: 'PyraminxColorForm',
  props: {
    selected: { type: String },
    label: { type: String },
    formid: { type: String }
  },
  data () {
    return {
      items: [
        { value: 'd', name: 'dimgray' },
        { value: 'r', name: 'red' },
        { value: 'b', name: 'dodgerblue' },
        { value: 'l', name: 'lawngreen' },
        { value: 'y', name: 'yellow' },
        { value: 'w', name: 'white' },
        { value: 'z', name: 'black' }
      ]
    }
  },
  methods: {
    changeSelect: function () {
      this.$emit('change-color')
    }
  },
  beforeMount () {
    if (this.formid === 'bcolor') {
      delete this.items[7]
      this.items[7] = { value: 'x', name: 'black' }
    }
  }
}
</script>
