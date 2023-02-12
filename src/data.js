const prices = {
  monthly: {
    basic: {
      price: 19.99,
    },
    professional: {
      price: 24.99,
    },
    master: {
      price: 39.99,
    },
  },
  annually: {
    basic: {
      price: 199.99,
    },
    professional: {
      price: 249.99,
    },
    master: {
      price: 399.99,
    },
  },
};

const descriptions = {
  basic: {
    storage: "500 GB",
    users: 2,
    sendUp: "3 GB",
  },
  professional: {
    storage: "1 TB",
    users: 5,
    sendUp: "10 GB",
  },
  master: {
    storage: "2 TB",
    users: 10,
    sendUp: "20 GB",
  },
};

export function getDescriptions() {
  return descriptions;
}

export function getPrice(type) {
  return prices[type];
}
