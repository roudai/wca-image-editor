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
  name: 'MegaminxColorForm',
  props: {
    selected: { type: String },
    label: { type: String },
    formid: { type: String }
  },
  data () {
    return {
      items: [
        { value: '', name: '-' },
        { value: 'fl', name: 'FL' },
        { value: 'f2l', name: 'F2L' },
        { value: 'll', name: 'LL' },
        { value: 'cll', name: 'CLL' },
        { value: 'ell', name: 'ELL' },
        { value: 'oll', name: 'OLL' },
        { value: 'ocll', name: 'OCLL' },
        { value: 'oell', name: 'OELL' },
        { value: 'coll', name: 'COLL' },
        { value: 'ocell', name: 'OCELL' },
        { value: 'wv', name: 'WV' },
        { value: 'vh', name: 'VH' },
        { value: 'els', name: 'ELS' },
        { value: 'cls', name: 'CLS' },
        { value: 'cmll', name: 'CMLL' },
        { value: 'cross', name: 'CROSS' },
        { value: 'f2l_3', name: 'F2L#3' },
        { value: 'f2l_2', name: 'F2L#2' },
        { value: 'f2l_sm', name: 'F2L SM' },
        { value: 'f2l_1', name: 'F2L#1' },
        { value: 'f2b', name: 'F2B' },
        { value: 'line', name: 'line' }
      ]
    }
  },
  methods: {
    changeSelect: function (e) {
      this.$emit('change-mask', e.target.value)
    }
  }
}
</script>
