<template>
  <div>
    <label for="pin">{{ label }}</label>
    <SELECT :id="formid" @change="changeSelect" class="form-control">
      <OPTION v-for="item in items" :key="item.value" :value="item.value">{{ item.name }}</OPTION>
    </SELECT>
  </div>
</template>

<script>
export default {
  name: 'ClockPinForm',
  props: {
    label: { type: String },
    formid: { type: String }
  },
  data () {
    return {
      items: [
        { value: 'u', name: 'up' },
        { value: 'd', name: 'down' }
      ]
    }
  },
  methods: {
    changeSelect: function (e) {
      this.$emit('change-pin', e.target.value)
    }
  }
}
</script>
