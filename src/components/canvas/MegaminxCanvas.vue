<template>
  <canvas id="canvas" width="200" height="200" bcolor="bcolor" ucolor="ucolor" scolor="scolor" bg="y"></canvas>
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
    ucolor: {
      type: String,
      default: 'uuuuuuuuuuu'
    },
    scolor: {
      type: String,
      default: 'pppcccaaaooolll'
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
    ucolor () {
      this.draw()
    },
    scolor () {
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
      this.radius1 = this.origin * 35 / 105
      this.radius2 = this.origin * 80 / 105
      this.radius3 = this.origin * 100 / 105
      this.radius4 = this.origin * 65 / 105
      this.radius5 = this.origin * 84 / 105
      this.ctx.clearRect(0, 0, this.origin * 2, this.origin * 2)
      this.ctx.lineWidth = 2
      this.ctx.strokeStyle = this.color_convert(this.bcolor)
      if (this.bg === 'n') {
        this.ctx.fillStyle = this.color_convert('w')
        this.ctx.fillRect(0, 0, this.origin * 2, this.origin * 2)
      }
      // U face
      this.pentagon(this.radius1, this.ucolor.substr(0, 1)) // U face 1
      this.upface_corner(0, this.ucolor.substr(1, 1)) // U face 2
      this.upface_edge(0, this.ucolor.substr(2, 1)) // U face 3
      this.upface_corner(1, this.ucolor.substr(3, 1)) // U face 4
      this.upface_edge(1, this.ucolor.substr(4, 1)) // U face 5
      this.upface_corner(2, this.ucolor.substr(5, 1)) // U face 6
      this.upface_edge(2, this.ucolor.substr(6, 1)) // U face 7
      this.upface_corner(3, this.ucolor.substr(7, 1)) // U face 8
      this.upface_edge(3, this.ucolor.substr(8, 1)) // U face 9
      this.upface_corner(4, this.ucolor.substr(9, 1)) // U face 10
      this.upface_edge(4, this.ucolor.substr(10, 1)) // U face 11
      // Side face
      this.side_corner1(0, this.scolor.substr(0, 1)) // Side Face 1
      this.side_edge(0, this.scolor.substr(1, 1)) // Side Face 2
      this.side_corner2(1, this.scolor.substr(2, 1)) // Side Face 3
      this.side_corner1(1, this.scolor.substr(3, 1)) // Side Face 4
      this.side_edge(1, this.scolor.substr(4, 1)) // Side Face 5
      this.side_corner2(2, this.scolor.substr(5, 1)) // Side Face 6
      this.side_corner1(2, this.scolor.substr(6, 1)) // Side Face 7
      this.side_edge(2, this.scolor.substr(7, 1)) // Side Face 8
      this.side_corner2(3, this.scolor.substr(8, 1)) // Side Face 9
      this.side_corner1(3, this.scolor.substr(9, 1)) // Side Face 10
      this.side_edge(3, this.scolor.substr(10, 1)) // Side Face 11
      this.side_corner2(4, this.scolor.substr(11, 1)) // Side Face 12
      this.side_corner1(4, this.scolor.substr(12, 1)) // Side Face 13
      this.side_edge(4, this.scolor.substr(13, 1)) // Side Face 14
      this.side_corner2(0, this.scolor.substr(14, 1)) // Side Face 15
      // thick line
      this.thick_line()
    },
    pentagon: function (size, color) {
      this.ctx.beginPath()
      this.ctx.moveTo(this.megaminx_corner('x', size, 0), this.megaminx_corner('y', size, 0))
      this.ctx.lineTo(this.megaminx_corner('x', size, 1), this.megaminx_corner('y', size, 1))
      this.ctx.lineTo(this.megaminx_corner('x', size, 2), this.megaminx_corner('y', size, 2))
      this.ctx.lineTo(this.megaminx_corner('x', size, 3), this.megaminx_corner('y', size, 3))
      this.ctx.lineTo(this.megaminx_corner('x', size, 4), this.megaminx_corner('y', size, 4))
      this.ctx.closePath()
      if (color != null) {
        this.ctx.fillStyle = this.color_convert(color)
        this.ctx.fill()
      }
      this.ctx.stroke()
    },
    upface_corner: function (k, color) {
      var m = this.km_convert(k)

      this.ctx.beginPath()
      this.ctx.moveTo(this.megaminx_corner('x', this.radius1, k), this.megaminx_corner('y', this.radius1, k))
      this.ctx.lineTo(this.megaminx_edge('x', 'in', m, 1), this.megaminx_edge('y', 'in', m, 1))
      this.ctx.lineTo(this.megaminx_corner('x', this.radius2, k), this.megaminx_corner('y', this.radius2, k))
      this.ctx.lineTo(this.megaminx_edge('x', 'in', k, 0), this.megaminx_edge('y', 'in', k, 0))
      this.ctx.closePath()
      this.ctx.fillStyle = this.color_convert(color)
      this.ctx.fill()
      this.ctx.stroke()
    },
    upface_edge: function (k, color) {
      this.ctx.beginPath()
      this.ctx.moveTo(this.megaminx_corner('x', this.radius1, k), this.megaminx_corner('y', this.radius1, k))
      this.ctx.lineTo(this.megaminx_edge('x', 'in', k, 0), this.megaminx_edge('y', 'in', k, 0))
      this.ctx.lineTo(this.megaminx_edge('x', 'in', k, 1), this.megaminx_edge('y', 'in', k, 1))
      this.ctx.lineTo(this.megaminx_corner('x', this.radius1, k + 1), this.megaminx_corner('y', this.radius1, k + 1))
      this.ctx.closePath()
      this.ctx.fillStyle = this.color_convert(color)
      this.ctx.fill()
      this.ctx.stroke()
    },
    side_corner1: function (k, color) {
      this.ctx.beginPath()
      this.ctx.lineTo(this.megaminx_corner('x', this.radius2, k), this.megaminx_corner('y', this.radius2, k))
      this.ctx.lineTo(this.megaminx_corner('x', this.radius3, k), this.megaminx_corner('y', this.radius3, k))
      this.ctx.lineTo(this.megaminx_edge('x', 'out', k, 0), this.megaminx_edge('y', 'out', k, 0))
      this.ctx.lineTo(this.megaminx_edge('x', 'in', k, 0), this.megaminx_edge('y', 'in', k, 0))
      this.ctx.closePath()
      this.ctx.fillStyle = this.color_convert(color)
      this.ctx.fill()
      this.ctx.stroke()
    },
    side_corner2: function (k, color) {
      var m = this.km_convert(k)

      this.ctx.beginPath()
      this.ctx.lineTo(this.megaminx_corner('x', this.radius2, k), this.megaminx_corner('y', this.radius2, k))
      this.ctx.lineTo(this.megaminx_corner('x', this.radius3, k), this.megaminx_corner('y', this.radius3, k))
      this.ctx.lineTo(this.megaminx_edge('x', 'out', m, 1), this.megaminx_edge('y', 'out', m, 1))
      this.ctx.lineTo(this.megaminx_edge('x', 'in', m, 1), this.megaminx_edge('y', 'in', m, 1))
      this.ctx.closePath()
      this.ctx.fillStyle = this.color_convert(color)
      this.ctx.fill()
      this.ctx.stroke()
    },
    side_edge: function (k, color) {
      this.ctx.beginPath()
      this.ctx.lineTo(this.megaminx_edge('x', 'in', k, 0), this.megaminx_edge('y', 'in', k, 0))
      this.ctx.lineTo(this.megaminx_edge('x', 'out', k, 0), this.megaminx_edge('y', 'out', k, 0))
      this.ctx.lineTo(this.megaminx_edge('x', 'out', k, 1), this.megaminx_edge('y', 'out', k, 1))
      this.ctx.lineTo(this.megaminx_edge('x', 'in', k, 1), this.megaminx_edge('y', 'in', k, 1))
      this.ctx.closePath()
      this.ctx.fillStyle = this.color_convert(color)
      this.ctx.fill()
      this.ctx.stroke()
    },
    thick_line: function () {
      this.ctx.lineWidth = 4
      this.pentagon(this.radius2)
      this.pentagon(this.radius3)
      this.ctx.moveTo(this.megaminx_corner('x', this.radius2, 0), this.megaminx_corner('y', this.radius2, 0))
      this.ctx.lineTo(this.megaminx_corner('x', this.radius3, 0), this.megaminx_corner('y', this.radius3, 0))
      this.ctx.moveTo(this.megaminx_corner('x', this.radius2, 1), this.megaminx_corner('y', this.radius2, 1))
      this.ctx.lineTo(this.megaminx_corner('x', this.radius3, 1), this.megaminx_corner('y', this.radius3, 1))
      this.ctx.moveTo(this.megaminx_corner('x', this.radius2, 2), this.megaminx_corner('y', this.radius2, 2))
      this.ctx.lineTo(this.megaminx_corner('x', this.radius3, 2), this.megaminx_corner('y', this.radius3, 2))
      this.ctx.moveTo(this.megaminx_corner('x', this.radius2, 3), this.megaminx_corner('y', this.radius2, 3))
      this.ctx.lineTo(this.megaminx_corner('x', this.radius3, 3), this.megaminx_corner('y', this.radius3, 3))
      this.ctx.moveTo(this.megaminx_corner('x', this.radius2, 4), this.megaminx_corner('y', this.radius2, 4))
      this.ctx.lineTo(this.megaminx_corner('x', this.radius3, 4), this.megaminx_corner('y', this.radius3, 4))
      this.ctx.stroke()
    },
    megaminx_corner: function (axis, r, k) {
      if (axis === 'x') {
        return this.origin + r * Math.cos((2 * Math.PI * k) / 5 + Math.PI / 2)
      } else {
        return this.origin - r * Math.sin((2 * Math.PI * k) / 5 + Math.PI / 2) + this.origin / 12
      }
    },
    megaminx_edge: function (axis, side, k, l) {
      var angle
      var r
      var gap

      if (side === 'in') {
        r = this.radius4
        gap = 0.043
      } else if (side === 'out') {
        r = this.radius5
        gap = 0.081
      }

      if (l === 0) {
        angle = 0.4 * k + 0.2 - gap
      } else if (l === 1) {
        angle = 0.4 * k + 0.2 + gap
      }

      if (axis === 'x') {
        return this.origin + r * Math.cos((angle * Math.PI) + Math.PI / 2)
      } else if (axis === 'y') {
        return this.origin - r * Math.sin((angle * Math.PI) + Math.PI / 2) + this.origin / 12
      }
    },
    color_convert: function (color) {
      switch (color) {
        case 'd':
          return 'dimgray'
        case 'u':
          return 'lightgray'
        case 'p':
          return 'pink'
        case 'c':
          return 'lemonchiffon'
        case 'a':
          return 'aqua'
        case 'o':
          return 'orange'
        case 'l':
          return 'lawngreen'
        case 'b':
          return 'dodgerblue'
        case 'y':
          return 'yellow'
        case 's':
          return 'darkviolet'
        case 'g':
          return 'seagreen'
        case 'r':
          return 'red'
        case 'w':
          return 'white'
        case 'x':
          return 'black'
        case 'z':
          return '#1b1b1b'
      }
    },
    km_convert: function (k) {
      if (k === 0) {
        return 4
      } else {
        return k - 1
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
