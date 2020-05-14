<template>
  <div>
    <ClockCanvas :width="width" :height="height" :size="size" :fclock="fclock" :bclock="bclock" :pin="pin" :bg="bg"/>
    <div id="download"><button type="submit" class="btn btn-info" @click="downloadImage">download</button></div>
    <label for="name">File Name</label>
    <input id="fileName" class ="form-control" type="text" v-model="filename">
    <label for="size">Size of generated image (width)</label>
    <input id="imageSize" class="form-control" v-model.number="size" type="number" min="100" max="1024" step="1">
    <FormatForm @change-format="changeFormat"></FormatForm>
    <label>Pins</label>
    <div class="row">
      <b-col cols="3">
        <ClockPinForm @change-pin="changePin" label='t-l' formid='pin1'></ClockPinForm>
      </b-col>
      <b-col cols="3">
        <ClockPinForm @change-pin="changePin" label='t-r' formid='pin2'></ClockPinForm>
      </b-col>
      <b-col cols="3">
        <ClockPinForm @change-pin="changePin" label='b-l' formid='pin3'></ClockPinForm>
      </b-col>
      <b-col cols="3">
        <ClockPinForm @change-pin="changePin" label='b-r' formid='pin4'></ClockPinForm>
      </b-col>
    </div>
    <label>Front Clock</label>
    <div class="row">
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='t-l' formid='front1'></ClockForm>
      </b-col>
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='t-c' formid='front2'></ClockForm>
      </b-col>
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='t-r' formid='front3'></ClockForm>
      </b-col>
    </div>
    <div class="row">
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='m-l' formid='front4'></ClockForm>
      </b-col>
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='m-c' formid='front5'></ClockForm>
      </b-col>
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='m-r' formid='front6'></ClockForm>
      </b-col>
    </div>
    <div class="row">
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='b-l' formid='front7'></ClockForm>
      </b-col>
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='b-c' formid='front8'></ClockForm>
      </b-col>
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='b-r' formid='front9'></ClockForm>
      </b-col>
    </div>
    <label>Back Clock</label>
    <div class="row">
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='t-l' formid='back1'></ClockForm>
      </b-col>
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='t-c' formid='back2'></ClockForm>
      </b-col>
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='t-r' formid='back3'></ClockForm>
      </b-col>
    </div>
    <div class="row">
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='m-l' formid='back4'></ClockForm>
      </b-col>
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='m-c' formid='back5'></ClockForm>
      </b-col>
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='m-r' formid='back6'></ClockForm>
      </b-col>
    </div>
    <div class="row">
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='b-l' formid='back7'></ClockForm>
      </b-col>
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='b-c' formid='back8'></ClockForm>
      </b-col>
      <b-col cols="4">
        <ClockForm @change-clock="changeClock" label='b-r' formid='back9'></ClockForm>
      </b-col>
    </div>
    <BackgroundForm @change-background="changeBackground"></BackgroundForm>
  </div>
</template>

<script>
import ClockCanvas from './canvas/ClockCanvas.vue'
import FormatForm from './forms/FormatForm'
import ClockForm from './forms/ClockForm'
import ClockPinForm from './forms/ClockPinForm'
import BackgroundForm from './forms/BackgroundForm'

export default {
  components: {
    ClockCanvas,
    FormatForm,
    ClockForm,
    ClockPinForm,
    BackgroundForm
  },
  data () {
    return {
      width: 400,
      height: 200,
      filename: 'clock.png',
      size: 400,
      fclock: '000000000',
      bclock: '000000000',
      pin: 'uuuu',
      bg: 'y'
    }
  },
  watch: {
    size () {
      if (this.size === '') {
        this.size = 400
      }
      if (this.size >= window.innerWidth) {
        this.size = parseInt(window.innerWidth * 0.9)
      }
      this.width = this.size
      this.height = this.size / 2
    }
  },
  methods: {
    changeFormat: function (format) {
      this.filename = this.filename.split('.')[0] + '.' + format
    },
    changeBackground: function (bg) {
      this.bg = bg
    },
    changePin: function (pin) {
      this.pin = document.getElementById('pin1').value +
                 document.getElementById('pin2').value +
                 document.getElementById('pin3').value +
                 document.getElementById('pin4').value
    },
    changeClock: function (color) {
      this.fclock = document.getElementById('front1').value +
                    document.getElementById('front2').value +
                    document.getElementById('front3').value +
                    document.getElementById('front4').value +
                    document.getElementById('front5').value +
                    document.getElementById('front6').value +
                    document.getElementById('front7').value +
                    document.getElementById('front8').value +
                    document.getElementById('front9').value
      this.bclock = document.getElementById('back1').value +
                    document.getElementById('back2').value +
                    document.getElementById('back3').value +
                    document.getElementById('back4').value +
                    document.getElementById('back5').value +
                    document.getElementById('back6').value +
                    document.getElementById('back7').value +
                    document.getElementById('back8').value +
                    document.getElementById('back9').value
    },
    downloadImage () {
      const format = document.getElementById('fmt').value
      let canvas = document.getElementById('canvas')
      let link = document.createElement('a')

      if (format === 'png') {
        link.href = canvas.toDataURL('image/png')
        link.download = 'megaminx.png'
      } else if (format === 'gif') {
        link.href = canvas.toDataURL('image/gif')
        link.download = 'megaminx.gif'
      } else if (format === 'jpg') {
        link.href = canvas.toDataURL('image/jpg')
        link.download = 'megaminx.jpg'
      }

      link.download = document.getElementById('fileName').value
      link.click()
    }
  },
  beforeMount () {
    if (this.size >= window.innerWidth) {
      this.size = window.innerWidth * 0.9
      this.width = this.size
      this.height = this.size / 2
    }
  }
}
</script>
