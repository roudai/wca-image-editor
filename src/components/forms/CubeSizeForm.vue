<template>
  <div>
    <label>{{ label }}</label>
    <SELECT :id="formid" @change="changeSelect" class="form-control">
      <OPTION v-for="item in items" v-bind:key="item" :selected="item === selected">{{ item }}</OPTION>
    </SELECT>
  </div>
</template>

<script>
export default {
  name: 'CubeSizeForm',
  props: {
    selected: { type: String },
    label: { type: String },
    formid: { type: String }
  },
  data () {
    return {
      items: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17']
    }
  },
  methods: {
    changeSelect: function (e) {
      this.$emit('change-cubesize', e.target.value)
    }
  }
}
</script>
