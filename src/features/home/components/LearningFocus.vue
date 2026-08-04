<script setup lang="ts">
import { t } from "../../../i18n/utils/translate";

const items = [
  "learning-clean-architecture",
  "learning-docker",
  "learning-api-security",
  "learning-sql-performance",
] as const;
</script>

<template>
  <section class="learning-focus grid" aria-labelledby="learning-focus-title">
    <div class="learning-focus-inner">
      <div class="learning-focus-heading">
        <p>{{ t("learning-label") }}</p>
        <h2 id="learning-focus-title">{{ t("learning-heading") }}</h2>
      </div>
      <ul class="learning-focus-list">
        <li v-for="item in items" :key="item">{{ t(item) }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.learning-focus {
  padding: 0 var(--space-outer) var(--space-xxxl);
  position: relative;
  z-index: var(--z-index-layout);

  &-inner {
    grid-column: 1 / 13;
    display: grid;
    gap: var(--space-lg);
    padding: var(--space-md) 0;
    border-top: var(--stroke-sm) solid rgba(45, 42, 36, 0.18);
    border-bottom: var(--stroke-sm) solid rgba(45, 42, 36, 0.18);

    @include mixins.mq("md") {
      grid-column: 2 / 12;
      grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.2fr);
      align-items: start;
      padding: var(--space-lg) 0;
    }
  }

  &-heading {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    p {
      color: var(--color-text-300);
      font-family: "ProFontWindows";
      font-size: var(--font-size-sm);
      font-weight: 700;
    }

    h2 {
      max-width: 460px;
      font-size: var(--font-size-title-sm);
      font-weight: 900;
      line-height: var(--line-height-title);
    }
  }

  &-list {
    display: grid;
    gap: var(--space-sm);

    @include mixins.mq("sm") {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    li {
      min-height: 76px;
      list-style: none;
      padding: var(--space-md);
      border: var(--stroke-sm) solid rgba(45, 42, 36, 0.18);
      border-radius: var(--radius-md);
      background-color: rgba(255, 255, 255, 0.28);
      color: var(--color-text-400);
      font-size: var(--font-size-md);
      font-weight: 800;
      line-height: var(--line-height-copy);
    }
  }
}
</style>
