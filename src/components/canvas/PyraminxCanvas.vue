<template>
  <canvas id="canvas" width="200" height="200" bcolor="bcolor" fcolor="fcolor" scolor="scolor" tcolor="tcolor" bg="y"></canvas>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 200
    },
    bcolor: {
      type: String,
      default: 'x'
    },
    fcolor: {
      type: String,
      default: 'rlb'
    },
    scolor: {
      type: String,
      default: 'rrrlllbbb'
    },
    tcolor: {
      type: String,
      default: 'rrrrrlllllbbbbb'
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
    bcolor () {
      this.draw()
    },
    fcolor () {
      this.draw()
    },
    scolor () {
      this.draw()
    },
    tcolor () {
      this.draw()
    },
    bg () {
      this.draw()
    }
  },
  data () {
    return {
      origin: 0,
      radius1: 0,
      radius2: 0,
      radius3: 0,
      radius4: 0,
      radius5: 0
    }
  },
  methods: {
    draw: function () {
      this.origin = this.size / 2
      this.radius1 = this.origin * 30 / 90
      this.radius2 = this.origin * 60 / 90
      this.radius3 = this.origin * 90 / 90
      this.radius4 = this.origin * 30 / 90
      this.radius5 = this.origin * 50 / 90
      this.ctx.clearRect(0, 0, this.origin * 2, this.origin * 2)
      this.ctx.lineWidth = 1
      this.ctx.strokeStyle = this.color_convert(this.bcolor)
      if (this.bg === 'n') {
        this.ctx.fillStyle = this.color_convert('w')
        this.ctx.fillRect(0, 0, this.origin * 2, this.origin * 2)
      }
      // First Layer
      this.first_layer(0, this.fcolor[0]) // First Layer 1
      this.first_layer(1, this.fcolor[1]) // First Layer 2
      this.first_layer(2, this.fcolor[2]) // First Layer 3
      // Second Layer
      this.second_corner1(0, this.scolor[0]) // Second Layer 1
      this.second_edge(0, this.scolor[1]) // Second Layer 2
      this.second_corner2(0, this.scolor[2]) // Second Layer 3
      this.second_corner1(1, this.scolor[3]) // Second Layer 4
      this.second_edge(1, this.scolor[4]) // Second Layer 5
      this.second_corner2(1, this.scolor[5]) // Second Layer 6
      this.second_corner1(2, this.scolor[6]) // Second Layer 7
      this.second_edge(2, this.scolor[7]) // Second Layer 8
      this.second_corner2(2, this.scolor[8]) // Second Layer 9
      // Third Layer
      this.third_corner1(0, this.tcolor[0]) // Third Layer 1
      this.third_edge1(0, this.tcolor[1]) // Third Layer 2
      this.third_edge3(0, this.tcolor[2]) // Third Layer 3
      this.third_edge2(0, this.tcolor[3]) // Third Layer 4
      this.third_corner2(0, this.tcolor[4]) // Third Layer 5
      this.third_corner1(1, this.tcolor[5]) // Third Layer 6
      this.third_edge1(1, this.tcolor[6]) // Third Layer 7
      this.third_edge3(1, this.tcolor[7]) // Third Layer 8
      this.third_edge2(1, this.tcolor[8]) // Third Layer 9
      this.third_corner2(1, this.tcolor[9]) // Third Layer 10
      this.third_corner1(2, this.tcolor[10]) // Third Layer 11
      this.third_edge1(2, this.tcolor[11]) // Third Layer 12
      this.third_edge3(2, this.tcolor[12]) // Third Layer 13
      this.third_edge2(2, this.tcolor[13]) // Third Layer 14
      this.third_corner2(2, this.tcolor[14]) // Third Layer 15
    },
    first_layer: function (k, color) {
      var m = this.km_convert(k)

      this.ctx.beginPath()
      this.ctx.moveTo(this.origin, this.origin * 5 / 4)
      this.ctx.lineTo(this.triangle_corner('x', this.radius1, k), this.triangle_corner('y', this.radius1, k))
      this.ctx.lineTo(this.triangle_corner('x', this.radius1, m), this.triangle_corner('y', this.radius1, m))
      this.ctx.closePath()
      this.ctx.fillStyle = this.color_convert(color)
      this.ctx.fill()
      this.ctx.stroke()
    },
    second_corner1: function (k, color) {
      this.ctx.beginPath()
      this.ctx.moveTo(this.triangle_corner('x', this.radius2, k), this.triangle_corner('y', this.radius2, k))
      this.ctx.lineTo(this.triangle_edge1('x', this.radius4, k), this.triangle_edge1('y', this.radius4, k))
      this.ctx.lineTo(this.triangle_corner('x', this.radius1, k), this.triangle_corner('y', this.radius1, k))
      this.ctx.closePath()
      this.ctx.fillStyle = this.color_convert(color)
      this.ctx.fill()
      this.ctx.stroke()
    },
    second_corner2: function (k, color) {
      var m = this.km_convert(k)

      this.ctx.beginPath()
      this.ctx.moveTo(this.triangle_corner('x', this.radius2, m), this.triangle_corner('y', this.radius2, m))
      this.ctx.lineTo(this.triangle_edge1('x', this.radius4, k), this.triangle_edge1('y', this.radius4, k))
      this.ctx.lineTo(this.triangle_corner('x', this.radius1, m), this.triangle_corner('y', this.radius1, m))
      this.ctx.closePath()
      this.ctx.fillStyle = this.color_convert(color)
      this.ctx.fill()
      this.ctx.stroke()
    },
    second_edge: function (k, color) {
      var m = this.km_convert(k)

      this.ctx.beginPath()
      this.ctx.moveTo(this.triangle_corner('x', this.radius1, k), this.triangle_corner('y', this.radius1, k))
      this.ctx.lineTo(this.triangle_edge1('x', this.radius4, k), this.triangle_edge1('y', this.radius4, k))
      this.ctx.lineTo(this.triangle_corner('x', this.radius1, m), this.triangle_corner('y', this.radius1, m))
      this.ctx.closePath()
      this.ctx.fillStyle = this.color_convert(color)
      this.ctx.fill()
      this.ctx.stroke()
    },
    third_corner1: function (k, color) {
      this.ctx.beginPath()
      this.ctx.moveTo(this.triangle_corner('x', this.radius3, k), this.triangle_corner('y', this.radius3, k))
      this.ctx.lineTo(this.triangle_edge2('x', k, 0), this.triangle_edge2('y', k, 0))
      this.ctx.lineTo(this.triangle_corner('x', this.radius2, k), this.triangle_corner('y', this.radius2, k))
      this.ctx.closePath()
      this.ctx.fillStyle = this.color_convert(color)
      this.ctx.fill()
      this.ctx.stroke()
    },
    third_corner2: function (k, color) {
      var m = this.km_convert(k)

      this.ctx.beginPath()
      this.ctx.moveTo(this.triangle_corner('x', this.radius3, m), this.triangle_corner('y', this.radius3, m))
      this.ctx.lineTo(this.triangle_edge2('x', k, 1), this.triangle_edge2('y', k, 1))
      this.ctx.lineTo(this.triangle_corner('x', this.radius2, m), this.triangle_corner('y', this.radius2, m))
      this.ctx.closePath()
      this.ctx.fillStyle = this.color_convert(color)
      this.ctx.fill()
      this.ctx.stroke()
    },
    third_edge1: function (k, color) {
      this.ctx.beginPath()
      this.ctx.moveTo(this.triangle_corner('x', this.radius2, k), this.triangle_corner('y', this.radius2, k))
      this.ctx.lineTo(this.triangle_edge1('x', this.radius4, k), this.triangle_edge1('y', this.radius4, k))
      this.ctx.lineTo(this.triangle_edge2('x', k, 0), this.triangle_edge2('y', k, 0))
      this.ctx.closePath()
      this.ctx.fillStyle = this.color_convert(color)
      this.ctx.fill()
      this.ctx.stroke()
    },
    third_edge2: function (k, color) {
      var m = this.km_convert(k)

      this.ctx.beginPath()
      this.ctx.moveTo(this.triangle_corner('x', this.radius2, m), this.triangle_corner('y', this.radius2, m))
      this.ctx.lineTo(this.triangle_edge1('x', this.radius4, k), this.triangle_edge1('y', this.radius4, k))
      this.ctx.lineTo(this.triangle_edge2('x', k, 1), this.triangle_edge2('y', k, 1))
      this.ctx.closePath()
      this.ctx.fillStyle = this.color_convert(color)
      this.ctx.fill()
      this.ctx.stroke()
    },
    third_edge3: function (k, color) {
      this.ctx.beginPath()
      this.ctx.lineTo(this.triangle_edge1('x', this.radius4, k), this.triangle_edge1('y', this.radius4, k))
      this.ctx.lineTo(this.triangle_edge2('x', k, 0), this.triangle_edge2('y', k, 0))
      this.ctx.lineTo(this.triangle_edge2('x', k, 1), this.triangle_edge2('y', k, 1))
      this.ctx.closePath()
      this.ctx.fillStyle = this.color_convert(color)
      this.ctx.fill()
      this.ctx.stroke()
    },
    triangle_corner: function (axis, r, k) {
      if (axis === 'x') {
        return this.origin + r * Math.cos((2 * Math.PI * k) / 3 + Math.PI / 2)
      } else if (axis === 'y') {
        return this.origin - r * Math.sin((2 * Math.PI * k) / 3 + Math.PI / 2) + this.origin / 4
      }
    },
    triangle_edge1: function (axis, r, k) {
      if (axis === 'x') {
        return this.origin + r * Math.cos((2 * Math.PI * k) / 3 + Math.PI * 5 / 6)
      } else if (axis === 'y') {
        return this.origin - r * Math.sin((2 * Math.PI * k) / 3 + Math.PI * 5 / 6) + this.origin / 4
      }
    },
    triangle_edge2: function (axis, k, l) {
      var angle
      var r = this.radius5
      var gap = 0.5

      if (l === 0) {
        angle = -gap
      } else if (l === 1) {
        angle = gap
      }

      if (axis === 'x') {
        return this.origin + r * Math.cos((2 * Math.PI * k) / 3 + angle + Math.PI * 5 / 6)
      } else if (axis === 'y') {
        return this.origin - r * Math.sin((2 * Math.PI * k) / 3 + angle + Math.PI * 5 / 6) + this.origin / 4
      }
    },
    color_convert: function (color) {
      switch (color) {
        case 'd':
          return 'dimgray'
        case 'r':
          return 'red'
        case 'b':
          return 'dodgerblue'
        case 'l':
          return 'lawngreen'
        case 'y':
          return 'yellow'
        case 'w':
          return 'white'
        case 'x':
          return 'black'
        case 'z':
          return '#1b1b1b'
      }
    },
    km_convert: function (k) {
      if (k === 2) {
        return 0
      } else {
        return k + 1
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
