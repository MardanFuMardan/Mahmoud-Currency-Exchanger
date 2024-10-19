# Mahmoud Currency Exchanger

## Table of Contents
1. [Project Description](#project-description)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation and Setup](#installation-and-setup)
5. [Usage](#usage)
6. [Dark/Light Mode Support](#darklight-mode-support)
7. [Favorite Currency Pairs](#favorite-currency-pairs)
8. [Customization](#customization)
9. [Contributing](#contributing)

---

## Project Description
**Mahmoud Currency Exchanger** is a React-based currency conversion application that allows users to convert currencies using real-time exchange rates. The app features both dark and light modes, allows users to save their favorite currency pairs for quick access, and provides a seamless user experience with a modern UI.

The app is built using **React** and styled with **Tailwind CSS** for a responsive, visually appealing design. The application fetches real-time exchange rates from an API and enables users to perform quick conversions.

---

## Features
- **Real-time currency conversion**: Convert between a wide variety of currencies using the latest exchange rates.
- **Favorite Currency Pairs**: Save your favorite currency pairs for quick access and future conversions.
- **Dark/Light Mode Toggle**: Easily switch between dark and light mode to suit your preference.
- **Responsive Design**: The app is optimized for use on desktop, tablet, and mobile devices.
- **Custom Styling**: A modern, minimalistic design with smooth transitions and user-friendly interface.

---

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **React Select**: For the custom dropdown menus for selecting currencies.
- **Heroicons**: For the icons used throughout the app.
- **ExchangeRate-API**: For fetching real-time exchange rates.
  
---

## Installation and Setup

To get started with the project, follow the steps below:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/mahmoud-currency-exchanger.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd mahmoud-currency-exchanger
    ```

3. **Install dependencies**:
    Make sure you have **Node.js** installed. Then run:
    ```bash
    npm install
    ```

4. **Start the development server**:
    ```bash
    npm run dev
    ```

5. **Build for production**:
    To create a production build, run:
    ```bash
    npm run build
    ```

---

## Usage

- **Currency Conversion**: Select a "from" currency and a "to" currency from the dropdown menus, enter the amount, and click "Convert" to get the real-time conversion.
  
- **Swap Currencies**: Click the swap button (`⇆`) between the currency dropdowns to quickly swap the selected currencies.

- **Save Favorite Pairs**: After selecting your currencies, click the "Save Favorite Pair" button to save them for future use.

- **Load Favorite Pairs**: You can quickly load your previously saved pairs by clicking the "Load Favorite Pair" button. This functionality persists even after refreshing the page.

---

## Dark/Light Mode Support

This project supports both **Dark Mode** and **Light Mode**. You can toggle between the two modes using the switch icon in the navigation bar.

- **Light Mode** uses a background color of `#f8f9fa` with dark text.
- **Dark Mode** uses a background color of `#2a2d34` with light text (`#f1f1f1`).

Both modes have been optimized for clear readability and user comfort.

---

## Favorite Currency Pairs

**Save and Load Favorite Currency Pairs**:
- **Save**: You can save the current pair of selected currencies using the "Save Favorite Pair" button.
- **Load**: Load your previously saved pair for quick access with the "Load Favorite Pair" button.

This feature persists even after refreshing the page using **localStorage**.

---

## Customization

- **Add more currencies**: If you want to add support for additional currencies or change the API used, modify the API endpoint in the data-fetching section.
  
- **UI Customization**: You can easily update the styles by modifying the **Tailwind CSS** classes.

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-repo/mahmoud-currency-exchanger/issues).

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.
