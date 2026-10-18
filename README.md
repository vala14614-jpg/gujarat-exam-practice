# Gujarat Exam Practice — Android starter app

React + Vite + Capacitor starter for a Gujarati exam-practice app.

## Included
- 7 subjects: Gujarati, Hindi, English, Mathematics, Science, Social Science, General Knowledge
- Filters for NMMS, PSE/SSE, school exams and other government exams
- Grade filters and question search
- Multiple-choice practice quiz, instant scoring, explanations and review
- Test history stored locally on the device
- Official-source links for exam information
- Responsive UI suitable for Android WebView

## Important about old question papers
The sample questions in `src/data.js` are newly written practice examples. They are **not** represented as official past-paper questions. Replace/add verified past-paper PDFs only after checking the relevant official source and year. The links in the app are official portals/resource starting points; they do not guarantee every past paper is available directly there.

## Run as a website during development
Install Node.js LTS, then in this folder run:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build an Android app
Requirements: Node.js LTS, Android Studio, and Android SDK installed.

```bash
npm install
npm run build
npx cap add android
npx cap sync android
npx cap open android
```

Android Studio opens the native project. Use **Build > Build Bundle(s) / APK(s) > Build APK(s)** to generate a debug APK for testing. For future web-code changes:

```bash
npm run android:sync
npx cap open android
```

## Notes
- This is source code, not a prebuilt APK. A native APK must be built using Android Studio or a configured Android build environment.
- `localStorage` keeps practice history on the same device/browser installation; it is not cloud-synced.
- The initial question bank is intentionally small and should be expanded with curriculum-aligned questions for each grade and exam.
- Check the current official requirements and syllabus for NMMS, PSE/SSE and any other exam before publishing exam-specific content.
