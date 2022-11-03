import { ref } from "vue";

const loading = ref(false);

const load = async (): Promise<void> => {
  loading.value = true;
  return new Promise((resolve) =>
    setTimeout(() => {
      loading.value = false;
      resolve();
    }, 10000)
  );
};

export default () => ({ load, loading });
