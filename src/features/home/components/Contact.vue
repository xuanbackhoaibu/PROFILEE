<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { transitions } from "../../../animations";
import { t } from "../../../i18n/utils/translate";
import Social from "../../../components/Social.vue";

const contactElement = ref<HTMLElement | null>(null);

onMounted(() => {
  if (contactElement.value) {
    transitions.contact.setup(contactElement.value);
  }
});

onUnmounted(() => {
  transitions.contact.destroy();
});
</script>

<template>
  <div class="contact grid" ref="contactElement">
    <div class="contact-content">
      <h2 class="contact-title" v-html="t('lets-work-together')"></h2>
      <div class="contact-details" aria-label="Contact links">
        <a href="mailto:Bxuan964@gmail.com">Bxuan964@gmail.com</a>
        <a href="https://xuanbackhoaibu.github.io/PROFILEE/files/CV-Tran-Xuan-Bac.html" target="_blank" rel="noreferrer">{{
          t("download-cv")
        }}</a>
      </div>
      <Social variant="background" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  width: 100%;
  max-width: calc(var(--svw) * 100);
  overflow: hidden;
  min-height: calc(var(--lvh) * 100);
  padding: var(--space-outer);
  padding-top: var(--space-lg);

  @include mixins.mq("md") {
    padding-top: var(--space-xxl);
  }

  &-content {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);

    @include mixins.mq("sm") {
      grid-column: 1 / 8;
    }

    @include mixins.mq("md") {
      gap: var(--space-xl);
      grid-column: 1 / 10;
      padding-top: var(--space-lg);
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 11;
    }
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: clamp(32px, 11vw, 56px);
    color: var(--color-white-400);
    line-height: var(--line-height-title);
    max-width: 760px;
    text-shadow: 0 3px 18px rgba(0, 0, 0, 0.48);

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.mq("xl") {
      font-size: var(--font-size-title-xl);
    }
  }

  &-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);
    font-family: "ProFontWindows";
    color: var(--color-white-400);
    font-weight: 900;

    a {
      width: fit-content;
      max-width: 100%;
      padding: 8px 12px;
      border: var(--stroke-sm) solid rgba(225, 245, 255, 0.86);
      border-radius: var(--radius-sm);
      background-color: rgba(225, 245, 255, 0.28);
      color: var(--color-white-400);
      white-space: nowrap;
      box-shadow:
        inset 0 -3px 0 var(--color-text-cyan-400),
        0 0 18px rgba(52, 191, 255, 0.24);
      text-shadow: 0 1px 0 rgba(0, 36, 116, 0.42);
      overflow: hidden;
      text-overflow: ellipsis;
      transition:
        background-color 0.15s ease,
        box-shadow 0.15s ease,
        color 0.15s ease,
        border-color 0.15s ease;

      @include mixins.hover {
        &:hover {
          background-color: var(--color-text-cyan-400);
          box-shadow: inset 0 -2px 0 var(--color-white-400);
          color: var(--color-dark-blue-500);
          border-color: var(--color-text-cyan-400);
        }
      }
    }
  }
}
</style>
