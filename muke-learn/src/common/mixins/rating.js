const ALL = 2

export default {
  data () {
    return {
      selectType: ALL,
      onlyContent: true
    }
  },

  computed: {
    computedRatings () {
      let ret = []
      this.rating.forEach((rating) => {
        if (this.onlyContent && !rating.text) {
          return
        }
        if (this.selectType === ALL || rating.rateType === this.selectType) {
          ret.push(rating)
        }
      })
      return ret
    }
  },
  methods: {
    onselect (type) {
      this.selectType = type
    },
    ontoggle () {
      this.onlyContent = !this.onlyContent
    }
  }
}
