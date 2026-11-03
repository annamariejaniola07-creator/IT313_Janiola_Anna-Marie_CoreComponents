# IT313 - Student Directory Viewer

## Problem Description

The Student Directory Viewer is a React Native application
that allows advisers to browse and search students who need
academic advising.

## Component Structure

### StudentCard

Displays the student's photo, name, year level, and a
button to flag the student for advising.

### StudentDirectory

Manages the student information using useState.
It displays the student cards using ScrollView and map().
It also provides a search function using TextInput.

### App

The main entry component that displays StudentDirectory.

## Features

- Display student information.
- Search students by name.
- Scroll through the student list.
- Flag students for academic advising.
- Change button appearance when flagged.

## How to Run

1. Install dependencies:
   npm install

2. Start Expo:
   npx expo start

3. Open the application using Expo Go
   or an emulator.
