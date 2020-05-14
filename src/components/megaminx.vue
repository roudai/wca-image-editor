<template>
  <div>
    <MegaminxCanvas :width="width" :height="height" :size="size" :bcolor="bcolor" :ucolor="ucolor" :scolor="scolor" :bg="bg"/>
    <div id="download"><button type="submit" class="btn btn-info" @click="downloadImage">download</button></div>
    <label for="name">File Name</label>
    <input id="fileName" class="form-control" type="text" v-model="filename">
    <label for="size">Size of generated image</label>
    <input id="imageSize" class="form-control" v-model.number="size" type="number" min="1" max="1024" step="1">
    <FormatForm @change-format="changeFormat"></FormatForm>
    <MegaminxColorForm @change-color="changeColor" selected='lightgray' label='Center Color' formid='uface0'></MegaminxColorForm>
    <label>U Face Color</label>
    <b-row>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='lightgray' label='1' formid='uface1'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='lightgray' label='2' formid='uface2'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='lightgray' label='3' formid='uface3'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='lightgray' label='4' formid='uface4'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='lightgray' label='5' formid='uface5'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='lightgray' label='6' formid='uface6'></MegaminxColorForm>
      </b-col>
    </b-row>
    <div class="row">
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='lightgray' label='7' formid='uface7'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='lightgray' label='8' formid='uface8'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='lightgray' label='9' formid='uface9'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='lightgray' label='10' formid='uface10'></MegaminxColorForm>
      </b-col>
    </div>
    <label>Side Face Color</label>
    <div class="row">
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='pink' label='1' formid='sface1'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='pink' label='2' formid='sface2'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='pink' label='3' formid='sface3'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='lemonchiffon' label='4' formid='sface4'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='lemonchiffon' label='5' formid='sface5'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='lemonchiffon' label='6' formid='sface6'></MegaminxColorForm>
      </b-col>
    </div>
    <div class="row">
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='aqua' label='7' formid='sface7'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='aqua' label='8' formid='sface8'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='aqua' label='9' formid='sface9'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='orange' label='10' formid='sface10'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='orange' label='11' formid='sface11'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='orange' label='12' formid='sface12'></MegaminxColorForm>
      </b-col>
    </div>
    <div class="row">
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='lawngreen' label='13' formid='sface13'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='lawngreen' label='14' formid='sface14'></MegaminxColorForm>
      </b-col>
      <b-col cols="6" md="2">
        <MegaminxColorForm @change-color="changeColor" selected='lawngreen' label='15' formid='sface15'></MegaminxColorForm>
      </b-col>
    </div>
    <MegaminxColorForm @change-color="changeColor" selected='black' label='Border Color' formid='bcolor'></MegaminxColorForm>
    <BackgroundForm @change-background="changeBackground"></BackgroundForm>
  </div>
</template>

<script>
import MegaminxCanvas from './canvas/MegaminxCanvas.vue'
import FormatForm from './forms/FormatForm'
import MegaminxColorForm from './forms/MegaminxColorForm'
import BackgroundForm from './forms/BackgroundForm'

export default {
  components: {
    MegaminxCanvas,
    FormatForm,
    MegaminxColorForm,
    BackgroundForm
  },
  data () {
    return {
      width: 200,
      height: 200,
      filename: 'megaminx.png',
      size: 200,
      bcolor: 'x',
      ucolor: 'uuuuuuuuuuu',
      scolor: 'pppcccaaaooolll',
      bg: 'y'
    }
  },
  watch: {
    size () {
      if (this.size === '') {
        this.size = 200
      }
      if (this.size >= window.innerWidth) {
        this.size = parseInt(window.innerWidth * 0.9)
      }
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
      this.ucolor = document.getElementById('uface0').value +
                    document.getElementById('uface1').value +
                    document.getElementById('uface2').value +
                    document.getElementById('uface3').value +
                    document.getElementById('uface4').value +
                    document.getElementById('uface5').value +
                    document.getElementById('uface6').value +
                    document.getElementById('uface7').value +
                    document.getElementById('uface8').value +
                    document.getElementById('uface9').value +
                    document.getElementById('uface10').value
      this.scolor = document.getElementById('sface1').value +
                    document.getElementById('sface2').value +
                    document.getElementById('sface3').value +
                    document.getElementById('sface4').value +
                    document.getElementById('sface5').value +
                    document.getElementById('sface6').value +
                    document.getElementById('sface7').value +
                    document.getElementById('sface8').value +
                    document.getElementById('sface9').value +
                    document.getElementById('sface10').value +
                    document.getElementById('sface11').value +
                    document.getElementById('sface12').value +
                    document.getElementById('sface13').value +
                    document.getElementById('sface14').value +
                    document.getElementById('sface15').value
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
