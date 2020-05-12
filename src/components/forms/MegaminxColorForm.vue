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
  name: 'MegaminxColorForm',
  props: {
    selected: { type: String },
    label: { type: String },
    formid: { type: String }
  },
  data () {
    return {
      items: [
        { value: 'd', name: 'dimgray' },
        { value: 'u', name: 'lightgray' },
        { value: 'p', name: 'pink' },
        { value: 'c', name: 'lemonchiffon' },
        { value: 'a', name: 'aqua' },
        { value: 'o', name: 'orange' },
        { value: 'l', name: 'lawngreen' },
        { value: 'b', name: 'dodgerblue' },
        { value: 'y', name: 'yellow' },
        { value: 's', name: 'darkviolet' },
        { value: 'g', name: 'seagreen' },
        { value: 'r', name: 'red' },
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
      delete this.items[13]
      this.items[13] = { value: 'x', name: 'black' }
    }
  }
}
</script>
