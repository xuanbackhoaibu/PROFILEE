<script setup lang="ts">
import { t } from "../../../i18n/utils/translate";

const workflow = [
  { command: "analyze.requirement()", key: "workflow-docs" },
  { command: "model.database()", key: "workflow-database" },
  { command: "ship.api()", key: "workflow-api" },
  { command: "verify.behavior()", key: "workflow-testing" },
] as const;
</script>

<template>
  <section class="backend-workflow grid" aria-labelledby="backend-workflow-title">
    <div class="backend-workflow-copy">
      <p class="backend-workflow-label">{{ t("workflow-label") }}</p>
      <h2 id="backend-workflow-title">{{ t("workflow-heading") }}</h2>
    </div>
    <div class="backend-workflow-panel">
      <div v-for="item in workflow" :key="item.command" class="backend-workflow-row">
        <code>{{ item.command }}</code>
        <p>{{ t(item.key) }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.backend-workflow {
  padding: 0 var(--space-outer) var(--space-xxxl);
  position: relative;
  z-index: var(--z-index-layout);

  @include mixins.mq("md") {
    padding-bottom: calc(var(--space-xxxl) * 1.5);
  }

  &-copy {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    @include mixins.mq("md") {
      grid-column: 2 / 6;
      padding-top: var(--space-md);
    }

    h2 {
      max-width: 520px;
      font-size: var(--font-size-title-sm);
      font-weight: 900;
      line-height: var(--line-height-title);

      @include mixins.mq("md") {
        font-size: var(--font-size-title-md);
      }
    }
  }

  &-label {
    width: fit-content;
    padding: 5px 8px;
    border: var(--stroke-sm) solid rgba(52, 191, 255, 0.42);
    border-radius: var(--radius-sm);
    background-color: var(--color-dark-blue-500);
    color: var(--color-text-cyan-400);
    font-family: "ProFontWindows";
    font-size: var(--font-size-sm);
    font-weight: 700;
  }

  &-panel {
    grid-column: 1 / 13;
    display: grid;
    overflow: hidden;
    border: var(--stroke-sm) solid rgba(52, 191, 255, 0.46);
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, var(--color-dark-blue-500), var(--color-hologram-top));
    box-shadow: 0 28px 70px rgba(0, 36, 116, 0.18);

    @include mixins.mq("md") {
      grid-column: 6 / 12;
    }
  }

  &-row {
    display: grid;
    gap: var(--space-xs);
    padding: var(--space-md);
    border-top: var(--stroke-sm) solid rgba(225, 245, 255, 0.16);

    &:first-child {
      border-top: none;
    }

    @include mixins.mq("lg") {
      grid-template-columns: minmax(170px, 0.7fr) minmax(0, 1.3fr);
      align-items: start;
    }

    code {
      color: var(--color-text-cyan-400);
      font-family: "ProFontWindows";
      font-size: var(--font-size-sm);
      line-height: var(--line-height-copy);
      overflow-wrap: anywhere;
    }

    p {
      color: var(--color-text-cyan-300);
      font-size: var(--font-size-md);
      font-weight: 700;
      line-height: var(--line-height-copy);
    }
  }
}
</style>
