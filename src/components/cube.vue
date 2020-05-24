<template>
  <div>
    <VisualCube v-if="showChild" @change="toggle" :dist="dist" :algtype="algtype" :algorithm="algorithm" :case="algcase"
    :arrows="arrows" :cubeSize="cubeSize" :width="width" :height="height" :cubeView="cubeView" :mask="mask"
    :maskAlg="maskAlg" :backgroundColor="backgroundColor" :cubeColor="cubeColor" :cubeOpacity="cubeOpacity"
    :stickerOpacity="stickerOpacity"/>
    <!-- Algorithm -->
    <label for="algorithm">Algorithm</label>
    <div class="radio">
      <label><input type="radio" v-model="algtype" value="alg" checked>Algorithm to apply</label>
      <label><input type="radio" v-model="algtype" value="case">Algorithm to solve case</label>
    </div>
    <input id="algorithm" class="form-control" type="text" v-model="algorithm">
    <!-- Arrow Definition -->
    <label for="algorithm">Arrow Definition (Example:U0U2,U2U8,U8U0,R6R2R0-s8-i5-yellow)</label>
    <input id="arrows" class="form-control" type="text" v-model="arrows">
    <!-- Cube Size -->
    <CubeSizeForm @change-cubesize="changeCubesize" selected='3' label='Cube Size' formid='cubeSize'></CubeSizeForm>
    <!-- Size of generated image -->
    <label for="imageSize">Size of generated image</label>
    <input id="imageSize" class="form-control" v-model.number="imageSize" type="number" min="1" max="1024" step="1">
    <!-- view -->
    <label for="cubeView">view</label>
    <select class="form-control" v-model="cubeView">
      <option>-</option>
      <option>plan</option>
    </select>
    <!-- Stage Mask -->
    <div class="row">
      <b-col cols="12" md="8">
        <StageMaskForm @change-mask="changeMask" selected='-' label='Stage Mask' formid='mask'></StageMaskForm>
      </b-col>
      <b-col cols="12" md="4">
        <MaskAlgForm @change-maskalg="changeMaskalg" selected='-' label='Mask Alg' formid='maskalg'></MaskAlgForm>
      </b-col>
    </div>
    <!-- Background Color of image, Cube Color -->
    <div class="row">
      <b-col cols="12" md="6">
        <label>Background Color of image</label>
        <input type="color" v-model="backgroundColor">
      </b-col>
      <b-col cols="12" md="6">
        <label>Cube Color</label>
        <input type="color" v-model="cubeColor">
      </b-col>
    </div>
    <!-- Cube Opacity, Sticker Opacity, Projection Distance -->
    <div class="row">
      <b-col cols="12" md="4">
        <label for="cubeOpacity">Cube Opacity</label>
        <input id="cubeOpacity" class="form-control" v-model.number="cubeOpacity" type="number" min="1" max="100" step="1">
      </b-col>
      <b-col cols="12" md="4">
        <label for="stickerOpacity">Sticker Opacity</label>
        <input id="stickerOpacity" class="form-control" v-model.number="stickerOpacity" type="number" min="1" max="100" step="1">
      </b-col>
      <b-col cols="12" md="4">
        <label for="dist">Projection Distance</label>
        <input id="dist" class="form-control" v-model.number="dist" type="number" min="1" max="100" step="1">
      </b-col>
    </div>
  </div>
</template>

<script>
import VisualCube from './canvas/VisualCube.vue'
import CubeSizeForm from './forms/CubeSizeForm'
import StageMaskForm from './forms/StageMaskForm'
import MaskAlgForm from './forms/MaskAlgForm'

export default {
  components: {
    VisualCube,
    CubeSizeForm,
    StageMaskForm,
    MaskAlgForm
  },
  data () {
    return {
      dist: 5,
      showChild: true,
      algtype: 'alg',
      algorithm: '',
      algcase: '',
      arrows: '',
      cubeSize: 3,
      imageSize: 200,
      width: 200,
      height: 200,
      selected: '-',
      cubeView: '-',
      mask: '',
      maskAlg: '',
      backgroundColor: '#ffffff',
      cubeColor: '#000000',
      cubeOpacity: 100,
      stickerOpacity: 100
    }
  },
  watch: {
    algtype () {
      this.toggle()
    },
    algorithm () {
      this.algcase = this.algorithm
      this.toggle()
    },
    arrows () {
      this.toggle()
    },
    backgroundColor () {
      this.toggle()
    },
    cubeColor () {
      this.toggle()
    },
    cubeOpacity () {
      if (this.cubeOpacity === '' || this.cubeOpacity > 100) {
        this.cubeOpacity = 100
      }
      this.toggle()
    },
    stickerOpacity () {
      if (this.stickerOpacity === '' || this.stickerOpacity > 100) {
        this.stickerOpacity = 100
      }
      this.toggle()
    },
    dist () {
      if (this.dist === '' || this.dist > 100) {
        this.dist = 5
      }
      this.toggle()
    },
    imageSize () {
      if (this.imageSize === '') {
        this.imageSize = 200
      }
      if (this.imageSize >= window.innerWidth) {
        this.imageSize = parseInt(window.innerWidth * 0.9)
      }
      this.width = this.imageSize
      this.height = this.imageSize
      this.toggle()
    },
    cubeView () {
      this.toggle()
    }
  },
  methods: {
    changeMask: function (stageMask) {
      this.mask = stageMask
      this.toggle()
    },
    changeMaskalg: function (maskAlg) {
      this.maskAlg = maskAlg
      this.toggle()
    },
    changeCubesize: function (cubeSize) {
      this.cubeSize = Number(cubeSize)
      this.toggle()
    },
    toggle: function () {
      console.log(this.cubeColor)
      this.showChild = false
      this.$nextTick(() => (this.showChild = true))
    }
  }
}
</script>
