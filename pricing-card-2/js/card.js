/**
 * @param {string} title
 * @param {string} price
 * @param {string[]} features
 * @param {{ buttonText?: string, onClick?: (event: MouseEvent) => void }} [options]
 * @returns {HTMLElement}
 */
export function Card(title, price, features, options = {}) {
  const { buttonText = "Start Trial", onClick } = options;

  const root = document.createElement("div");
  root.className = "pricing";

  const heading = document.createElement("h2");
  heading.className = "title";
  heading.textContent = title;

  const priceEl = document.createElement("p");
  priceEl.className = "price";
  priceEl.textContent = price;

  const list = document.createElement("ul");
  list.className = "features";

  for (const feature of features) {
    const item = document.createElement("li");
    item.textContent = feature;
    list.appendChild(item);
  }

  const button = document.createElement("button");
  button.className = "btn";
  button.type = "button";
  button.textContent = buttonText;

  if (onClick) {
    button.addEventListener("click", onClick);
  }

  root.append(heading, priceEl, list, button);
  return root;
}

/**
 * @param {HTMLElement} container
 * @param {Array<{
 *   title: string;
 *   price: string;
 *   features: string[];
 *   buttonText?: string;
 *   onClick?: (event: MouseEvent) => void;
 * }>} plans
 */
export function renderCards(container, plans) {
  container.replaceChildren(
    ...plans.map(({ title, price, features, buttonText, onClick }) =>
      Card(title, price, features, { buttonText, onClick })
    )
  );
}
