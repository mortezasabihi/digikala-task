<template>
  <teleport to="body">
    <div
      v-if="showModal"
      class="modal"
      ref="modal"
      tabindex="0"
      @keydown.esc="closeModal"
    >
      <!-- backdrop -->
      <div class="modal__backdrop" @click.self="closeModal">
        <!-- wrapper -->
        <div
          class="modal__wrapper"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <!-- header -->
          <div class="modal__header">
            <div class="modal__title">
              {{ title }}
            </div>
            <!-- close -->
            <div>
              <button class="modal__close" @click="closeModal">
                <FontAwesomeIcon :icon="['fas', 'times']" />
              </button>
            </div>
            <!-- /close -->
          </div>
          <!-- /header -->

          <!-- body -->
          <div class="modal__body">
            <slot />
          </div>
          <!-- /body -->
        </div>
        <!-- /wrapper -->
      </div>
      <!-- /backdrop -->
    </div>
  </teleport>
</template>

<script>
import { ref, watch, nextTick } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Modal",
  props: {
    show: Boolean,
    title: {
      required: true,
      type: String,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const route = useRoute();
    const showModal = ref(false);
    const modal = ref(null);

    const closeModal = () => emit("close");

    watch(
      () => props.show,
      (show) => {
        if (show) {
          document.querySelector("body").style.overflowY = "hidden";
        } else {
          document.querySelector("body").style.overflowY = "unset";
        }

        showModal.value = show;
        showModal.value && nextTick(() => modal.value.focus());
      }
    );

    watch(
      () => route.path,
      () => showModal.value && closeModal()
    );

    return {
      showModal,
      closeModal,
      modal,
    };
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 99;

  &__backdrop {
    position: fixed;
    z-index: 99;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.5);
    inset: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-height: 100vh;
    cursor: pointer;
  }

  &__wrapper {
    background-color: #fff;
    border-radius: 15px;
    margin-top: 80px;
    margin-bottom: 80px;
    box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
    cursor: default;
    @include xs_down {
      width: 85%;
    }
    @include sm_down {
      width: 75%;
    }
    @include md_down {
      width: 60%;
    }
    @include lg_down {
      width: 40%;
    }
  }

  &__header {
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    margin-bottom: 15px;
  }

  &__close {
    all: unset;
    cursor: pointer;
    font-size: 14px;
  }

  &__body {
    padding: 20px;
  }
}
</style>
