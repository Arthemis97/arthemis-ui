<template>
  <button :class="`${type}`">
    <slot />
  </button>
</template>
<script>
export default {
  name: "rt-button",
  props: {
    type: {
      Type: String,
      Default: "default"
    }
  }
};
</script>