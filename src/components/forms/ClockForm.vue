<template>
  <div>
    <label for="clock">{{ label }}</label>
    <SELECT :id="formid" @change="changeSelect" class="form-control">
      <OPTION v-for="item in items" :key="item.value" :value="item.value">{{ item.name }}</OPTION>
    </SELECT>
  </div>
</template>

<script>
export default {
  name: 'ClockForm',
  props: {
    label: { type: String },
    formid: { type: String }
  },
  data () {
    return {
      items: [
        { value: '0', name: '0' },
        { value: '1', name: '1' },
        { value: '2', name: '2' },
        { value: '3', name: '3' },
        { value: '4', name: '4' },
        { value: '5', name: '5' },
        { value: '6', name: '6' },
        { value: '7', name: '7' },
        { value: '8', name: '8' },
        { value: '9', name: '9' },
        { value: 'a', name: '10' },
        { value: 'b', name: '11' }
      ]
    }
  },
  methods: {
    changeSelect: function () {
      this.$emit('change-clock')
    }
  }
}
</script>
