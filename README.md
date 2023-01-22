## **Notes To Reviewer**

- Global styles are effectively use to prevent unnecessary creation of common component.
- React memo, useCallback and FlatList are used to improve performance and optimization.
- The api provided in case study are not designed well so there are some limitations and bad practices in project, please ask before you make a decision for anything looks weird probably because of api structure.
- All index file is used as an exit from directory to shorten the import path in files.
- I couldn't use apollo & grapqhl because of api that is designed as Rest. I found another api that supports graphql but it doesn't have search functionality, if wish i can make use of that api to use apollo or graphql too.
- I didn't use a formik, yup or of another form & validation library because this project is tiny. I just use regex for email validation. If you would like to see, just tell me i can implement more robost form & validation structure.
- Responsiveness is considered while developing to some degree.
- I couldn't use type system for api because the data is inconsistent in terms of type structure.
- I would like to create a "CountryDetail" screen to but the country data are not consistent and that makes the screen more prone to bugs. Handling all inconsistency make the code less readableable for that component so i didn't prefer but if you wish to see, just tell me.
- For country listing and searching there are some of room to improve in terms of performance/experience but i try to stick to the case study requirements.

## **Folder Structure**

**components**
The resuable or potential reusable components live here.

**routes**
This is where your `react-navigation` navigators will live.

**screens**
All app screen components here.

**services**
Any services that interface with the outside world will live here.

**theme**
The global styles live here.

**utils**
miscellaneous helpers and utilities are here.

**app.tsx** This is the entry point to for app.
