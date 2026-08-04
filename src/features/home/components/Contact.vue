<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";
import { transitions } from "../../../animations";
import { t } from "../../../i18n/utils/translate";
import { locale } from "../../../i18n/store";
import Social from "../../../components/Social.vue";

const contactElement = ref<HTMLElement | null>(null);

const snapshot = computed(() => {
  if (locale.value === "en") {
    return [
      {
        title: "Internship Target",
        items: ["Backend .NET Intern", "System Analyst Intern", "API Testing Intern"],
      },
      {
        title: "Core Skills",
        items: ["C#, ASP.NET Core MVC/Web API, EF Core", "SQL Server, PostgreSQL, ERD", "Postman, Swagger, OpenAPI, test cases"],
      },
      {
        title: "Education",
        items: ["Information Technology student", "Dai Nam University", "Based in Bac Ninh, Vietnam"],
      },
    ];
  }

  return [
    {
      title: "Mục tiêu thực tập",
      items: ["Backend .NET Intern", "System Analyst Intern", "API Testing Intern"],
    },
    {
      title: "Kỹ năng chính",
      items: ["C#, ASP.NET Core MVC/Web API, EF Core", "SQL Server, PostgreSQL, ERD", "Postman, Swagger, OpenAPI, test case"],
    },
    {
      title: "Học vấn",
      items: ["Sinh viên Công nghệ thông tin", "Đại học Đại Nam", "Bắc Ninh, Việt Nam"],
    },
  ];
});

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
      <div class="contact-details">
        <a href="tel:+843367832701">0367832701</a>
        <a href="mailto:Bxuan964@gmail.com">Bxuan964@gmail.com</a>
        <a href="https://xuanbackhoaibu.github.io/profile/files/CV-Tran-Xuan-Bac.html" target="_blank" rel="noreferrer">{{
          t("download-cv")
        }}</a>
        <a href="https://xuanbackhoaibu.github.io/profile/" target="_blank" rel="noreferrer">Portfolio gốc</a>
      </div>
      <div class="contact-snapshot">
        <div v-for="group in snapshot" :key="group.title" class="contact-snapshot-group">
          <h3 class="contact-snapshot-title">{{ group.title }}</h3>
          <ul class="contact-snapshot-list">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </div>
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
    gap: var(--space-md);

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
    font-size: var(--font-size-title-md);

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
    gap: var(--space-xs);
    font-family: "ProFontWindows";
    color: var(--color-text-cyan-400);

    a {
      width: fit-content;
      border-bottom: var(--stroke-sm) solid currentColor;
    }
  }

  &-snapshot {
    display: grid;
    gap: var(--space-md);
    max-width: 720px;

    @include mixins.mq("md") {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: var(--space-lg);
    }

    &-group {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
    }

    &-title {
      font-size: var(--font-size-md);
      color: var(--color-text-400);
      font-weight: 900;
      line-height: var(--line-height-title);
    }

    &-list {
      display: flex;
      flex-direction: column;
      gap: 6px;
      color: var(--color-text-300);
      font-size: var(--font-size-sm);
      font-weight: 700;
      line-height: var(--line-height-copy);
    }
  }
}
</style>
