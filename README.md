# Skip Selector Redesign

This is a complete redesign of the "Select Skip" page from the We Want Waste platform.

---

## 🎯 Objective

Redesign the skip selector page using modern UI/UX standards while maintaining the same functionality, including:

- Fetching skip data from API
- Responsive grid layout
- Visual selection of skip options
- Showing selected skip summary
- Mobile & desktop support

---

## 🚀 Live Preview

You can preview the updated version here:  
👉 [Open in CodeSandbox](https://codesandbox.io/s/github/widedgharbi/skip-selector-redesign)

---

## 🛠 Tech Stack

- **React** (functional components with hooks)
- **CSS Modules** for styling
- **Fetch API** to retrieve live data from:
  `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`

---

## 🧠 Design Choices

- **Minimal & modern UI** inspired by Material Design
- **Soft color palette** to enhance readability and friendliness
- **Responsive grid layout** using flex and media queries
- **Animated state change** for selected skip card

---

## 📱 Mobile Responsiveness

- Grid layout stacks vertically on small screens
- Buttons and text are scaled appropriately
- No scroll issues or overflow problems on mobile

---

## 🔧 How to Run Locally

```bash
npm install
npm start
Runs on http://localhost:3000


---

## 👨‍💻 Author

Name: Gharbi Wided

Email: gharbi.wided@esprit.tn