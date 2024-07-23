<template>
  <div id="section-share">
    <div class="container">
      <header>
        <h4>{{ $t("main_share__title") }}</h4>
      </header>
      <ul class="list-sns">
        <li v-for="(item, i) in sns" :key="i" class="list-item">
          <button :style="{ borderColor: item.color }" @click="item.method">
            <div :class="`icon-wrap variant-${item.type}`">
              <UIcon :name="item.icon" class="icon" />
            </div>
            <span class="label">
              {{ $t(item.label) }}
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useInfos } from "@/stores/infos";

const store = useInfos();
const domain = computed(() => {
  return store.getInfos?.domain;
});

const sns = ref([
  {
    type: "link",
    label: "main_share_link_title",
    icon: "akar-icons:link-chain",
    color: "#232323",
    method: () => {
      clipboard(domain.value);
      // navigator.clipboard.writeText(domain.value);
    }
  },
  {
    type: "facebook",
    label: "main_share_facebook_title",
    icon: "logos:facebook",
    color: "#0866ff",
    method: () => {
      const url = domain.value;
      const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`;
      window.open(facebookShareUrl, "_blank");
    }
  },
  {
    type: "twitter",
    label: "main_share_x_title",
    icon: "devicon:twitter",
    color: "#111111",
    method: () => {
      const url = domain.value;
      const text = "ATC 2024 | 5th ASIA TRAILS CONFERENCE 2024 JIRISAN     ";
      const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(text)}`;
      window.open(twitterShareUrl, "_blank");
    }
  }
]);
</script>

<style lang="postcss" scoped>
#section-share {
  @apply pt-12 pb-16 border-t border-grayscale-800;
  header {
    @apply mb-6 lg:mb-8 px-4 text-center;
    h4 {
      @apply text-base lg:text-2xl text-grayscale-700 font-bold;
    }
  }
  .list-sns {
    @apply flex items-center justify-center flex-wrap;
    .list-item {
      @apply w-6/12 lg:w-2/12 text-center max-lg:mb-8 flex flex-col items-center justify-center;
      button {
        @apply flex flex-col items-center transition-all-default;
        * {
          @apply transition-all-default;
        }
        &:hover {
          .icon-wrap {
            /* @apply bg-green-100; */
            &.variant-link {
              @apply bg-grayscale-200;
            }
            &.variant-facebook {
              @apply bg-[#0866ff];
            }
            &.variant-instagram {
              @apply bg-[#ea3379];
            }
            &.variant-twitter {
              @apply bg-grayscale-200;
            }
          }
        }
        .icon-wrap {
          @apply w-[72px] lg:w-[88px] h-[72px] lg:h-[88px] p-4 border rounded-full relative;
          .icon {
            @apply absolute-center text-3xl lg:text-4xl;
          }
        }
        .label {
          @apply text-sm mt-2 text-grayscale-700;
        }
      }
    }
  }
}
</style>
