# Lexisg-frontend-intern-test

A minimal React frontend for the Lexi Legal Assistant assignment.

The application simulates a legal Q&A experience where a user can submit a legal question, receive a simulated answer, and trace the answer back to the original judgment through a clickable citation.

## Features

- ChatGPT-style legal assistant interface
- Legal question input
- Simulated API response
- Loading state while processing the question
- Legal answer display
- Citation/source card
- Clickable citation linking to the original judgment PDF
- Responsive user interface
- Keyboard shortcut using Ctrl/Cmd + Enter to submit

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Lucide React

## Run Locally

Clone the repository and navigate to the project directory:

```bash
git clone <repository-url>
cd Lexisg-frontend-intern-test

## Live Demo

[Open the live Lexi Legal Assistant](https://lexisg-frontend-intern-test-beta.vercel.app/)

## Citation Linking

The application uses a simulated API response containing the legal answer and citation details. The citation displays the source document name and links directly to the original judgment PDF. Clicking the citation opens the PDF in a new browser tab.

## Assignment Flow

1. Enter a legal question in the input panel.
2. Click Submit to simulate the API request.
3. A loading state is displayed while the request is being processed.
4. The simulated legal answer is displayed.
5. The answer includes a citation to the relevant judgment.
6. Clicking the citation opens the original PDF in a new tab.

## How to Run

```bash
npm install
npm start