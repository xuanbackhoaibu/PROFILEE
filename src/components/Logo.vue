<script setup lang="ts">
import profilePhoto from "../assets/images/profile/profile-photo.jpg";
</script>

<template>
  <span class="logo-photo">
    <img :src="profilePhoto" alt="Trần Xuân Bắc" />
  </span>
</template>

<style scoped lang="scss">
.logo-photo {
  display: block;
  aspect-ratio: 1;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.72);
  border-radius: 50%;
  background-color: var(--color-background-400);
  box-shadow:
    0 10px 24px rgba(45, 42, 36, 0.18),
    0 0 0 1px rgba(45, 42, 36, 0.12),
    inset 0 0 0 1px rgba(255, 255, 255, 0.42);
  transition:
    border-color 0.16s ease,
    box-shadow 0.16s ease,
    transform 0.16s ease;

  @include mixins.hover {
    &:hover {
      border-color: var(--color-text-cyan-400);
      box-shadow:
        0 12px 28px rgba(45, 42, 36, 0.22),
        0 0 0 3px rgba(52, 191, 255, 0.2),
        inset 0 0 0 1px rgba(255, 255, 255, 0.48);
      transform: translateY(-1px);
    }
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
}
</style>
