<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
export default {
  name: 'button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'btn-md',
      validator: function (value) {
        return ['btn-sm', 'btn-md', 'btn-lg', 'btn-xl'].indexOf(value) !== -1;
      },
    },
    // backgroundColor: {
    //   type: String,
    // },
  },

  computed: {
    classes() {
      return {
        'btn': true,
        'btn-primary': this.primary,
        'btn-secondary': !this.primary,
        [`${this.size}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>
