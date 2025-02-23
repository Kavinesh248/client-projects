export const BASE_URL = "http://localhost:9000/products";

export async function combinedLoader({ params }) {
  try {
    // Fetch single product data
    const productResponse = await fetch(`${BASE_URL}/${params.id}`);
    if (!productResponse.ok) throw new Error("Error fetching product details");
    const productData = await productResponse.json();

    // Fetch slider data
    const sliderResponse = await fetch(BASE_URL);
    if (!sliderResponse.ok) throw new Error("Error fetching slider data");
    const sliderData = await sliderResponse.json();

    // Return both sets of data
    return { product: productData, home: sliderData };
  } catch (error) {
    console.error("Loader error:", error.message);
    throw error;
  }
}

export async function sliderLoader() {
  try {
    const sliderResponse = await fetch(BASE_URL);
    if (!sliderResponse.ok) throw new Error("Error fetching slider data");
    const sliderData = await sliderResponse.json();
    const itemsWithIsFilled = sliderData.map((item) => ({
      ...item,
      isFilled: false,
    }));
    return { home: itemsWithIsFilled };
  } catch (error) {
    console.error("Slider loader error:", error.message);
    throw error;
  }
}
