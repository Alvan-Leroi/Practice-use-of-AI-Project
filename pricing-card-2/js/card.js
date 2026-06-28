/**
 * Pricing card component — builds DOM elements for plan cards.
 * Used by index.html via renderCards().
 */

/**
 * Card
 * Builds and returns a reusable pricing card element from plain data.
 *
 * @param {string} title
 * @param {string} price
 * @param {string[]} features
 * @param {{ buttonText?: string, onClick?: (event: MouseEvent) => void }} [options]
 * @returns {HTMLElement}
 */
export function Card(title, price, features, options = {}) {
  const { buttonText = "Start Trial", onClick } = options;

  // Root wrapper — matches the .pricing styles in card.css
  const root = document.createElement("div");
  root.className = "pricing";

  // Plan name shown as the card heading
  const heading = document.createElement("h2");
  heading.className = "title";
  heading.textContent = title;

  // Price string (e.g. "$9.99 /month") rendered below the title
  const priceEl = document.createElement("p");
  priceEl.className = "price";
  priceEl.textContent = price;

  // Feature bullets — one <li> per item in the features array
  const list = document.createElement("ul");
  list.className = "features";

  for (const feature of features) {
    const item = document.createElement("li");
    item.textContent = feature;
    list.appendChild(item);
  }

  // Optional CTA button; wire up onClick when provided
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
 * renderCards
 * Clears a container and appends one Card per plan in the plans array.
 *
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
  // Map each plan object to a Card element, then replace all children at once
  container.replaceChildren(
    ...plans.map(({ title, price, features, buttonText, onClick }) =>
      Card(title, price, features, { buttonText, onClick })
    )
  );
}
