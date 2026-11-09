<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;
  transition: transform 180ms ease, box-shadow 180ms ease;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgb(0 0 0 / 15%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
    white-space: nowrap;
  }

  &-variant {
    &-docker {
      background-color: #086dd7;
      color: white;
    }

    &-cloudinary {
      background-color: #3448c5;
      color: white;
    }

    &-vnpay {
      background-color: #005baa;
      color: white;
    }

    &-oauth {
      background-color: #e7e9ee;
      color: #242938;
    }

    &-aws {
      background-color: #ffb347;
      color: #232f3e;
    }

    &-stripe {
      background-color: #635bff;
      color: white;
    }

    &-reactNative {
      background-color: #202e3c;
      color: #61dafb;
    }

    &-expo {
      background-color: #e8edff;
      color: #172b4d;
    }

    &-vite {
      background-color: #6d28d9;
      color: #fff3a6;
    }

    &-tailwind {
      background-color: #a5f3fc;
      color: #164e63;
    }

    &-nestjs {
      background-color: #bd1744;
      color: white;
    }

    &-springBoot {
      background-color: #d9f0c2;
      color: #315315;
    }

    &-three {
      background-color: #ed9c55;
      color: #492708;
    }

    &-react {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-websockets {
      background-color: #2674a4;
      color: white;
    }

    &-redis {
      background-color: #ce4036;
      color: white;
    }

    &-html {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-css {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-javascript {
      background-color: #ffdf4f;
      color: #362d03;
    }

    &-node {
      background-color: #237d23;
      color: white;
    }

    &-next {
      background-color: white;
      color: black;
    }

    &-kubernetes {
      background-color: #326ce5;
      color: white;
    }

    &-postgresql {
      background-color: #2f6c92;
      color: white;
    }

    &-ogl {
      background-color: #0e5495;
      color: white;
    }

    &-glsl {
      background-color: #95630e;
      color: white;
    }
  }
}
</style>
