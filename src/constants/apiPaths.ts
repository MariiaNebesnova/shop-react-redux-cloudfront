const API_PATHS = {
  product: `https://${import.meta.env.VITE_API_PRODUCTS}.execute-api.us-east-1.amazonaws.com/dev`,
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  import: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  bff: `https://${import.meta.env.VITE_API_PRODUCTS}.execute-api.us-east-1.amazonaws.com/dev`,
  cart: "https://.execute-api.eu-west-1.amazonaws.com/dev",
};

export default API_PATHS;
