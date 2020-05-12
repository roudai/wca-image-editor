<template>
  <div>
    <PyraminxCanvas :width="width" :height="height" :size="size" :bcolor="bcolor" :fcolor="fcolor" :scolor="scolor" :tcolor="tcolor" :bg="bg"/>
    <div id="download"><button type="submit" class="btn btn-info" @click="downloadImage">download</button></div>
    <label for="name">File Name</label>
    <input id="fileName" class ="form-control" type="text" v-model="filename">
    <label for="size">Size of generated image</label>
    <input id="imageSize" class="form-control" v-model.number="size" type="number" min="1" max="1024" step="1">
    <FormatForm @change-format="changeFormat"></FormatForm>
    <label>First Layer Color</label>
    <div class="row">
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='red' label='1' formid='first1'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='lawngreen' label='2' formid='first2'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='dodgerblue' label='3' formid='first3'></PyraminxColorForm>
      </div>
    </div>
    <label>Second Layer Color</label>
    <div class="row">
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='red' label='1' formid='second1'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='red' label='2' formid='second2'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='red' label='3' formid='second3'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='lawngreen' label='4' formid='second4'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='lawngreen' label='5' formid='second5'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='lawngreen' label='6' formid='second6'></PyraminxColorForm>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='dodgerblue' label='7' formid='second7'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='dodgerblue' label='8' formid='second8'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='dodgerblue' label='9' formid='second9'></PyraminxColorForm>
      </div>
    </div>
    <label>Third Layer Color</label>
    <div class="row">
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='red' label='1' formid='third1'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='red' label='2' formid='third2'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='red' label='3' formid='third3'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='red' label='4' formid='third4'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='red' label='5' formid='third5'></PyraminxColorForm>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='lawngreen' label='6' formid='third6'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='lawngreen' label='7' formid='third7'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='lawngreen' label='8' formid='third8'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='lawngreen' label='9' formid='third9'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='lawngreen' label='10' formid='third10'></PyraminxColorForm>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='dodgerblue' label='11' formid='third11'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='dodgerblue' label='12' formid='third12'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='dodgerblue' label='13' formid='third13'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='dodgerblue' label='14' formid='third14'></PyraminxColorForm>
      </div>
      <div class="col-xs-12 col-md-2">
        <PyraminxColorForm @change-color="changeColor" selected='dodgerblue' label='15' formid='third15'></PyraminxColorForm>
      </div>
    </div>
    <PyraminxColorForm @change-color="changeColor" selected='black' label='Border Color' formid='bcolor'></PyraminxColorForm>
    <BackgroundForm @change-background="changeBackground"></BackgroundForm>
  </div>
</template>

<script>
import PyraminxCanvas from './canvas/PyraminxCanvas.vue'
import FormatForm from './forms/FormatForm'
import PyraminxColorForm from './forms/PyraminxColorForm'
import BackgroundForm from './forms/BackgroundForm'

export default {
  components: {
    PyraminxCanvas,
    FormatForm,
    PyraminxColorForm,
    BackgroundForm
  },
  data () {
    return {
      width: 200,
      height: 200,
      filename: 'pyraminx.png',
      size: 200,
      bcolor: 'x',
      fcolor: 'rlb',
      scolor: 'rrrlllbbb',
      tcolor: 'rrrrrlllllbbbbb',
      bg: 'y'
    }
  },
  watch: {
    size () {
      this.width = this.size
      this.height = this.size
    }
  },
  methods: {
    changeFormat: function (format) {
      this.filename = this.filename.split('.')[0] + '.' + format
    },
    changeBackground: function (bg) {
      this.bg = bg
    },
    changeColor: function (color) {
      this.fcolor = document.getElementById('first1').value +
                    document.getElementById('first2').value +
                    document.getElementById('first3').value
      this.scolor = document.getElementById('second1').value +
                    document.getElementById('second2').value +
                    document.getElementById('second3').value +
                    document.getElementById('second4').value +
                    document.getElementById('second5').value +
                    document.getElementById('second6').value +
                    document.getElementById('second7').value +
                    document.getElementById('second8').value +
                    document.getElementById('second9').value
      this.tcolor = document.getElementById('third1').value +
                    document.getElementById('third2').value +
                    document.getElementById('third3').value +
                    document.getElementById('third4').value +
                    document.getElementById('third5').value +
                    document.getElementById('third6').value +
                    document.getElementById('third7').value +
                    document.getElementById('third8').value +
                    document.getElementById('third9').value +
                    document.getElementById('third10').value +
                    document.getElementById('third11').value +
                    document.getElementById('third12').value +
                    document.getElementById('third13').value +
                    document.getElementById('third14').value +
                    document.getElementById('third15').value
      this.bcolor = document.getElementById('bcolor').value
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
  }
}
</script>
