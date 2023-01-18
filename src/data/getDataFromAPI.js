import { ref } from "vue";

function getCrypto() {
  const dataOfPrice = ref();

  async function getCryptoData() {
    const res = await fetch("http://localhost:3000/coin-data");
    const data = await res.json();
    dataOfPrice.value = data.data;
  }

  return { dataOfPrice, getCryptoData };
}
function getCryptoInfo() {
  const about = ref([]);
  const flag = ref(true);

  async function getCryptoInfoData() {
    const res = await fetch("http://localhost:3000/info");
    const data = await res.json();
    about.value = data.data;
    flag.value = true;
  }

  return { about, flag, getCryptoInfoData };
}
export { getCrypto, getCryptoInfo };
