## **Setup**
- npm install (to install all packages)
- npx expo start (to run the project)


## **Notes To Reviewer**

- Global styles are effectively used to prevent the unnecessary creation of common components.
- React memo, useCallback and FlatList are used to improve performance and optimization.
- The API provided in the case study is not designed well so there are some limitations and bad practices in the project, please ask before you decide on anything that looks weird, probably that resulted from the API structure.
- All index file is used as an exit from directories to shorten the import path in files.
- I couldn't use apollo & graphql because of the API that is designed as Rest. I found another API that supports graphql but it doesn't have search functionality if wish I can make use of that API to use apollo or graphql too.
- I didn't use a formik, yup, or another form & validation library because this project is tiny. I just use regex for email validation. If you would like to see it, just tell me I can implement a more robust form & validation structure.
- Responsiveness is considered while developing to some degree.
- I couldn't use the type system for API because the data is inconsistent in terms of type structure.
- I would like to create a "CountryDetail" screen but the country data are not consistent and that makes the screen more prone to bugs. Handling all inconsistency makes the code less readable for that component so I didn't prefer but if you wish to see it, just tell me.
- For a country listing and searching there is some room to improve in terms of performance/experience but I try to stick to the case study requirements.
- I am not much qualified in tests, i didn't have opportunity to write test much before but i try to do my best. 

For any questions or any request for further development just contact me: anilakgunes@gmail.com

## **Folder Structure**

**components**
The reusable or potentially reusable components live here.

**routes**
This is where your `react-navigation` navigators will live.

**screens**
All app screen components are here.

**services**
Any services that interface with the outside world will live here.

**theme**
The global styles live here.

**utils**
miscellaneous helpers and utilities are here.

**app.tsx** This is the entry point for the app.
