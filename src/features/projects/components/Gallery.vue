<script setup lang="ts">
import { computed } from "vue";

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  items: GalleryItem[];
}

const props = defineProps<Props>();

const layoutClass = computed(() => {
  return props.items.length <= 2 ? "gallery-items gallery-items-featured" : "gallery-items";
});
</script>

<template>
  <section class="gallery">
    <div class="gallery-header">
      <p v-if="props.eyebrow" class="gallery-eyebrow">{{ props.eyebrow }}</p>
      <h3 class="gallery-title">{{ props.title }}</h3>
      <p v-if="props.description" class="gallery-description">{{ props.description }}</p>
    </div>

    <div :class="layoutClass">
      <a
        v-for="item in props.items"
        :key="item.src"
        :href="item.src"
        target="_blank"
        rel="noopener noreferrer"
        class="gallery-item"
        data-cursor="arrow-external"
        aria-label="Open screenshot in a new tab"
      >
        <span class="gallery-image-wrap">
          <img :src="item.src" :alt="item.alt" loading="lazy" class="gallery-image" />
        </span>
        <span class="gallery-caption">{{ item.caption }}</span>
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.gallery {
  grid-column: 1 / 13;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  width: 100%;

  @include mixins.mq("md") {
    grid-column: 2 / 12;
    gap: var(--space-lg);
  }

  @include mixins.mq("lg") {
    grid-column: 3 / 11;
  }

  &-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    max-width: 760px;
  }

  &-eyebrow {
    color: var(--color-orange-400);
    font-size: var(--font-size-xs);
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  &-title {
    color: var(--color-text-400);
    font-size: var(--font-size-title-xs);
    line-height: var(--line-height-title);

    @include mixins.mq("md") {
      font-size: var(--font-size-title-sm);
    }
  }

  &-description {
    color: var(--color-text-300);
    font-size: var(--font-size-md);
    line-height: var(--line-height-copy);

    @include mixins.mq("md") {
      font-size: var(--font-size-lg);
    }
  }

  &-items {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-md);

    @include mixins.mq("md") {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    &-featured {
      @include mixins.mq("lg") {
        grid-template-columns: 1fr;
      }
    }
  }

  &-item {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    color: inherit;
    text-decoration: none;
    min-width: 0;
  }

  &-image-wrap {
    display: block;
    overflow: hidden;
    border: var(--stroke-sm) solid rgba(45, 42, 36, 0.22);
    border-radius: var(--radius-lg);
    background-color: var(--color-beige-600);
    aspect-ratio: 16 / 9;
  }

  &-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.45s var(--ease-smooth);
  }

  &-caption {
    color: var(--color-text-300);
    font-size: var(--font-size-sm);
    font-weight: 700;
    line-height: var(--line-height-copy);
  }

  &-item:hover &-image {
    transform: scale(1.035);
  }
}
</style>
