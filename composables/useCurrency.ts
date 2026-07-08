import { ref, computed } from "vue";

const country = ref("IN");

const currencies = {
  IN: { currency: "INR", locale: "en-IN", rate: 1 },
  US: { currency: "USD", locale: "en-US", rate: 0.012 },
  GB: { currency: "GBP", locale: "en-GB", rate: 0.0088 },
  AE: { currency: "AED", locale: "en-AE", rate: 0.044 },
};

export const useCurrency = () => {
  const detectCountry = async () => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();

      if (currencies[data.country_code]) {
        country.value = data.country_code;
      }
    } catch (e) {
      country.value = "IN";
    }
  };

  const formatPrice = (price: number) => {
    const c = currencies[country.value];

    return new Intl.NumberFormat(c.locale, {
      style: "currency",
      currency: c.currency,
      maximumFractionDigits: 0,
    }).format(price * c.rate);
  };

  return {
    country: computed(() => country.value),
    detectCountry,
    formatPrice,
  };
};