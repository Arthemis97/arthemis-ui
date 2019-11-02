<template>
  <button :class="`art-btn art-btn--${type}`" :disabled="disabled">
    <slot />
  </button>
</template>
<script>
export default {
  name: "art-button",
  props: {
    type: {
      Type: String,
      Default: 'primary'
    },
    disabled: {
      Type: Boolean,
      Default: false
    }
  }
};
</script>
