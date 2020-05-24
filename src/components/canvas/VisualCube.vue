<template>
  <div id="visualcube" dist='dist' algtype='' algorithm='algorithm' case="case" arrows="arrows" cubeSize="cubeSize" cubeOpacity="cubeOpacity" stickerOpacity="stickerOpacity"
  width="width" height="height" cubeView="cubeView" mask="mask" maskAlg="maskAlg" backgroundColor="backgroundColor" cubeColor="cubeColor"></div>
</template>

<script>
import * as SRVisualizer from 'sr-visualizer'

export default {
  props: {
    dist: {
      type: Number,
      default: 5
    },
    algtype: {
      type: String,
      default: 'alg'
    },
    algorithm: {
      type: String,
      defult: ''
    },
    case: {
      type: String,
      default: ''
    },
    arrows: {
      type: String,
      default: ''
    },
    cubeSize: {
      type: Number,
      default: 3
    },
    cubeOpacity: {
      type: Number,
      default: 100
    },
    stickerOpacity: {
      type: Number,
      default: 100
    },
    viewportRoation: [
      ['X', -34]
    ],
    cubeView: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    },
    mask: {
      type: String,
      default: ''
    },
    maskAlg: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: '#ffffff'
    },
    cubeColor: {
      type: String,
      default: '#000000'
    }
  },
  data () {
    return {
      algData: this.algorithm,
      caseData: this.case
    }
  },
  mounted () {
    this.draw()
  },
  updated () {
    this.draw()
  },
  methods: {
    draw: function () {
      if (this.algtype === 'alg') {
        this.algData = this.algorithm
        this.caseData = ''
      } else if (this.algtype === 'case') {
        this.algData = ''
        this.caseData = this.algorithm
      }
      SRVisualizer.cubePNG(document.getElementById('visualcube'), {
        dist: this.dist,
        algorithm: this.algData,
        case: this.caseData,
        backgroundColor: this.backgroundColor,
        cubeColor: this.cubeColor,
        cubeSize: this.cubeSize,
        cubeOpacity: this.cubeOpacity,
        stickerOpacity: this.stickerOpacity,
        // viewportRotations: this.viewportRoation,
        view: this.cubeView,
        width: this.width,
        height: this.height,
        mask: this.mask,
        maskAlg: this.maskAlg,
        arrows: this.arrows
      })
    }
  }
}
</script>
