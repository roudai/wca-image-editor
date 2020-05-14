<template>
  <canvas id="canvas" width="400" height="200" fclock="fclock" bclock="bclock" pin="pin" bg="y"></canvas>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 400
    },
    fclock: {
      type: String,
      default: '000000000'
    },
    bclock: {
      bclock: String,
      default: '000000000'
    },
    pin: {
      type: String,
      default: 'uuuu'
    },
    bg: {
      type: String,
      default: 'y'
    }
  },
  watch: {
    size () {
      this.draw()
    },
    fclock () {
      this.draw()
    },
    bclock () {
      this.draw()
    },
    pin () {
      this.draw()
    },
    bg () {
      this.draw()
    }
  },
  data () {
    return {
      fcolor: '#3366ff',
      bcolor: '#88aaff',
      upcolor: '#ffff00',
      dpcolor: '#444400',
      ccolor: '#ff0000',
      origin1: 0,
      origin2: 0,
      radius1: 0,
      radius2: 0,
      radius3: 0,
      radius4: 0,
      radius5: 0,
      radius6: 0,
      gap: 0
    }
  },
  methods: {
    draw: function () {
      this.origin1 = this.size / 4
      this.origin2 = this.size / 4 * 3
      this.gap = this.origin1 * 0.52
      this.radius1 = this.origin1 * 95 / 100
      this.radius2 = this.origin1 * 33 / 100
      this.radius3 = this.origin1 * 22 / 100
      this.radius4 = this.origin1 * 9 / 100
      this.radius5 = this.origin1 * 5 / 100
      this.radius6 = this.origin1 * 2 / 100
      this.ctx.clearRect(0, 0, this.size * 2, this.size)
      if (this.bg === 'n') {
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(0, 0, this.size * 2, this.size)
      }
      // front
      this.drawBase('front')
      this.drawPin('front')
      this.drawClock('front')
      // back
      this.drawBase('back')
      this.drawPin('back')
      this.drawClock('back')
    },
    drawBase: function (face) {
      var x
      if (face === 'front') {
        x = this.origin1
        this.ctx.fillStyle = this.fcolor
      } else if (face === 'back') {
        x = this.origin2
        this.ctx.fillStyle = this.bcolor
      }
      this.drawCircle(x, this.origin1, this.radius1)
      this.drawCircle(x - this.gap, this.origin1 - this.gap, this.radius2)
      this.drawCircle(x + this.gap, this.origin1 - this.gap, this.radius2)
      this.drawCircle(x - this.gap, this.origin1 + this.gap, this.radius2)
      this.drawCircle(x + this.gap, this.origin1 + this.gap, this.radius2)
      if (face === 'front') {
        this.ctx.fillStyle = this.bcolor
      } else if (face === 'back') {
        this.ctx.fillStyle = this.fcolor
      }
      this.drawCircle(x - this.gap, this.origin1 - this.gap, this.radius3)
      this.drawCircle(x, this.origin1 - this.gap, this.radius3)
      this.drawCircle(x + this.gap, this.origin1 - this.gap, this.radius3)
      this.drawCircle(x - this.gap, this.origin1, this.radius3)
      this.drawCircle(x, this.origin1, this.radius3)
      this.drawCircle(x + this.gap, this.origin1, this.radius3)
      this.drawCircle(x - this.gap, this.origin1 + this.gap, this.radius3)
      this.drawCircle(x, this.origin1 + this.gap, this.radius3)
      this.drawCircle(x + this.gap, this.origin1 + this.gap, this.radius3)
    },
    drawPin: function (face) {
      var x
      if (face === 'front') {
        x = this.origin1
      } else if (face === 'back') {
        x = this.origin2
      }
      this.ctx.fillStyle = this.pincolor(this.pin.substr(0, 1), face)
      this.drawCircle(x - this.gap * 0.5, this.origin1 - this.gap * 0.5, this.radius4)
      this.ctx.fillStyle = this.pincolor(this.pin.substr(1, 1), face)
      this.drawCircle(x + this.gap * 0.5, this.origin1 - this.gap * 0.5, this.radius4)
      this.ctx.fillStyle = this.pincolor(this.pin.substr(2, 1), face)
      this.drawCircle(x - this.gap * 0.5, this.origin1 + this.gap * 0.5, this.radius4)
      this.ctx.fillStyle = this.pincolor(this.pin.substr(3, 1), face)
      this.drawCircle(x + this.gap * 0.5, this.origin1 + this.gap * 0.5, this.radius4)
    },
    drawClock (face) {
      var x
      if (face === 'front') {
        x = this.origin1
      } else if (face === 'back') {
        x = this.origin2
      }
      this.drawNeedle(x - this.gap, this.origin1 - this.gap, this.fclock.substr(0, 1))
      this.drawNeedle(x, this.origin1 - this.gap, this.fclock.substr(1, 1))
      this.drawNeedle(x + this.gap, this.origin1 - this.gap, this.fclock.substr(2, 1))
      this.drawNeedle(x - this.gap, this.origin1, this.fclock.substr(3, 1))
      this.drawNeedle(x, this.origin1, this.fclock.substr(4, 1))
      this.drawNeedle(x + this.gap, this.origin1, this.fclock.substr(5, 1))
      this.drawNeedle(x - this.gap, this.origin1 + this.gap, this.fclock.substr(6, 1))
      this.drawNeedle(x, this.origin1 + this.gap, this.fclock.substr(7, 1))
      this.drawNeedle(x + this.gap, this.origin1 + this.gap, this.fclock.substr(8, 1))
    },
    drawCircle: function (x, y, r) {
      this.ctx.beginPath()
      this.ctx.arc(x, y, r, 0, 2 * Math.PI)
      this.ctx.fill()
    },
    drawNeedle: function (x, y, k) {
      var m = this.km_convert(k)
      if (k === 'a') {
        k = 11
      } else if (k === 'b') {
        k = 12
      }
      this.ctx.fillStyle = this.ccolor
      this.ctx.beginPath()
      this.ctx.arc(x, y, this.radius5, Math.PI / 6 * k, Math.PI * (1 + 1 / 6 * k))
      this.ctx.lineTo(x + this.radius3 * 0.8 * Math.cos(m * Math.PI), y - this.radius3 * 0.8 * Math.sin(m * Math.PI))
      this.ctx.closePath()
      this.ctx.stroke()
      this.ctx.fill()
    },
    pincolor: function (pin, face) {
      if (pin === 'u') {
        if (face === 'front') {
          return this.upcolor
        } else if (face === 'back') {
          return this.dpcolor
        }
      } else if (pin === 'd') {
        if (face === 'front') {
          return this.dpcolor
        } else if (face === 'back') {
          return this.upcolor
        }
      }
    },
    km_convert: function (k) {
      switch (k) {
        case '0':
          return 3 / 6
        case '1':
          return 2 / 6
        case '2':
          return 1 / 6
        case '3':
          return 12 / 6
        case '4':
          return 11 / 6
        case '5':
          return 10 / 6
        case '6':
          return 9 / 6
        case '7':
          return 8 / 6
        case '8':
          return 7 / 6
        case '9':
          return 6 / 6
        case 'a':
          return 5 / 6
        case 'b':
          return 4 / 6
      }
    }
  },
  mounted () {
    this.origin = this.size / 2
    this.ctx = this.$el.getContext('2d')
    this.draw()
  }
}
</script>
