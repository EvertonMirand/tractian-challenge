# Tractian Challenge

## Overview
This project is a Tree View Application that visualizes a company's assets, including components, assets, and locations in a hierarchical structure. Users can filter and search for specific items, making asset management more efficient.

## Features
### Asset Tree
- Displays a dynamic tree structure representing locations, assets, and components.
- Supports hierarchical relationships, including sub-locations, sub-assets, and components.

### Filters
- **Text Search:** Locate specific components, assets, or locations.
- **Energy Sensors Filter:** Show only assets with energy sensors.
- **Critical Sensor Status Filter:** Highlight assets with critical sensor alerts.
- Filters preserve asset hierarchy, ensuring visibility of parent nodes.

## Tech Stack
- **Next.js** – Server-side rendering for improved performance.
- **TypeScript** – Static typing for better maintainability.
- **Styled Components** – Styling with a component-scoped approach.
- **RTK Query** – API data fetching and caching.
- **Jest & Testing Library** – Unit and integration tests.
- **Cypress** – End-to-end testing framework.

## Getting Started
Ensure you have **Node.js** and **Yarn** installed. If you want to run end-to-end tests, install **Cypress** as well, then run:

```bash
yarn install
yarn test
yarn cypress:run
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.


This video demonstrates:
- Loading company data.
- Navigating the asset tree.
- Applying filters to refine the view.

## API Usage
The application uses a fake API to fetch data:
- **GET /companies** – Fetch all companies.
- **GET /companies/:companyId/locations** – Fetch locations of a company.
- **GET /companies/:companyId/assets** – Fetch assets of a company.

## Improvements & Future Enhancements
- **Use Styled Components** for scalable and maintainable styles.
- **Increase test coverage** with unit and integration tests to ensure reliability.
- **Optimize UI/UX** by refining interactions, animations, and accessibility.

## License
This project is for the Tractian Front-End Challenge and follows its respective terms.
